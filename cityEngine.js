// ============================================================================
// BUILD IT! — ISOMETRIC CITY ENGINE & PROCEDURAL RENDERER
// Modern Educational Technology City Architecture & Simulation-Lite Engine
// ============================================================================

(function (window) {
    "use strict";

    // ------------------------------------------------------------------------
    // 1. ISOMETRIC PROJECTION CONSTANTS & MATH
    // ------------------------------------------------------------------------
    const TILE_WIDTH = 110;
    const TILE_HEIGHT = 55;
    const HALF_W = TILE_WIDTH / 2;
    const HALF_H = TILE_HEIGHT / 2;
    const GRID_SIZE = 18;

    function isoToScreen(col, row, elevation = 0) {
        return {
            x: (col - row) * HALF_W,
            y: (col + row) * HALF_H - elevation
        };
    }

    function screenToIso(screenX, screenY) {
        const col = (screenX / HALF_W + screenY / HALF_H) / 2;
        const row = (screenY / HALF_H - screenX / HALF_W) / 2;
        return { col: Math.round(col), row: Math.round(row) };
    }

    // ------------------------------------------------------------------------
    // 2. CITY DISTRICTS CONFIGURATION
    // ------------------------------------------------------------------------
    const DISTRICTS = [
        {
            id: "d1",
            name: "Python Basics District",
            theme: "emerald",
            icon: "🌱",
            color: "#10b981",
            glowColor: "rgba(16, 185, 129, 0.4)",
            accentColor: "#34d399",
            centerTile: { col: 14, row: 4 },
            description: "Fundamental Python syntax: print(), variables, numbers, strings, and arithmetic.",
            unlocked: true,
            landmarkId: "b_spire",
            crisisId: "crisis_basics",
            buildings: ["b_syntax", "b_var", "b_str", "b_math", "b_spire"]
        },
        {
            id: "d2",
            name: "Logic & Control District",
            theme: "amber",
            icon: "⚡",
            color: "#f59e0b",
            glowColor: "rgba(245, 158, 11, 0.4)",
            accentColor: "#fbbf24",
            centerTile: { col: 14, row: 13 },
            description: "Control flow: Comparisons, booleans, if/elif/else decisions, and loops.",
            unlocked: false,
            prerequisiteDistrictId: "d1",
            prerequisiteText: "Complete Python Basics District",
            landmarkId: "b_reactor",
            crisisId: "crisis_logic",
            buildings: ["b_bool", "b_matrix", "b_loop", "b_iter", "b_reactor"]
        },
        {
            id: "d3",
            name: "Modular & Functions District",
            theme: "cyan",
            icon: "🔧",
            color: "#06b6d4",
            glowColor: "rgba(6, 182, 212, 0.4)",
            accentColor: "#38bdf8",
            centerTile: { col: 4, row: 4 },
            description: "Reusable modular code: def syntax, parameters, return values, and variable scope.",
            unlocked: false,
            prerequisiteDistrictId: "d2",
            prerequisiteText: "Complete Logic & Control District",
            landmarkId: "b_megacomplex",
            crisisId: "crisis_functions",
            buildings: ["b_forge", "b_depot", "b_scope", "b_megacomplex"]
        },
        {
            id: "d4",
            name: "Data Structures District",
            theme: "purple",
            icon: "📊",
            color: "#8b5cf6",
            glowColor: "rgba(139, 92, 246, 0.4)",
            accentColor: "#a78bfa",
            centerTile: { col: 4, row: 13 },
            description: "Data architectures: Lists, indexing, slicing, immutable tuples, and dictionaries.",
            unlocked: false,
            prerequisiteDistrictId: "d3",
            prerequisiteText: "Complete Modular & Functions District",
            landmarkId: "b_citadel",
            crisisId: "crisis_data",
            buildings: ["b_list", "b_tuple", "b_dict", "b_citadel"]
        },
        {
            id: "d5",
            name: "OOP & Architecture District",
            theme: "rose",
            icon: "⚙️",
            color: "#ec4899",
            glowColor: "rgba(236, 72, 153, 0.4)",
            accentColor: "#f472b6",
            centerTile: { col: 8, row: 15 },
            description: "Object-oriented systems: Classes, __init__, self attributes, methods, and inheritance.",
            unlocked: false,
            prerequisiteDistrictId: "d4",
            prerequisiteText: "Complete Data Structures District",
            landmarkId: "b_monolith",
            crisisId: "crisis_oop",
            buildings: ["b_blueprint", "b_ctor", "b_methods", "b_inherit", "b_monolith"]
        },
        {
            id: "civic",
            name: "Central Civic Plaza",
            theme: "gold",
            icon: "🏛️",
            color: "#f59e0b",
            glowColor: "rgba(245, 158, 11, 0.4)",
            accentColor: "#fde047",
            centerTile: { col: 9, row: 9 },
            description: "Metropolitan Civic Core: Daily Hub, Trophy Plaza, Debugging Lab, and Pinnacle Tower.",
            unlocked: true,
            landmarkId: "b_pinnacle",
            buildings: ["b_pinnacle", "b_daily", "b_trophy", "b_debug"]
        }
    ];

    // ------------------------------------------------------------------------
    // 3. BUILDINGS CONFIGURATION (27 Distinct Buildings across 6 Districts)
    // Enriched with Zones, Production Supply Chains, and Architectural Stages
    // ------------------------------------------------------------------------
    const BUILDINGS = {
        // --- District 1: Basics ---
        b_syntax: {
            id: "b_syntax",
            name: "Syntax Gateway",
            districtId: "d1",
            category: "residential",
            col: 13, row: 3,
            height: 65,
            icon: "⛩️",
            concept: "Python Introduction & print()",
            description: "The primary entrance to Python World. Houses arriving tech pioneers and emits clean console streams.",
            takeaway: "Python code is executed line-by-line; print() outputs values directly to stdout.",
            totalStages: 3,
            questions: ["l1-mcq-000", "l1-mcq-001", "l1-mcq-input"],
            stages: [
                { name: "Site Excavation & Foundation Base", questionId: "l1-mcq-000" },
                { name: "Structural Logic Framing", questionId: "l1-mcq-001" },
                { name: "Console Gateway Commissioning", questionId: "l1-mcq-input" }
            ],
            urbanRole: { popCapacity: 150, serviceDemand: { power: 15, water: 10 } },
            status: "available",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_var: {
            id: "b_var",
            name: "Variable Foundry",
            districtId: "d1",
            category: "industrial",
            col: 15, row: 3,
            height: 75,
            icon: "🏭",
            concept: "Variables & Data Types",
            description: "Forges named memory labels and casts high-grade silicon wafers for city electronics.",
            takeaway: "Variables bind names to values using the assignment operator (=) without declarations.",
            totalStages: 3,
            questions: ["l1-code-001", "l1-mcq-003", "l1-mcq-002"],
            stages: [
                { name: "Cleanroom Foundation Slab", questionId: "l1-code-001" },
                { name: "Variable Ingot Casting Gantry", questionId: "l1-mcq-003" },
                { name: "Silicon Wafer Fabrication Line", questionId: "l1-mcq-002" }
            ],
            urbanRole: {
                produces: { id: "silicon", name: "Silicon Wafers", icon: "🪨", amount: 5 },
                serviceDemand: { power: 25, water: 15 }
            },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_str: {
            id: "b_str",
            name: "String Atelier Lofts",
            districtId: "d1",
            category: "residential",
            col: 13, row: 5,
            height: 70,
            icon: "📜",
            concept: "Strings & Concatenation",
            description: "Residential ateliers for text engineers, refining characters, quotes, and string operations.",
            takeaway: "Strings are ordered characters enclosed in quotes; concatenate them safely with + or f-strings.",
            totalStages: 3,
            questions: ["l1-mcq-007", "l1-output-002", "l1-output-005"],
            stages: [
                { name: "Textile Concrete Footings", questionId: "l1-mcq-007" },
                { name: "Unicode Architectural Framing", questionId: "l1-output-002" },
                { name: "Concatenation Loft Handover", questionId: "l1-output-005" }
            ],
            urbanRole: { popCapacity: 200, serviceDemand: { power: 20, water: 15 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_math: {
            id: "b_math",
            name: "Arithmetic Power Station",
            districtId: "d1",
            category: "service",
            col: 15, row: 5,
            height: 85,
            icon: "⚡",
            concept: "Numbers & Math Operators",
            description: "Generates municipal electricity via integer, float, floor division, and modulo operations.",
            takeaway: "// calculates integer floor division, % returns remainder, and / yields floats.",
            totalStages: 3,
            questions: ["l1-output-001", "l1-mcq-004", "l1-mcq-num"],
            stages: [
                { name: "Turbine Well Substructure", questionId: "l1-output-001" },
                { name: "Operator Alternator Coupling", questionId: "l1-mcq-004" },
                { name: "High-Voltage Grid Synchronization", questionId: "l1-mcq-num" }
            ],
            urbanRole: { serviceOutput: { type: "power", amount: 120 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_spire: {
            id: "b_spire",
            name: "Foundation Spire",
            districtId: "d1",
            category: "landmark",
            col: 14, row: 4,
            height: 120,
            icon: "🗼",
            isLandmark: true,
            concept: "District 1 Landmark Monument",
            description: "The soaring monument proving full mastery of Python fundamental syntax.",
            takeaway: "Mastery of basics creates the unbreakable bedrock for advanced system design.",
            totalStages: 2,
            questions: ["l1-bug-001", "h-boss-001"],
            stages: [
                { name: "Bedrock Anchor Pylons", questionId: "l1-bug-001" },
                { name: "Syntax Crown Illumination", questionId: "h-boss-001" }
            ],
            urbanRole: { isLandmark: true, popBonus: 300 },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },

        // --- District 2: Logic & Control ---
        b_bool: {
            id: "b_bool",
            name: "Boolean Switchboard",
            districtId: "d2",
            category: "service",
            col: 13, row: 12,
            height: 65,
            icon: "🎛️",
            concept: "Comparisons & Booleans",
            description: "Evaluates condition switches to route execution pathways and regulate grid flow.",
            takeaway: "Comparison operators (==, !=, <, >) always evaluate to True or False.",
            totalStages: 3,
            questions: ["l2-mcq-002", "l2-mcq-003", "l2-mcq-001"],
            stages: [
                { name: "Switchboard Conduit Trenching", questionId: "l2-mcq-002" },
                { name: "Binary Relay Terminal Rack", questionId: "l2-mcq-003" },
                { name: "Boolean Grid Routing Commission", questionId: "l2-mcq-001" }
            ],
            urbanRole: { serviceDemand: { power: 15, water: 5 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_matrix: {
            id: "b_matrix",
            name: "Decision Matrix Plaza",
            districtId: "d2",
            category: "commercial",
            col: 15, row: 12,
            height: 80,
            icon: "🔀",
            concept: "if / elif / else Branching",
            description: "Commercial plaza assembling building kits by routing silicon through automated logic branches.",
            takeaway: "Python uses indentation to define code blocks under if/elif/else statements.",
            totalStages: 3,
            questions: ["l2-bug-001", "l2-output-006", "l2-mcq-007"],
            stages: [
                { name: "Plaza Foundation Platform", questionId: "l2-bug-001" },
                { name: "Branching Conveyor Atrium", questionId: "l2-output-006" },
                { name: "Automated Kit Assembly Floor", questionId: "l2-mcq-007" }
            ],
            urbanRole: {
                crafts: { consumes: "silicon", amount: 2, produces: "construction_kits", producesAmount: 2, name: "Construction Kits", icon: "🏗️" },
                serviceDemand: { power: 20, water: 10 }
            },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_loop: {
            id: "b_loop",
            name: "Loop Hydro-Cooling Station",
            districtId: "d2",
            category: "service",
            col: 13, row: 14,
            height: 75,
            icon: "🔄",
            concept: "while Loops & Conditions",
            description: "Pumps continuous recirculating cooling water through municipal heat exchangers while active.",
            takeaway: "while loops run as long as their condition is True; update variables to avoid infinite loops.",
            totalStages: 3,
            questions: ["l2-output-003", "l3-mcq-004", "l2-output-008"],
            stages: [
                { name: "Reservoir Intake Caisson", questionId: "l2-output-003" },
                { name: "Impeller Pump Ring Installation", questionId: "l3-mcq-004" },
                { name: "Loop Hydro Pressure Commissioning", questionId: "l2-output-008" }
            ],
            urbanRole: { serviceOutput: { type: "water", amount: 150 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_iter: {
            id: "b_iter",
            name: "Iteration Tower Residences",
            districtId: "d2",
            category: "residential",
            col: 15, row: 14,
            height: 90,
            icon: "🔁",
            concept: "for Loops & range()",
            description: "High-density residential tower stepping cleanly through residential tiers and family suites.",
            takeaway: "for item in sequence steps cleanly through each element in order.",
            totalStages: 3,
            questions: ["l2-code-002", "l2-output-004", "l2-mcq-008"],
            stages: [
                { name: "Multi-Tier Column Pier Foundation", questionId: "l2-code-002" },
                { name: "Modular Floor Range Extrusion", questionId: "l2-output-004" },
                { name: "Skybridge Step Commissioning", questionId: "l2-mcq-008" }
            ],
            urbanRole: { popCapacity: 250, serviceDemand: { power: 25, water: 20 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_reactor: {
            id: "b_reactor",
            name: "Logic Core Reactor",
            districtId: "d2",
            category: "landmark",
            col: 14, row: 13,
            height: 130,
            icon: "⚛️",
            isLandmark: true,
            concept: "District 2 Landmark Monument",
            description: "The pulsing reactor of algorithmic control, generating massive electrical reserves for the metropolis.",
            takeaway: "Combining branching with loops empowers code to solve any dynamic problem.",
            totalStages: 2,
            questions: ["r-boss-001", "r-boss-002"],
            stages: [
                { name: "Magnetic Core Containment Vault", questionId: "r-boss-001" },
                { name: "Algorithmic Ignition Sequence", questionId: "r-boss-002" }
            ],
            urbanRole: { serviceOutput: { type: "power", amount: 250 }, popBonus: 400 },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },

        // --- District 3: Modular & Functions ---
        b_forge: {
            id: "b_forge",
            name: "Function Forge",
            districtId: "d3",
            category: "industrial",
            col: 3, row: 3,
            height: 75,
            icon: "🧪",
            concept: "Function Definition (def)",
            description: "Industrial plant casting reusable modular logic circuits with parameter specifications.",
            takeaway: "Functions package code into reusable blocks, reducing redundancy and complexity.",
            totalStages: 3,
            questions: ["l2-code-001", "l3-bug-001", "l2-code-004"],
            stages: [
                { name: "Induction Smelter Footings", questionId: "l2-code-001" },
                { name: "Parameter Casting Machinery", questionId: "l3-bug-001" },
                { name: "Logic Circuit Fabrication Line", questionId: "l2-code-004" }
            ],
            urbanRole: {
                produces: { id: "circuits", name: "Logic Circuits", icon: "🔌", amount: 4 },
                serviceDemand: { power: 30, water: 20 }
            },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_depot: {
            id: "b_depot",
            name: "Hardware & Logic Depot",
            districtId: "d3",
            category: "industrial",
            col: 5, row: 3,
            height: 70,
            icon: "📦",
            concept: "return Statement & Outputs",
            description: "Logistics terminal producing structural steel girders and dispatching return values to callers.",
            takeaway: "The return statement hands back data to the caller and instantly terminates function execution.",
            totalStages: 3,
            questions: ["l2-output-002", "l2-mcq-009", "l2-output-009"],
            stages: [
                { name: "Heavy Cargo Bay Excavation", questionId: "l2-output-002" },
                { name: "Overhead Gantry Crane Assembly", questionId: "l2-mcq-009" },
                { name: "Return Dispatch Dock Startup", questionId: "l2-output-009" }
            ],
            urbanRole: {
                produces: { id: "steel", name: "Structural Steel", icon: "🔩", amount: 4 },
                serviceDemand: { power: 25, water: 15 }
            },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_scope: {
            id: "b_scope",
            name: "Scope Observatory Condos",
            districtId: "d3",
            category: "residential",
            col: 3, row: 5,
            height: 85,
            icon: "🔭",
            concept: "Local vs Global Scope",
            description: "Residential observatory tower where variables and citizens find their clear architectural bounds.",
            takeaway: "Variables declared inside a function are local and inaccessible from the outside scope.",
            totalStages: 3,
            questions: ["l2-mcq-010", "l2-output-007", "l2-output-001"],
            stages: [
                { name: "Dome Foundation Basements", questionId: "l2-mcq-010" },
                { name: "Curvature Telescope Framing", questionId: "l2-output-007" },
                { name: "Observatory Penthouse Handover", questionId: "l2-output-001" }
            ],
            urbanRole: { popCapacity: 300, serviceDemand: { power: 30, water: 20 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_megacomplex: {
            id: "b_megacomplex",
            name: "Engineering Megacomplex",
            districtId: "d3",
            category: "landmark",
            col: 5, row: 5,
            height: 125,
            icon: "🏢",
            isLandmark: true,
            concept: "District 3 Landmark Monument",
            description: "Unified corporate headquarters for modular architecture and municipal engineering.",
            takeaway: "Modular functions are the architectural pillars of scalable software engineering.",
            totalStages: 2,
            questions: ["r-boss-003", "r-boss-004"],
            stages: [
                { name: "Megacomplex Core Caisson", questionId: "r-boss-003" },
                { name: "Modular Spire Integration", questionId: "r-boss-004" }
            ],
            urbanRole: { isLandmark: true, popBonus: 500 },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },

        // --- District 4: Data Structures ---
        b_list: {
            id: "b_list",
            name: "List Logistics Hub",
            districtId: "d4",
            category: "commercial",
            col: 3, row: 12,
            height: 75,
            icon: "📋",
            concept: "Lists & Dynamic Sequences",
            description: "Commercial logistics terminal assembling construction materials from incoming circuit shipments.",
            takeaway: "Lists [] are mutable ordered sequences accessed by 0-based integer indexes.",
            totalStages: 3,
            questions: ["l2-mcq-004", "l3-output-001", "l3-mcq-005"],
            stages: [
                { name: "High-Bay Slab Foundation", questionId: "l2-mcq-004" },
                { name: "Automated Sorting Array", questionId: "l3-output-001" },
                { name: "Index Distribution Depot Startup", questionId: "l3-mcq-005" }
            ],
            urbanRole: {
                crafts: { consumes: "circuits", amount: 2, produces: "construction_kits", producesAmount: 3, name: "Construction Kits", icon: "🏗️" },
                serviceDemand: { power: 25, water: 15 }
            },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_tuple: {
            id: "b_tuple",
            name: "Tuple Vault Residences",
            districtId: "d4",
            category: "residential",
            col: 5, row: 12,
            height: 80,
            icon: "🔒",
            concept: "Immutable Tuples",
            description: "Fortified residential apartments preserving permanent, unchangeable municipal heritage records.",
            takeaway: "Tuples () cannot be altered after creation, providing data safety and performance.",
            totalStages: 3,
            questions: ["l3-mcq-001", "l3-mcq-007", "l3-code-003"],
            stages: [
                { name: "Bedrock Vault Sub-Basement", questionId: "l3-mcq-001" },
                { name: "Reinforced Concrete Core Walls", questionId: "l3-mcq-007" },
                { name: "Immutable Residence Commissioning", questionId: "l3-code-003" }
            ],
            urbanRole: { popCapacity: 350, serviceDemand: { power: 30, water: 25 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_dict: {
            id: "b_dict",
            name: "Dictionary Index Hub",
            districtId: "d4",
            category: "industrial",
            col: 3, row: 14,
            height: 85,
            icon: "🗄️",
            concept: "Key-Value Dictionaries",
            description: "High-speed associative lookup engine casting refined silicon units with rapid hash lookups.",
            takeaway: "Dictionaries {} store key:value pairs for lightning-fast hash lookups.",
            totalStages: 3,
            questions: ["l3-code-001", "l3-mcq-003", "l3-output-004"],
            stages: [
                { name: "Hash Array Basement Grid", questionId: "l3-code-001" },
                { name: "Associative Index Processor", questionId: "l3-mcq-003" },
                { name: "Key-Value Bus Activation", questionId: "l3-output-004" }
            ],
            urbanRole: {
                produces: { id: "silicon", name: "Silicon Wafers", icon: "🪨", amount: 6 },
                serviceDemand: { power: 30, water: 20 }
            },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_citadel: {
            id: "b_citadel",
            name: "Data Citadel Tower",
            districtId: "d4",
            category: "landmark",
            col: 5, row: 14,
            height: 135,
            icon: "🏰",
            isLandmark: true,
            concept: "District 4 Landmark Monument",
            description: "Imposing fortress storing the city's structured information archives and master census.",
            takeaway: "Choosing the correct data structure is half of effective software architecture.",
            totalStages: 2,
            questions: ["b-boss-001", "b-boss-002"],
            stages: [
                { name: "Fortress Rampart Footings", questionId: "b-boss-001" },
                { name: "Citadel Archive Crown", questionId: "b-boss-002" }
            ],
            urbanRole: { isLandmark: true, popBonus: 600 },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },

        // --- District 5: OOP & Architecture ---
        b_blueprint: {
            id: "b_blueprint",
            name: "Blueprint Design Academy",
            districtId: "d5",
            category: "tech",
            col: 7, row: 14,
            height: 80,
            icon: "📐",
            concept: "Classes & Objects",
            description: "Architectural design guild standardizing class blueprints for all instantiated city objects.",
            takeaway: "A class defines a blueprint; an object is an instantiated reality created from it.",
            totalStages: 3,
            questions: ["l3-mcq-002", "l3-code-002", "l3-output-005"],
            stages: [
                { name: "Class Template Foundation", questionId: "l3-mcq-002" },
                { name: "Drafting Studio Wings", questionId: "l3-code-002" },
                { name: "Object Instantiation Lab Startup", questionId: "l3-output-005" }
            ],
            urbanRole: { serviceDemand: { power: 20, water: 10 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_ctor: {
            id: "b_ctor",
            name: "Constructor Laboratory",
            districtId: "d5",
            category: "industrial",
            col: 9, row: 14,
            height: 85,
            icon: "🧬",
            concept: "__init__() Constructor & self",
            description: "Initializes unique object instances, casting specialized structural steel with personalized attributes.",
            takeaway: "The __init__ method runs on creation; self points to the specific object instance.",
            totalStages: 3,
            questions: ["l3-mcq-008", "l3-code-004", "l3-output-006"],
            stages: [
                { name: "Excavation & Sub-Structure", questionId: "l3-mcq-008" },
                { name: "Instance Attribute Injection Rig", questionId: "l3-code-004" },
                { name: "Constructor Steel Foundry Handover", questionId: "l3-output-006" }
            ],
            urbanRole: {
                produces: { id: "steel", name: "Structural Steel", icon: "🔩", amount: 6 },
                serviceDemand: { power: 35, water: 25 }
            },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_methods: {
            id: "b_methods",
            name: "Method Dynamics Substation",
            districtId: "d5",
            category: "service",
            col: 7, row: 16,
            height: 90,
            icon: "⚙️",
            concept: "Instance Methods",
            description: "Programs dynamic behaviors and automated state transitions inside metropolitan utility networks.",
            takeaway: "Methods are functions inside a class that operate directly on the object's self state.",
            totalStages: 3,
            questions: ["l3-output-003", "l3-mcq-009", "l3-code-005"],
            stages: [
                { name: "Substation Relay Foundations", questionId: "l3-output-003" },
                { name: "Method Bus Switching Banks", questionId: "l3-mcq-009" },
                { name: "Dynamic Dispatch Commissioning", questionId: "l3-code-005" }
            ],
            urbanRole: { serviceDemand: { power: 20, water: 10 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_inherit: {
            id: "b_inherit",
            name: "Heritage Heights Condos",
            districtId: "d5",
            category: "residential",
            col: 9, row: 16,
            height: 95,
            icon: "🏛️",
            concept: "Subclasses & Inheritance",
            description: "Premier condominiums inheriting classic architectural base styles and specializing with rooftop gardens.",
            takeaway: "Inheritance allows subclasses to inherit and specialize behaviors via super().",
            totalStages: 3,
            questions: ["l3-mcq-010", "l3-code-006", "l3-output-007"],
            stages: [
                { name: "Heritage Foundation Pylons", questionId: "l3-mcq-010" },
                { name: "Base Class Concrete Frame", questionId: "l3-code-006" },
                { name: "Subclass Penthouse Commissioning", questionId: "l3-output-007" }
            ],
            urbanRole: { popCapacity: 450, serviceDemand: { power: 35, water: 30 } },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },
        b_monolith: {
            id: "b_monolith",
            name: "Cybernetic Monolith",
            districtId: "d5",
            category: "landmark",
            col: 8, row: 15,
            height: 140,
            icon: "🤖",
            isLandmark: true,
            concept: "District 5 Landmark Monument",
            description: "Pinnacle monument of object-oriented architecture and autonomous urban systems.",
            takeaway: "Object orientation encapsulates complexity and models real-world ecosystems.",
            totalStages: 2,
            questions: ["b-boss-003", "b-boss-004"],
            stages: [
                { name: "Titanium Monolith Sub-Base", questionId: "b-boss-003" },
                { name: "Cybernetic Core Illumination", questionId: "b-boss-004" }
            ],
            urbanRole: { isLandmark: true, popBonus: 800 },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        },

        // --- Civic Hub (Central Plaza) ---
        b_daily: {
            id: "b_daily",
            name: "Daily Engineering Hub",
            districtId: "civic",
            category: "civic",
            col: 10, row: 8,
            height: 90,
            icon: "📅",
            isCivic: true,
            actionType: "daily_build",
            concept: "Daily Coding Challenge",
            description: "City dispatch center for the daily engineering challenge.",
            takeaway: "Consistent daily engineering practice solidifies long-term programming mastery.",
            status: "completed",
            currentStage: 1,
            totalStages: 1,
            urbanRole: { isCivic: true }
        },
        b_trophy: {
            id: "b_trophy",
            name: "Trophy Plaza & Hall of Records",
            districtId: "civic",
            category: "civic",
            col: 8, row: 10,
            height: 85,
            icon: "🏆",
            isCivic: true,
            actionType: "achievements",
            concept: "Achievements & High Scores",
            description: "Exhibits permanent unlocked badges, streaks, and personal records.",
            takeaway: "Review your milestones to track your progress from novice to expert.",
            status: "completed",
            currentStage: 1,
            totalStages: 1,
            urbanRole: { isCivic: true }
        },
        b_debug: {
            id: "b_debug",
            name: "Debugging & Review Lab",
            districtId: "civic",
            category: "civic",
            col: 10, row: 10,
            height: 80,
            icon: "📖",
            isCivic: true,
            actionType: "mistake_review",
            concept: "Mistake Review & Diagnostics",
            description: "Interactive diagnostic lab to review previous challenge mistakes safely.",
            takeaway: "Analyzing mistakes is where real engineering mastery is forged.",
            status: "completed",
            currentStage: 1,
            totalStages: 1,
            urbanRole: { isCivic: true }
        },
        b_pinnacle: {
            id: "b_pinnacle",
            name: "Python Pinnacle Tower",
            districtId: "civic",
            category: "landmark",
            col: 8, row: 8,
            height: 175,
            icon: "👑",
            isLandmark: true,
            concept: "Supreme World Landmark",
            description: "The radiant golden spire of Python mastery, crowned when all 5 districts thrive.",
            takeaway: "Complete mastery of Python unlocks full creative architectural potential.",
            totalStages: 1,
            questions: ["l3-boss-001"],
            stages: [
                { name: "Crowning of the Python Pinnacle", questionId: "l3-boss-001" }
            ],
            urbanRole: { isLandmark: true, popBonus: 2000 },
            status: "locked",
            currentStage: 0,
            productionState: "idle",
            hasIncident: false,
            incidentData: null
        }
    };

    // ------------------------------------------------------------------------
    // 4. ROAD GRID & TERRAIN TILES DEFINITION
    // ------------------------------------------------------------------------
    function isRoad(col, row) {
        if (col === 9 || row === 9) return true;
        if ((col === 7 || col === 11) && row >= 7 && row <= 11) return true;
        if ((row === 7 || row === 11) && col >= 7 && col <= 11) return true;
        if ((col === 12 || col === 16) && row >= 2 && row <= 6) return true;
        if ((row === 2 || row === 6) && col >= 12 && col <= 16) return true;
        if ((col === 12 || col === 16) && row >= 11 && row <= 15) return true;
        if ((row === 11 || row === 15) && col >= 12 && col <= 16) return true;
        if ((col === 2 || col === 6) && row >= 2 && row <= 6) return true;
        if ((row === 2 || row === 6) && col >= 2 && col <= 6) return true;
        if ((col === 2 || col === 6) && row >= 11 && row <= 15) return true;
        if ((row === 11 || row === 15) && col >= 2 && col <= 6) return true;
        if ((col === 6 || col === 10) && row >= 13 && row <= 17) return true;
        if ((row === 13 || row === 17) && col >= 6 && col <= 10) return true;
        return false;
    }

    function isWater(col, row) {
        return col === 0 || row === 0 || col === GRID_SIZE - 1 || row === GRID_SIZE - 1;
    }

    function getTileDistrict(col, row) {
        if (col >= 12 && col <= 16 && row >= 2 && row <= 6) return "d1";
        if (col >= 12 && col <= 16 && row >= 11 && row <= 15) return "d2";
        if (col >= 2 && col <= 6 && row >= 2 && row <= 6) return "d3";
        if (col >= 2 && col <= 6 && row >= 11 && row <= 15) return "d4";
        if (col >= 6 && col <= 10 && row >= 13 && row <= 17) return "d5";
        if (col >= 7 && col <= 11 && row >= 7 && row <= 11) return "civic";
        return null;
    }

    // ------------------------------------------------------------------------
    // 5. CAMERA & VIEWPORT CONTROLLER
    // ------------------------------------------------------------------------
    const Camera = {
        x: 0,
        y: 120,
        zoom: 1.05,
        minZoom: 0.55,
        maxZoom: 1.85,
        isDragging: false,
        dragStartX: 0,
        dragStartY: 0,
        dragCamStartX: 0,
        dragCamStartY: 0,
        activeTouches: 0,
        touchDistanceStart: 0,
        touchZoomStart: 1.05,

        clampZoom(z) {
            return Math.min(this.maxZoom, Math.max(this.minZoom, z));
        },

        getZoomLabel() {
            const pct = Math.round(this.zoom * 100);
            if (this.zoom <= 0.75) return `${pct}% • City Overview`;
            if (this.zoom >= 1.45) return `${pct}% • Street Level`;
            return `${pct}% • District View`;
        }
    };

    // ------------------------------------------------------------------------
    // 6. MAIN CITY ENGINE OBJECT
    // ------------------------------------------------------------------------
    const CityEngine = {
        districts: DISTRICTS,
        buildings: BUILDINGS,
        selectedBuildingId: null,
        activeChallengeBuildingId: null,
        viewport: null,
        svg: null,
        cameraRoot: null,
        vehiclesTimer: null,

        // Urban Simulation-Lite State
        inventory: {
            silicon: 5,
            circuits: 2,
            steel: 4,
            construction_kits: 3
        },
        services: {
            powerCapacity: 120,
            powerDemand: 45,
            waterCapacity: 150,
            waterDemand: 35,
            powerShortage: false,
            waterShortage: false
        },
        conceptMastery: {},
        vehicles: [
            { id: "v1", type: "artery_v", col: 9, row: 1, dir: 1, color: "#38bdf8", label: "LOGISTICS 01" },
            { id: "v2", type: "artery_h", col: 1, row: 9, dir: 1, color: "#4ade80", label: "SUPPLY 02" },
            { id: "v3", type: "ring_d1", col: 12, row: 2, step: 0, color: "#fbbf24", label: "TECH 03" }
        ],

        init() {
            this.viewport = document.getElementById("city-viewport");
            this.svg = document.getElementById("city-svg");
            this.cameraRoot = document.getElementById("city-camera-root");

            if (!this.viewport || !this.svg || !this.cameraRoot) {
                console.warn("CityEngine: Viewport elements missing.");
                return;
            }

            this.updateServices();
            this.bindEvents();
            this.render();
            this.updateHUD();
            this.initVehicles();

            // Center on District 1 initially
            this.centerOnDistrict("d1");

            // Bind Guide Modal
            const guideBtn = document.getElementById("hud-guide-btn");
            const guideModal = document.getElementById("city-guide-modal");
            const guideClose = document.getElementById("guide-modal-close");
            const guideStart = document.getElementById("guide-start-btn");

            if (guideBtn && guideModal) {
                guideBtn.addEventListener("click", () => {
                    guideModal.style.display = "flex";
                });
            }
            if (guideClose && guideModal) {
                guideClose.addEventListener("click", () => {
                    guideModal.style.display = "none";
                });
            }
            if (guideStart && guideModal) {
                guideStart.addEventListener("click", () => {
                    guideModal.style.display = "none";
                });
            }
        },

        initVehicles() {
            if (this.vehiclesTimer) clearInterval(this.vehiclesTimer);
            this.vehiclesTimer = setInterval(() => {
                // Update vehicle 1 along col 9
                const v1 = this.vehicles[0];
                v1.row += 0.25 * v1.dir;
                if (v1.row >= 16) { v1.row = 16; v1.dir = -1; }
                if (v1.row <= 1) { v1.row = 1; v1.dir = 1; }

                // Update vehicle 2 along row 9
                const v2 = this.vehicles[1];
                v2.col += 0.25 * v2.dir;
                if (v2.col >= 16) { v2.col = 16; v2.dir = -1; }
                if (v2.col <= 1) { v2.col = 1; v2.dir = 1; }

                // Update vehicle 3 along D1 ring (12,2 -> 16,2 -> 16,6 -> 12,6)
                const v3 = this.vehicles[2];
                v3.step = (v3.step || 0) + 0.2;
                const totalRing = 16; // 4 + 4 + 4 + 4
                const cur = v3.step % totalRing;
                if (cur < 4) { v3.col = 12 + cur; v3.row = 2; }
                else if (cur < 8) { v3.col = 16; v3.row = 2 + (cur - 4); }
                else if (cur < 12) { v3.col = 16 - (cur - 8); v3.row = 6; }
                else { v3.col = 12; v3.row = 6 - (cur - 12); }

                this.updateVehiclesSvg();
            }, 120);
        },

        // Render full isometric scene with painter's depth sorting
        render() {
            if (!this.cameraRoot) return;

            const items = [];

            for (let c = 0; c < GRID_SIZE; c++) {
                for (let r = 0; r < GRID_SIZE; r++) {
                    const depth = c + r;
                    const water = isWater(c, r);
                    const road = !water && isRoad(c, r);
                    const districtId = getTileDistrict(c, r);

                    items.push({
                        type: "tile",
                        col: c,
                        row: r,
                        depth: depth,
                        isWater: water,
                        isRoad: road,
                        districtId: districtId
                    });
                }
            }

            Object.values(this.buildings).forEach(b => {
                items.push({
                    type: "building",
                    building: b,
                    col: b.col,
                    row: b.row,
                    depth: b.col + b.row + 0.5
                });
            });

            // Painter's algorithm sort
            items.sort((a, b) => a.depth - b.depth);

            let svgHtml = "";
            svgHtml += `
            <defs>
                <filter id="tile-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#020617" flood-opacity="0.5"/>
                </filter>
                <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
                <linearGradient id="road-grad-h" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1e293b"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                </linearGradient>
                <linearGradient id="water-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0284c7"/>
                    <stop offset="50%" stop-color="#0369a1"/>
                    <stop offset="100%" stop-color="#075985"/>
                </linearGradient>
            </defs>`;

            items.forEach(item => {
                if (item.type === "tile") {
                    svgHtml += this.renderTileSvg(item);
                } else if (item.type === "building") {
                    svgHtml += this.renderBuildingSvg(item.building);
                }
            });

            // Layer for autonomous vehicles
            svgHtml += `<g id="vehicles-layer"></g>`;

            // Overlays: Quest markers & Selection rings
            svgHtml += this.renderOverlayMarkers();

            this.cameraRoot.innerHTML = svgHtml;
            this.updateCameraTransform();
            this.updateVehiclesSvg();
            this.bindBuildingClicks();
        },

        updateVehiclesSvg() {
            const vLayer = document.getElementById("vehicles-layer");
            if (!vLayer) return;

            let html = "";
            this.vehicles.forEach(v => {
                const pos = isoToScreen(v.col, v.row, 6);
                html += `
                <g class="city-vehicle" transform="translate(${pos.x}, ${pos.y})">
                    <ellipse cx="0" cy="0" rx="9" ry="5" fill="#090d16" opacity="0.6"/>
                    <polygon points="0,-7 7,-3 0,1 -7,-3" fill="${v.color}" stroke="#ffffff" stroke-width="1"/>
                    <circle cx="0" cy="-3" r="2.5" fill="#ffffff" filter="url(#neon-glow)"/>
                </g>`;
            });
            vLayer.innerHTML = html;
        },

        renderTileSvg(tile) {
            const pos = isoToScreen(tile.col, tile.row, 0);
            const top = `${pos.x},${pos.y - HALF_H}`;
            const right = `${pos.x + HALF_W},${pos.y}`;
            const bottom = `${pos.x},${pos.y + HALF_H}`;
            const left = `${pos.x - HALF_W},${pos.y}`;
            const pts = `${top} ${right} ${bottom} ${left}`;

            if (tile.isWater) {
                return `
                <g class="iso-tile tile-water" data-col="${tile.col}" data-row="${tile.row}">
                    <polygon points="${pts}" fill="url(#water-grad)" opacity="0.9"/>
                    <polygon points="${pts}" fill="none" stroke="rgba(56, 189, 248, 0.25)" stroke-width="0.8"/>
                </g>`;
            }

            if (tile.isRoad) {
                return `
                <g class="iso-tile tile-road" data-col="${tile.col}" data-row="${tile.row}">
                    <polygon points="${pts}" fill="url(#road-grad-h)" stroke="rgba(148, 163, 184, 0.15)" stroke-width="0.8"/>
                    <line x1="${pos.x}" y1="${pos.y - 6}" x2="${pos.x}" y2="${pos.y + 6}" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="3,3" opacity="0.85"/>
                    <circle cx="${pos.x}" cy="${pos.y}" r="1.5" fill="#38bdf8" filter="url(#neon-glow)"/>
                </g>`;
            }

            let fill = "#0b1220";
            let stroke = "rgba(30, 41, 59, 0.4)";
            const district = tile.districtId ? this.districts.find(d => d.id === tile.districtId) : null;

            if (district) {
                if (district.unlocked) {
                    fill = `rgba(${this.hexToRgb(district.color)}, 0.12)`;
                    stroke = `rgba(${this.hexToRgb(district.color)}, 0.35)`;
                } else {
                    fill = "#060a12";
                    stroke = "rgba(71, 85, 105, 0.2)";
                }
            }

            return `
            <g class="iso-tile tile-ground" data-col="${tile.col}" data-row="${tile.row}">
                <polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="0.8"/>
                <circle cx="${pos.x}" cy="${pos.y}" r="0.9" fill="rgba(56, 189, 248, 0.4)"/>
            </g>`;
        },

        renderBuildingSvg(b) {
            const district = this.districts.find(d => d.id === b.districtId);
            const isDistrictLocked = district && !district.unlocked;
            const currentStage = b.currentStage || 0;
            const totalStages = b.totalStages || 1;
            const isCompleted = b.status === "completed" || currentStage >= totalStages;
            const isSelected = this.selectedBuildingId === b.id;
            const isAvailable = b.status === "available" && !isCompleted;
            const isUnderConstruction = b.status === "under_construction" || (currentStage > 0 && !isCompleted);
            const isLocked = isDistrictLocked || b.status === "locked";

            const basePos = isoToScreen(b.col, b.row, 0);

            // Ground Slab
            const slabH = 12;
            const slabPos = isoToScreen(b.col, b.row, slabH);
            const slabTop = `${slabPos.x},${slabPos.y - HALF_H}`;
            const slabRight = `${slabPos.x + HALF_W},${slabPos.y}`;
            const slabBottom = `${slabPos.x},${slabPos.y + HALF_H}`;
            const slabLeft = `${slabPos.x - HALF_W},${slabPos.y}`;

            const slabGroundRight = `${basePos.x + HALF_W},${basePos.y}`;
            const slabGroundBottom = `${basePos.x},${basePos.y + HALF_H}`;
            const slabGroundLeft = `${basePos.x - HALF_W},${basePos.y}`;

            let svg = `<g class="iso-building-wrapper iso-building ${isCompleted ? 'building-completed' : 'building-active'} ${isSelected ? 'selected' : ''}" id="wrap-${b.id}" data-building-id="${b.id}" tabindex="0" role="button" aria-label="${b.name} (${b.status})">`;

            // Elevation base
            svg += `
            <g class="building-slab">
                <polygon points="${slabLeft} ${slabBottom} ${slabGroundBottom} ${slabGroundLeft}" fill="#0f172a" stroke="rgba(148, 163, 184, 0.2)"/>
                <polygon points="${slabBottom} ${slabRight} ${slabGroundRight} ${slabGroundBottom}" fill="#090d16" stroke="rgba(148, 163, 184, 0.2)"/>
                <polygon points="${slabTop} ${slabRight} ${slabBottom} ${slabLeft}" fill="${isAvailable ? 'rgba(56, 189, 248, 0.2)' : '#1e293b'}" stroke="rgba(148, 163, 184, 0.35)"/>
            </g>`;

            // 1. LOCKED PLOT
            if (isLocked) {
                svg += `
                <g class="building-locked-wireframe" data-building-id="${b.id}" tabindex="0" role="button" aria-label="${b.name} (Locked)">
                    <circle cx="${slabPos.x}" cy="${slabPos.y}" r="15" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
                    <text x="${slabPos.x}" y="${slabPos.y + 5}" text-anchor="middle" font-size="14" fill="#94a3b8">🔒</text>
                </g>`;
                svg += `</g>`;
                return svg;
            }

            // 2. AVAILABLE / UNBUILT FOUNDATION
            if (isAvailable && currentStage === 0) {
                svg += `
                <g class="building-available-plot" data-building-id="${b.id}" tabindex="0" role="button" aria-label="${b.name} (Ready to Build)">
                    <polygon points="${slabTop} ${slabRight} ${slabBottom} ${slabLeft}" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4" class="pulse-indicator"/>
                    <circle cx="${slabPos.x}" cy="${slabPos.y}" r="18" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <text x="${slabPos.x}" y="${slabPos.y + 6}" text-anchor="middle" font-size="16">🔨</text>
                </g>`;
                svg += `</g>`;
                return svg;
            }

            // 3. UNDER CONSTRUCTION OR COMPLETED
            const stagePct = isCompleted ? 1 : Math.max(0.3, currentStage / totalStages);
            const actualH = Math.max(30, Math.round(b.height * stagePct));
            const roofPos = isoToScreen(b.col, b.row, slabH + actualH);

            const rTop = `${roofPos.x},${roofPos.y - (HALF_H * 0.75)}`;
            const rRight = `${roofPos.x + (HALF_W * 0.75)},${roofPos.y}`;
            const rBottom = `${roofPos.x},${roofPos.y + (HALF_H * 0.75)}`;
            const rLeft = `${roofPos.x - (HALF_W * 0.75)},${roofPos.y}`;

            const bLeft = `${slabPos.x - (HALF_W * 0.75)},${slabPos.y}`;
            const bBottom = `${slabPos.x},${slabPos.y + (HALF_H * 0.75)}`;
            const bRight = `${slabPos.x + (HALF_W * 0.75)},${slabPos.y}`;

            let primaryColor = district ? district.color : "#38bdf8";
            let wallLeftFill = "#0f172a";
            let wallRightFill = "#090d16";
            let roofFill = "#1e293b";

            if (b.category === "industrial") {
                roofFill = "#334155";
                wallLeftFill = "#1e293b";
                wallRightFill = "#0f172a";
            } else if (b.category === "residential") {
                roofFill = "#1e3a8a";
                wallLeftFill = "#0f172a";
                wallRightFill = "#0a0f1d";
            } else if (b.category === "service") {
                roofFill = "#701a75";
                wallLeftFill = "#3b0764";
                wallRightFill = "#2e0854";
            } else if (b.isLandmark) {
                roofFill = "#f59e0b";
                wallLeftFill = "#78350f";
                wallRightFill = "#451a03";
            }

            svg += `
            <g class="building-structure">
                <!-- Drop shadow -->
                <polygon points="${bLeft} ${bBottom} ${slabGroundBottom} ${slabGroundLeft}" fill="rgba(0,0,0,0.4)" filter="url(#tile-shadow)"/>

                <!-- Left Wall -->
                <polygon points="${rLeft} ${rBottom} ${bBottom} ${bLeft}" fill="${wallLeftFill}" stroke="${primaryColor}" stroke-opacity="0.5" stroke-width="1.2"/>

                <!-- Right Wall -->
                <polygon points="${rBottom} ${rRight} ${bRight} ${bBottom}" fill="${wallRightFill}" stroke="${primaryColor}" stroke-opacity="0.3" stroke-width="1.2"/>

                <!-- Roof -->
                <polygon points="${rTop} ${rRight} ${rBottom} ${rLeft}" fill="${roofFill}" stroke="${primaryColor}" stroke-width="1.8" class="b-roof"/>`;

            // Visual Accents: Windows / Neon Grids
            if (isCompleted) {
                // Windows on left facade
                svg += `
                <line x1="${(parseFloat(rLeft.split(',')[0]) + parseFloat(rBottom.split(',')[0]))/2}" 
                      y1="${(parseFloat(rLeft.split(',')[1]) + parseFloat(rBottom.split(',')[1]))/2}" 
                      x2="${(parseFloat(bLeft.split(',')[0]) + parseFloat(bBottom.split(',')[0]))/2}" 
                      y2="${(parseFloat(bLeft.split(',')[1]) + parseFloat(bBottom.split(',')[1]))/2}" 
                      stroke="${primaryColor}" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.8"/>`;

                // Roof Accent
                svg += `
                <circle cx="${roofPos.x}" cy="${roofPos.y}" r="${b.isLandmark ? 9 : 6}" fill="${primaryColor}" filter="url(#neon-glow)"/>
                <line x1="${roofPos.x}" y1="${roofPos.y}" x2="${roofPos.x}" y2="${roofPos.y - 14}" stroke="#ffffff" stroke-width="2"/>
                <circle cx="${roofPos.x}" cy="${roofPos.y - 14}" r="2" fill="#ef4444" class="blinking-beacon"/>`;
            }

            // Construction Scaffolding if under construction
            if (isUnderConstruction) {
                svg += `
                <g class="construction-scaffolding">
                    <line x1="${bLeft.split(',')[0]}" y1="${bLeft.split(',')[1]}" x2="${rLeft.split(',')[0]}" y2="${rLeft.split(',')[1]}" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
                    <line x1="${bRight.split(',')[0]}" y1="${bRight.split(',')[1]}" x2="${rRight.split(',')[0]}" y2="${rRight.split(',')[1]}" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
                    <line x1="${bBottom.split(',')[0]}" y1="${bBottom.split(',')[1]}" x2="${rBottom.split(',')[0]}" y2="${rBottom.split(',')[1]}" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
                </g>`;
            }

            // Status Floating Badge above Roof
            let badgeIcon = b.icon || "🏛️";
            let badgeBg = "#1e293b";
            let badgeBorder = primaryColor;

            if (b.hasIncident) {
                badgeIcon = "⚠️";
                badgeBg = "#7f1d1d";
                badgeBorder = "#ef4444";
            } else if (b.productionState === "ready_to_collect") {
                badgeIcon = "📦";
                badgeBg = "#065f46";
                badgeBorder = "#10b981";
            } else if (isUnderConstruction) {
                badgeIcon = "🔨";
                badgeBg = "#78350f";
                badgeBorder = "#f59e0b";
            }

            svg += `
                <g class="building-badge-group pulse-badge" transform="translate(${roofPos.x}, ${roofPos.y - 28})">
                    <circle cx="0" cy="0" r="13" fill="${badgeBg}" stroke="${badgeBorder}" stroke-width="2"/>
                    <text x="0" y="4.5" text-anchor="middle" font-size="12">${badgeIcon}</text>
                </g>
            </g>`;

            svg += `</g>`;
            return svg;
        },

        renderOverlayMarkers() {
            let svg = "";

            // Pulsing Ring for Selected Building
            if (this.selectedBuildingId) {
                const b = this.buildings[this.selectedBuildingId];
                if (b) {
                    const pos = isoToScreen(b.col, b.row, 0);
                    svg += `
                    <ellipse cx="${pos.x}" cy="${pos.y}" rx="${HALF_W * 1.1}" ry="${HALF_H * 1.1}" 
                             fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,4" 
                             class="pulsing-selection-ring"/>`;
                }
            }

            // Active Quest / Build Next Marker
            const nextBuildId = this.findNextRecommendedBuildingId();
            if (nextBuildId && nextBuildId !== this.selectedBuildingId) {
                const nb = this.buildings[nextBuildId];
                if (nb) {
                    const nPos = isoToScreen(nb.col, nb.row, nb.height + 45);
                    svg += `
                    <g class="active-quest-marker" transform="translate(${nPos.x}, ${nPos.y})">
                        <polygon points="0,0 -8,-14 8,-14" fill="#f59e0b"/>
                        <rect x="-38" y="-36" width="76" height="18" rx="9" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
                        <text x="0" y="-23" text-anchor="middle" font-size="9" font-weight="bold" fill="#fbbf24">BUILD NEXT</text>
                    </g>`;
                }
            }

            return svg;
        },

        findNextRecommendedBuildingId() {
            // Find first available or under construction building in unlocked districts
            for (let d of this.districts) {
                if (!d.unlocked) continue;
                for (let bId of d.buildings) {
                    const b = this.buildings[bId];
                    if (b && !b.isCivic && b.status !== "completed" && b.status !== "locked") {
                        return b.id;
                    }
                }
            }
            return null;
        },

        bindBuildingClicks() {
            const wrappers = document.querySelectorAll(".iso-building-wrapper, .iso-building, .building-locked-wireframe, .building-available-plot");
            wrappers.forEach(el => {
                const bId = el.getAttribute("data-building-id");
                if (!bId) return;

                el.onclick = (e) => {
                    e.stopPropagation();
                    this.selectBuilding(bId, true);
                };

                el.onkeydown = (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        this.selectBuilding(bId, true);
                    }
                };
            });
        },

        bindEvents() {
            // Camera Mouse Drag
            this.viewport.addEventListener("mousedown", (e) => {
                if (e.target.closest(".camera-controls-panel, .district-jump-nav, .building-inspect-panel")) return;
                Camera.isDragging = true;
                Camera.dragStartX = e.clientX;
                Camera.dragStartY = e.clientY;
                Camera.dragCamStartX = Camera.x;
                Camera.dragCamStartY = Camera.y;
            });

            window.addEventListener("mousemove", (e) => {
                if (!Camera.isDragging) return;
                const dx = (e.clientX - Camera.dragStartX) / Camera.zoom;
                const dy = (e.clientY - Camera.dragStartY) / Camera.zoom;
                Camera.x = Camera.dragCamStartX - dx;
                Camera.y = Camera.dragCamStartY - dy;
                this.updateCameraTransform();
            });

            window.addEventListener("mouseup", () => {
                Camera.isDragging = false;
            });

            // Wheel Zoom
            this.viewport.addEventListener("wheel", (e) => {
                e.preventDefault();
                const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
                Camera.zoom = Camera.clampZoom(Camera.zoom * zoomFactor);
                this.updateCameraTransform();
                this.updateCameraHUD();
            }, { passive: false });

            // Mobile Touch Support
            this.viewport.addEventListener("touchstart", (e) => {
                if (e.target.closest(".camera-controls-panel, .district-jump-nav, .building-inspect-panel")) return;
                if (e.touches.length === 1) {
                    Camera.isDragging = true;
                    Camera.dragStartX = e.touches[0].clientX;
                    Camera.dragStartY = e.touches[0].clientY;
                    Camera.dragCamStartX = Camera.x;
                    Camera.dragCamStartY = Camera.y;
                } else if (e.touches.length === 2) {
                    Camera.isDragging = false;
                    const dx = e.touches[0].clientX - e.touches[1].clientX;
                    const dy = e.touches[0].clientY - e.touches[1].clientY;
                    Camera.touchDistanceStart = Math.hypot(dx, dy);
                    Camera.touchZoomStart = Camera.zoom;
                }
            }, { passive: true });

            this.viewport.addEventListener("touchmove", (e) => {
                if (Camera.isDragging && e.touches.length === 1) {
                    const dx = (e.touches[0].clientX - Camera.dragStartX) / Camera.zoom;
                    const dy = (e.touches[0].clientY - Camera.dragStartY) / Camera.zoom;
                    Camera.x = Camera.dragCamStartX - dx;
                    Camera.y = Camera.dragCamStartY - dy;
                    this.updateCameraTransform();
                } else if (e.touches.length === 2 && Camera.touchDistanceStart > 0) {
                    const dx = e.touches[0].clientX - e.touches[1].clientX;
                    const dy = e.touches[0].clientY - e.touches[1].clientY;
                    const dist = Math.hypot(dx, dy);
                    const scale = dist / Camera.touchDistanceStart;
                    Camera.zoom = Camera.clampZoom(Camera.touchZoomStart * scale);
                    this.updateCameraTransform();
                    this.updateCameraHUD();
                }
            }, { passive: true });

            this.viewport.addEventListener("touchend", () => {
                Camera.isDragging = false;
                Camera.touchDistanceStart = 0;
            });

            // Camera Floating Buttons
            const btnZoomIn = document.getElementById("cam-zoom-in");
            const btnZoomOut = document.getElementById("cam-zoom-out");
            const btnRecenter = document.getElementById("cam-recenter");
            const btnOverview = document.getElementById("cam-overview");

            if (btnZoomIn) {
                btnZoomIn.addEventListener("click", () => {
                    Camera.zoom = Camera.clampZoom(Camera.zoom * 1.25);
                    this.updateCameraTransform();
                    this.updateCameraHUD();
                });
            }

            if (btnZoomOut) {
                btnZoomOut.addEventListener("click", () => {
                    Camera.zoom = Camera.clampZoom(Camera.zoom * 0.8);
                    this.updateCameraTransform();
                    this.updateCameraHUD();
                });
            }

            if (btnRecenter) {
                btnRecenter.addEventListener("click", () => {
                    this.recenterCamera();
                });
            }

            if (btnOverview) {
                btnOverview.addEventListener("click", () => {
                    this.viewCityOverview();
                });
            }

            // District Jump Navigation Pills
            const pills = document.querySelectorAll(".district-pill");
            pills.forEach(pill => {
                pill.addEventListener("click", (e) => {
                    pills.forEach(p => p.classList.remove("active"));
                    pill.classList.add("active");

                    const jumpKey = pill.getAttribute("data-jump");
                    if (jumpKey === "overview") {
                        this.viewCityOverview();
                    } else {
                        this.centerOnDistrict(jumpKey);
                    }
                });
            });

            // Recenter on Spacebar
            window.addEventListener("keydown", (e) => {
                if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
                if (e.code === "Space") {
                    e.preventDefault();
                    this.recenterCamera();
                }
            });
        },

        updateCameraTransform() {
            if (!this.svg || !this.cameraRoot) return;

            const rect = this.viewport.getBoundingClientRect();
            const viewW = rect.width || window.innerWidth;
            const viewH = rect.height || (window.innerHeight - 64);

            const vLeft = Camera.x - (viewW / (2 * Camera.zoom));
            const vTop = Camera.y - (viewH / (2 * Camera.zoom));
            const vWidth = viewW / Camera.zoom;
            const vHeight = viewH / Camera.zoom;

            this.svg.setAttribute("viewBox", `${vLeft} ${vTop} ${vWidth} ${vHeight}`);
        },

        updateCameraHUD() {
            const zoomBadge = document.getElementById("cam-zoom-badge");
            if (zoomBadge) {
                zoomBadge.textContent = Camera.getZoomLabel();
            }
        },

        recenterCamera() {
            this.centerOnDistrict("civic");
        },

        viewCityOverview() {
            Camera.x = 0;
            Camera.y = 480;
            Camera.zoom = 0.65;
            this.updateCameraTransform();
            this.updateCameraHUD();
        },

        centerOnDistrict(districtId) {
            const district = this.districts.find(d => d.id === districtId);
            if (!district) return;

            const tilePos = isoToScreen(district.centerTile.col, district.centerTile.row, 0);
            Camera.x = tilePos.x;
            Camera.y = tilePos.y;
            Camera.zoom = 1.05;
            this.updateCameraTransform();
            this.updateCameraHUD();
        },

        centerOnCoord(col, row, zoomLevel = 1.25) {
            const tilePos = isoToScreen(col, row, 30);
            Camera.x = tilePos.x;
            Camera.y = tilePos.y;
            Camera.zoom = zoomLevel;
            this.updateCameraTransform();
            this.updateCameraHUD();
        },

        // --------------------------------------------------------------------
        // 7. URBAN SERVICES & PRODUCTION LOGIC
        // --------------------------------------------------------------------
        updateCityServices() {
            return this.updateServices();
        },

        updateServices() {
            let powerCap = 60; // base solar microgrid
            let waterCap = 80; // base aquifer
            let powerDem = 20;
            let waterDem = 15;

            Object.values(this.buildings).forEach(b => {
                if (b.status === "completed" || (b.currentStage >= b.totalStages)) {
                    if (b.urbanRole && b.urbanRole.serviceOutput) {
                        if (b.urbanRole.serviceOutput.type === "power") {
                            powerCap += b.urbanRole.serviceOutput.amount;
                        }
                        if (b.urbanRole.serviceOutput.type === "water") {
                            waterCap += b.urbanRole.serviceOutput.amount;
                        }
                    }
                    if (b.urbanRole && b.urbanRole.serviceDemand) {
                        powerDem += b.urbanRole.serviceDemand.power || 0;
                        waterDem += b.urbanRole.serviceDemand.water || 0;
                    }
                }
            });

            this.services.powerCapacity = powerCap;
            this.services.powerDemand = powerDem;
            this.services.waterCapacity = waterCap;
            this.services.waterDemand = waterDem;
            this.services.powerShortage = powerDem > powerCap;
            this.services.waterShortage = waterDem > waterCap;
        },

        produceGoods(buildingId) {
            const b = this.buildings[buildingId];
            if (!b || !b.urbanRole || !b.urbanRole.produces) return { success: false, reason: "invalid_building" };

            b.productionState = "producing";
            b.isProducing = true;
            this.spawnFloatingToast(`PRODUCTION STARTED: ${b.urbanRole.produces.name} ⚡`, b);

            setTimeout(() => {
                b.productionState = "ready_to_collect";
                b.isProducing = false;
                this.render();
                if (this.selectedBuildingId === b.id) {
                    this.showBuildingInspectionPanel(b);
                }
            }, 1000);

            this.render();
            if (this.selectedBuildingId === b.id) {
                this.showBuildingInspectionPanel(b);
            }
            return { success: true, state: "producing" };
        },

        collectGoods(buildingId) {
            const b = this.buildings[buildingId];
            if (!b || !b.urbanRole || !b.urbanRole.produces) return { success: false, reason: "invalid_building" };

            const item = b.urbanRole.produces;
            this.inventory[item.id] = (this.inventory[item.id] || 0) + item.amount;
            b.productionState = "idle";
            b.isProducing = false;

            if (window.AudioManager) window.AudioManager.playSound("click");
            this.spawnFloatingToast(`+${item.amount} ${item.name.toUpperCase()} COLLECTED! ${item.icon}`, b);

            this.render();
            this.updateHUD();
            this.showBuildingInspectionPanel(b);
            if (window.saveGameProgress) window.saveGameProgress();
            return { success: true, item: item };
        },

        craftConstructionKits(buildingId) {
            const b = this.buildings[buildingId];
            if (!b || !b.urbanRole || !b.urbanRole.crafts) return { success: false, reason: "invalid_building" };

            const craft = b.urbanRole.crafts;
            const consumedRes = craft.consumes;
            const consumedAmount = craft.amount;

            if ((this.inventory[consumedRes] || 0) < consumedAmount) {
                this.spawnFloatingToast(`⚠️ Insufficient ${consumedRes.toUpperCase()}! Produce more first.`, b);
                return { success: false, reason: "insufficient_materials" };
            }

            this.inventory[consumedRes] -= consumedAmount;
            this.inventory[craft.produces] = (this.inventory[craft.produces] || 0) + craft.producesAmount;

            if (window.AudioManager) window.AudioManager.playSound("build");
            this.spawnFloatingToast(`+${craft.producesAmount} CONSTRUCTION KITS ASSEMBLED! 🏗️`, b);

            this.render();
            this.updateHUD();
            this.showBuildingInspectionPanel(b);
            if (window.saveGameProgress) window.saveGameProgress();
            return { success: true, crafted: craft.producesAmount };
        },

        onMistake(concept) {
            if (!concept) return;
            this.conceptMastery[concept] = "needs_review";

            // Spawn maintenance incident on an available building matching concept or in District 1/2
            const matchingBuilding = Object.values(this.buildings).find(b => 
                !b.isCivic && b.status !== "locked" && (!b.hasIncident) && 
                (b.concept.toLowerCase().includes(concept.toLowerCase()) || b.districtId === "d1")
            );

            if (matchingBuilding) {
                matchingBuilding.hasIncident = true;
                matchingBuilding.incidentData = {
                    concept: concept,
                    title: `Logic Glitch: ${concept.toUpperCase()}`,
                    desc: `An unhandled exception desynced ${matchingBuilding.name}. Solve a retrieval challenge to repair!`,
                    questionId: matchingBuilding.questions ? matchingBuilding.questions[0] : null
                };
                this.spawnFloatingToast(`⚠️ INCIDENT DETECTED: ${matchingBuilding.name} needs attention!`, matchingBuilding);
                this.render();
            }
        },

        // --------------------------------------------------------------------
        // 8. BUILDING SELECTION & INSPECTION DRAWER
        // --------------------------------------------------------------------
        openInspectModal(buildingId) {
            return this.selectBuilding(buildingId, true);
        },

        selectBuilding(buildingId, autoPan = false) {
            const b = this.buildings[buildingId];
            if (!b) return;

            this.selectedBuildingId = buildingId;

            if (autoPan) {
                this.centerOnCoord(b.col, b.row, Math.max(Camera.zoom, 1.05));
            }

            this.render();
            this.showBuildingInspectionPanel(b);
        },

        showBuildingInspectionPanel(b) {
            const panel = document.getElementById("building-inspect-panel");
            if (!panel) return;

            const district = this.districts.find(d => d.id === b.districtId);
            const isDistrictLocked = district && !district.unlocked;
            const currentStage = b.currentStage || 0;
            const totalStages = b.totalStages || 1;
            const isCompleted = b.status === "completed" || currentStage >= totalStages;
            const isUnderConstruction = b.status === "under_construction" || (currentStage > 0 && !isCompleted);
            const isAvailable = b.status === "available" && !isCompleted;
            const isLocked = isDistrictLocked || b.status === "locked";

            // Zone Badge
            const zoneCategory = b.category || "tech";
            const zoneBadgeHtml = `<span class="badge-zone badge-${zoneCategory}">${zoneCategory.toUpperCase()}</span>`;

            // Status Badge
            let statusBadge = `<span class="badge-status badge-locked">🔒 LOCKED</span>`;
            let actionBtnHtml = "";

            if (isLocked) {
                statusBadge = `<span class="badge-status badge-locked">🔒 LOCKED</span>`;
                actionBtnHtml = `
                <button class="btn-action secondary-btn" disabled type="button">
                    <span>🔒 Requires: ${district ? district.prerequisiteText : 'Prerequisites'}</span>
                </button>`;
            } else if (b.isCivic) {
                statusBadge = `<span class="badge-status badge-civic">🏛️ CIVIC HUB</span>`;
                if (b.actionType === "daily_build") {
                    actionBtnHtml = `<button id="inspect-action-btn" class="btn-action primary-btn" type="button">📅 LAUNCH DAILY BUILD (+30 XP)</button>`;
                } else if (b.actionType === "achievements" || b.id === "b_trophy") {
                    actionBtnHtml = `
                    <button id="inspect-action-btn" class="btn-action primary-btn" type="button">
                        <span>🏆 VIEW TROPHIES & ACHIEVEMENTS</span>
                    </button>
                    <button id="inspect-records-btn" class="btn-action secondary-btn" type="button" style="margin-top: 8px;">
                        <span>📜 HALL OF RECORDS (PERSONAL BESTS)</span>
                    </button>`;
                } else if (b.actionType === "mistake_review") {
                    actionBtnHtml = `<button id="inspect-action-btn" class="btn-action secondary-btn" type="button">📖 REVIEW MISTAKES</button>`;
                }
            } else if (b.hasIncident) {
                statusBadge = `<span class="badge-status badge-locked" style="background: rgba(239, 68, 68, 0.3); color: #fca5a5; border-color: #ef4444;">⚠️ INCIDENT ACTIVE</span>`;
                actionBtnHtml = `
                <button id="inspect-incident-btn" class="btn-action danger-btn" type="button" style="background: #dc2626; border-color: #ef4444;">
                    <span>⚠️ RESOLVE INCIDENT (REVENGE CHALLENGE) ➔</span>
                </button>`;
            } else if (isCompleted) {
                statusBadge = `<span class="badge-status badge-completed">✅ COMPLETED</span>`;
                
                if (b.category === "industrial" && b.urbanRole && b.urbanRole.produces) {
                    if (b.productionState === "ready_to_collect") {
                        actionBtnHtml = `<button id="inspect-collect-btn" class="btn-action primary-btn" type="button">📦 COLLECT ${b.urbanRole.produces.name.toUpperCase()} (+${b.urbanRole.produces.amount})</button>`;
                    } else if (b.productionState === "producing") {
                        actionBtnHtml = `<button class="btn-action secondary-btn" disabled type="button">⚡ PRODUCING BATCH (PLEASE WAIT)...</button>`;
                    } else {
                        actionBtnHtml = `<button id="inspect-produce-btn" class="btn-action primary-btn" type="button">⚡ RUN PRODUCTION BATCH</button>`;
                    }
                } else if (b.category === "commercial" && b.urbanRole && b.urbanRole.crafts) {
                    actionBtnHtml = `<button id="inspect-craft-btn" class="btn-action primary-btn" type="button">🏗️ ASSEMBLE CONSTRUCTION KITS</button>`;
                } else {
                    actionBtnHtml = `
                    <button id="inspect-action-btn" class="btn-action secondary-btn" type="button">
                        <span>⚡ PRACTICE / UPGRADE (+10 XP)</span>
                    </button>`;
                }
            } else {
                statusBadge = isUnderConstruction
                    ? `<span class="badge-status badge-construction">🚧 STAGE ${currentStage + 1} OF ${totalStages}</span>`
                    : `<span class="badge-status badge-available">🏗️ READY TO BUILD</span>`;

                actionBtnHtml = `
                <button id="inspect-action-btn" class="btn-action primary-btn btn-build-action" type="button">
                    <span>🔨 BUILD STAGE ${currentStage + 1} (START CHALLENGE)</span>
                </button>`;
            }

            const pct = Math.round((currentStage / totalStages) * 100);
            const stageObj = b.stages && b.stages[currentStage] ? b.stages[currentStage] : null;
            const stageName = stageObj ? stageObj.name : `Stage ${currentStage + 1}`;

            // Infrastructure metrics
            const powerText = b.urbanRole && b.urbanRole.serviceOutput && b.urbanRole.serviceOutput.type === 'power'
                ? `+${b.urbanRole.serviceOutput.amount} MW Generated`
                : `${b.urbanRole && b.urbanRole.serviceDemand ? b.urbanRole.serviceDemand.power : 15} MW Draw`;
            const waterText = b.urbanRole && b.urbanRole.serviceOutput && b.urbanRole.serviceOutput.type === 'water'
                ? `+${b.urbanRole.serviceOutput.amount} kL Flow`
                : `${b.urbanRole && b.urbanRole.serviceDemand ? b.urbanRole.serviceDemand.water : 10} kL Draw`;
            const popText = b.urbanRole && b.urbanRole.popCapacity
                ? `+${b.urbanRole.popCapacity} Residents`
                : (b.isLandmark ? `+${b.urbanRole.popBonus || 500} Prestige` : 'Commercial Core');

            panel.innerHTML = `
            <div class="inspect-header">
                <div class="inspect-title-group">
                    <span class="inspect-icon">${b.icon}</span>
                    <div>
                        <h3 class="inspect-name">${b.name}</h3>
                        <div style="display: flex; gap: 6px; align-items: center; margin-top: 2px;">
                            ${zoneBadgeHtml}
                            <span class="inspect-district" style="color: ${district ? district.color : '#38bdf8'}">
                                ${district ? district.name : 'Central Hub'}
                            </span>
                        </div>
                    </div>
                </div>
                <button id="inspect-close-btn" class="inspect-close-btn" type="button" aria-label="Close Panel">✕</button>
            </div>

            <!-- City Infrastructure Matrix -->
            <div class="inspect-urban-grid">
                <div class="inspect-urban-stat">
                    <span class="urban-stat-label">🛣️ Road:</span>
                    <span class="urban-stat-val" style="color: #4ade80;">Connected</span>
                </div>
                <div class="inspect-urban-stat">
                    <span class="urban-stat-label">⚡ Power:</span>
                    <span class="urban-stat-val">${powerText}</span>
                </div>
                <div class="inspect-urban-stat">
                    <span class="urban-stat-label">💧 Water:</span>
                    <span class="urban-stat-val">${waterText}</span>
                </div>
                <div class="inspect-urban-stat">
                    <span class="urban-stat-label">👥 Urban:</span>
                    <span class="urban-stat-val">${popText}</span>
                </div>
            </div>

            ${b.hasIncident ? `
            <div class="inspect-incident-card">
                <div class="incident-badge-title">
                    <span>⚠️</span>
                    <span>${b.incidentData.title}</span>
                </div>
                <p class="incident-desc-text">${b.incidentData.desc}</p>
            </div>` : ''}

            ${b.category === "industrial" && b.urbanRole && b.urbanRole.produces && !isLocked ? `
            <div class="inspect-production-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 0.76rem; font-weight: 800; color: #fbbf24;">FACTORY OUTPUT</span>
                    <span style="font-size: 0.72rem; color: #94a3b8;">${b.productionState.toUpperCase()}</span>
                </div>
                <div style="font-size: 0.82rem; font-weight: 700; color: #f8fafc;">
                    ${b.urbanRole.produces.icon} ${b.urbanRole.produces.name}: +${b.urbanRole.produces.amount} units / batch
                </div>
            </div>` : ''}

            ${b.category === "commercial" && b.urbanRole && b.urbanRole.crafts && !isLocked ? `
            <div class="inspect-production-card" style="border-color: #34d399;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 0.76rem; font-weight: 800; color: #34d399;">COMMERCIAL ASSEMBLY</span>
                    <span style="font-size: 0.72rem; color: #94a3b8;">ACTIVE</span>
                </div>
                <div style="font-size: 0.8rem; color: #f8fafc;">
                    Consumes 2 Silicon Wafers ➔ Yields 2 Construction Kits 🏗️
                </div>
            </div>` : ''}

            <div class="inspect-meta-row">
                ${statusBadge}
                ${!b.isCivic ? `<span class="inspect-progress-text">${stageName} (${pct}%)</span>` : ''}
            </div>

            ${!b.isCivic ? `
            <div class="inspect-progress-track">
                <div class="inspect-progress-fill" style="width: ${pct}%; background-color: ${district ? district.color : '#38bdf8'}"></div>
            </div>` : ''}

            <div class="inspect-body">
                <div class="inspect-concept-card">
                    <span class="concept-label">LEARNING CONCEPT</span>
                    <h4 class="concept-title">${b.concept}</h4>
                    <p class="concept-desc">${b.description}</p>
                </div>
                <div class="inspect-takeaway-card">
                    <span class="takeaway-label">💡 KEY TAKEAWAY</span>
                    <p class="takeaway-text">${b.takeaway}</p>
                </div>
            </div>

            <div class="inspect-footer">
                ${actionBtnHtml}
            </div>
            `;

            panel.style.display = "block";

            // Bind Action Buttons
            const actionBtn = document.getElementById("inspect-action-btn");
            if (actionBtn) {
                actionBtn.onclick = () => this.executeBuildingAction(b);
            }

            const recordsBtn = document.getElementById("inspect-records-btn");
            if (recordsBtn) {
                recordsBtn.onclick = () => {
                    if (window.openHallOfRecords) {
                        window.openHallOfRecords();
                    }
                };
            }

            const incidentBtn = document.getElementById("inspect-incident-btn");
            if (incidentBtn) {
                incidentBtn.onclick = () => this.startIncidentChallenge(b);
            }

            const produceBtn = document.getElementById("inspect-produce-btn");
            if (produceBtn) {
                produceBtn.onclick = () => this.produceGoods(b.id);
            }

            const collectBtn = document.getElementById("inspect-collect-btn");
            if (collectBtn) {
                collectBtn.onclick = () => this.collectGoods(b.id);
            }

            const craftBtn = document.getElementById("inspect-craft-btn");
            if (craftBtn) {
                craftBtn.onclick = () => this.craftConstructionKits(b.id);
            }

            const closeBtn = document.getElementById("inspect-close-btn");
            if (closeBtn) {
                closeBtn.onclick = () => {
                    panel.style.display = "none";
                    this.selectedBuildingId = null;
                    this.render();
                };
            }
        },

        executeBuildingAction(b) {
            if (b.isCivic) {
                if (b.actionType === "daily_build" && window.DailyBuildManager) {
                    window.DailyBuildManager.openModal();
                } else if ((b.actionType === "achievements" || b.id === "b_trophy") && window.openAchievements) {
                    window.openAchievements("city");
                } else if (b.actionType === "mistake_review" && window.openMistakeReview) {
                    window.openMistakeReview();
                }
                return;
            }

            this.startBuildingChallenge(b.id);
        },

        startIncidentChallenge(b) {
            if (!b || !b.hasIncident) return;
            this.activeChallengeBuildingId = b.id;

            const qId = b.incidentData.questionId || (b.questions ? b.questions[0] : "l1-mcq-000");
            const q = this.findQuestionById(qId);
            if (q) {
                this.openChallengeModal(b, q);
            }
        },

        // --------------------------------------------------------------------
        // 9. CHALLENGE INTEGRATION & CONSTRUCTION PROGRESS
        // --------------------------------------------------------------------
        startBuildingChallenge(buildingId) {
            const b = this.buildings[buildingId];
            if (!b) return;

            this.activeChallengeBuildingId = buildingId;

            // Pick question for current stage
            const stageIdx = Math.min((b.questions ? b.questions.length - 1 : 0), b.currentStage || 0);
            const questionId = b.questions ? b.questions[stageIdx] : null;

            const q = questionId ? this.findQuestionById(questionId) : null;
            if (!q) {
                console.warn("CityEngine: Question not found:", questionId);
                return;
            }

            this.openChallengeModal(b, q);
        },

        findQuestionById(qId) {
            const allPools = [
                ...(window.houseQuestions || []),
                ...(window.rocketQuestions || []),
                ...(window.robotQuestions || []),
                ...(window.HOUSE_BOSS_QUESTIONS || []),
                ...(window.ROCKET_BOSS_QUESTIONS || []),
                ...(window.ROBOT_BOSS_QUESTIONS || []),
                ...(window.DAILY_CHALLENGE_POOL || [])
            ];
            return allPools.find(q => q.id === qId) || null;
        },

        openChallengeModal(building, question) {
            const modal = document.getElementById("city-challenge-modal");
            if (!modal) return;

            if (window.loadQuestionForCity) {
                window.loadQuestionForCity(building, question);
            }

            modal.style.display = "flex";
        },

        closeChallengeModal() {
            const modal = document.getElementById("city-challenge-modal");
            if (modal) modal.style.display = "none";
            this.activeChallengeBuildingId = null;
        },

        onCorrectChallengeAnswer() {
            if (!this.activeChallengeBuildingId) return;
            const b = this.buildings[this.activeChallengeBuildingId];
            if (!b) return;

            // Resolve incident if active
            if (b.hasIncident) {
                b.hasIncident = false;
                const concept = b.incidentData ? b.incidentData.concept : null;
                if (concept) this.conceptMastery[concept] = "mastered";
                b.incidentData = null;
                this.inventory.construction_kits = (this.inventory.construction_kits || 0) + 2;
                this.spawnFloatingToast("GLITCH RESOLVED! CONCEPT REINFORCED 🧠✨ (+2 Construction Kits)", b);
            } else {
                // Advance construction stage
                b.currentStage = (b.currentStage || 0) + 1;
                b.status = "under_construction";
                this.spawnFloatingToast("+10 XP • STAGE CONSTRUCTED! 🔨", b);

                if (b.currentStage >= b.totalStages) {
                    b.status = "completed";
                    this.celebrateBuildingCompletion(b);
                }
            }

            // Industrial production tick (answering challenges powers factories!)
            this.inventory.silicon = (this.inventory.silicon || 0) + 2;
            this.inventory.circuits = (this.inventory.circuits || 0) + 1;
            this.inventory.steel = (this.inventory.steel || 0) + 1;

            this.updateServices();
            this.render();
            this.updateHUD();
            if (window.saveGameProgress) window.saveGameProgress();
        },

        celebrateBuildingCompletion(b) {
            if (window.AudioManager) window.AudioManager.playSound("levelCompleted");
            if (window.unlockAchievement) {
                window.unlockAchievement("first_build");
            }

            // Unlock next building in this district
            const district = this.districts.find(d => d.id === b.districtId);
            if (district) {
                const bIdx = district.buildings.indexOf(b.id);
                if (bIdx >= 0 && bIdx + 1 < district.buildings.length) {
                    const nextId = district.buildings[bIdx + 1];
                    const nextB = this.buildings[nextId];
                    if (nextB && nextB.status === "locked") {
                        nextB.status = "available";
                    }
                }

                // Check if all district buildings are complete
                const allDone = district.buildings.every(id => {
                    const bl = this.buildings[id];
                    return bl && (bl.status === "completed" || (bl.currentStage >= bl.totalStages));
                });

                if (allDone) {
                    this.unlockNextDistrict(district.id);
                }
            }

            if (window.showToast) {
                window.showToast(
                    "",
                    "BUILDING COMPLETE! 🎉",
                    b.name + " is fully constructed!",
                    b.takeaway,
                    "🏗️"
                );
            }
        },

        unlockNextDistrict(currentDistrictId) {
            const order = ["d1", "d2", "d3", "d4", "d5"];
            const idx = order.indexOf(currentDistrictId);
            if (idx >= 0 && idx + 1 < order.length) {
                const nextDistId = order[idx + 1];
                const nextDist = this.districts.find(d => d.id === nextDistId);
                if (nextDist && !nextDist.unlocked) {
                    nextDist.unlocked = true;

                    // Make first building in next district available
                    if (nextDist.buildings && nextDist.buildings.length > 0) {
                        const firstB = this.buildings[nextDist.buildings[0]];
                        if (firstB) firstB.status = "available";
                    }

                    // Update district pill button
                    const pill = document.querySelector(`.district-pill[data-jump="${nextDistId}"]`);
                    if (pill) {
                        pill.classList.remove("locked");
                    }

                    if (window.AudioManager) window.AudioManager.playSound("achievement");
                    this.spawnFloatingToast(`🎉 NEW DISTRICT UNLOCKED: ${nextDist.name}!`);
                }
            } else if (idx === order.length - 1) {
                // All 5 districts complete! Unlock Python Pinnacle Tower
                const pinnacle = this.buildings["b_pinnacle"];
                if (pinnacle && pinnacle.status === "locked") {
                    pinnacle.status = "available";
                    if (window.unlockAchievement) {
                        window.unlockAchievement("world_builder");
                    }
                    this.spawnFloatingToast("👑 SUPREME PINNACLE TOWER UNLOCKED! Crown your Python Metropolis!");
                }
            }
        },

        spawnFloatingToast(text, building = null) {
            let container = document.getElementById("toast-container");
            if (!container) {
                container = document.createElement("div");
                container.id = "toast-container";
                container.className = "toast-container";
                document.body.appendChild(container);
            }

            const toast = document.createElement("div");
            toast.className = "city-floating-pill";
            toast.textContent = text;
            container.appendChild(toast);

            setTimeout(() => {
                toast.classList.add("fade-out");
                setTimeout(() => toast.remove(), 400);
            }, 2500);
        },

        // --------------------------------------------------------------------
        // 10. HUD & CITY POPULATION / PROGRESS ENGINE
        // --------------------------------------------------------------------
        updateHUD() {
            let completedCount = 0;
            let residentCapacity = 0;

            Object.values(this.buildings).forEach(b => {
                if (!b.isCivic) {
                    if (b.status === "completed" || (b.currentStage >= b.totalStages)) {
                        completedCount++;
                        if (b.urbanRole && b.urbanRole.popCapacity) {
                            residentCapacity += b.urbanRole.popCapacity;
                        }
                        if (b.urbanRole && b.urbanRole.popBonus) {
                            residentCapacity += b.urbanRole.popBonus;
                        }
                    }
                }
            });

            this.updateServices();

            const totalXp = window.totalXp || 0;
            const population = residentCapacity + (totalXp * 2);

            let cityLevelName = "LEVEL 1 • SETTLEMENT";
            if (completedCount >= 18) {
                cityLevelName = "LEVEL 6 • MEGA-CITADEL";
            } else if (completedCount >= 14) {
                cityLevelName = "LEVEL 5 • METROPOLIS";
            } else if (completedCount >= 9) {
                cityLevelName = "LEVEL 4 • DIGITAL CITY";
            } else if (completedCount >= 5) {
                cityLevelName = "LEVEL 3 • INNOVATION TOWN";
            } else if (completedCount >= 2) {
                cityLevelName = "LEVEL 2 • TECH VILLAGE";
            }

            const levelTextEl = document.getElementById("city-level-text");
            const popTextEl = document.getElementById("city-pop-text");

            if (levelTextEl) levelTextEl.textContent = cityLevelName;
            if (popTextEl) popTextEl.textContent = `POP: ${population.toLocaleString()}`;

            // Update Industrial Resources & Utilities in Top HUD
            const elSil = document.getElementById("res-silicon");
            const elCir = document.getElementById("res-circuits");
            const elStl = document.getElementById("res-steel");
            const elKit = document.getElementById("res-kits");
            const elPow = document.getElementById("res-power");
            const elWat = document.getElementById("res-water");
            const elPowBox = document.getElementById("hud-power-status");
            const elWatBox = document.getElementById("hud-water-status");

            if (elSil) elSil.textContent = (this.inventory.silicon || 0).toString();
            if (elCir) elCir.textContent = (this.inventory.circuits || 0).toString();
            if (elStl) elStl.textContent = (this.inventory.steel || 0).toString();
            if (elKit) elKit.textContent = (this.inventory.construction_kits || 0).toString();

            if (elPow) elPow.textContent = `${this.services.powerDemand}/${this.services.powerCapacity} MW`;
            if (elWat) elWat.textContent = `${this.services.waterDemand}/${this.services.waterCapacity} kL`;

            if (elPowBox) {
                if (this.services.powerShortage) elPowBox.classList.add("shortage");
                else elPowBox.classList.remove("shortage");
            }
            if (elWatBox) {
                if (this.services.waterShortage) elWatBox.classList.add("shortage");
                else elWatBox.classList.remove("shortage");
            }

            // Achievements count
            const achCountEl = document.getElementById("hud-achievements-count");
            if (achCountEl && window.unlockedAchievements) {
                achCountEl.textContent = `${window.unlockedAchievements.size}/16`;
            }

            // Mistakes count
            const mistCountEl = document.getElementById("hud-mistakes-count");
            if (mistCountEl && window.runMistakes) {
                mistCountEl.textContent = window.runMistakes.length.toString();
            }
        },

        // --------------------------------------------------------------------
        // 11. SAVE / LOAD / BACKWARD-COMPATIBILITY MIGRATION
        // --------------------------------------------------------------------
        getState() {
            const bStates = {};
            Object.keys(this.buildings).forEach(k => {
                bStates[k] = {
                    status: this.buildings[k].status,
                    currentStage: this.buildings[k].currentStage,
                    productionState: this.buildings[k].productionState || "idle",
                    hasIncident: Boolean(this.buildings[k].hasIncident),
                    incidentData: this.buildings[k].incidentData || null
                };
            });

            return {
                districts: this.districts.map(d => ({ id: d.id, unlocked: d.unlocked })),
                buildings: bStates,
                inventory: this.inventory,
                services: this.services,
                conceptMastery: this.conceptMastery,
                camera: {
                    x: Camera.x,
                    y: Camera.y,
                    zoom: Camera.zoom
                }
            };
        },

        loadState(state) {
            if (!state) return;

            if (Array.isArray(state.districts)) {
                state.districts.forEach(sd => {
                    const d = this.districts.find(item => item.id === sd.id);
                    if (d) d.unlocked = Boolean(sd.unlocked);
                });
            }

            if (state.buildings) {
                Object.keys(state.buildings).forEach(k => {
                    if (this.buildings[k]) {
                        this.buildings[k].status = state.buildings[k].status;
                        this.buildings[k].currentStage = state.buildings[k].currentStage || 0;
                        this.buildings[k].productionState = state.buildings[k].productionState || "idle";
                        this.buildings[k].hasIncident = Boolean(state.buildings[k].hasIncident);
                        this.buildings[k].incidentData = state.buildings[k].incidentData || null;
                    }
                });
            }

            if (state.inventory) {
                this.inventory = Object.assign(this.inventory, state.inventory);
            }

            if (state.conceptMastery) {
                this.conceptMastery = Object.assign(this.conceptMastery, state.conceptMastery);
            }

            if (state.camera) {
                Camera.x = state.camera.x || Camera.x;
                Camera.y = state.camera.y || Camera.y;
                Camera.zoom = Camera.clampZoom(state.camera.zoom || Camera.zoom);
            }

            this.updateServices();
            this.render();
            this.updateHUD();
        },

        migrateFromLegacySave(saveData) {
            if (!saveData || !Array.isArray(saveData.completedLevels)) return;

            const l1Done = Boolean(saveData.completedLevels[0]);
            const l2Done = Boolean(saveData.completedLevels[1]);
            const l3Done = Boolean(saveData.completedLevels[2]);

            if (l1Done) {
                const d1 = this.districts.find(d => d.id === "d1");
                if (d1) {
                    d1.buildings.forEach(bId => {
                        if (this.buildings[bId] && !this.buildings[bId].isCivic) {
                            this.buildings[bId].status = "completed";
                            this.buildings[bId].currentStage = this.buildings[bId].totalStages;
                        }
                    });
                }
                const d2 = this.districts.find(d => d.id === "d2");
                if (d2) {
                    d2.unlocked = true;
                    if (d2.buildings.length > 0) {
                        this.buildings[d2.buildings[0]].status = "available";
                    }
                }
            }

            if (l2Done) {
                const d2 = this.districts.find(d => d.id === "d2");
                if (d2) {
                    d2.unlocked = true;
                    d2.buildings.forEach(bId => {
                        if (this.buildings[bId] && !this.buildings[bId].isCivic) {
                            this.buildings[bId].status = "completed";
                            this.buildings[bId].currentStage = this.buildings[bId].totalStages;
                        }
                    });
                }
                const d3 = this.districts.find(d => d.id === "d3");
                if (d3) {
                    d3.unlocked = true;
                    if (d3.buildings.length > 0) {
                        this.buildings[d3.buildings[0]].status = "available";
                    }
                }
            }

            if (l3Done) {
                ["d3", "d4", "d5"].forEach(dId => {
                    const d = this.districts.find(item => item.id === dId);
                    if (d) {
                        d.unlocked = true;
                        d.buildings.forEach(bId => {
                            if (this.buildings[bId] && !this.buildings[bId].isCivic) {
                                this.buildings[bId].status = "completed";
                                this.buildings[bId].currentStage = this.buildings[bId].totalStages;
                            }
                        });
                    }
                });
                if (this.buildings["b_pinnacle"]) {
                    this.buildings["b_pinnacle"].status = "completed";
                    this.buildings["b_pinnacle"].currentStage = 1;
                }
            }

            this.updateServices();
            this.render();
            this.updateHUD();
        },

        hexToRgb(hex) {
            hex = hex.replace("#", "");
            if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
            const num = parseInt(hex, 16);
            return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
        }
    };

    window.CityEngine = CityEngine;

})(window);
