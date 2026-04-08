export const profile = {
  name: "Jay Jaewan Park",
  title: "Head of BD",
  tagline: "Turning blockchain infrastructure into real-world financial use cases",
  email: "jayonchain94@gmail.com",
  telegram: "@jponchain247",
  linkedin: "https://www.linkedin.com/in/jaewan-park",
  phone: "+82 10-8931-1002",
  summary:
    "Web3 BD professional with 5+ years of experience working with enterprises, institutions, and leading industry players. Core focus on turning financial innovation built on blockchain into practical, real-world use cases — from stablecoin infrastructure and RWA partnerships to ecosystem fund operations and cross-chain payment settlement.",
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Catalyze",
    role: "Head of BD",
    period: "Sep 2024 – Present",
    location: "Korea",
    highlights: [
      "Led Korea GTM strategy for institutional blockchain infra providers (Ripple, Axelar), driving stablecoins and RWA adoption across financial institutions and payment service providers",
      "Served as fund operator for Ripple's XRPL KR·JP Ecosystem Fund — Doppler Finance grew into XRPL's No.1 DeFi protocol ($120M TVL)",
      "Secured a multi-chain stablecoin PoC with Hana Financial TI, validating XRPL and EVM-based settlement",
      "Operated as external grant program partner for Futureverse's ecosystem fund (~$10M), managing full program cycle",
      "Drove an integration PoC with Danal, validating interchain settlement architecture for global stablecoin payments",
      "Owned sales pipeline and CRM, engaging 500+ projects through structured research and strategic outreach",
    ],
  },
  {
    company: "Lotte Group",
    role: "Web3 BD Lead",
    period: "Sep 2022 – Jun 2024",
    location: "Korea",
    highlights: [
      "Owned end-to-end Web3 business conversion across 10+ affiliates, driving $11M+ in annual revenue",
      "Led tokenization of Lotte's digital currency (L.POINT) enabling unified blockchain experience across 90+ affiliates in Korea and SEA",
      "Structured and closed a $10M milestone-based deal, driving project acceleration and ecosystem growth",
      "Forged 20+ high-impact partnerships with Polygon, Aptos, Chainlink, and Pudgy Penguins",
      "Designed blockchain-based loyalty program driving 300k+ MAU and 13k+ UAW within the first month",
    ],
  },
  {
    company: "Pizza DAO",
    role: "APAC Community Lead",
    period: "Mar 2021 – Present",
    location: "Global",
    highlights: [
      "Managed Korean community of proactive builders and traders, organizing Bitcoin Pizza Day events annually since 2021",
      "Achieved $1M in NFT sales, donated free pizza to nearly 10k people worldwide including students in Africa",
      "Delivered 500+ free pizzas to single-parent families and low-income households in Seoul",
    ],
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  keyOutcome: string;
  sections: { heading: string; content: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "hana-financial",
    title: "KRW Stablecoin Issuance & Distribution PoC",
    subtitle: "Hana Financial TI",
    keyOutcome:
      "Established an internal decision-making framework that prioritizes 'post-issuance operational viability' over 'technical feasibility', and validated it through a PoC with Hana Financial TI.",
    sections: [
      {
        heading: "Background",
        content:
          "Joint PoC with Hana Financial TI to validate whether KRW stablecoins can be operationally viable in a financial institution environment. The core question was not about technical implementation, but about operational structure: consistent global settlement control, multi-chain integrity, and clear accountability for regulatory incidents.",
      },
      {
        heading: "Role: Project Owner & Decision Lead",
        content:
          "Defined business logic for the full issuance-distribution-redemption cycle. Negotiated PoC scope and roles with global infra partners (Axelar, Ripple). Designed operational control scenarios (Blacklist, Freeze, Clawback). Documented Go/No-Go framework for executive reporting.",
      },
      {
        heading: "Tech Stack Selection",
        content:
          "Axelar (cross-chain integrity), Ethereum (anchor layer), Polygon (low-cost execution), XRP Ledger (settlement-optimized chain). Selected based on post-issuance operational role, not feature comparison.",
      },
      {
        heading: "Outcome",
        content:
          "Successfully shifted internal PoC evaluation criteria from 'can we build it' to 'can we operate it'. Multi-chain expansion framed as a supply management and policy enforcement problem. PoC structure became internal reference for subsequent institutional projects.",
      },
    ],
  },
  {
    id: "danal-squid",
    title: "Multi-chain Stablecoin Payment Settlement",
    subtitle: "Danal × Squid (Coral V2)",
    keyOutcome:
      "Pre-defined settlement risks of AMM-based cross-chain payment structures, and validated an alternative architecture (Coral V2) that satisfies both result determinism and operational accountability required in institutional/PG environments.",
    sections: [
      {
        heading: "Background",
        content:
          "Evaluated whether diverse digital asset payments from public multi-chain environments could be operationally viable within Danal's existing payment/settlement infrastructure. Led the full structure review from a settlement perspective and conducted direct technical/business discussions with Squid in English.",
      },
      {
        heading: "Problem Definition",
        content:
          "AMM-based cross-chain payments fail in institutional settings: final amount unknown until execution (settlement risk), slippage transfers to settlement gap (accounting failure), bridge failures create accountability disputes.",
      },
      {
        heading: "Adopted Structure: Coral V2",
        content:
          "Intent/RFQ-based execution replacing AMM. Pre-determined receive amount at quote time. Market Maker guarantees outcome (settlement risk eliminated). Escrow + verification for clear accountability. Single transaction UX.",
      },
      {
        heading: "Outcome",
        content:
          "Validated feasibility of a structure that accepts diverse multi-chain asset inflows while meeting institutional settlement requirements. Confirmed that separating execution (user layer) from settlement/liquidity management (backend layer) is the core design principle for institutional multi-chain payments.",
      },
    ],
  },
  {
    id: "xrpl-fund",
    title: "XRPL Ecosystem Strategic Investment & Incubation",
    subtitle: "Ripple KR·JP Fund",
    keyOutcome:
      "Identified structural pain points in the Korean market (33% of global XRP volume but low on-chain conversion), and incubated Girin Wallet and Doppler Finance from zero to XRPL's No.1 DeFi protocol ($120M TVL).",
    sections: [
      {
        heading: "Background",
        content:
          "Korea represents ~33% of global XRP trading volume and ~25% of holdings, yet most $XRP remained locked in CEXes without flowing on-chain. Ripple established the KR·JP ecosystem fund, and Catalyze was entrusted with the full operation: investment decisions, grantee selection, and milestone management.",
      },
      {
        heading: "Pain Points & Strategy",
        content:
          "Entry barrier: XRPL wallet creation harder than EVM → incubated Girin Wallet (social login self-custody). Yield gap: $XRP cannot generate native yield → incubated Doppler Finance (CeDeFi model for $XRP yield).",
      },
      {
        heading: "Role: Strategy & Incubation Lead",
        content:
          "Defined DeFi as the critical growth sector. Sourced Delight Labs (Terraswap, XPLA, Chai Card experience). Led grant evaluation to secure Ripple's official first KR·JP fund investment. Participated as angel investment lead. Sourced Fireblocks as custody partner for CeDeFi model.",
      },
      {
        heading: "Outcome",
        content:
          "Doppler Finance: raised from Maven11, HashKey Capital, GSR. Now collaborating with Bybit, Bitget. Became the representative DeFi protocol for $XRP and $RLUSD. Girin Wallet: grew into ecosystem's leading wallet, expanded to Crypto Card business.",
      },
    ],
  },
  {
    id: "futureverse",
    title: "Ecosystem Grant Program Design & Operation",
    subtitle: "Futureverse — Born Ready Ventures",
    keyOutcome:
      "Independently designed and operated a ~$10M ecosystem grant fund end-to-end: from fund formation and AC onboarding to builder sourcing, investment evaluation, execution, and Cohort 1 completion.",
    sections: [
      {
        heading: "Background",
        content:
          "Futureverse raised $54M from Ripple to build The Root Network (L1) with Super IP (Ready Player One, MLB, DC Comics). Catalyze co-established a ~$10M grant fund with Born Ready Ventures and was entrusted with full program operation.",
      },
      {
        heading: "Program Design: Dual Track",
        content:
          "Ignite Track: Small-to-mid builders creating on-chain activity (8 teams selected). Nexus Track: Flagship IP/gaming projects as ecosystem anchors (2 teams selected). AC partner: ShardLab (Hashed's R&D innovation arm).",
      },
      {
        heading: "Role: Program Designer & Sourcing Lead",
        content:
          "Designed grant tracks, milestone frameworks, KPI systems. Established investment committee governance (3-of-5 voting). Sourced consumer apps, IP projects, and gaming projects across APAC. Connected ShardLab as accelerator partner for SEA community expansion.",
      },
      {
        heading: "Outcome",
        content:
          "5x increase in on-chain transactions. Secured flagship IP and gaming projects. Expanded to SEA key markets (Thailand, Vietnam, Malaysia). Proved institutional-grade fund operation capability beyond BD.",
      },
    ],
  },
];

