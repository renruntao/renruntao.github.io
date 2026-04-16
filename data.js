// ============================================================
//  data.js — All site content in one place
//  Edit this file (or use admin.html) then commit & refresh
// ============================================================
const SITE = {
  "profile": {
    "name": "Runtao Ren",
    "title": "Ph.D. Researcher",
    "affiliation": "City University of Hong Kong",
    "photo": "profile.jpg",
    "welcomeText": "👋 Welcome to my academic homepage",
    "heroTitle": "Exploring the boundaries of",
    "heroHighlight": "GenAI & Design Theory",
    "bio": "I am <strong>Runtao Ren</strong>, a research fellow of Mines Paris-PSL and Ph.D. candidate at City University of Hong Kong. My current research focuses on <span class=\"font-semibold text-blue-600\">Generative AI</span>, <span class=\"font-semibold text-indigo-600\">Human-Machine Co-Creation</span>, and <span class=\"font-semibold text-purple-600\">Design Theory</span>. My developed system and methods have been adopted by multiple companies (e.g., ScholarMate) and agencies (e.g., China's Western Digital Economy Research Institute). <br>",
    "citationCount": "150+",
    "email": "runtaoren@gmail.com",
    "scholarUrl": "https://scholar.google.com/citations?user=VQN2kbAAAAAJ&hl=en",
    "orcidUrl": "https://orcid.org/0000-0001-6480-8816",
    "githubUrl": "",
    "footerTagline": "Exploring the frontiers of Generative AI and Design Theory."
  },
  "news": [
    {
      "date": "2026",
      "tag": "Awarded",
      "content": "Received the <strong> College PhD Student Teaching Excellence Award </strong> from CityUHK.",
      "image": "teaching award.jpg"
    },
    {
      "date": "2025",
      "tag": "Awarded",
      "content": "Received the <strong> Research Tuition Scholarship </strong> from CityUHK.",
      "image": ""
    }
  ],
  "publications": [
    {
      "title": "Large language model for patent concept generation",
      "authors": "Runtao Ren, Jian Ma, Jianxi Luo",
      "venue": "Advanced Engineering Informatics 65, 103301",
      "year": 2025,
      "citations": 17,
      "tags": [
        "LLM",
        "Patent",
        "Fine-tuning"
      ],
      "link": "https://doi.org/10.1016/j.aei.2025.103301",
      "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      "title": "Large language model for interpreting research policy using adaptive two-stage retrieval augmented fine-tuning method",
      "authors": "Runtao Ren, Jian Ma, Zhimin Zheng",
      "venue": "Expert Systems with Applications 278, 127330",
      "year": 2025,
      "citations": 12,
      "tags": [
        "LLM",
        "RAG",
        "Fine-tuning"
      ],
      "link": "https://doi.org/10.1016/j.eswa.2025.127330",
      "image": "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=800&auto=format&fit=crop"
    }
  ],
  "grants": [
    {
      "title": "Research on Human-Machine Collaborative Peer Review Method based on Deep Research Paradigm",
      "role": "PI",
      "period": "2026 - Now",
      "agency": "National Natural Science Foundation of China",
      "status": "Ongoing",
      "amount": "￥300,000",
      "image": "data:image/png;base64,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"
    }
  ],
  "visitorMap": {
    "enabled": true,
    "embedHtml": ""
  },
  "contact": {
    "email": "runtaoren2-c@my.cityu.edu.hk<br>runtao.ren@minesparis.psl.eu",
    "location": "",
    "office": "",
    "phone": "",
    "note": ""
  }
};
