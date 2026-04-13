import { useState, useEffect, useRef } from "react";
import { Bot, CreditCard, BarChart2, Map, Send, X, Database } from "lucide-react";

// ============================================================
// RAG CORPUS — Jacob's full knowledge base
// ============================================================
const JACOB_CORPUS = `
=== JACOB TEDDERS — COMPLETE KNOWLEDGE BASE FOR RAGGY ===

## WHO IS JACOB TEDDERS?
Jacob Tedders is a Product Manager graduating May 2026 with a dual MBA + MS in Information Systems from the University of Utah's David Eccles School of Business. He is actively seeking full-time Product Manager roles, ideally in AI, enterprise SaaS, fintech, or platform products. He combines technical depth with strategic business thinking and strong cross-functional communication — known for shipping things that move metrics.

## CONTACT INFORMATION
- Email: teddersjacob@gmail.com
- Phone: (208) 919-7127
- LinkedIn: linkedin.com/in/teddersjacob
- Location: Salt Lake City, Utah
- Open to: Full-time PM roles (hybrid or remote preferred)
- Relocation: Open to relocating, but would prefer a role in the Salt Lake City to Provo area

## EDUCATION
University of Utah — David Eccles School of Business
- MBA, focus in Product Management — Expected May 2026
- MS in Information Systems — Expected May 2026
- Dual degree spanning product strategy, data systems, AI research, and systems management
- Chairman, MBA Product Management Association (PMA) — recruited advisory board, organized speaker series, led club strategy
- MBA Capstone: AI Transformation project for Savage Companies (industrial logistics)

Brigham Young University
- BA in Latin American Studies, Minor in Global Business — May 2021

Certifications
- Certified Scrum Product Owner (CSPO) — Scrum Alliance, July 2025
- Certified Scrum Master (CSM) — Scrum Alliance, December 2025

## WORK EXPERIENCE

### Product Manager Intern — The Church of Jesus Christ of Latter-day Saints
Salt Lake City, UT | February 2025 – March 2026

AI Support Chatbot (RAG-based, 0 to 1):
- The Church's member services call center (50+ operators) was working off 200+ handwritten index cards, rolodexes, and three-ring binders
- Operators gave inconsistent answers leading to repeat calls and low CSAT scores
- Jacob shadowed operators for a full day and took calls himself to build genuine empathy
- Evaluated three solutions with engineering: knowledge base, decision tree, AI chatbot
- Selected a RAG-based chatbot hosted in Microsoft Teams (already used daily by operators)
- Added thumbs up/down feedback loop; piloted with 2 operators before full rollout
- Results: ~70% reduction in manual support volume, 30% increase in user satisfaction

API Workflow Automation:
- Prioritized and delivered API-driven workflow automation using n8n
- Increased processing efficiency and accelerated engineering-to-stakeholder handoffs

### MBA Student Product Consultant — David Eccles School of Business / Doman Innovation Studio
Salt Lake City, UT | August 2024 – December 2025

Innovation for Justice (i4J):
- Drove discovery to overhaul Wisconsin's restraining order process
- Drafted full PRD, created Figma prototypes, ran UAT sessions

EnhancedAI — Japan Product Strategy:
- Client: EnhancedAI, an AI workflow automation startup similar to n8n but with in-platform AI agents
- Built 3-phase product strategy roadmap for 2026 Japan launch
- Mapped localization requirements: UI/language, data residency, compliance, sales cycles
- Delivered stakeholder-ready competitive analysis and roadmap presentation

### Technical Project Manager — Qualtrics
Provo, UT | September 2021 – March 2024

$1.7M Margin Recovery Dashboard:
- Noticed LOI and Incidence Rate metrics were calculated manually via spreadsheets
- Built a task force with designers and engineers to automate calculations and surface deeper project health data
- Results: $1.7M in eroded margin reclaimed, $245K in quarterly U.S. PM labor costs saved, one vendor reimbursed Qualtrics $122K
- Won the J.D. Power Innovation Award in Q1 2023

Enterprise Deployments:
- Directed 23 enterprise deployments (up to $2.3M each)
- Maintained 40%+ margins through data-driven cost modeling
- Drove 33% uplift in product satisfaction through support articles, office hours, and regional product champions

## SIDE PROJECTS

Roulette — Credit Card Optimizer (Founder, 2024–2025):
- Founded a fintech concept to automatically route payments to the highest-reward credit card at POS
- Ran competitive teardown of AwardWallet, CardPointers, MaxRewards; conducted user interviews and journey mapping
- Authored complete PRD, ERD, and DRD
- Evaluated 3 architecture paths: Plaid MCC recommendation engine, virtual card routing, BLE beacon + post-transaction MCC learning flywheel
- Built functional Figma prototypes and ran UAT
- Made a deliberate feasibility-gated decision to pause — the payment infrastructure layer required financial licensing beyond current scope

## SKILLS
Product Management: User Research, KPI Definition, Roadmap Planning, PRD Writing, A/B Testing, UAT, Agile/Scrum, Journey Mapping, Prototyping, Competitive Analysis, GTM Strategy
Data & Technical: Python, R, SQL, Tableau, Figma, Jira, Azure, n8n, Prompt Engineering, Cursor, AI-Forward Tooling, API Integration
Strategy & Business: Market & Competitive Analysis, P&L Ownership, GTM Strategy, Financial Modeling
Languages: Fluent Spanish, Working Portuguese

## AWARDS & RECOGNITION
- J.D. Power Innovation Award — Qualtrics, Q1 2023
- Chairman, MBA Product Management Association — University of Utah
- New Venture Development Associate — Lassonde Entrepreneur Institute

## PERSONALITY & WORKING STYLE
- Builder-strategist hybrid who thinks in systems, not fragments
- Data-first: gravitates toward metrics, dashboards, automation, and structured frameworks
- Execution-oriented — ships things, doesn't just learn concepts
- Family man — husband and father
- Outside work: Star Wars fanatic, competitive Pokemon VGC player aspiring to qualify for Worlds

## WHY PRODUCT MANAGEMENT?
Jacob came to PM through doing, not studying. It started at Qualtrics when he noticed LOI and IR metrics were being calculated by hand and decided to fix it. What started as a one-off project became a passion for deeply understanding user needs and building solutions that make people's lives easier.

## WHAT KIND OF ROLES IS JACOB LOOKING FOR?
- Product Manager or Technical Project Manager roles
- Ideal domains: AI products, enterprise SaaS, platform/API products, fintech, data products
- Ideal company size: mid-size to large structured environments
- Particularly excited about AI-powered products with hands-on experience shipping them
- Currently in Salt Lake City / Utah area; open to remote

## FREQUENTLY ASKED QUESTIONS

Q: Is Jacob open to relocation?
A: He is based in Salt Lake City and prefers roles in the Utah area or fully remote. However, he is open to relocating for the right opportunity.

Q: How much PM experience does Jacob have?
A: 5 years spanning TPM at Qualtrics (2021-2024), PM consulting at Eccles (2024-2025), and PM internship at the Church (2025-2026), plus his MBA with PM focus. He holds both CSPO and CSM certifications.

Q: Does Jacob have technical skills?
A: Yes — proficient in Python, R, SQL, Tableau, Figma, Jira, Azure, n8n, and API integration. He has built automation pipelines, worked directly with engineering on architecture decisions, and authored PRDs, ERDs, and DRDs.

Q: Has Jacob worked on AI products?
A: Yes — launched a RAG-based AI chatbot at the Church from 0 to production, built API automation pipelines with n8n, developed product strategy for an AI startup entering Japan, and built Roulette involving Plaid API and BLE beacon architecture.

Q: What is Jacob's email?
A: teddersjacob@gmail.com

Q: What is Jacob's LinkedIn?
A: linkedin.com/in/teddersjacob

Q: What is Jacob's phone number?
A: (208) 919-7127

Q: When is Jacob available to start?
A: He graduates May 2026 and is available to start full-time at any before or after. Reach out at teddersjacob@gmail.com to discuss timing.

Q: What makes Jacob different from other PM candidates?
A: Three things. First, he came to PM through real operational work — shipped a $1.7M impact dashboard before he ever had PM in his title. Second, he has genuine hands-on AI product experience. Third, he thinks like a systems designer — builds things that scale and compound.

Q: What does Jacob do outside of work?
A: Husband and father, Star Wars fanatic, and a competitive Pokemon VGC player aspiring to qualify for the World Championships.

Q: What is RAGgy?
A: RAGgy is Jacob's AI portfolio assistant built using Retrieval Augmented Generation (RAG) — the same technique Jacob used when building the AI chatbot at the Church. The name is a play on words: Scooby-Doo calls Shaggy "Raggy," and this chatbot uses RAG. It's a living example of Jacob's AI product skills.

Q: What's Jacob's favorite way to eat a potato?
A: Tuna patty melts. Here is his preferred recipe:

Ingredients
280 grams albacore tuna, wild in water, drained (no salt)
500 grams red potatoes, baked
1 large egg
50 grams feta cheese, crumbled
50 grams red onion, chopped
1 tablespoons olive oil (optional)
1 tablespoons dijon mustard
1 tablespoons italian seasoning blend (low sodium)
1 teaspoons fresh dill
0.5 teaspoons sea salt
0.3 teaspoons black pepper

Step 1:
Bake the potatoes: Set oven to 400°F / 200°C. Wash the 500 grams red potatoes, baked, place on a baking sheet, and bake for about 45 minutes until soft and easily crushed with a fork.

Step 2:
Mix the batter: Mash and mix together all ingredients in a bowl: 280 grams albacore tuna, wild in water, drained (no salt), baked 500 grams red potatoes, baked, 1 large egg, 50 grams feta cheese, crumbled, 50 grams red onion, chopped, 1 tablespoons olive oil (optional), 1 tablespoons dijon mustard, 1 tablespoons italian seasoning blend (low sodium), 1 teaspoons fresh dill, 0.5 teaspoons sea salt, and 0.3 teaspoons black pepper. If the batter is too wet or loose, add tablespoons of wheat breadcrumbs, panko crumbs, or oatmeal until the mixture is solid but still malleable.

Step 3:
Form the patties: Scoop a small handful of batter and form into equal-sized patties. Keep them small so they hold together better in the skillet.

Step 4:
Heat the skillet: Place a nonstick skillet on medium-high heat and spray generously with olive oil or coconut oil.

Step 5:
Cook the patties: Add the patties to the hot skillet and cook for 4 to 5 minutes per side until the edges are golden brown. Flip carefully and repeat. Make sure they are not sticking to the pan.

Step 6:
Serve: Remove from the skillet and serve immediately. Enjoy!
`;

