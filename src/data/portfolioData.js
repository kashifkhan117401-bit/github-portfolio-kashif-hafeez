export const githubProfile = {
  name: "Kashif Hafeez",
  username: "kashifkhan117401-bit",
  avatarUrl: "https://avatars.githubusercontent.com/u/225128139?v=4",
  githubUrl: "https://github.com/kashifkhan117401-bit",
  title: "BS Artificial Intelligence Student at UMT",
  headline: "Specializing in Real-Time Computer Vision (YOLOv8), Voice Assistants, LLM Autonomous Agents & Data Engineering.",
  bio: "BS Artificial Intelligence Student at University of Management and Technology (UMT). Building real-time computer vision models, Jarvis AI voice assistants, SQL database architectures, and autonomous AI agents.",
  location: "Pakistan",
  company: "University of Management and Technology (UMT)",
  email: "kashif.hafeez.dev@gmail.com",
  status: "Open to AI & Software Engineering Roles",
  socials: {
    linkedin: "https://linkedin.com/in/kashif-hafeez-545794330",
    instagram: "https://www.instagram.com/i_kashiif",
    facebook: "https://www.facebook.com/share/1AZ6rpfhxb/",
    portfolioVercel: "https://kashifhafeez-portfolio1.vercel.app/"
  },
  stats: {
    publicRepos: 24,
    starsEarned: 65,
    followers: 18,
    contributionsThisYear: 412,
    yoloFps: "60+ FPS",
  },
  languages: [
    { name: "Python", percent: 55, color: "#3572A5" },
    { name: "C++", percent: 20, color: "#f34b7d" },
    { name: "SQL / HTML", percent: 15, color: "#e38c00" },
    { name: "Jupyter Notebook", percent: 10, color: "#DA5B0B" }
  ]
};