export interface Research {
  partner: string;
  title: string;
  description: string;
  url: string;
}

export const research: Research[] = [
  {
    partner: "Ripple",
    title: "Ripple Prime: XRPL's Institutional Infrastructure Strategy",
    description:
      "Analysis of how Ripple Prime and Hyperliquid integration present a new financial standard connecting TradFi and DeFi.",
    url: "#",
  },
  {
    partner: "Axelar",
    title: "Stablecoin Infrastructure and Financial Institution Utilization Strategy",
    description:
      "Structural requirements for financial institutions evaluating stablecoins as payment and settlement assets.",
    url: "#",
  },
  {
    partner: "RedStone",
    title: "Credora: Establishing the Standard for DeFi Risk Ratings",
    description:
      "Analysis of oracle business models building on-chain trust infrastructure beyond over-collateralized risk models.",
    url: "#",
  },
  {
    partner: "Squid",
    title: "Redefining Cross-Chain Execution for Payments and Institutions",
    description:
      "Why AMM-based structures misalign with institutional needs, and RFQ model integrity assessment.",
    url: "#",
  },
  {
    partner: "Midnight",
    title: "Integrating Data Sovereignty with Institutional Privacy",
    description:
      "Analysis of blockchain's privacy trilemma and ZK-based selective disclosure infrastructure scalability.",
    url: "#",
  },
];

export const education = {
  school: "Sogang University, Sogang Business School",
  degree: "Bachelor's degree in Business Administration",
  period: "Feb 2013 – Feb 2021",
  location: "Seoul, Korea",
};
