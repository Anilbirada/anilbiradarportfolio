export interface ProjectArchitecture {
  problemStatement: string;
  solutionOverview: string;
  architectureDiagramSvg?: string;
  dataFlow: string[];
  techStackDetailed: { [category: string]: string[] };
  llmIntegration: {
    model: string;
    promptStrategy: string;
    guardrails: string;
    deterministicFallback: string;
  };
  backendArchitecture: string;
  databaseDesign: string;
  security: string[];
  testingEvaluation: string;
  deployment: string;
  engineeringChallenges: { challenge: string; solution: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  featured: boolean;
  type: 'agent' | 'rag' | 'fullstack' | 'ml';
  image: string;
  tags: string[];
  keyContributions: string[];
  githubUrl?: string;
  demoUrl?: string;
  architecture: ProjectArchitecture;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'errorsentinel-ai',
    title: 'ErrorSentinel AI',
    category: 'AI-Powered Error Intelligence & Inbox Monitoring',
    tagline: 'Autonomous Log & Exception Intelligence with Deterministic Registry Verifications',
    shortDescription:
      'Production-grade error monitoring pipeline that ingests server logs and alert emails, extracts exception signatures with LLMs, verifies against an atomic SQLite master registry, and dispatches deduplicated alerts.',
    featured: true,
    type: 'agent',
    image: '/images/01_Build_IQ_Workflow_Automation.jpg',
    tags: ['Python', 'LLM Structured Output', 'SQLite (Atomic)', 'Deduplication', 'Docker', 'Pytest', 'SMTP / Graph API'],
    keyContributions: [
      'Engineered an atomic SQLite transaction model ensuring alerts commit only after provider acceptance, preventing lost or duplicated error notifications.',
      'Designed strict ground-truth prompt verification: AI-suggested error codes are validated against raw text tokens; hallucinated codes are immediately dropped.',
      'Implemented in-memory normalization and batch deduplication reducing recurring notification noise by up to 88% during production incidents.',
      'Containerized with Docker and authored automated Pytest suites verifying registry states and edge-case error traces.'
    ],
    githubUrl: 'https://github.com/Anilbirada',
    architecture: {
      problemStatement:
        'Development teams receive hundreds of raw stack traces and automated alert emails daily. Triage engineers spend hours manually categorizing duplicates, identifying recurring failures, and mapping new exceptions to ticketing systems.',
      solutionOverview:
        'ErrorSentinel AI continuously monitors communication channels and log streams, parses complex stack traces, uses LLM intelligence to synthesize human-readable root cause summaries, and checks an authoritative local registry to alert exclusively on new, unhandled error patterns.',
      dataFlow: [
        'Ingestion: Polling worker ingests unread error notifications via IMAP/Graph API or raw JSON log files.',
        'Sanitization: Regex pre-filters strip volatile timestamps, memory addresses, and session IDs to extract stable canonical signatures.',
        'LLM Analysis: Sends cleansed error trace with rigid JSON schema instructions to extract error code, severity, and reproduction steps.',
        'Registry Verification: Queries SQLite master registry. If known, logs recurrence; if novel, enqueues to atomic pending queue.',
        'Alert Dispatch: Emits targeted webhook/email notification. On 200 OK delivery confirmation, commits state transactionally.'
      ],
      techStackDetailed: {
        'Core Language': ['Python 3.11', 'Pydantic v2', 'Asyncio'],
        'AI & Extraction': ['OpenAI / Gemini API', 'Strict JSON Schema', 'Few-shot Error Prompting'],
        'Storage & State': ['SQLite3 (WAL Mode)', 'Atomic Commit Transactions'],
        'DevOps & Testing': ['Docker', 'Docker Compose', 'Pytest (100% Core Coverage)']
      },
      llmIntegration: {
        model: 'GPT-4o-mini / Gemini Flash via structured function calling',
        promptStrategy:
          'Constrained JSON extraction requiring literal source token reproduction for error codes and stack traces.',
        guardrails:
          'Post-generation validation: Code confirms every extracted identifier exists verbatim in the raw input body.',
        deterministicFallback:
          'If the LLM endpoint times out or yields invalid JSON, regex signature hashing is used without blocking the pipeline.'
      },
      backendArchitecture:
        'Modular Python service built on decoupled components: Ingestion Adapter, Normalization Engine, LLM Extractor, Registry Controller, and Dispatch Gateway.',
      databaseDesign:
        'SQLite in Write-Ahead-Logging (WAL) mode with tables: master_registry (code_hash, first_seen, last_seen, occurrence_count), pending_queue (run_id, payload, retry_count), and audit_log.',
      security: [
        'Credentials stored in environment variables and never logged in error traces.',
        'PII & sensitive memory dump scrubbing before transmitting prompts to external LLM providers.',
        'Idempotent run IDs prevent double-processing upon network reconnects.'
      ],
      testingEvaluation:
        'Pytest test suite with simulated mailboxes, mock LLM responses, and corrupted payloads. Evaluated on 100+ real-world python & Java stack traces.',
      deployment: 'Lightweight Docker container running on Ubuntu Linux with systemd service supervisor.',
      engineeringChallenges: [
        {
          challenge: 'LLMs occasionally hallucinated nonexistent standard library error codes when analyzing truncated traces.',
          solution: 'Implemented a deterministic substring token matcher. Extracted codes must exist in the source payload or they are discarded.'
        },
        {
          challenge: 'Alert floods during cascading database connection failures.',
          solution: 'Built sliding-window rate limiting and recurrence counters, suppressing duplicate alerts within configurable 15-minute intervals.'
        }
      ]
    }
  },
  {
    id: 'nexora-ai',
    title: 'Nexora AI',
    category: 'Multi-Agent Business Automation Platform',
    tagline: 'Orchestrated 8-Agent Collaborative Pipeline with Human-in-the-Loop Governance',
    shortDescription:
      'Multi-agent enterprise business automation system orchestrating eight specialized AI agents for market research, lead generation, proposal drafting, QA, and risk analysis with PostgreSQL multi-tenancy and human approval gates.',
    featured: true,
    type: 'agent',
    image: '/images/03_NEXGEN_Lead_Gen_Agents.jpg',
    tags: ['Python', 'Multi-Agent Systems', 'Tool Calling', 'Human-in-the-Loop', 'PostgreSQL', 'FastAPI', 'JWT RBAC'],
    keyContributions: [
      'Engineered an orchestration engine coordinating 8 autonomous agents with typed data handoffs, strict role boundaries, and state persistence.',
      'Built a mandatory Human-in-the-Loop (HITL) approval gateway allowing human managers to review, revise, and approve AI-generated commercial proposals before dispatch.',
      'Separated deterministic business logic (pricing calculators, margin validations) from creative LLM capabilities to prevent hallucinated quotes.',
      'Architected multi-tenant PostgreSQL schema with organization-scoped row security and complete audit trails.'
    ],
    githubUrl: 'https://github.com/Anilbirada',
    architecture: {
      problemStatement:
        'B2B sales and operational teams waste dozens of hours each week on repetitive administrative workflows: researching prospects, drafting custom enterprise proposals, calculating margins, and validating compliance.',
      solutionOverview:
        'Nexora AI models business operations as an intelligent multi-agent network. Each specialized agent owns a discrete capability (Prospector, Intelligence, Pricing, Compliance, Proposal Writer) governed by an orchestrator and human approval checkpoint.',
      dataFlow: [
        'Trigger: Client submits a new business opportunity intake form via REST API.',
        'Research Agent: Queries market data, extracts company footprint, and aggregates competitor positioning.',
        'Pricing & Risk Agent: Executes deterministic Python formula for rate cards and risk scoring; LLM is NOT permitted to invent numbers.',
        'Proposal Generator: Synthesizes research and validated pricing into a contextual Markdown/PDF proposal document.',
        'Human-in-the-Loop Gate: Enqueues draft into manager dashboard. Requires explicit human sign-off before external email dispatch.'
      ],
      techStackDetailed: {
        'Agent Orchestration': ['Python 3.11', 'Custom Directed Graph Runner', 'Pydantic Schemas'],
        'Backend & APIs': ['FastAPI', 'Uvicorn', 'JWT Authentication', 'Asyncio'],
        'Database & Vector': ['PostgreSQL 16', 'SQLAlchemy Core', 'Alembic Migrations'],
        'Frontend UI': ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite']
      },
      llmIntegration: {
        model: 'GPT-4o / Claude 3.5 Sonnet / Local Mistral',
        promptStrategy:
          'Role-specialized system prompts with rigid input/output JSON schemas and chain-of-thought analysis for complex business briefs.',
        guardrails:
          'Financial guardrail: All prices and terms must match deterministic catalog constraints; deviations trigger validation exceptions.',
        deterministicFallback:
          'Rule-based template fallbacks automatically generate standard proposals if agent API budgets are exhausted.'
      },
      backendArchitecture:
        'FastAPI asynchronous server with event-driven background task processing, tenant isolation middleware, and role-based permissions (Admin, Manager, Operator).',
      databaseDesign:
        'PostgreSQL relational schema with organizations, users, opportunities, agent_runs, proposal_revisions, and immutable audit_logs.',
      security: [
        'JWT tokens with role-based claims (RBAC) and tenant UUID segregation.',
        'Zero prompt storage of confidential customer banking data.',
        'Cryptographic audit trail tracking which agent generated each proposal paragraph.'
      ],
      testingEvaluation:
        'Integration tests validating agent state transitions, data contract validation between agents, and human override simulation.',
      deployment: 'Docker Compose environment containing FastAPI, PostgreSQL, and Vite client.',
      engineeringChallenges: [
        {
          challenge: 'Preventing LLM agents from fabricating pricing discounts or committing to impossible delivery dates.',
          solution: 'Hard-isolated financial calculations from LLM control; prices are computed deterministically and passed as immutable context.'
        },
        {
          challenge: 'Managing long context degradation when chaining 8 agent outputs.',
          solution: 'Implemented structured summary extraction at each stage, passing only verified JSON deliverables to subsequent agents.'
        }
      ]
    }
  },
  {
    id: 'enterprise-rag-assistant',
    title: 'Enterprise RAG AI Assistant',
    category: 'Retrieval-Augmented Generation & Document Intelligence',
    tagline: 'Context-Grounded Document Intelligence with Source Citations & Role-Based Vector Access',
    shortDescription:
      'High-performance RAG pipeline for enterprise documents (PDFs, contracts, technical specifications) featuring semantic chunking, ChromaDB vector indexing, strict source citation, and zero hallucination guardrails.',
    featured: true,
    type: 'rag',
    image: '/images/05_RAG_Document_Assistant.jpg',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'Sentence Transformers', 'PyMuPDF', 'RAG Triad Evaluation', 'JWT Auth'],
    keyContributions: [
      'Built custom document ingestion pipeline with PyMuPDF handling multi-column PDFs, tables, and headers with recursive character chunking (500 tokens, 100 overlap).',
      'Engineered vector search in ChromaDB using all-MiniLM-L6-v2 embeddings with metadata filtering (department, document ID, confidentiality level).',
      'Enforced strict context-grounding: LLM is constrained to answer solely from retrieved chunks and must cite exact page and paragraph references.',
      'Developed FastAPI backend with asynchronous streaming responses, JWT token authentication, and document deletion cascades.'
    ],
    githubUrl: 'https://github.com/Anilbirada',
    architecture: {
      problemStatement:
        'Enterprises hold thousands of internal policy documents, engineering manuals, and client agreements. Standard keyword search misses semantic intent, while general LLMs hallucinate inaccurate policies or leak confidential cross-department information.',
      solutionOverview:
        'Enterprise RAG Assistant ingests enterprise PDFs, segments them into semantically coherent vector chunks, indexes them into ChromaDB with tenant metadata, and grounds LLM generation strictly to retrieved text with explicit page citations.',
      dataFlow: [
        'Document Ingestion: User uploads PDF via FastAPI endpoint with metadata tags.',
        'Extraction & Chunking: PyMuPDF extracts raw text; recursive chunker splits text with sliding window overlap preserving context.',
        'Embedding & Indexing: Embeddings generated and stored in ChromaDB vector store alongside chunk metadata.',
        'Query & Retrieval: User prompt is embedded, and cosine similarity returns top-K relevant chunks above threshold.',
        'Grounded Generation: System injects chunks into prompt with explicit citation instructions; LLM answers with [Doc:Page] brackets.'
      ],
      techStackDetailed: {
        'Backend Framework': ['FastAPI', 'Uvicorn', 'Pydantic v2'],
        'PDF & Parsing': ['PyMuPDF (fitz)', 'Regex Text Normalizer'],
        'Embeddings & Vector DB': ['SentenceTransformers all-MiniLM-L6-v2', 'ChromaDB', 'Cosine Similarity'],
        'LLM & Evaluation': ['OpenAI API / Local Llama', 'RAG Triad (Faithfulness, Relevance, Grounding)']
      },
      llmIntegration: {
        model: 'GPT-4o / GPT-3.5-Turbo / Local Ollama Llama 3',
        promptStrategy:
          'Grounded system instructions: "You are an enterprise assistant. Answer ONLY using the provided excerpts. If the information is not present, state \'Information not found in available documents\'."',
        guardrails:
          'Hallucination prevention filter compares generated text tokens against context tokens to verify factual grounding.',
        deterministicFallback:
          'Keyword search fallback (BM25) activates if vector store confidence drops below threshold.'
      },
      backendArchitecture:
        'FastAPI application structured with clean separation: routers (upload, search, query), services (chunking, embedding, synthesis), and vector storage adapter.',
      databaseDesign:
        'ChromaDB vector collection partitioned by metadata namespaces, with SQLite backing document upload records and user sessions.',
      security: [
        'Metadata filtering ensures users can only retrieve chunks from documents their role has permission to read.',
        'All uploaded files scanned and temporary memory buffers wiped post-processing.',
        'JWT bearer authentication on all search and generation routes.'
      ],
      testingEvaluation:
        'Evaluated across 250 enterprise queries measuring context precision, recall, and answer faithfulness using RAGAS evaluation framework.',
      deployment: 'Dockerized multi-stage container deployed on Linux server with persistent volume for ChromaDB storage.',
      engineeringChallenges: [
        {
          challenge: 'Retrieval degrading when queries span tables or headers separated from body paragraphs.',
          solution: 'Implemented recursive chunking with structured header-prefix injection for each chunk, preserving document hierarchy.'
        },
        {
          challenge: 'LLMs using external training data to answer company-specific policy questions.',
          solution: 'Enforced strict temperature=0.0 with prompt penalties and post-generation citation verification against source indices.'
        }
      ]
    }
  },
  {
    id: 'customer-loyalty-program',
    title: 'Enterprise Customer Loyalty Platform (CLP)',
    category: 'Production Full-Stack Application & Frappe/ERPNext',
    tagline: 'High-Throughput Petrol Station Loyalty & QR Redemption Engine Deployed on Linux VPS',
    shortDescription:
      'Real-world enterprise customer loyalty platform built with Frappe Framework, MariaDB, Python backend, and Nginx. Manages fuel transactions, QR-based customer redemptions, multi-pump attendant roles, and analytics on Ubuntu VPS.',
    featured: true,
    type: 'fullstack',
    image: '/images/04_Enterprise_CLP_Loyalty_Platform.jpg',
    tags: ['Frappe Framework', 'Python', 'ERPNext', 'MariaDB', 'QR Code Workflows', 'Nginx', 'Docker', 'Ubuntu Linux VPS'],
    keyContributions: [
      'Developed custom Frappe DocTypes, validation hooks, and transactional point calculation algorithms in Python.',
      'Engineered high-speed QR code generation and mobile-friendly attendant scanner for instant points crediting at fuel nozzles.',
      'Refactored database constraints to support non-unique vehicle registrations while maintaining strict unique mobile normalization.',
      'Deployed, configured, and maintained live production environment on Ubuntu VPS with Nginx reverse proxy, SSL, and MariaDB backups.'
    ],
    githubUrl: 'https://github.com/Anilbirada',
    architecture: {
      problemStatement:
        'Fuel retail networks needed a fraud-resistant, instant loyalty program operable by petrol pump attendants on low-end mobile devices without slowing down vehicle fueling queues.',
      solutionOverview:
        'Production Frappe-based loyalty management system enabling attendants to scan customer QR cards, enter purchase amounts, compute tier points, and process instant rewards with sub-second response times.',
      dataFlow: [
        'Customer Ident: Attendant scans customer QR pass containing encrypted access token or inputs mobile number.',
        'Validation: Backend validates active status and fetches current tier and point balances.',
        'Transaction Entry: Attendant submits fuel amount; Python hook computes points based on configured station loyalty multipliers.',
        'Atomic Update: MariaDB transaction updates customer ledger, increments station shift total, and triggers confirmation SMS.',
        'Reconciliation: Nightly cron job executes ledger integrity checks and generates manager reconciliation reports.'
      ],
      techStackDetailed: {
        'Framework': ['Frappe Framework v15', 'ERPNext Integration', 'Python 3.10+'],
        'Database': ['MariaDB 10.6', 'Indexing on mobile_no and qr_token', 'ACID Transactions'],
        'Web Server & OS': ['Nginx Reverse Proxy', 'Gunicorn', 'Ubuntu 22.04 LTS VPS', 'Let\'s Encrypt SSL'],
        'Frontend & QR': ['Frappe Desk UI', 'HTML5 QR Code Scanner', 'Responsive Mobile Views']
      },
      llmIntegration: {
        model: 'Deterministic Production Core (Optional AI Analytics Addon)',
        promptStrategy: 'Engineered with strict deterministic business rules for financial accounting and fraud compliance.',
        guardrails: 'Strict double-entry ledger rules preventing point duplication or unauthorized manual balance overrides.',
        deterministicFallback: 'Full transactional offline logging if SMS provider fails.'
      },
      backendArchitecture:
        'Frappe MVC architecture with server-side Python DocType controllers, whitelisted API methods for mobile endpoints, and background worker queues.',
      databaseDesign:
        'Normalized MariaDB relational schema: tabCustomer (mobile, qr_token, points, tier), tabFuel_Purchase_Entry (amount, litres, points_awarded), and tabLoyalty_Reward_Redemption.',
      security: [
        'Role-Based Access Control: Pump Attendants cannot modify point balances manually or view owner financials.',
        'QR tokens hashed and rotated to prevent customer card duplication.',
        'CSRF protection and strict SQL parameterization through Frappe ORM.'
      ],
      testingEvaluation:
        'Tested under simulated concurrent fuel pump submissions with zero database deadlocks or point discrepancies across 10,000+ entries.',
      deployment: 'Live Ubuntu Linux VPS configured with Frappe Bench, Nginx reverse proxy, Supervisor process manager, and automated cron backups.',
      engineeringChallenges: [
        {
          challenge: 'Eliminating queue delays at fuel pumps caused by slow attendant lookups.',
          solution: 'Optimized MariaDB indexing on QR tokens and normalized phone numbers, cutting query latency to under 45ms.'
        },
        {
          challenge: 'Allowing multiple vehicles (e.g. family or commercial fleet) to earn points under a single customer account.',
          solution: 'Refactored DocType schema to decouple vehicle plate uniqueness while strictly enforcing single mobile ownership.'
        }
      ]
    }
  },
  {
    id: 'routex-ai',
    title: 'RouteX AI',
    category: 'Dynamic Traffic Routing & Fleet Optimization',
    tagline: 'Simulated AI Route Optimization and Logistics Dispatch Engine',
    shortDescription:
      'Intelligent logistics optimization system simulating live city congestion, weather conditions, and delivery time-windows to compute fuel-efficient multi-stop routes using Dijkstra and A* pathfinding.',
    featured: false,
    type: 'ml',
    image: '/images/02_Support_IQ_Customer_Support.jpg',
    tags: ['Python', 'FastAPI', 'Graph Theory (A*)', 'Traffic Simulation', 'NumPy', 'Leaflet.js'],
    keyContributions: [
      'Implemented A* pathfinding algorithm with dynamic edge weights factoring simulated traffic density and elevation.',
      'Developed FastAPI REST backend streaming real-time waypoint coordinates and congestion metrics.',
      'Visualized multi-vehicle fleet dispatches with interactive mapping controls and delivery arrival estimates.'
    ],
    githubUrl: 'https://github.com/Anilbirada',
    architecture: {
      problemStatement:
        'Urban logistics fleets face unpredictable congestion spikes, leading to delayed deliveries, increased carbon emissions, and excessive fuel waste.',
      solutionOverview:
        'RouteX AI ingests synthetic traffic sensor telemetry and computes dynamically adapted multi-stop delivery routes, balancing delivery speed and vehicle load.',
      dataFlow: [
        'Grid Generation: Creates virtual city graph with intersections as nodes and road segments as weighted edges.',
        'Congestion Simulation: Simulates traffic peaks and road incidents dynamically altering edge costs.',
        'Route Optimization: Executes A* heuristic search to compute optimal delivery sequences for dispatch.',
        'Telemetry Broadcast: Emits GPS telemetry and ETA updates to driver dashboard.'
      ],
      techStackDetailed: {
        'Core Algorithms': ['Python', 'NetworkX', 'A* Search', 'NumPy'],
        'API & Server': ['FastAPI', 'Uvicorn', 'WebSockets'],
        'Visualization': ['React', 'Leaflet Maps', 'Tailwind CSS']
      },
      llmIntegration: {
        model: 'Deterministic Graph Engine with LLM Route Explanation',
        promptStrategy: 'LLM translates mathematical route recalculations into natural language driver alerts.',
        guardrails: 'LLM does not compute coordinates; pathfinding is 100% mathematical.',
        deterministicFallback: 'Static Dijkstra pathfinding.'
      },
      backendArchitecture: 'FastAPI async microservice with graph calculation workers.',
      databaseDesign: 'In-memory graph structure backed by JSON waypoint data and SQLite route logs.',
      security: ['API key authorization for fleet dispatchers.'],
      testingEvaluation: 'Benchmarked across 500-node simulated urban grid with sub-50ms recalculation times.',
      deployment: 'Docker container on Linux.',
      engineeringChallenges: [
        {
          challenge: 'Recalculating routes in real-time when multiple road segments experience sudden simulated closures.',
          solution: 'Implemented localized sub-graph re-routing rather than global recomputation, reducing CPU latency by 72%.'
        }
      ]
    }
  },
  {
    id: 'placement-analyser',
    title: 'Smart Placement Readiness Analyser',
    category: 'Applied Machine Learning & Predictive Analytics',
    tagline: 'Student Employability & Skill Gap Diagnostic Engine with ML Scoring',
    shortDescription:
      'Predictive analytics platform evaluating student academic records, coding benchmarks, and interview readiness. Uses Random Forest and XGBoost to predict placement probability and identify actionable skill deficiencies.',
    featured: false,
    type: 'ml',
    image: '/images/02_Support_IQ_Customer_Support.jpg',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'Flask API', 'Feature Engineering'],
    keyContributions: [
      'Trained and evaluated classification models achieving 89% validation accuracy on student employability datasets.',
      'Engineered custom diagnostic feature scoring identifying individual student weaknesses in DSA, communication, or system design.',
      'Built interactive dashboard with Flask and Chart.js providing personalized curriculum recommendations.'
    ],
    githubUrl: 'https://github.com/Anilbirada',
    architecture: {
      problemStatement:
        'College students lack objective, data-driven feedback regarding their readiness for competitive tech campus hiring drives.',
      solutionOverview:
        'Analyzes multidimensional student data (CGPA, coding test scores, project count, mock interview ratings) to produce diagnostic placement probabilities and prescriptive improvement roadmaps.',
      dataFlow: [
        'Data Input: Student inputs academic and coding profile via web questionnaire.',
        'Feature Pipeline: Preprocessing scales numerical scores and encodes categorical project domain metrics.',
        'ML Inference: Ensemble model predicts placement likelihood tier (High, Moderate, At-Risk).',
        'Prescriptive Feedback: Rules engine highlights lowest percentile skill areas with tailored study guides.'
      ],
      techStackDetailed: {
        'Machine Learning': ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'Joblib'],
        'API Backend': ['Flask', 'Gunicorn'],
        'Analytics UI': ['HTML5', 'Chart.js', 'Bootstrap 5']
      },
      llmIntegration: {
        model: 'Generative Feedback Synthesizer (Optional Layer)',
        promptStrategy: 'Formats ML feature importances into encouraging, structured coaching advice.',
        guardrails: 'Feedback bounds strictly to computed skill gap scores.',
        deterministicFallback: 'Static curriculum lookup table.'
      },
      backendArchitecture: 'Lightweight Flask service serving REST inference endpoints.',
      databaseDesign: 'SQLite database storing student assessment submissions and historical trend logs.',
      security: ['Anonymized student identifiers for privacy compliance.'],
      testingEvaluation: 'Evaluated with 5-fold cross-validation, achieving 0.89 F1-score on benchmark student profiles.',
      deployment: 'Deployed on PythonAnywhere / Render with Gunicorn.',
      engineeringChallenges: [
        {
          challenge: 'Imbalanced dataset where top-tier placed students skewed the model.',
          solution: 'Applied SMOTE oversampling and tuned XGBoost class weights to ensure fair evaluation of borderline candidates.'
        }
      ]
    }
  },
  {
    id: 'suspicious-url-detection',
    title: 'Suspicious URL & Phishing Detection System',
    category: 'Cybersecurity & Machine Learning Classification',
    tagline: 'Multi-Feature Lexical and Host Classifier for Malicious Web Links',
    shortDescription:
      'Cybersecurity classifier parsing URLs into lexical, domain, and structural features to detect phishing links, malware drops, and typosquatting attacks in real-time with 0.97 F1-score on evaluation benchmark.',
    featured: false,
    type: 'ml',
    image: '/images/01_Build_IQ_Workflow_Automation.jpg',
    tags: ['Python', 'Machine Learning', 'Feature Extraction', 'FastAPI', 'Cybersecurity', 'Scikit-Learn'],
    keyContributions: [
      'Extracted 28 distinct lexical and host-based features including entropy, subdomain depth, IP patterns, and suspicious TLDs.',
      'Trained Random Forest and Gradient Boosted classifiers with extensive ROC-AUC evaluation.',
      'Packaged inference engine into sub-20ms FastAPI endpoint for browser extension or email gateway integration.'
    ],
    githubUrl: 'https://github.com/Anilbirada/Suspicious-Website-Malicious-URL-Detection-System',
    architecture: {
      problemStatement:
        'Phishing and malicious URLs are the primary attack vector for cyber fraud. Static blocklists fail to catch newly registered zero-day malicious domains.',
      solutionOverview:
        'Extracts structural, lexical, and statistical characteristics directly from the URL string without visiting the dangerous web page, classifying safety in milliseconds.',
      dataFlow: [
        'URL Submission: Raw URL received by FastAPI endpoint.',
        'Feature Extractor: Computes Shannon entropy, digit-to-letter ratio, path length, hyphen count, and IP presence.',
        'Model Inference: Random Forest model predicts benign vs malicious probability.',
        'Response: Returns safety classification, risk score, and detected anomalous features.'
      ],
      techStackDetailed: {
        'Core ML': ['Python', 'Scikit-Learn', 'NumPy', 'Tldextract'],
        'API Layer': ['FastAPI', 'Uvicorn'],
        'Testing': ['Pytest', 'Held-out test split']
      },
      llmIntegration: {
        model: 'None (Pure Supervised Machine Learning for latency and deterministic safety)',
        promptStrategy: 'N/A',
        guardrails: 'Strict input URL sanitation and protocol parsing.',
        deterministicFallback: 'Exact-match known malicious blocklist.'
      },
      backendArchitecture: 'FastAPI microservice with in-memory pre-loaded model artifact.',
      databaseDesign: 'SQLite historical query log.',
      security: ['Zero outbound network requests to queried URLs, preventing drive-by attacks.'],
      testingEvaluation: 'Achieved 0.97 F1-score and 0.998 ROC-AUC on held-out evaluation test set.',
      deployment: 'Dockerized microservice.',
      engineeringChallenges: [
        {
          challenge: 'Adversarial evasion through shortened URLs and URL redirection.',
          solution: 'Implemented header-only unshortening with timeout protection to analyze the final destination URL.'
        }
      ]
    }
  },
  {
    id: 'build-iq-automation',
    title: 'Build IQ — AI Workflow Automation',
    category: 'Production AI Automation (RSR Technology)',
    tagline: 'Enterprise Automated Pipeline & Workflow Assistant',
    shortDescription:
      'Internal engineering workflow automation tool developed at RSR Technology. Streamlines build health diagnostics, automates code review sanity checks, and dispatches summarized status reports.',
    featured: false,
    type: 'agent',
    image: '/images/01_Build_IQ_Workflow_Automation.jpg',
    tags: ['Python', 'FastAPI', 'CI/CD Automation', 'LLM Summarization', 'RSR Technology'],
    keyContributions: [
      'Developed automated CI/CD pipeline diagnostic parsing reducing developer triage time by 40%.',
      'Integrated LLM summarization for complex build logs with structured markdown reporting.',
      'Collaborated with senior engineers on REST API design and testing.'
    ],
    githubUrl: 'https://github.com/Anilbirada',
    architecture: {
      problemStatement: 'Engineers spend excessive time reviewing raw build logs across distributed repositories.',
      solutionOverview: 'Monitors CI/CD pipelines, extracts failure excerpts, and produces actionable fix recommendations.',
      dataFlow: ['Webhook trigger -> Log ingestion -> Chunking -> LLM Diagnostic -> Slack/Email notification.'],
      techStackDetailed: { 'Backend': ['Python', 'FastAPI'], 'AI': ['LLM API'], 'CI': ['Git', 'Docker'] },
      llmIntegration: {
        model: 'OpenAI API',
        promptStrategy: 'Targeted error root-cause synthesis with suggested code fixes.',
        guardrails: 'Strict token limits and regex log sanitation.',
        deterministicFallback: 'Standard regex error highlighter.'
      },
      backendArchitecture: 'FastAPI webhook listener with async worker processing.',
      databaseDesign: 'PostgreSQL build log audit records.',
      security: ['HMAC webhook signature validation.'],
      testingEvaluation: 'Tested against 100+ simulated failed build scenarios.',
      deployment: 'Internal Linux server.',
      engineeringChallenges: [
        { challenge: 'Massive log file size exceeding context windows.', solution: 'Engineered regex windowing that isolates the 50 lines surrounding fatal exits.' }
      ]
    }
  },
  {
    id: 'support-iq-assistant',
    title: 'Support IQ — AI Support Assistant',
    category: 'Production AI Support (RSR Technology)',
    tagline: 'Context-Aware AI Ticket Diagnostic & Response Assistant',
    shortDescription:
      'Customer support intelligence assistant developed at RSR Technology. Automatically categorizes incoming client tickets, retrieves verified technical solutions, and drafts agent responses.',
    featured: false,
    type: 'agent',
    image: '/images/02_Support_IQ_Customer_Support.jpg',
    tags: ['Python', 'RAG', 'Support Automation', 'FastAPI', 'RSR Technology'],
    keyContributions: [
      'Implemented automated ticket categorization and priority scoring with 92% classification accuracy.',
      'Integrated semantic knowledge base search for prompt-grounded agent drafting.',
      'Designed human-in-the-loop review workflow before customer message delivery.'
    ],
    githubUrl: 'https://github.com/Anilbirada',
    architecture: {
      problemStatement: 'Support teams experience ticket backlogs with repetitive technical inquiries.',
      solutionOverview: 'Semantically analyzes tickets and suggests grounded solutions from documentation.',
      dataFlow: ['Ticket intake -> Classification -> Knowledge Base Vector Search -> Draft Generation -> Human Approval.'],
      techStackDetailed: { 'Core': ['Python', 'FastAPI'], 'AI': ['LLM APIs', 'Vector Embeddings'], 'DB': ['PostgreSQL'] },
      llmIntegration: {
        model: 'LLM API',
        promptStrategy: 'Empathetic, technically accurate support response drafting.',
        guardrails: 'Mandatory human approval gate before any response is dispatched to clients.',
        deterministicFallback: 'Standard canned response templates.'
      },
      backendArchitecture: 'FastAPI service integrated with support helpdesk webhooks.',
      databaseDesign: 'Relational database storing tickets, drafts, and approval audit logs.',
      security: ['Redaction of client PII before passing text to LLM.'],
      testingEvaluation: 'Measured draft acceptance rate of over 78% by human support agents.',
      deployment: 'Docker container.',
      engineeringChallenges: [
        { challenge: 'Ensuring drafted responses strictly adhere to current company SLA policies.', solution: 'Augmented prompts with dynamic policy context chunks.' }
      ]
    }
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Programming Languages',
    description: 'Core languages utilized for backend architecture, algorithms, and full-stack development.',
    skills: [
      { name: 'Python', level: 'Production Experience', highlight: true },
      { name: 'JavaScript', level: 'Production Experience', highlight: true },
      { name: 'TypeScript', level: 'Production Experience', highlight: true },
      { name: 'SQL', level: 'Production Experience', highlight: true }
    ]
  },
  {
    category: 'Generative AI & LLMs',
    description: 'Hands-on application development leveraging state-of-the-art language models and structured APIs.',
    skills: [
      { name: 'LLM APIs (OpenAI / Claude / Gemini)', level: 'Production Experience', highlight: true },
      { name: 'Prompt Engineering & System Personas', level: 'Production Experience', highlight: true },
      { name: 'Structured Outputs (Pydantic / JSON Schema)', level: 'Production Experience', highlight: true },
      { name: 'Vector Embeddings & Cosine Metrics', level: 'Production Experience', highlight: true },
      { name: 'Open-Source Models (Ollama / Llama)', level: 'Hands-on Implementation', highlight: false }
    ]
  },
  {
    category: 'RAG Engineering',
    description: 'End-to-end retrieval pipelines transforming unstructured documents into grounded intelligence.',
    skills: [
      { name: 'Document Ingestion (PyMuPDF / PDFs)', level: 'Production Experience', highlight: true },
      { name: 'Recursive Text Chunking & Overlap', level: 'Production Experience', highlight: true },
      { name: 'ChromaDB Vector Store', level: 'Production Experience', highlight: true },
      { name: 'Semantic & Hybrid Search', level: 'Production Experience', highlight: true },
      { name: 'Context Grounding & Source Citations', level: 'Production Experience', highlight: true },
      { name: 'RAG Evaluation (Faithfulness & Relevance)', level: 'Hands-on Implementation', highlight: false }
    ]
  },
  {
    category: 'AI Agents & Automation',
    description: 'Autonomous workflows, tool calling, and structured multi-agent collaboration.',
    skills: [
      { name: 'Function / Tool Calling', level: 'Production Experience', highlight: true },
      { name: 'Multi-Agent Orchestration', level: 'Production Experience', highlight: true },
      { name: 'Human-in-the-Loop (HITL) Workflows', level: 'Production Experience', highlight: true },
      { name: 'State Management & Directed Graphs', level: 'Production Experience', highlight: true },
      { name: 'Deterministic vs LLM Separation', level: 'Production Experience', highlight: true }
    ]
  },
  {
    category: 'Backend Architecture',
    description: 'Robust, asynchronous REST APIs, middleware, and business logic execution.',
    skills: [
      { name: 'FastAPI', level: 'Production Experience', highlight: true },
      { name: 'Flask', level: 'Production Experience', highlight: true },
      { name: 'Node.js & Express.js', level: 'Hands-on Implementation', highlight: false },
      { name: 'RESTful API Design & OpenAPI', level: 'Production Experience', highlight: true },
      { name: 'JWT Authentication & RBAC', level: 'Production Experience', highlight: true }
    ]
  },
  {
    category: 'Databases & Storage',
    description: 'Relational modeling, vector indexing, and atomic transaction persistence.',
    skills: [
      { name: 'PostgreSQL & pgvector', level: 'Production Experience', highlight: true },
      { name: 'MariaDB', level: 'Production Experience', highlight: true },
      { name: 'MySQL', level: 'Production Experience', highlight: true },
      { name: 'SQLite (WAL & Atomic Commits)', level: 'Production Experience', highlight: true },
      { name: 'MongoDB', level: 'Hands-on Implementation', highlight: false }
    ]
  },
  {
    category: 'DevOps & Deployment',
    description: 'Containerization, Linux administration, and production reverse proxying.',
    skills: [
      { name: 'Docker & Docker Compose', level: 'Production Experience', highlight: true },
      { name: 'Linux (Ubuntu Server Administration)', level: 'Production Experience', highlight: true },
      { name: 'Nginx (Reverse Proxy & SSL)', level: 'Production Experience', highlight: true },
      { name: 'Git & GitHub Version Control', level: 'Production Experience', highlight: true },
      { name: 'CI/CD Workflow Automation', level: 'Hands-on Implementation', highlight: false }
    ]
  },
  {
    category: 'Testing & Quality Assurance',
    description: 'Automated test verification ensuring robust codebases and reliable AI outputs.',
    skills: [
      { name: 'Pytest (Unit & Integration)', level: 'Production Experience', highlight: true },
      { name: 'API Contract & Schema Testing', level: 'Production Experience', highlight: true },
      { name: 'Automated Mocking & Edge Case Testing', level: 'Production Experience', highlight: true },
      { name: 'Prompt Regression Testing', level: 'Hands-on Implementation', highlight: false }
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: 'Junior AI Developer',
    company: 'RSR Technology',
    location: 'Bengaluru, Karnataka, India',
    period: 'Present',
    type: 'Full-time / In-office',
    overview:
      'Responsible for hands-on artificial intelligence application engineering, Python backend services, LLM integration, and enterprise business automation pipelines.',
    responsibilities: [
      'Developed AI-powered application features integrating OpenAI and Gemini APIs with rigid JSON schema validation and deterministic fallback mechanisms.',
      'Engineered Python backend microservices using FastAPI and Flask, ensuring high throughput, async execution, and robust RESTful API endpoints.',
      'Contributed directly to "Build IQ" workflow automation, synthesizing complex developer build failure logs into concise actionable triage reports.',
      'Developed "Support IQ" intelligent customer service assistant, leveraging semantic vector search and human-in-the-loop validation for customer inquiry drafts.',
      'Authored prompt engineering templates and automated evaluation benchmarks to reduce hallucination and maintain strict context-grounded outputs.',
      'Implemented automated Pytest suites and conducted end-to-end API testing across staging and production Docker environments.'
    ],
    technologies: ['Python', 'FastAPI', 'LLMs', 'Prompt Engineering', 'RAG', 'ChromaDB', 'PostgreSQL', 'Docker', 'Pytest']
  }
];