export const repositoriesList = [
  {
    id: "jarvis-voice-assistant",
    name: "Jarvis-Desktop-Voice-Assistant",
    displayName: "Jarvis Desktop AI Voice Assistant",
    description: "Intelligent voice-controlled desktop assistant powered by AI. Speech recognition, natural language command processing, custom TTS voice response, and automated web/app launching.",
    stars: 10,
    forks: 3,
    language: "Python",
    langColor: "#3572A5",
    topics: ["voice-ai", "python", "openai", "speech-recognition", "automation"],
    updatedAt: "Updated 2 days ago",
    readmeContent: {
      overview: "Voice-driven AI assistant that processes spoken natural language commands to automate operating system tasks, perform web searches, and execute local desktop scripts.",
      keyFeatures: [
        "Real-time speech-to-text & text-to-speech audio pipelines",
        "Automated system operations & application execution",
        "OpenAI API integration for context-aware answers",
        "Hands-free voice trigger activation"
      ],
      stack: ["Python 3.10", "OpenAI API", "PyAudio", "SpeechRecognition", "Google Assistant API"]
    },
    githubUrl: "https://github.com/kashifkhan117401-bit/Jarvis-Desktop-Voice-Assistant"
  },
  {
    id: "mental-health-agent",
    name: "Mental-Health-agent",
    displayName: "Empathetic Mental Health Conversational Agent",
    description: "Context-aware dialogue flow with empathetic sentiment analysis, guided wellness exercises, stress tracking, and crisis detection built with modern LLM orchestration.",
    stars: 8,
    forks: 2,
    language: "Python",
    langColor: "#3572A5",
    topics: ["mental-health", "langchain", "nlp", "llm", "python"],
    updatedAt: "Updated 3 days ago",
    readmeContent: {
      overview: "AI conversational assistant leveraging sentiment analysis and LangChain memory to provide guided mental health support and wellness tracking.",
      keyFeatures: [
        "Context-aware empathetic dialogue management",
        "Stress tracking & sentiment classification",
        "Guided breathing & wellness prompts",
        "Crisis keyword detection & helpline routing"
      ],
      stack: ["Python", "LangChain", "LLMs", "NLP", "Streamlit"]
    },
    githubUrl: "https://github.com/kashifkhan117401-bit/Mental-Health-agent"
  },
  {
    id: "yolo-object-tracking",
    name: "CodeAlpha_Object-Detection-and-Tracking",
    displayName: "Real-Time Object Detection & Tracking (YOLOv8 + SORT)",
    description: "Real-time computer vision system combining Ultralytics YOLOv8 object detector with SORT algorithm for live webcam or video feeds, labeled bounding boxes, and persistent track IDs.",
    stars: 12,
    forks: 4,
    language: "Python",
    langColor: "#3572A5",
    topics: ["computer-vision", "yolov8", "sort-tracking", "opencv", "pytorch"],
    updatedAt: "Updated 4 days ago",
    readmeContent: {
      overview: "Computer vision inference pipeline running at 60+ FPS with sub-10ms latency for real-time multi-target classification and velocity tracking.",
      keyFeatures: [
        "Live webcam & video stream multi-object tracking",
        "Persistent object IDs across occlusion frames",
        "CUDA-accelerated PyTorch tensor processing",
        "High confidence score bounding box rendering"
      ],
      stack: ["Python 3.10", "YOLOv8", "SORT Tracking", "OpenCV", "PyTorch"]
    },
    githubUrl: "https://github.com/kashifkhan117401-bit/CodeAlpha_Object-Detection-and-Tracking"
  },
  {
    id: "agency-agents",
    name: "agency-agents",
    displayName: "Multi-Agent AI Agency Autonomous Framework",
    description: "Autonomous multi-agent orchestration framework for AI workflows. Specialized prompt personas collaborate on complex task decomposition and proven deliverables.",
    stars: 8,
    forks: 2,
    language: "Python",
    langColor: "#3572A5",
    topics: ["ai-agents", "llm", "prompt-engineering", "multi-agent", "automation"],
    updatedAt: "Updated Aug 10",
    readmeContent: {
      overview: "Decoupled multi-agent swarm platform where autonomous prompt personas execute software design, code review, and QA tasks.",
      keyFeatures: [
        "Code architect & frontend UI wizard personas",
        "Quality control reviewer & reality checker bots",
        "Structured inter-agent task handoff system",
        "Scalable execution pipeline"
      ],
      stack: ["Python", "LLMs", "Multi-Agent Workflows", "JSON Schemas"]
    },
    githubUrl: "https://github.com/kashifkhan117401-bit/agency-agents"
  },
  {
    id: "campus-network-simulation",
    name: "Campus-Network-Design-Simulation",
    displayName: "Enterprise Campus Network Design & Simulation",
    description: "Modular, scalable, and secure multi-department campus network topology designed and simulated using Cisco Packet Tracer with VLANs, OSPF routing, and ACL security.",
    stars: 9,
    forks: 2,
    language: "Cisco Packet Tracer",
    langColor: "#00bceb",
    topics: ["cisco-packet-tracer", "networking", "vlan", "ospf", "network-security"],
    updatedAt: "Updated 6 days ago",
    readmeContent: {
      overview: "Enterprise campus network architecture implementing redundant core switches, inter-VLAN routing, NAT/PAT firewall rules, and ACL security filtering.",
      keyFeatures: [
        "Multi-building VLAN segmentation & IP subnetting",
        "OSPF dynamic routing protocol integration",
        "Access Control Lists (ACLs) for security filtering",
        "DHCP & DNS server deployment simulation"
      ],
      stack: ["Cisco Packet Tracer", "VLANs", "OSPF Routing", "ACL Security"]
    },
    githubUrl: "https://github.com/kashifkhan117401-bit/Campus-Network-Design-Simulation"
  },
  {
    id: "bank-management-system",
    name: "Bank-Management-system",
    displayName: "Enterprise Banking DBMS Engine",
    description: "A comprehensive SQL-based Database Management System designed to model, manage, and analyze core banking operations, customer transactions, loans, and branch networks.",
    stars: 8,
    forks: 3,
    language: "SQL",
    langColor: "#e38c00",
    topics: ["sql", "database-management", "mysql", "relational-database", "banking-system"],
    updatedAt: "Updated 6 days ago",
    readmeContent: {
      overview: "Normalized 3NF relational database schema featuring transactional integrity, stored procedures, triggers, and analytical queries for multi-branch banking.",
      keyFeatures: [
        "Core customer account balance management & ACID transactions",
        "Loan repayment tracking & branch staff assignments",
        "Automated audit logging via SQL triggers",
        "Complex join indexing optimized for high concurrency"
      ],
      stack: ["MySQL", "SQL Server", "Relational Schema", "Stored Procedures"]
    },
    githubUrl: "https://github.com/kashifkhan117401-bit/Bank-Management-system"
  }
];