// ============================================================
// SUGGESTED QUESTIONS
// ============================================================
const SUGGESTED_QUESTIONS = [
  "What AI products has Jacob shipped?",
  "What did he do at Qualtrics?",
  "What makes Jacob stand out?",
  "Is he open to remote work?",
  "How do I contact Jacob?",
];

// ============================================================
// DATA
// ============================================================
const NAV_LINKS = ["Work", "Story", "Experience", "Contact"];

const AI_PROJECTS = [
  {
    id: 5,
    tag: "AI Enablement · Capstone",
    title: "AI Enablement Through Data Strategy",
    org: "Savage Companies",
    year: "2026",
    summary: "Led research into enterprise AI readiness to surface a foundational data strategy that could unlock scalable AI functionality across a multi-business-unit holding company.",
    metrics: ["Enterprise-level AI strategy delivered", "Multi-year AI implementation roadmap", "Adopted as M&A integration framework"],
    color: "#0f1e2a",
    accent: "#4f8ef7",
    Icon: Database,
    logo: "/logos/logo_savage.png",
    logoSide: "right",
    car: {
      context: "Savage Companies, a multi-business-unit holding company with an acquisition-driven growth strategy, engaged our MBA consulting team to assess how they could more effectively leverage AI across the enterprise. The core challenge was that their business units operated in data silos with inconsistent terminology, making cross-unit reporting impossible and slowing the integration of acquired companies.",
      action: "I led the research workstream on data strategy and AI enablement. I synthesized frameworks from corporate AI governance literature, evaluated enterprise AI readiness models, and mapped Savage's current data architecture gaps against best-in-class standards. It became clear that the roadblock to effective AI adoption was not model selection or tooling — it was the absence of a unified semantic layer. The solution was implementing a certified data dictionary that standardized terminology across all business units, enabling end users to run AI-assisted reporting without needing data engineering support. I also connected this recommendation directly to their M&A strategy: a standardized data dictionary would allow AI to accelerate post-acquisition data mapping by automatically comparing incoming business data fields against Savage's certified schema.",
      result: "The recommendation was presented to Savage's C-suite and received executive sponsorship. The data dictionary framework was validated as both the highest-priority near-term initiative and the strategic foundation for their acquisition integration playbook. Leadership specifically cited the M&A acceleration angle as a differentiated insight they had not previously considered.",
    },
  },
  {
    id: 1,
    tag: "AI Product",
    title: "AI Chatbot",
    org: "The Church of Jesus Christ of Latter-day Saints",
    year: "2025-2026",
    summary: "Launched an AI chatbot from 0 to 1 for customer service team, increasing call turnover by 70% and increasing customer satisfaction by 30%.",
    metrics: ["70% reduction in operational bottlenecks", "30% increase in customer satisfaction"],
    color: "#0f1e2a",
    accent: "#4f8ef7",
    Icon: Bot,
    logo: "/logos/logo_church.png",
    logoSide: "left",
    car: {
      context: "The Church's customer service team fielded hundreds of inbound calls daily on complex questions regarding departmental and Church policy. Operators were working off handwritten index cards, rolodexes, and three-ring binders (many months out of date) leading to incorrectly routed calls, repeat calls filling up the queue, and low CSAT scores. I was tasked with finding a product solution to increase both operational efficiency and accuracy.",
      action: "I started by interviewing the customer service team to understand their role, available tools, and pain points. I even spent an entire day shadowing their work and taking calls myself to develop greater empathy for the end user. I created user stories around their core job: 'As an operator, I need to instantly find accurate answers so I can resolve calls on the first contact.' Given that these operators were elderly volunteers, I wanted to provide a solution that would be intuitive for them to use and didn't cause undue frustration. After meeting with the engineering team, we decided that an AI chatbot that leveraged Retrieval Augmented Generation (RAG) housed within Teams would be the most efficient solution, since Teams is a software they already used daily.",
      result: "After the first two months we observed that calls were being resolved with greater accuracy and resulted in less callbacks. We confirmed that the operational bottleneck had been improved by 70%, and subsequent CSAT scores showed an improvement by 30%.",
    },
  },
  {
    id: 4,
    tag: "AI Strategy · Consulting",
    title: "EnhancedAI Japan Product Strategy",
    org: "Doman Innovation Studio",
    year: "2025",
    summary: "Developed a phased go-to-market roadmap for an AI company entering Japan, covering competitive landscape, localization requirements, and feature prioritization across three launch phases.",
    metrics: ["3-phase product strategy roadmap delivered", "Competitive + localization analysis", "Stakeholder-ready presentation"],
    color: "#131020",
    accent: "#a78bfa",
    Icon: Map,
    logo: "/logos/logo_enhancedai.png",
    logoSide: "right",
    car: {
      context: "EnhancedAI is an AI startup with a proven US product that functions much like n8n, but with AI agents accessible directly in-platform instead of leveraging API keys. The company had ambitions to expand into Japan, given that they represent one of the world's large enterprise software markets. However, it has notoriously high barriers: language requirements, relationship-driven sales cycles, and regulatory considerations. The company needed a product strategy grounded in research, and a roadmap that sequenced product iteration, localization, and GTM decisions in the right order.",
      action: "I led the consulting engagement from discovery through delivery. I conducted a competitive landscape analysis of both US-based AI entrants into Japan and domestic Japanese AI incumbents. From there I conducted user research to understand how AI usage varied in Japan compared to the US in order to identify potential features that would help the product to find market fit. I mapped the localization requirements across product (UI, language, data residency) and compliance dimensions. From that foundation, I built a phased roadmap that would have the company launching in Japan over the next 5 years.",
      result: "Delivered a stakeholder-ready product roadmap and competitive analysis that the client used to inform their international product strategy. The engagement produced a phased prioritization framework that sequenced product investment against market readiness, reducing the risk of over-investing in localization before product-market fit was confirmed in Japan.",
    },
  },
];