export const TIMELINE_DATA = [
  {
    period: 'Foundational Studies',
    title: 'Bachelor of Computer Applications (BCA)',
    subtitle: 'Academic Foundations in Computer Science',
    description:
      'Mastered core computer science fundamentals including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering methodologies.',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'Software Engineering', 'Mathematics for CS']
  },
  {
    period: 'Software Engineering',
    title: 'Full-Stack & Backend Systems',
    subtitle: 'Production Python, REST APIs & Databases',
    description:
      'Transitioned academic principles into production software engineering: designing relational schemas (MariaDB, PostgreSQL), building asynchronous APIs with FastAPI, and managing Linux server deployments with Nginx and Docker.',
    skills: ['Python', 'FastAPI', 'MariaDB', 'PostgreSQL', 'Docker', 'Linux VPS']
  },
  {
    period: 'Generative AI Specialization',
    title: 'LLMs, Structured Extraction & Prompt Systems',
    subtitle: 'Engineering Beyond the Chat Interface',
    description:
      'Advanced into practical Generative AI development: moving beyond simple chat prompts to build production software with structured JSON outputs, function calling, schema enforcement, and zero-hallucination validation.',
    skills: ['LLM APIs', 'Structured JSON Output', 'Prompt Engineering', 'Pydantic v2', 'Token Optimization']
  },
  {
    period: 'Information Retrieval',
    title: 'RAG Architecture & Vector Intelligence',
    subtitle: 'Enterprise Document Grounding',
    description:
      'Engineered end-to-end Retrieval-Augmented Generation systems using PyMuPDF, semantic text chunking, and ChromaDB vector search. Enforced source attribution and strict citation constraints.',
    skills: ['PyMuPDF', 'Chunking Strategies', 'ChromaDB', 'SentenceTransformers', 'Context Grounding']
  },
  {
    period: 'Agentic Workflows',
    title: 'Multi-Agent Systems & Human Governance',
    subtitle: 'Collaborative Autonomous Networks',
    description:
      'Architected orchestrated multi-agent systems with specialized agent roles, inter-agent data contracts, and mandatory Human-in-the-Loop review gates to automate high-stakes enterprise business operations.',
    skills: ['Multi-Agent Systems', 'Tool Calling', 'Human-in-the-Loop', 'State Management', 'Workflow Automation']
  },
  {
    period: 'Current Role',
    title: 'Junior AI Developer at RSR Technology',
    subtitle: 'Bengaluru, India',
    description:
      'Developing production AI software, workflow automation (Build IQ), customer support intelligence (Support IQ), and scalable Python microservices.',
    skills: ['FastAPI', 'Production AI', 'Enterprise Automation', 'Pytest', 'Docker CI/CD']
  }
];
