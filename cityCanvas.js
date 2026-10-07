/**
 * BUILD IT! — CityCanvas
 * IsoCity-Style HTML5 Canvas Isometric City Viewport Engine
 * 
 * Adapted from IsoCity (MIT License, Copyright (c) 2025 amilich)
 * See ATTRIBUTION.md for full license information.
 */

(function (window) {
    "use strict";

    // ========================================================================
    // 1. ISOMETRIC CONSTANTS & PROJECTION (from IsoCity)
    // ========================================================================
    const TILE_WIDTH = 64;
    const HEIGHT_RATIO = 0.60;
    const TILE_HEIGHT = TILE_WIDTH * HEIGHT_RATIO; // 38.4
    const GRID_SIZE = 14;

    const MIN_ZOOM = 0.4;
    const MAX_ZOOM = 2.8;
    const DEFAULT_ZOOM = 1.25;

    // Road colors adapted from IsoCity trafficSystem.ts
    const ROAD_COLORS = {
        ASPHALT: "#4a4a4a",
        ASPHALT_DARK: "#3a3a3a",
        ASPHALT_LIGHT: "#5a5a5a",
        LANE_MARKING: "#ffffff",
        CENTER_LINE: "#fbbf24",
        SIDEWALK: "#9ca3af",
        CURB: "#6b7280"
    };

    // ========================================================================
    // 2. COORDINATE TRANSFORMATIONS (from IsoCity utils.ts)
    // ========================================================================
    function gridToScreen(x, y, offsetX = 0, offsetY = 0) {
        const screenX = (x - y) * (TILE_WIDTH / 2) + offsetX;
        const screenY = (x + y) * (TILE_HEIGHT / 2) + offsetY;
        return { screenX, screenY };
    }

    function screenToGrid(screenX, screenY, offsetX = 0, offsetY = 0) {
        const adjustedX = screenX - offsetX - TILE_WIDTH / 2;
        const adjustedY = screenY - offsetY - TILE_HEIGHT / 2;
        const gridX = (adjustedX / (TILE_WIDTH / 2) + adjustedY / (TILE_HEIGHT / 2)) / 2;
        const gridY = (adjustedY / (TILE_HEIGHT / 2) - adjustedX / (TILE_WIDTH / 2)) / 2;
        return { gridX: Math.round(gridX), gridY: Math.round(gridY) };
    }

    // ========================================================================
    // 3. ASSET LOADER
    // ========================================================================
    const images = {};
    const assetSources = {
        house_small: "assets/buildings/house_small.webp",
        trees: "assets/buildings/trees.webp"
    };

    let assetsLoaded = false;
    let pendingRender = false;

    function loadAssets(onReady) {
        let loadedCount = 0;
        const total = Object.keys(assetSources).length;

        Object.entries(assetSources).forEach(([key, src]) => {
            const img = new Image();
            img.onload = () => {
                images[key] = img;
                loadedCount++;
                if (loadedCount >= total) {
                    assetsLoaded = true;
                    if (onReady) onReady();
                }
            };
            img.onerror = () => {
                console.warn(`CityCanvas: Asset ${src} failed to load, will use procedural fallback.`);
                loadedCount++;
                if (loadedCount >= total) {
                    assetsLoaded = true;
                    if (onReady) onReady();
                }
            };
            img.src = src;
        });
    }

    // ========================================================================
    // 4. MAIN CITY CANVAS ENGINE
    // ========================================================================
    const CityCanvas = {
        container: null,
        canvas: null,
        ctx: null,
        inspectorEl: null,
        dpr: 1,

        gridSize: GRID_SIZE,
        grid: [],

        camera: {
            x: 0,
            y: 0,
            zoom: DEFAULT_ZOOM
        },

        // Interaction state
        selectedTool: "select", // "select" | "road" | "residential"
        hoveredTile: null,
        selectedTile: null,
        selectedBuilding: null,

        // Mouse drag / pan state
        isPointerDown: false,
        isPanning: false,
        hasPanned: false,
        panStartPointer: { x: 0, y: 0 },
        panStartCamera: { x: 0, y: 0 },

        // Road placement drag state
        isRoadDragging: false,
        placedRoadTilesInDrag: new Set(),

        // Touch state
        initialPinchDistance: null,
        initialZoom: DEFAULT_ZOOM,
        lastTouchCenter: null,

        // --------------------------------------------------------------------
        // Initialization
        // --------------------------------------------------------------------
        init(containerId = "city-viewport") {
            this.container = document.getElementById(containerId);
            if (!this.container) {
                console.warn(`CityCanvas: Container #${containerId} not found.`);
                return;
            }

            // Find or create canvas
            let existingCanvas = document.getElementById("city-canvas");
            if (!existingCanvas) {
                this.canvas = document.createElement("canvas");
                this.canvas.id = "city-canvas";
                this.canvas.className = "city-canvas";
                this.canvas.tabIndex = 0;
                this.container.insertBefore(this.canvas, this.container.firstChild);
            } else {
                this.canvas = existingCanvas;
            }

            this.ctx = this.canvas.getContext("2d");

            // Setup inspector element
            this.setupInspector();

            // Initialize grid
            this.initGrid();

            // Load assets
            loadAssets(() => {
                this.render();
            });

            // Setup dimensions & camera
            this.resize();
            this.recenter();

            // Event bindings
            this.bindEvents();

            // Setup floating build toolbar
            this.setupBuildToolbar();

            // Initial render
            this.render();

            // Test hook for automated verification
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const testAction = urlParams.get("testAction");
                if (testAction === "inspect_house") {
                    this.handleTileClick(5, 6);
                } else if (testAction === "place_roads") {
                    this.setTool("road");
                    this.placeRoadAt(5, 7);
                    this.placeRoadAt(5, 8);
                    this.placeRoadAt(4, 7);
                    this.placeRoadAt(3, 7);
                } else if (testAction === "place_house") {
                    this.setTool("residential");
                    this.placeResidentialAt(7, 6);
                    this.setTool("select");
                    this.handleTileClick(7, 6);
                }
            } catch (e) {}
        },

        // --------------------------------------------------------------------
        // Grid Initialization (Compact 14x14 Starter City)
        // --------------------------------------------------------------------
        initGrid() {
            this.grid = [];
            for (let y = 0; y < this.gridSize; y++) {
                const row = [];
                for (let x = 0; x < this.gridSize; x++) {
                    row.push({
                        x,
                        y,
                        type: "grass",
                        building: null,
                        elevation: 0
                    });
                }
                this.grid.push(row);
            }

            // Natural details: small tranquil pond
            const pondTiles = [
                { x: 1, y: 10 }, { x: 1, y: 11 }, { x: 2, y: 11 }, { x: 2, y: 10 }
            ];
            pondTiles.forEach(p => {
                if (this.isValidTile(p.x, p.y)) {
                    this.grid[p.y][p.x].type = "water";
                }
            });

            // Natural details: small groves of trees
            const treeTiles = [
                { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 3 },
                { x: 11, y: 2 }, { x: 10, y: 3 },
                { x: 11, y: 10 }, { x: 11, y: 11 }, { x: 10, y: 11 },
                { x: 3, y: 11 }
            ];
            treeTiles.forEach(t => {
                if (this.isValidTile(t.x, t.y)) {
                    this.grid[t.y][t.x].type = "tree";
                }
            });

            // Starter road corridor
            // Horizontal street: (5,5) to (8,5)
            for (let x = 5; x <= 8; x++) {
                this.grid[5][x].type = "road";
            }
            // Vertical avenue connecting: (6,5) to (6,8)
            for (let y = 5; y <= 8; y++) {
                this.grid[y][6].type = "road";
            }

            // One starter residential house (house_small.webp) placed by the road
            this.grid[6][5].type = "residential";
            this.grid[6][5].building = {
                id: "house_starter_1",
                type: "house_small",
                name: "Pioneer Cottage",
                category: "Residential",
                level: 1,
                status: "Occupied • Active",
                x: 5,
                y: 6
            };
        },

        isValidTile(x, y) {
            return x >= 0 && x < this.gridSize && y >= 0 && y < this.gridSize;
        },

        hasRoad(x, y) {
            return this.isValidTile(x, y) && this.grid[y][x].type === "road";
        },

        // --------------------------------------------------------------------
        // Canvas Sizing & High-DPI Support
        // --------------------------------------------------------------------
        resize() {
            if (!this.canvas || !this.container) return;

            const rect = this.container.getBoundingClientRect();
            const width = Math.max(300, rect.width || window.innerWidth);
            const height = Math.max(300, rect.height || window.innerHeight);

            this.dpr = window.devicePixelRatio || 1;
            this.canvas.width = Math.round(width * this.dpr);
            this.canvas.height = Math.round(height * this.dpr);
            this.canvas.style.width = `${width}px`;
            this.canvas.style.height = `${height}px`;

            this.render();
        },

        // Recenter camera on the center of the 14x14 starter map
        recenter() {
            if (!this.container) return;
            const rect = this.container.getBoundingClientRect();
            const width = rect.width || window.innerWidth;
            const height = rect.height || window.innerHeight;

            const mapCenter = gridToScreen(this.gridSize / 2, this.gridSize / 2);
            this.camera.zoom = DEFAULT_ZOOM;
            this.camera.x = width / 2 - mapCenter.screenX * this.camera.zoom;
            this.camera.y = height / 2 - (mapCenter.screenY + 20) * this.camera.zoom;

            this.updateZoomBadge();
            this.render();
        },

        updateZoomBadge() {
            const badge = document.getElementById("cam-zoom-badge");
            if (badge) {
                const pct = Math.round(this.camera.zoom * 100);
                let label = "District View";
                if (this.camera.zoom <= 0.75) label = "Overview";
                else if (this.camera.zoom >= 1.6) label = "Street Level";
                badge.textContent = `${pct}% • ${label}`;
            }
        },

        // --------------------------------------------------------------------
        // Event Listeners (Desktop Pan/Zoom + Mobile Touch)
        // --------------------------------------------------------------------
        bindEvents() {
            window.addEventListener("resize", () => this.resize());

            // ResizeObserver for container resizing
            if (window.ResizeObserver && this.container) {
                const ro = new ResizeObserver(() => this.resize());
                ro.observe(this.container);
            }

            // Mouse / Pointer Events
            this.canvas.addEventListener("mousedown", (e) => this.handlePointerDown(e));
            window.addEventListener("mousemove", (e) => this.handlePointerMove(e));
            window.addEventListener("mouseup", (e) => this.handlePointerUp(e));
            this.canvas.addEventListener("mouseleave", () => {
                this.hoveredTile = null;
                this.render();
            });

            // Wheel Zoom
            this.canvas.addEventListener("wheel", (e) => this.handleWheel(e), { passive: false });

            // Touch Events
            this.canvas.addEventListener("touchstart", (e) => this.handleTouchStart(e), { passive: false });
            this.canvas.addEventListener("touchmove", (e) => this.handleTouchMove(e), { passive: false });
            this.canvas.addEventListener("touchend", (e) => this.handleTouchEnd(e), { passive: false });

            // Floating camera controls (Top-Right)
            const zoomInBtn = document.getElementById("cam-zoom-in");
            if (zoomInBtn) zoomInBtn.addEventListener("click", () => this.zoomBy(1.2));

            const zoomOutBtn = document.getElementById("cam-zoom-out");
            if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => this.zoomBy(0.83));

            const recenterBtn = document.getElementById("cam-recenter");
            if (recenterBtn) recenterBtn.addEventListener("click", () => this.recenter());

            const overviewBtn = document.getElementById("cam-overview");
            if (overviewBtn) {
                overviewBtn.addEventListener("click", () => {
                    this.camera.zoom = 0.65;
                    this.recenter();
                });
            }

            // Keyboard navigation
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    this.dismissInspector();
                    this.setTool("select");
                } else if (e.key === " " && document.activeElement === document.body) {
                    e.preventDefault();
                    this.recenter();
                }
            });
        },

        // --------------------------------------------------------------------
        // Mouse / Pointer Interaction
        // --------------------------------------------------------------------
        getCanvasCoords(e) {
            const rect = this.canvas.getBoundingClientRect();
            const canvasX = e.clientX - rect.left;
            const canvasY = e.clientY - rect.top;
            const worldX = (canvasX - this.camera.x) / this.camera.zoom;
            const worldY = (canvasY - this.camera.y) / this.camera.zoom;
            return { canvasX, canvasY, worldX, worldY };
        },

        handlePointerDown(e) {
            if (e.button !== 0 && e.button !== 1 && e.button !== 2) return;

            const { canvasX, canvasY, worldX, worldY } = this.getCanvasCoords(e);
            this.isPointerDown = true;
            this.hasPanned = false;
            this.panStartPointer = { x: canvasX, y: canvasY };
            this.panStartCamera = { x: this.camera.x, y: this.camera.y };

            const { gridX, gridY } = screenToGrid(worldX, worldY);

            // If Road tool active and primary button, start road drag placement
            if (this.selectedTool === "road" && e.button === 0 && this.isValidTile(gridX, gridY)) {
                this.isRoadDragging = true;
                this.placedRoadTilesInDrag.clear();
                this.placeRoadAt(gridX, gridY);
            }
        },

        handlePointerMove(e) {
            const { canvasX, canvasY, worldX, worldY } = this.getCanvasCoords(e);
            const { gridX, gridY } = screenToGrid(worldX, worldY);

            // Update hovered tile
            if (this.isValidTile(gridX, gridY)) {
                if (!this.hoveredTile || this.hoveredTile.x !== gridX || this.hoveredTile.y !== gridY) {
                    this.hoveredTile = { x: gridX, y: gridY };
                    this.requestRender();
                }
            } else if (this.hoveredTile !== null) {
                this.hoveredTile = null;
                this.requestRender();
            }

            // Drag to pan check
            if (this.isPointerDown) {
                const dx = canvasX - this.panStartPointer.x;
                const dy = canvasY - this.panStartPointer.y;

                if (!this.isRoadDragging && (Math.abs(dx) > 4 || Math.abs(dy) > 4 || this.isPanning)) {
                    this.isPanning = true;
                    this.hasPanned = true;
                    this.camera.x = this.panStartCamera.x + dx;
                    this.camera.y = this.panStartCamera.y + dy;
                    this.requestRender();
                } else if (this.isRoadDragging && this.isValidTile(gridX, gridY)) {
                    // Placing road tiles along dragged path
                    this.placeRoadAt(gridX, gridY);
                }
            }
        },

        handlePointerUp(e) {
            if (!this.isPointerDown) return;

            const { worldX, worldY } = this.getCanvasCoords(e);
            const { gridX, gridY } = screenToGrid(worldX, worldY);

            const wasPanning = this.hasPanned;
            this.isPointerDown = false;
            this.isPanning = false;
            this.isRoadDragging = false;
            this.placedRoadTilesInDrag.clear();

            // If this was a clean click without significant drag
            if (!wasPanning && this.isValidTile(gridX, gridY)) {
                this.handleTileClick(gridX, gridY);
            }
        },

        handleTileClick(x, y) {
            const tile = this.grid[y][x];

            if (this.selectedTool === "select") {
                this.selectedTile = { x, y };

                if (tile.building) {
                    this.selectedBuilding = tile.building;
                    this.showInspector(tile.building, x, y);
                } else if (tile.type === "residential") {
                    // Fallback for residential without building object
                    this.selectedBuilding = {
                        id: `res_${x}_${y}`,
                        type: "house_small",
                        name: "Residential Cottage",
                        category: "Residential",
                        level: 1,
                        status: "Occupied • Active",
                        x,
                        y
                    };
                    this.showInspector(this.selectedBuilding, x, y);
                } else {
                    this.selectedBuilding = null;
                    this.dismissInspector();
                }
                this.render();
            } else if (this.selectedTool === "road") {
                this.placeRoadAt(x, y);
            } else if (this.selectedTool === "residential") {
                this.placeResidentialAt(x, y);
            }
        },

        // --------------------------------------------------------------------
        // Mouse Wheel Zoom (from IsoCity handleWheel)
        // --------------------------------------------------------------------
        handleWheel(e) {
            e.preventDefault();

            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // World position under cursor before zoom
            const worldX = (mouseX - this.camera.x) / this.camera.zoom;
            const worldY = (mouseY - this.camera.y) / this.camera.zoom;

            // Proportional zoom factor
            const baseDelta = 0.08;
            const zoomDelta = e.deltaY > 0 ? -baseDelta * this.camera.zoom : baseDelta * this.camera.zoom;
            const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, this.camera.zoom + zoomDelta));

            if (newZoom === this.camera.zoom) return;

            // Keep the world position under cursor stationary
            this.camera.x = mouseX - worldX * newZoom;
            this.camera.y = mouseY - worldY * newZoom;
            this.camera.zoom = newZoom;

            this.updateZoomBadge();
            this.render();
        },

        zoomBy(factor) {
            if (!this.canvas) return;
            const rect = this.canvas.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const worldX = (centerX - this.camera.x) / this.camera.zoom;
            const worldY = (centerY - this.camera.y) / this.camera.zoom;

            const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, this.camera.zoom * factor));
            this.camera.x = centerX - worldX * newZoom;
            this.camera.y = centerY - worldY * newZoom;
            this.camera.zoom = newZoom;

            this.updateZoomBadge();
            this.render();
        },

        // --------------------------------------------------------------------
        // Touch Handlers for Mobile (from IsoCity CanvasIsometricGrid)
        // --------------------------------------------------------------------
        handleTouchStart(e) {
            if (e.touches.length === 1) {
                const touch = e.touches[0];
                const rect = this.canvas.getBoundingClientRect();
                const touchX = touch.clientX - rect.left;
                const touchY = touch.clientY - rect.top;

                this.isPointerDown = true;
                this.hasPanned = false;
                this.panStartPointer = { x: touchX, y: touchY };
                this.panStartCamera = { x: this.camera.x, y: this.camera.y };
                this.initialPinchDistance = null;
            } else if (e.touches.length === 2) {
                e.preventDefault();
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                this.initialPinchDistance = Math.hypot(dx, dy);
                this.initialZoom = this.camera.zoom;
                this.lastTouchCenter = {
                    x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                    y: (e.touches[0].clientY + e.touches[1].clientY) / 2
                };
            }
        },

        handleTouchMove(e) {
            e.preventDefault();
            const rect = this.canvas.getBoundingClientRect();

            if (e.touches.length === 1 && !this.initialPinchDistance) {
                const touch = e.touches[0];
                const touchX = touch.clientX - rect.left;
                const touchY = touch.clientY - rect.top;

                const dx = touchX - this.panStartPointer.x;
                const dy = touchY - this.panStartPointer.y;

                if (Math.abs(dx) > 6 || Math.abs(dy) > 6 || this.isPanning) {
                    this.isPanning = true;
                    this.hasPanned = true;
                    this.camera.x = this.panStartCamera.x + dx;
                    this.camera.y = this.panStartCamera.y + dy;
                    this.requestRender();
                }
            } else if (e.touches.length === 2 && this.initialPinchDistance) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const dist = Math.hypot(dx, dy);
                const scale = dist / this.initialPinchDistance;

                const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, this.initialZoom * scale));
                const touchCenterX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
                const touchCenterY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;

                const worldX = (touchCenterX - this.camera.x) / this.camera.zoom;
                const worldY = (touchCenterY - this.camera.y) / this.camera.zoom;

                this.camera.x = touchCenterX - worldX * newZoom;
                this.camera.y = touchCenterY - worldY * newZoom;
                this.camera.zoom = newZoom;

                this.updateZoomBadge();
                this.requestRender();
            }
        },

        handleTouchEnd(e) {
            if (e.touches.length === 0) {
                const wasPanning = this.hasPanned;
                this.isPointerDown = false;
                this.isPanning = false;
                this.initialPinchDistance = null;

                if (!wasPanning && e.changedTouches.length === 1) {
                    const rect = this.canvas.getBoundingClientRect();
                    const touch = e.changedTouches[0];
                    const canvasX = touch.clientX - rect.left;
                    const canvasY = touch.clientY - rect.top;
                    const worldX = (canvasX - this.camera.x) / this.camera.zoom;
                    const worldY = (canvasY - this.camera.y) / this.camera.zoom;
                    const { gridX, gridY } = screenToGrid(worldX, worldY);

                    if (this.isValidTile(gridX, gridY)) {
                        this.handleTileClick(gridX, gridY);
                    }
                }
            } else if (e.touches.length === 1) {
                this.initialPinchDistance = null;
            }
        },

        // --------------------------------------------------------------------
        // Building & Road Placement
        // --------------------------------------------------------------------
        placeRoadAt(x, y) {
            if (!this.isValidTile(x, y)) return;
            const key = `${x},${y}`;
            if (this.placedRoadTilesInDrag.has(key)) return;
            this.placedRoadTilesInDrag.add(key);

            const tile = this.grid[y][x];
            // Cannot place road over water or residential
            if (tile.type === "water" || tile.building) return;

            tile.type = "road";
            this.render();
        },

        placeResidentialAt(x, y) {
            if (!this.isValidTile(x, y)) return;
            const tile = this.grid[y][x];

            // Only place on open grass land
            if (tile.type !== "grass" || tile.building) {
                return;
            }

            const buildingId = `res_${x}_${y}_${Date.now()}`;
            tile.type = "residential";
            tile.building = {
                id: buildingId,
                type: "house_small",
                name: "Cozy Residence",
                category: "Residential",
                level: 1,
                status: "Occupied • Active",
                x,
                y
            };

            this.selectedTile = { x, y };
            this.selectedBuilding = tile.building;
            this.showInspector(tile.building, x, y);
            this.render();
        },

        // --------------------------------------------------------------------
        // Floating Build Toolbar Setup
        // --------------------------------------------------------------------
        setupBuildToolbar() {
            const toolbar = document.getElementById("city-build-toolbar");
            if (!toolbar) return;

            // Clear previous toolbar and rebuild with exact required categories
            toolbar.innerHTML = "";

            const tools = [
                { id: "select", icon: "👆", label: "Inspect", active: true, enabled: true },
                { id: "residential", icon: "🏠", label: "Residential", active: false, enabled: true },
                { id: "roads", icon: "🛣️", label: "Roads", active: false, enabled: true },
                { id: "industry", icon: "🏭", label: "Industry", active: false, enabled: false },
                { id: "commerce", icon: "🛒", label: "Commerce", active: false, enabled: false },
                { id: "services", icon: "⚡", label: "Services", active: false, enabled: false },
                { id: "education", icon: "🎓", label: "Education", active: false, enabled: false },
                { id: "parks", icon: "🌳", label: "Parks/Landmarks", active: false, enabled: false }
            ];

            tools.forEach(t => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = `build-tool-btn ${t.active ? "active" : ""} ${!t.enabled ? "disabled" : ""}`;
                btn.setAttribute("data-tool-id", t.id);
                btn.title = t.enabled ? `${t.label} Tool` : `${t.label} (Coming Soon)`;

                btn.innerHTML = `
                    <span class="tool-icon">${t.icon}</span>
                    <span class="tool-label">${t.label}</span>
                    ${!t.enabled ? '<span class="tool-future-badge">SOON</span>' : ""}
                `;

                if (t.enabled) {
                    btn.addEventListener("click", () => {
                        this.setTool(t.id === "roads" ? "road" : t.id);
                    });
                }

                toolbar.appendChild(btn);
            });
        },

        setTool(tool) {
            this.selectedTool = tool;

            // Update toolbar button highlights
            const buttons = document.querySelectorAll(".city-build-toolbar .build-tool-btn");
            buttons.forEach(btn => {
                const id = btn.getAttribute("data-tool-id");
                const matches = (id === tool) || (id === "roads" && tool === "road");
                if (matches) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });

            // If switching away from select, dismiss inspector
            if (tool !== "select") {
                this.dismissInspector();
            }

            this.render();
        },

        // --------------------------------------------------------------------
        // Contextual Building Inspector
        // --------------------------------------------------------------------
        setupInspector() {
            let inspector = document.getElementById("city-contextual-inspector");
            if (!inspector) {
                inspector = document.createElement("div");
                inspector.id = "city-contextual-inspector";
                inspector.className = "city-contextual-inspector";
                inspector.style.display = "none";
                this.container.appendChild(inspector);
            }
            this.inspectorEl = inspector;
        },

        showInspector(building, x, y) {
            if (!this.inspectorEl) return;

            this.inspectorEl.innerHTML = `
                <div class="inspector-card">
                    <div class="inspector-header">
                        <div class="inspector-title-row">
                            <span class="inspector-icon">🏠</span>
                            <div>
                                <h4 class="inspector-title">${building.name || "Cozy Residence"}</h4>
                                <span class="inspector-subtitle">RESIDENTIAL • TILE (${x}, ${y})</span>
                            </div>
                        </div>
                        <button type="button" class="inspector-close-btn" id="inspector-close-btn" aria-label="Close">✕</button>
                    </div>
                    <div class="inspector-body">
                        <div class="inspector-stat">
                            <span class="inspector-stat-label">Level</span>
                            <span class="inspector-stat-val">Level ${building.level || 1}</span>
                        </div>
                        <div class="inspector-stat">
                            <span class="inspector-stat-label">Status</span>
                            <span class="inspector-stat-val text-emerald">${building.status || "Active • Occupied"}</span>
                        </div>
                        <div class="inspector-stat">
                            <span class="inspector-stat-label">Zoning</span>
                            <span class="inspector-stat-val">Low-Density Urban</span>
                        </div>
                    </div>
                </div>
            `;

            this.inspectorEl.style.display = "block";

            const closeBtn = document.getElementById("inspector-close-btn");
            if (closeBtn) {
                closeBtn.addEventListener("click", () => this.dismissInspector());
            }
        },

        dismissInspector() {
            if (this.inspectorEl) {
                this.inspectorEl.style.display = "none";
            }
            this.selectedBuilding = null;
            this.selectedTile = null;
            this.render();
        },

        // --------------------------------------------------------------------
        // Rendering Loop
        // --------------------------------------------------------------------
        requestRender() {
            if (!pendingRender) {
                pendingRender = true;
                requestAnimationFrame(() => {
                    pendingRender = false;
                    this.render();
                });
            }
        },

        render() {
            if (!this.ctx || !this.canvas) return;

            const ctx = this.ctx;
            const width = this.canvas.width / this.dpr;
            const height = this.canvas.height / this.dpr;

            // Reset transform & clear
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Scale by DPR
            ctx.scale(this.dpr, this.dpr);

            // Bright daytime gradient background
            const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
            bgGrad.addColorStop(0, "#cbe8fa");
            bgGrad.addColorStop(0.45, "#e3f2fd");
            bgGrad.addColorStop(1, "#f0f9ff");
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            // Apply camera transform
            ctx.save();
            ctx.translate(this.camera.x, this.camera.y);
            ctx.scale(this.camera.zoom, this.camera.zoom);

            // 1. Draw 3D Island Base Skirt (Tactile cliff drop)
            this.drawIslandCliffs(ctx);

            // 2. Draw Base Diamond Terrain Tiles
            this.drawTerrainTiles(ctx);

            // 3. Draw Roads (Autotiled with sidewalks and markings)
            this.drawRoads(ctx);

            // 4. Draw Depth-Sorted Objects & Buildings
            this.drawObjectsAndBuildings(ctx);

            // 5. Draw Tile Highlights & Placement Preview
            this.drawHighlightsAndPreview(ctx);

            ctx.restore();
        },

        // --------------------------------------------------------------------
        // 3D Island Cliff Skirt
        // --------------------------------------------------------------------
        drawIslandCliffs(ctx) {
            const cliffDepth = 22;
            const cliffColorLeft = "#524332";
            const cliffColorRight = "#413425";
            const cliffBorder = "#302619";

            // Bottom-right edge (x = gridSize - 1, y = 0 to gridSize - 1)
            for (let y = 0; y < this.gridSize; y++) {
                const x = this.gridSize - 1;
                const { screenX, screenY } = gridToScreen(x, y);
                const pRight = { x: screenX + TILE_WIDTH, y: screenY + TILE_HEIGHT / 2 };
                const pBottom = { x: screenX + TILE_WIDTH / 2, y: screenY + TILE_HEIGHT };

                ctx.fillStyle = cliffColorRight;
                ctx.beginPath();
                ctx.moveTo(pBottom.x, pBottom.y);
                ctx.lineTo(pRight.x, pRight.y);
                ctx.lineTo(pRight.x, pRight.y + cliffDepth);
                ctx.lineTo(pBottom.x, pBottom.y + cliffDepth);
                ctx.closePath();
                ctx.fill();

                ctx.strokeStyle = cliffBorder;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            // Bottom-left edge (y = gridSize - 1, x = 0 to gridSize - 1)
            for (let x = 0; x < this.gridSize; x++) {
                const y = this.gridSize - 1;
                const { screenX, screenY } = gridToScreen(x, y);
                const pLeft = { x: screenX, y: screenY + TILE_HEIGHT / 2 };
                const pBottom = { x: screenX + TILE_WIDTH / 2, y: screenY + TILE_HEIGHT };

                ctx.fillStyle = cliffColorLeft;
                ctx.beginPath();
                ctx.moveTo(pLeft.x, pLeft.y);
                ctx.lineTo(pBottom.x, pBottom.y);
                ctx.lineTo(pBottom.x, pBottom.y + cliffDepth);
                ctx.lineTo(pLeft.x, pLeft.y + cliffDepth);
                ctx.closePath();
                ctx.fill();

                ctx.strokeStyle = cliffBorder;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        },

        // --------------------------------------------------------------------
        // Base Diamond Terrain
        // --------------------------------------------------------------------
        drawTerrainTiles(ctx) {
            for (let y = 0; y < this.gridSize; y++) {
                for (let x = 0; x < this.gridSize; x++) {
                    const tile = this.grid[y][x];
                    const { screenX, screenY } = gridToScreen(x, y);

                    // Colors for bright daytime
                    let fillColor = "#5ea349";
                    let strokeColor = "#498236";

                    // Subtle checkerboard pattern for rich visual depth
                    if ((x + y) % 2 === 1) {
                        fillColor = "#589c43";
                    }

                    if (tile.type === "water") {
                        fillColor = "#0284c7";
                        strokeColor = "#0369a1";
                    } else if (tile.type === "road") {
                        fillColor = "#4a4a4a";
                        strokeColor = "#383838";
                    } else if (tile.type === "residential" || tile.building) {
                        fillColor = "#8894a4"; // concrete/foundation base
                        strokeColor = "#64748b";
                    }

                    // Draw isometric diamond
                    ctx.beginPath();
                    ctx.moveTo(screenX + TILE_WIDTH / 2, screenY);
                    ctx.lineTo(screenX + TILE_WIDTH, screenY + TILE_HEIGHT / 2);
                    ctx.lineTo(screenX + TILE_WIDTH / 2, screenY + TILE_HEIGHT);
                    ctx.lineTo(screenX, screenY + TILE_HEIGHT / 2);
                    ctx.closePath();

                    ctx.fillStyle = fillColor;
                    ctx.fill();

                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();

                    // Water shimmer accent
                    if (tile.type === "water") {
                        ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
                        ctx.beginPath();
                        ctx.moveTo(screenX + TILE_WIDTH * 0.4, screenY + TILE_HEIGHT * 0.35);
                        ctx.lineTo(screenX + TILE_WIDTH * 0.6, screenY + TILE_HEIGHT * 0.35);
                        ctx.lineTo(screenX + TILE_WIDTH * 0.5, screenY + TILE_HEIGHT * 0.55);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            }
        },

        // --------------------------------------------------------------------
        // Road Rendering & Autotiling (from IsoCity roadDrawing.ts)
        // --------------------------------------------------------------------
        drawRoads(ctx) {
            for (let y = 0; y < this.gridSize; y++) {
                for (let x = 0; x < this.gridSize; x++) {
                    if (this.grid[y][x].type === "road") {
                        const { screenX, screenY } = gridToScreen(x, y);
                        this.drawRoadTile(ctx, screenX, screenY, x, y);
                    }
                }
            }
        },

        drawRoadTile(ctx, x, y, gridX, gridY) {
            const w = TILE_WIDTH;
            const h = TILE_HEIGHT;
            const cx = x + w / 2;
            const cy = y + h / 2;

            // Check adjacency (IsoCity coordinate scheme)
            const north = this.hasRoad(gridX - 1, gridY);  // top-left edge
            const east = this.hasRoad(gridX, gridY - 1);   // top-right edge
            const south = this.hasRoad(gridX + 1, gridY);  // bottom-right edge
            const west = this.hasRoad(gridX, gridY + 1);   // bottom-left edge

            const laneWidth = w * 0.30;
            const halfLane = laneWidth / 2;
            const sidewalkW = w * 0.08;

            // Corner coordinates
            const topC = { x: cx, y };
            const rightC = { x: x + w, y: cy };
            const bottomC = { x: cx, y: y + h };
            const leftC = { x, y: cy };

            // Edge midpoints
            const northMid = { x: x + w * 0.25, y: y + h * 0.25 };
            const eastMid = { x: x + w * 0.75, y: y + h * 0.25 };
            const southMid = { x: x + w * 0.75, y: y + h * 0.75 };
            const westMid = { x: x + w * 0.25, y: y + h * 0.75 };

            // 1. Draw Sidewalks around edges where there is no connecting road
            ctx.fillStyle = ROAD_COLORS.SIDEWALK;
            if (!north) {
                ctx.beginPath();
                ctx.moveTo(leftC.x, leftC.y);
                ctx.lineTo(topC.x, topC.y);
                ctx.lineTo(topC.x - sidewalkW, topC.y + sidewalkW * 0.5);
                ctx.lineTo(leftC.x + sidewalkW, leftC.y + sidewalkW * 0.5);
                ctx.closePath();
                ctx.fill();
            }
            if (!east) {
                ctx.beginPath();
                ctx.moveTo(topC.x, topC.y);
                ctx.lineTo(rightC.x, rightC.y);
                ctx.lineTo(rightC.x - sidewalkW, rightC.y + sidewalkW * 0.5);
                ctx.lineTo(topC.x + sidewalkW, topC.y + sidewalkW * 0.5);
                ctx.closePath();
                ctx.fill();
            }
            if (!south) {
                ctx.beginPath();
                ctx.moveTo(rightC.x, rightC.y);
                ctx.lineTo(bottomC.x, bottomC.y);
                ctx.lineTo(bottomC.x + sidewalkW, bottomC.y - sidewalkW * 0.5);
                ctx.lineTo(rightC.x - sidewalkW, rightC.y - sidewalkW * 0.5);
                ctx.closePath();
                ctx.fill();
            }
            if (!west) {
                ctx.beginPath();
                ctx.moveTo(bottomC.x, bottomC.y);
                ctx.lineTo(leftC.x, leftC.y);
                ctx.lineTo(leftC.x + sidewalkW, leftC.y - sidewalkW * 0.5);
                ctx.lineTo(bottomC.x - sidewalkW, bottomC.y - sidewalkW * 0.5);
                ctx.closePath();
                ctx.fill();
            }

            // 2. Draw Asphalt Surface
            ctx.fillStyle = ROAD_COLORS.ASPHALT;

            // Center crossing diamond
            ctx.beginPath();
            ctx.moveTo(cx, cy - halfLane);
            ctx.lineTo(cx + halfLane, cy);
            ctx.lineTo(cx, cy + halfLane);
            ctx.lineTo(cx - halfLane, cy);
            ctx.closePath();
            ctx.fill();

            // Connecting corridors to adjacent roads
            if (north) {
                ctx.beginPath();
                ctx.moveTo(cx - halfLane, cy);
                ctx.lineTo(northMid.x - halfLane * 0.6, northMid.y + halfLane * 0.3);
                ctx.lineTo(northMid.x + halfLane * 0.6, northMid.y - halfLane * 0.3);
                ctx.lineTo(cx, cy - halfLane);
                ctx.closePath();
                ctx.fill();
            }
            if (east) {
                ctx.beginPath();
                ctx.moveTo(cx, cy - halfLane);
                ctx.lineTo(eastMid.x - halfLane * 0.6, eastMid.y - halfLane * 0.3);
                ctx.lineTo(eastMid.x + halfLane * 0.6, eastMid.y + halfLane * 0.3);
                ctx.lineTo(cx + halfLane, cy);
                ctx.closePath();
                ctx.fill();
            }
            if (south) {
                ctx.beginPath();
                ctx.moveTo(cx + halfLane, cy);
                ctx.lineTo(southMid.x + halfLane * 0.6, southMid.y - halfLane * 0.3);
                ctx.lineTo(southMid.x - halfLane * 0.6, southMid.y + halfLane * 0.3);
                ctx.lineTo(cx, cy + halfLane);
                ctx.closePath();
                ctx.fill();
            }
            if (west) {
                ctx.beginPath();
                ctx.moveTo(cx, cy + halfLane);
                ctx.lineTo(westMid.x + halfLane * 0.6, westMid.y + halfLane * 0.3);
                ctx.lineTo(westMid.x - halfLane * 0.6, westMid.y - halfLane * 0.3);
                ctx.lineTo(cx - halfLane, cy);
                ctx.closePath();
                ctx.fill();
            }

            // If completely isolated road tile, fill whole center
            if (!north && !east && !south && !west) {
                ctx.beginPath();
                ctx.moveTo(cx, cy - halfLane * 1.4);
                ctx.lineTo(cx + halfLane * 1.4, cy);
                ctx.lineTo(cx, cy + halfLane * 1.4);
                ctx.lineTo(cx - halfLane * 1.4, cy);
                ctx.closePath();
                ctx.fill();
            }

            // 3. Yellow Center Lines
            ctx.strokeStyle = ROAD_COLORS.CENTER_LINE;
            ctx.lineWidth = 1.2;

            if (north) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(northMid.x, northMid.y);
                ctx.stroke();
            }
            if (east) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(eastMid.x, eastMid.y);
                ctx.stroke();
            }
            if (south) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(southMid.x, southMid.y);
                ctx.stroke();
            }
            if (west) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(westMid.x, westMid.y);
                ctx.stroke();
            }
        },

        // --------------------------------------------------------------------
        // Depth-Sorted Objects & Buildings (Painter's Algorithm)
        // --------------------------------------------------------------------
        drawObjectsAndBuildings(ctx) {
            const renderQueue = [];

            for (let y = 0; y < this.gridSize; y++) {
                for (let x = 0; x < this.gridSize; x++) {
                    const tile = this.grid[y][x];

                    if (tile.type === "residential" || tile.building) {
                        renderQueue.push({
                            type: "building",
                            tile,
                            x,
                            y,
                            depth: x + y
                        });
                    } else if (tile.type === "tree") {
                        renderQueue.push({
                            type: "tree",
                            tile,
                            x,
                            y,
                            depth: x + y
                        });
                    }
                }
            }

            // Stable depth sort: from back (smallest depth) to front
            renderQueue.sort((a, b) => {
                if (a.depth !== b.depth) return a.depth - b.depth;
                return a.y - b.y;
            });

            // Render in sorted order
            renderQueue.forEach(item => {
                const { screenX, screenY } = gridToScreen(item.x, item.y);
                if (item.type === "building") {
                    this.drawHouseSprite(ctx, screenX, screenY, item.tile);
                } else if (item.type === "tree") {
                    this.drawTreeSprite(ctx, screenX, screenY);
                }
            });
        },

        // Render house_small.webp on real isometric tile
        drawHouseSprite(ctx, screenX, screenY, tile) {
            const img = images.house_small;

            if (img && img.complete && img.naturalWidth > 0) {
                // Width scaled proportionally to tile width
                const destWidth = TILE_WIDTH * 1.25; // ~80px
                const destHeight = destWidth; // 2048x2048 is 1:1

                // Align center X with tile center
                const drawX = screenX + TILE_WIDTH / 2 - destWidth / 2;

                // Base rests right on the foundation diamond
                // In 2048x2048 house_small.webp, building base is at ~88.7% height
                const drawY = screenY + TILE_HEIGHT * 0.85 - destHeight * 0.887;

                ctx.drawImage(img, Math.round(drawX), Math.round(drawY), Math.round(destWidth), Math.round(destHeight));
            } else {
                // Fallback procedural isometric building
                this.drawProceduralHouse(ctx, screenX, screenY);
            }
        },

        // Fallback procedural building if sprite is not yet loaded
        drawProceduralHouse(ctx, screenX, screenY) {
            const w = TILE_WIDTH;
            const h = TILE_HEIGHT;
            const cx = screenX + w / 2;
            const cy = screenY + h / 2;
            const bHeight = 28;

            // Walls (Left & Right faces)
            ctx.fillStyle = "#cbd5e1";
            ctx.beginPath();
            ctx.moveTo(screenX + w * 0.2, cy);
            ctx.lineTo(cx, cy + h * 0.35);
            ctx.lineTo(cx, cy + h * 0.35 - bHeight);
            ctx.lineTo(screenX + w * 0.2, cy - bHeight);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = "#94a3b8";
            ctx.beginPath();
            ctx.moveTo(cx, cy + h * 0.35);
            ctx.lineTo(screenX + w * 0.8, cy);
            ctx.lineTo(screenX + w * 0.8, cy - bHeight);
            ctx.lineTo(cx, cy + h * 0.35 - bHeight);
            ctx.closePath();
            ctx.fill();

            // Roof
            ctx.fillStyle = "#ef4444";
            ctx.beginPath();
            ctx.moveTo(cx, cy - bHeight - 12);
            ctx.lineTo(screenX + w * 0.8, cy - bHeight);
            ctx.lineTo(cx, cy + h * 0.35 - bHeight);
            ctx.lineTo(screenX + w * 0.2, cy - bHeight);
            ctx.closePath();
            ctx.fill();
        },

        // Render trees.webp on real isometric tile
        drawTreeSprite(ctx, screenX, screenY) {
            const img = images.trees;

            if (img && img.complete && img.naturalWidth > 0) {
                const destWidth = TILE_WIDTH * 0.95; // ~60px
                const destHeight = destWidth; // 1024x1024 is 1:1

                const drawX = screenX + TILE_WIDTH / 2 - destWidth / 2;
                const drawY = screenY + TILE_HEIGHT * 0.82 - destHeight * 0.88;

                ctx.drawImage(img, Math.round(drawX), Math.round(drawY), Math.round(destWidth), Math.round(destHeight));
            } else {
                // Procedural tree fallback
                const cx = screenX + TILE_WIDTH / 2;
                const cy = screenY + TILE_HEIGHT * 0.6;

                // Trunk
                ctx.fillStyle = "#78350f";
                ctx.fillRect(cx - 2, cy - 8, 4, 10);

                // Leaves
                ctx.fillStyle = "#15803d";
                ctx.beginPath();
                ctx.arc(cx, cy - 14, 10, 0, Math.PI * 2);
                ctx.fill();
            }
        },

        // --------------------------------------------------------------------
        // Tile Highlights, Hover, & Placement Preview
        // --------------------------------------------------------------------
        drawHighlightsAndPreview(ctx) {
            // 1. Selected Tile Highlight Ring
            if (this.selectedTile && this.isValidTile(this.selectedTile.x, this.selectedTile.y)) {
                const { screenX, screenY } = gridToScreen(this.selectedTile.x, this.selectedTile.y);
                const w = TILE_WIDTH;
                const h = TILE_HEIGHT;

                ctx.strokeStyle = "#38bdf8";
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.moveTo(screenX + w / 2, screenY);
                ctx.lineTo(screenX + w, screenY + h / 2);
                ctx.lineTo(screenX + w / 2, screenY + h);
                ctx.lineTo(screenX, screenY + h / 2);
                ctx.closePath();
                ctx.stroke();

                ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
                ctx.fill();
            }

            // 2. Hovered Tile & Placement Preview
            if (this.hoveredTile && this.isValidTile(this.hoveredTile.x, this.hoveredTile.y)) {
                const hx = this.hoveredTile.x;
                const hy = this.hoveredTile.y;
                const tile = this.grid[hy][hx];
                const { screenX, screenY } = gridToScreen(hx, hy);
                const w = TILE_WIDTH;
                const h = TILE_HEIGHT;

                if (this.selectedTool === "select") {
                    // Subtle diamond highlight
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(screenX + w / 2, screenY);
                    ctx.lineTo(screenX + w, screenY + h / 2);
                    ctx.lineTo(screenX + w / 2, screenY + h);
                    ctx.lineTo(screenX, screenY + h / 2);
                    ctx.closePath();
                    ctx.stroke();

                    ctx.fillStyle = "rgba(255, 255, 255, 0.18)";
                    ctx.fill();
                } else if (this.selectedTool === "road") {
                    // Road Placement Preview
                    const canPlace = tile.type !== "water" && !tile.building;
                    ctx.fillStyle = canPlace ? "rgba(251, 191, 36, 0.4)" : "rgba(239, 68, 68, 0.4)";
                    ctx.strokeStyle = canPlace ? "#fbbf24" : "#ef4444";
                    ctx.lineWidth = 1.8;

                    ctx.beginPath();
                    ctx.moveTo(screenX + w / 2, screenY);
                    ctx.lineTo(screenX + w, screenY + h / 2);
                    ctx.lineTo(screenX + w / 2, screenY + h);
                    ctx.lineTo(screenX, screenY + h / 2);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                } else if (this.selectedTool === "residential") {
                    // Residential House Placement Preview
                    const canPlace = tile.type === "grass" && !tile.building;
                    ctx.fillStyle = canPlace ? "rgba(34, 197, 94, 0.35)" : "rgba(239, 68, 68, 0.4)";
                    ctx.strokeStyle = canPlace ? "#22c55e" : "#ef4444";
                    ctx.lineWidth = 2.0;

                    ctx.beginPath();
                    ctx.moveTo(screenX + w / 2, screenY);
                    ctx.lineTo(screenX + w, screenY + h / 2);
                    ctx.lineTo(screenX + w / 2, screenY + h);
                    ctx.lineTo(screenX, screenY + h / 2);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();

                    // Semi-transparent ghost preview of house_small
                    if (canPlace && images.house_small && images.house_small.complete) {
                        ctx.save();
                        ctx.globalAlpha = 0.65;
                        this.drawHouseSprite(ctx, screenX, screenY, tile);
                        ctx.restore();
                    }
                }
            }
        },

        // --------------------------------------------------------------------
        // Public State Serialization
        // --------------------------------------------------------------------
        getState() {
            return {
                gridSize: this.gridSize,
                grid: this.grid.map(row => row.map(tile => ({
                    x: tile.x,
                    y: tile.y,
                    type: tile.type,
                    building: tile.building
                }))),
                camera: {
                    x: this.camera.x,
                    y: this.camera.y,
                    zoom: this.camera.zoom
                }
            };
        },

        loadState(state) {
            if (!state) return;
            if (state.gridSize && state.grid) {
                this.gridSize = state.gridSize;
                this.grid = state.grid;
            }
            if (state.camera) {
                this.camera.x = state.camera.x ?? this.camera.x;
                this.camera.y = state.camera.y ?? this.camera.y;
                this.camera.zoom = state.camera.zoom ?? this.camera.zoom;
            }
            this.render();
        }
    };

    window.CityCanvas = CityCanvas;

})(window);