const OTHER_PROJECTS = [
  {
    id: 2,
    tag: "Fintech · 0→1",
    title: "Roulette - Credit Card Optimizer",
    org: "Roulette",
    year: "2024-2025",
    summary: "Founded and designed a fintech product to automatically route payments to the highest-reward credit card at point of sale. Took it from concept through PRD, competitive analysis, architecture, prototypes, and UAT.",
    metrics: ["Full PRD, ERD + DRD authored", "Functional prototype → UAT completed", "Feasibility-gated decision to pause"],
    color: "#1a1208",
    accent: "#f59e0b",
    Icon: CreditCard,
    logo: "/logos/logo_roulette.png",
    logoSide: "left",
    car: {
      context: "Credit card rewards optimization is a solved problem for power users, but only manually. Most people leave thousands of dollars in rewards on the table every year because they don't remember which card to use for which merchant. I experienced this firsthand: multiple rewards cards, each with rotating categories, and no system to route payments intelligently. The market has recommendation apps, but nothing that worked at the point of sale without friction.",
      action: "I ran a full product discovery cycle: competitive teardown of AwardWallet, CardPointers, and MaxRewards; user interviews with rewards-optimizers; and journey mapping. I authored a complete PRD, ERD, and DRD. The core design challenge was the payment routing layer since you cannot inject middleware between a POS terminal and a card network without financial licensing and infrastructure. I evaluated three architecture paths: a recommendation engine using Plaid MCC data, a virtual card routing approach via Privacy.com or Stripe Issuing, and a BLE beacon system that detects merchant proximity and pre-selects the optimal card before tap. I built functional prototypes for each flow. The BLE beacon plus post-transaction Plaid MCC learning flywheel emerged as the most viable near-term path, thus sidestepping the regulated payment infrastructure problem while still delivering real-time optimization.",
      result: "I made a deliberate feasibility-gated decision to pause the project rather than continue without a clear path to the payment infrastructure layer. The artifact is a complete product portfolio: PRD, ERD, DRD, architecture decision record, and validated prototypes. The process sharpened my understanding of fintech infrastructure constraints, build vs. buy tradeoffs, and how to scope an ambitious product vision to what is actually executable at a given stage.",
    },
  },
  {
    id: 3,
    tag: "Enterprise · TPM",
    title: "$1.7M Margin Recovery Dashboard",
    org: "Qualtrics",
    year: "2021–2024",
    summary: "Built a margin recovery dashboard from scratch that identified $1.7M in recoverable expenses across enterprise accounts, continues to save $245K in quarterly PM labor costs, and even led to one vendor reimbursing Qualtrics $122K.",
    metrics: ["$1.7M in margin identified and recovered", "$245K quarterly PM labor costs saved", "$122K credit received from vendor"],
    color: "#0c1220",
    accent: "#60a5fa",
    Icon: BarChart2,
    logo: "/logos/logo_qualtrics.png",
    logoSide: "right",
    car: {
      context: "During my first week at Qualtrics, I learned about two metrics we used to scope out projects and measure their profitability: Length of Interview (LOI, how long a survey takes to complete) and Incidence Rate (IR, how many people out of 100 are qualified to take the survey). Back then, you received those metrics by exporting spreadsheets and calculating them by hand. I thought 'Why are we calculating anything by hand at a tech company?'.",
      action: "After working with a small task force of designers and engineers we developed a dashboard that not only calculated LOI and IR automatically, but that also gave deeper data cuts that could be used to gauge the health of a project in ways previously thought to be too work intensive.",
      result: "The dashboard continues to save $245K in quarterly PM labor costs to this day. As part of a larger organizational effort, the tool was leveraged to reclaim $1.7M in eroded margin that immediately improved project profitability. In one instance, a vendor gave as much as $122K in credit to Qualtrics. Because of the dashboard's innovation and impact, it won the J.D. Power Innovation award in Q1 2023.",
    },
  },
];