export const techSkillsMatrix = [
  {
    category: "AI & Computer Vision",
    icon: "Brain",
    skills: [
      { name: "YOLOv8 & SORT Tracking", level: "Expert", percent: 95 },
      { name: "Speech AI & Voice Assistants (Jarvis)", level: "Advanced", percent: 93 },
      { name: "LangChain & LLM Autonomous Agents", level: "Advanced", percent: 90 },
      { name: "OpenCV, PyTorch & NLTK", level: "Advanced", percent: 92 }
    ]
  },
  {
    category: "Database & Data Engineering",
    icon: "Database",
    skills: [
      { name: "MySQL & Relational Schema Design", level: "Expert", percent: 94 },
      { name: "SQL Triggers, Indexing & Stored Procedures", level: "Advanced", percent: 92 },
      { name: "Pandas, Seaborn & Exploratory Data Analysis", level: "Advanced", percent: 89 },
      { name: "ACID Transaction Management", level: "Advanced", percent: 90 }
    ]
  },
  {
    category: "Network & Security Engineering",
    icon: "Network",
    skills: [
      { name: "Cisco Packet Tracer Network Topology", level: "Expert", percent: 93 },
      { name: "VLAN Segmentation & Inter-VLAN Routing", level: "Advanced", percent: 90 },
      { name: "OSPF Dynamic Routing Protocols", level: "Advanced", percent: 88 },
      { name: "Access Control Lists (ACLs) & Firewall Rules", level: "Advanced", percent: 87 }
    ]
  },
  {
    category: "Software & Desktop Systems",
    icon: "Code",
    skills: [
      { name: "Python 3 Development", level: "Expert", percent: 96 },
      { name: "C++ Object-Oriented Programming", level: "Advanced", percent: 90 },
      { name: "Flask & Streamlit Web UI", level: "Advanced", percent: 88 },
      { name: "Git, GitHub & Deployment", level: "Expert", percent: 95 }
    ]
  }
];

export const commitHistory = [
  {
    hash: "j7d91a2",
    date: "2024 - Present",
    title: "Created Jarvis Desktop AI Voice Assistant",
    repo: "kashifkhan117401-bit/Jarvis-Desktop-Voice-Assistant",
    description: "Developed voice-controlled AI assistant with real-time speech recognition, OpenAI API synthesis, and automated system execution.",
    tags: ["Voice AI", "OpenAI", "Python", "SpeechToText"]
  },
  {
    hash: "m4e18b0",
    date: "2024 - Present",
    title: "Published Mental Health Conversational Agent",
    repo: "kashifkhan117401-bit/Mental-Health-agent",
    description: "Engineered empathetic AI dialogue model using LangChain and sentiment tracking for wellness guidance.",
    tags: ["LangChain", "NLP", "Python", "LLMs"]
  },
  {
    hash: "a4f82b1",
    date: "2024",
    title: "Built YOLOv8 Real-Time Object Tracking Pipeline",
    repo: "kashifkhan117401-bit/CodeAlpha_Object-Detection-and-Tracking",
    description: "Architected YOLOv8 + SORT real-time object tracking system running at 60+ FPS with persistent tracking IDs.",
    tags: ["YOLOv8", "SORT", "PyTorch", "OpenCV"]
  },
  {
    hash: "c91e410",
    date: "2023 - 2024",
    title: "Relational Banking Database Management System",
    repo: "kashifkhan117401-bit/Bank-Management-system",
    description: "Designed 3NF SQL relational database modeling customer accounts, loans, and automated audit triggers. Starred by 8 developers.",
    tags: ["MySQL", "SQL", "DBMS", "ACID"]
  }
];