const AI_MINI_PROJECTS = [
  {
    title: "Inbound Email Parser",
    tool: "n8n",
    description: "Built an automated workflow that analyzed inbound support emails, parsed their contents, and routed them to the appropriate Slack team channels, thereby eliminating manual triage entirely.",
  },
  {
    title: "Social Media Graphic Automation",
    tool: "API + Automation",
    description: "Designed and launched an automation that dynamically populated branded social graphics multiple times per week based on simple text inputs, removing manual design work from the publishing cycle.",
  },
  {
    title: "Geo-coordinate API",
    tool: "Python + API",
    description: "Built an API that returned geo-coordinates for 40K+ addresses and calculated distances from global facilities, enabling location-based logistics analysis at scale.",
  },
  {
    title: "Instagram News Bot",
    tool: "FluxPrompt",
    description: "Programmed an automated workflow that scraped a target website, generated a script from the content, then produced audio and video files to report on updates as a fully automated news feed.",
  },
  {
    title: "Product Management Artifacts",
    tool: "AI-Assisted",
    description: "Leveraged AI throughout the PM lifecycle: mockups, prototypes, PRDs, ERDs, DRDs, user interview synthesis, roadmaps, and customer journey maps; all produced faster and at higher quality.",
  },
  {
    title: "Miscellaneous Scripts & Tools",
    tool: "Python + AI",
    description: "Web scrapers, file scrapers, data analysis scripts, automated report generators, and prompt-engineered workflows built to eliminate repetitive manual work across various projects.",
  },
  {
    title: "This Portfolio Website",
    tool: "React + Claude",
    description: "Designed, built, and deployed this entire portfolio site (including the RAGgy chatbot you may have already met) using AI as a collaborative development partner from design through deployment.",
  },
];

const TIMELINE = [
  { year: "2024 - 2026", role: "MBA + MS Information Systems", org: "University of Utah — Eccles School of Business", note: "Graduating May 2026. Chairman, MBA Product Management Association (PMA). Dual degree spanning product, data systems, and systems management." },
  { year: "2025 - 2026", role: "Product Manager Intern", org: "The Church of Jesus Christ of Latter-day Saints", note: "AI chatbot launch, API automation pipelines, cross-functional 0 to 1 product delivery." },
  { year: "2024 - 2026", role: "PM Consultant", org: "Eccles School of Business", note: "PRD, Figma, and UAT for i4J. AI product roadmap for EnhancedAI Japan entry." },
  { year: "2021 - 2024", role: "Technical Project Manager", org: "Qualtrics", note: "$1.7M in margin identified and recovered. $245K quarterly PM labor costs saved. $122K credit received from vendor." },
];

const SKILLS = [
  "Product Strategy", "Roadmapping", "Agile / Scrum", "CSPO · CSM",
  "Figma", "Jira", "User Research", "A/B Experimentation",
  "Python", "SQL", "R", "Tableau",
  "Azure", "API Integration", "n8n", "AI/ML Concepts",
  "Spanish (Fluent)", "Portuguese (Working)",
];

// ============================================================
// HOOKS
// ============================================================
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    }}>{children}</div>
  );
}

// ============================================================
// SHAGGY SVG AVATAR
// ============================================================
function ShaggyAvatar({ size = 40 }) {
  return (
    <img
      src="/shaggy.png"
      alt="RAGgy"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "center top",
        flexShrink: 0,
      }}
    />
  );
}

// ============================================================
// RAGGY CHATBOT
// ============================================================
function Raggy() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Zoinks! Like, hey there! I'm RAGgy, Jacob's AI portfolio assistant. Ask me anything about his experience, skills, or projects — I've got the full scoop! *munch munch*",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");
    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
  "Content-Type": "application/json",
  "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY,
  "anthropic-version": "2023-06-01",
  "anthropic-dangerous-direct-browser-access": "true",
},
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: `You are RAGgy — a friendly, slightly goofy AI assistant on Jacob Tedders's product management portfolio website. You are named after Shaggy from Scooby-Doo (because Scooby calls him "Raggy" and this chatbot uses RAG). You speak in a warm, helpful tone with very occasional light Scooby-Doo flavor (like "zoinks" or "like, yeah!") but you are primarily professional and accurate. You exist to help hiring managers and recruiters quickly learn about Jacob.

IMPORTANT RULES:
- Only answer questions about Jacob Tedders using the knowledge base below
- If asked anything unrelated, politely redirect to Jacob's background
- Be concise: 2-4 sentences for most answers
- For contact info, always provide it directly and clearly
- Never make up information not in the knowledge base
- If you don't know something, say so and suggest contacting Jacob directly at teddersjacob@gmail.com

KNOWLEDGE BASE:
${JACOB_CORPUS}`,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = data.content?.[0]?.text || "Zoinks! Something went wrong on my end. Try again!";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Like, something went wrong! Try refreshing or contact Jacob directly at teddersjacob@gmail.com." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button onClick={() => setOpen(true)} style={{
          position: "fixed", bottom: "32px", right: "32px", zIndex: 999,
          display: "flex", alignItems: "center", gap: "10px",
          background: "#1a2240", color: "#fff",
          border: "1px solid rgba(79,142,247,0.3)", borderRadius: "100px",
          padding: "12px 20px 12px 12px", cursor: "pointer",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 600,
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.25)"; }}>
          <ShaggyAvatar size={34} />
          Ask RAGgy
        </button>
      )}

      {/* Chat drawer */}
      {open && (
        <div style={{
          position: "fixed", bottom: "32px", right: "32px", zIndex: 1000,
          width: "380px", maxHeight: "580px",
          background: "#0d1120", borderRadius: "24px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.20)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}>
          <style>{`
            @keyframes raggyBounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
            .raggy-input:focus { outline: none; border-color: #4f8ef7 !important; }
            .raggy-input::placeholder { color: #bbb; }
          `}</style>

          {/* Header */}
          <div style={{
            padding: "16px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "#0d1120", flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ShaggyAvatar size={36} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>RAGgy</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>Jacob's AI portfolio assistant</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)",
              width: "30px", height: "30px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}>
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: m.role === "user" ? "row-reverse" : "row", alignItems: "flex-end", gap: "7px" }}>
                {m.role === "assistant" && <div style={{ flexShrink: 0 }}><ShaggyAvatar size={26} /></div>}
                <div style={{
                  padding: "10px 14px", maxWidth: "80%",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.86rem", lineHeight: 1.65,
                  background: m.role === "user" ? "#1e3a6e" : "rgba(255,255,255,0.06)",
                  color: m.role === "user" ? "#fff" : "rgba(255,255,255,0.85)",
                  borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "7px" }}>
                <ShaggyAvatar size={26} />
                <div style={{ padding: "12px 16px", background: "rgba(255,255,255,0.06)", borderRadius: "18px 18px 18px 4px", display: "flex", gap: "4px", alignItems: "center" }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{ width: "7px", height: "7px", borderRadius: "50%", background: "rgba(255,255,255,0.4)", display: "inline-block", animation: "raggyBounce 1.2s infinite", animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          {messages.filter(m => m.role === "user").length === 0 && (
            <div style={{ padding: "0 14px 10px", display: "flex", flexWrap: "wrap", gap: "6px", flexShrink: 0 }}>
              {SUGGESTED_QUESTIONS.map(q => (
                <button key={q} onClick={() => sendMessage(q)} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.73rem", fontWeight: 500,
                  color: "#4f8ef7", background: "rgba(79,142,247,0.1)",
                  border: "1px solid rgba(79,142,247,0.2)", borderRadius: "100px",
                  padding: "5px 11px", cursor: "pointer", transition: "background 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(79,142,247,0.2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(79,142,247,0.1)"}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: "10px 14px 14px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "8px", alignItems: "center", flexShrink: 0 }}>
            <input
              ref={inputRef}
              className="raggy-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about Jacob..."
              style={{
                flex: 1, border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: "100px",
                padding: "10px 16px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.86rem",
                background: "rgba(255,255,255,0.05)", color: "#fff", transition: "border-color 0.2s",
              }}
            />
            <button onClick={() => sendMessage()} disabled={!input.trim() || loading} style={{
              width: "38px", height: "38px", borderRadius: "50%", border: "none", flexShrink: 0,
              background: input.trim() && !loading ? "#4f8ef7" : "rgba(255,255,255,0.1)",
              color: "#fff", cursor: input.trim() && !loading ? "pointer" : "default",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}>
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ============================================================
// NAV
// ============================================================
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "18px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(10,14,26,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none", transition: "all 0.4s ease" }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Jacob Tedders</span>
      <div style={{ display: "flex", gap: "32px" }}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "rgba(255,255,255,0.5)", textDecoration: "none", letterSpacing: "0.03em", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#fff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}>{l}</a>
        ))}
      </div>
    </nav>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  const fade = (d) => ({ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s` });
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 48px", position: "relative", overflow: "hidden", background: "#0a0e1a" }}>
      <div style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: "520px", height: "520px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "60px", top: "50%", transform: "translateY(-50%)", width: "240px", height: "240px", borderRadius: "50%", background: "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "700px", position: "relative", zIndex: 1 }}>
        <div style={fade(0.1)}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "6px 16px", marginBottom: "36px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4f8ef7", display: "inline-block" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>Open to PM roles · Graduating May 2026</span>
          </div>
        </div>
        <div style={fade(0.25)}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 28px" }}>
            Building products<br /><span style={{ color: "#4f8ef7", fontStyle: "italic" }}>that move the needle.</span>
          </h1>
        </div>
        <div style={fade(0.4)}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "520px", margin: "0 0 44px" }}>
            I'm a Product Manager with an enthusiasm for AI, enterprise software, and fintech. I combine my technical depth with clear, long-term vision to ship things that move metrics and matter to real users.
          </p>
        </div>
        <div style={{ ...fade(0.55), display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#work" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#0a0e1a", background: "#4f8ef7", padding: "14px 28px", borderRadius: "100px", textDecoration: "none", transition: "background 0.2s, transform 0.2s", display: "inline-block" }}
            onMouseEnter={e => { e.target.style.background = "#6ba8ff"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.background = "#4f8ef7"; e.target.style.transform = "none"; }}>See my work</a>
          <a href="#contact" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", padding: "14px 28px", borderRadius: "100px", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.15)", transition: "border-color 0.2s, transform 0.2s", display: "inline-block" }}
            onMouseEnter={e => { e.target.style.borderColor = "rgba(255,255,255,0.5)"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.transform = "none"; }}>Get in touch →</a>
        </div>
        <div style={{ ...fade(0.7), display: "flex", gap: "40px", marginTop: "72px" }}>
          {[["$1.7M", "Margin recovered"], ["$245K", "Quarterly labor costs saved"], ["70%", "Support volume reduction"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#fff" }}>{n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CAR BLOCK
// ============================================================
function CARBlock({ label, content, accent }) {
  const isResult = label === "R";
  return (
    <div style={{ background: isResult ? `${accent}15` : label === "A" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.03)", border: `1px solid ${isResult ? accent + "30" : "rgba(255,255,255,0.07)"}`, borderRadius: "12px", padding: "24px 28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontWeight: 700, color: isResult ? accent : "rgba(255,255,255,0.9)", background: isResult ? `${accent}25` : "rgba(255,255,255,0.08)", width: "28px", height: "28px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{label}</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
          {label === "C" ? "Context" : label === "A" ? "Action" : "Result"}
        </span>
      </div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>{content}</p>
    </div>
  );
}

// ============================================================
// PROJECT CARD
// ============================================================
function ProjectCard({ p, index }) {
  const [expanded, setExpanded] = useState(false);
  const isRight = p.logoSide === "right";

  return (
    <FadeIn delay={index * 0.08}>
      <div style={{
        display: "flex",
        flexDirection: isRight ? "row" : "row-reverse",
        alignItems: "flex-start",
        gap: "24px",
      }}>

        {/* Logo column */}
        {p.logo && (
          <div style={{
            flexShrink: 0,
            width: "140px",
            paddingTop: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <div style={{
              width: "140px",
              height: "140px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}>
              <img
                src={p.logo}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        )}

        {/* Card */}
        <div style={{
          flex: 1,
          background: p.color, borderRadius: "20px", overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: expanded ? "0 24px 64px rgba(0,0,0,0.3)" : "none",
        }}
          onMouseEnter={e => { if (!expanded) e.currentTarget.style.transform = "translateY(-4px)"; }}
          onMouseLeave={e => { if (!expanded) e.currentTarget.style.transform = "none"; }}>
          <div style={{ padding: "48px 48px 40px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: `${p.accent}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <p.Icon size={26} color={p.accent} strokeWidth={1.6} />
                </div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: p.accent, background: `${p.accent}18`, padding: "4px 12px", borderRadius: "100px" }}>{p.tag}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>{p.year}</span>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>{p.org}</span>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>{p.title}</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "28px", maxWidth: "560px" }}>{p.summary}</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
              {p.metrics.map(m => (
                <span key={m} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 500, color: p.accent, background: "rgba(255,255,255,0.05)", border: `1px solid ${p.accent}30`, padding: "5px 14px", borderRadius: "100px" }}>{m}</span>
              ))}
            </div>
            <button onClick={() => setExpanded(!expanded)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.83rem", fontWeight: 600, color: p.accent, background: "transparent", border: `1.5px solid ${p.accent}40`, borderRadius: "100px", padding: "9px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", transition: "background 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = `${p.accent}10`; e.currentTarget.style.borderColor = p.accent; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${p.accent}40`; }}>
              {expanded ? "Close case study" : "Read case study"}
              <span style={{ display: "inline-block", transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.3s", color: "inherit" }}>↓</span>
            </button>
          </div>
          <div style={{ maxHeight: expanded ? "2000px" : "0", overflow: "hidden", transition: "max-height 0.5s ease" }}>
            <div style={{ borderTop: `1px solid ${p.accent}20`, padding: "40px 48px 48px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <CARBlock label="C" content={p.car.context} accent={p.accent} />
              <CARBlock label="A" content={p.car.action} accent={p.accent} />
              <CARBlock label="R" content={p.car.result} accent={p.accent} />
            </div>
          </div>
        </div>

      </div>
    </FadeIn>
  );
}

// ============================================================
// SECTIONS
// ============================================================
function Story() {
  return (
    <section id="story" style={{ padding: "120px 48px", background: "#0d1120" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "220px 1fr 1fr", gap: "60px", alignItems: "center" }}>
        <FadeIn>
          <div style={{ position: "relative" }}>
            <div style={{ width: "220px", height: "260px", borderRadius: "28px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <img src="/headshot.jpg" alt="Jacob Tedders" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "80px", height: "80px", borderRadius: "16px", background: "rgba(79,142,247,0.08)", border: "1.5px solid rgba(79,142,247,0.15)", zIndex: -1 }} />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>About Me</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", marginTop: "12px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Before I was a PM, I was the person asking why we were doing this manually.
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: "20px" }}>
              My journey in product management started by saving Qualtrics $1.7M in eroded margin. What started as a one-off project ended up being a passion for deeply understanding user needs and crafting solutions that make their lives easier.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#555", lineHeight: 1.85, marginBottom: "20px" }}>
              For me, pursuing my MBA + MS in Information Systems was a natural next step in strengthening my business acumen and understanding where PM fits in the broader business context. Along the way I have launched AI products, built fintech prototypes, consulted on international product strategy, and led the MBA Product Management Association as Chairman.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
              Outside of work, I am a husband and father, a Star Wars fanatic, and someone who thinks deeply about how to build a life and a career that compound over time. I bring that same intentionality to my role as a PM.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "28px", flexWrap: "wrap" }}>
              {["MBA + MS IS · Utah '26", "CSPO · CSM Certified", "Fluent Spanish"].map(b => (
                <span key={b} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 500, color: "#4f8ef7", background: "rgba(79,142,247,0.12)", padding: "6px 14px", borderRadius: "100px" }}>{b}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Work() {
  return (
    <>
      {/* AI Case Studies */}
      <section id="work" style={{ padding: "120px 48px 0", background: "#0a0e1a" }}>
        <FadeIn>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>Selected Work</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "12px", letterSpacing: "-0.02em" }}>AI Case Studies</h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.35)", marginTop: "10px", marginBottom: "52px" }}>Each card expands into the full story — context, approach, and outcome.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {AI_PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
            </div>
          </div>
        </FadeIn>

        {/* Projects Done With AI subsection */}
        <FadeIn delay={0.1}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 0 100px" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "24px", padding: "52px 52px 44px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ marginBottom: "36px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", color: "#4f8ef7", textTransform: "uppercase", fontWeight: 600 }}>Also in the AI toolkit</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", marginTop: "10px", letterSpacing: "-0.02em" }}>
                  Projects Done With AI
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.4)", marginTop: "8px", lineHeight: 1.7, maxWidth: "560px" }}>
                  Beyond the case studies above, here is a running sample of tools, automations, and artifacts built with AI as a core part of the workflow.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {AI_MINI_PROJECTS.map((item, i) => (
                  <FadeIn key={item.title} delay={i * 0.06}>
                    <div style={{
                      background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "20px 22px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      transition: "border-color 0.2s, transform 0.2s",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(79,142,247,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "none"; }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "#fff" }}>{item.title}</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "#4f8ef7", background: "rgba(79,142,247,0.12)", padding: "3px 9px", borderRadius: "100px", whiteSpace: "nowrap", flexShrink: 0, marginLeft: "10px" }}>{item.tool}</span>
                      </div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Other Relevant Case Studies */}
      <section style={{ padding: "0 48px 120px", background: "#0a0e1a" }}>
        <FadeIn>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "52px" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>More Work</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "12px", letterSpacing: "-0.02em" }}>Other Relevant Case Studies</h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.35)", marginTop: "10px", marginBottom: "52px" }}>Additional projects spanning fintech and enterprise software.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {OTHER_PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 48px", background: "#0d1120" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "72px" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>Background</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "12px", letterSpacing: "-0.02em" }}>Experience</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "72px" }}>
          {TIMELINE.map((t, i) => (
            <FadeIn key={t.org} delay={i * 0.08}>
              <div style={{ border: "1.5px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "32px", background: "rgba(255,255,255,0.03)", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#4f8ef7"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#4f8ef7", marginBottom: "8px" }}>{t.year}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>{t.role}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", marginBottom: "16px", fontStyle: "italic" }}>{t.org}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{t.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "24px" }}>Skills & Tools</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {SKILLS.map(s => (
                <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.04)", padding: "7px 16px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.08)", transition: "background 0.2s, color 0.2s", cursor: "default" }}
                  onMouseEnter={e => { e.target.style.background = "rgba(79,142,247,0.12)"; e.target.style.color = "#4f8ef7"; }}
                  onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.04)"; e.target.style.color = "rgba(255,255,255,0.6)"; }}>{s}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 48px", background: "#1a1a1a" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "#666", textTransform: "uppercase" }}>Let's Talk</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "#fff", marginTop: "16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            I'm looking for my<br /><span style={{ color: "#4f8ef7", fontStyle: "italic" }}>next great problem.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#888", lineHeight: 1.8, margin: "28px auto 48px", maxWidth: "440px" }}>
            If you are building something ambitious and need a PM who brings both strategic thinking and technical depth, let us connect.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:teddersjacob@gmail.com" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#0a0e1a", background: "#4f8ef7", padding: "16px 32px", borderRadius: "100px", textDecoration: "none", transition: "background 0.2s, transform 0.2s", display: "inline-block" }}
              onMouseEnter={e => { e.target.style.background = "#6ba8ff"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "#4f8ef7"; e.target.style.transform = "none"; }}>Send me a note</a>
            <a href="https://linkedin.com/in/teddersjacob" target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "#ccc", padding: "16px 32px", borderRadius: "100px", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.15)", transition: "border-color 0.2s, color 0.2s, transform 0.2s", display: "inline-block" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#ccc"; e.currentTarget.style.transform = "none"; }}>LinkedIn →</a>
          </div>
          <div style={{ marginTop: "80px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#555" }}>Jacob Tedders · Salt Lake City, UT · MBA + MS IS, University of Utah '26</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ============================================================
// ROOT
// ============================================================
export default function Portfolio() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(link2);
    document.body.style.margin = "0";
    document.body.style.background = "#0a0e1a";
  }, []);
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Nav />
      <Hero />
      <Story />
      <Work />
      <Experience />
      <Contact />
      <Raggy />
    </div>
  );
}
