export type Paper = {
	uid: string
	title: string
	authors: string[]
	year: number
	venue?: string
	doi?: string
	keywords?: string[]
	file?: string
}

export const samplePapers: Paper[] = [
    {
        uid: 'paper-001',
        title: 'Explanation-based negotiation protocol for nutrition virtual coaching',
        authors: ['B Berk Buzcu', 'V Varadhajaran', 'I Tchappi', 'A Najjar', 'D Calvaresi', 'R Aydoğan'],
        year: 2022,
        venue: 'International Conference on Principles and Practice of Multi-Agent Systems',
        keywords: ['negotiation', 'nutrition', 'virtual coaching', 'explanation'],
    },
    {
        uid: 'paper-002',
        title: 'Towards interactive explanation-based nutrition virtual coaching systems',
        authors: ['B Berk Buzcu', 'M Tessa', 'I Tchappi', 'A Najjar', 'J Hulstijn', 'D Calvaresi', 'R Aydoğan'],
        year: 2024,
        venue: 'Autonomous Agents and Multi-Agent Systems',
        keywords: ['explanation', 'nutrition', 'virtual coaching'],
    },
    {
        uid: 'paper-003',
        title: 'Conflict-based negotiation strategy for human-agent negotiation',
        authors: ['M O Keskin', 'B Berk Buzcu', 'R Aydoğan'],
        year: 2023,
        venue: 'Applied Intelligence',
        keywords: ['negotiation', 'conflict', 'human-agent'],
    },
    {
        uid: 'paper-004',
        title: 'User-centric Explanation Strategies for Interactive Recommenders',
        authors: ['B Berk Buzcu', 'E Kuru', 'R Aydogan'],
        year: 2024,
        venue: 'Proceedings of the 23rd International Conference on Autonomous Agents and Multi-Agent Systems',
        keywords: ['explanation', 'recommender systems', 'interactive systems'],
    },
    {
        uid: 'paper-005',
        title: 'Computational persuasion technologies, explainability, and ethical-legal implications: A systematic literature review',
        authors: ['D Calvaresi', 'R Carli', 'S Tiribelli', 'B Berk Buzcu', 'R Aydogan', 'A Di Vincenzo'],
        year: 2024,
        venue: 'Computers in Human Behavior Reports',
        keywords: ['persuasion', 'explainability', 'ethics'],
    },
    {
        uid: 'paper-006',
        title: '2024 Index IEEE Robotics & Automation Magazine Vol. 31',
        authors: ['T Anzai', 'I Armeni', 'K O Arras', 'A Astolfi', 'J Avendano', 'C A Avizzano', 'B Berk Buzcu', /* and others */],
        year: 2024,
        venue: 'IEEE Robotics & Automation Magazine',
        keywords: ['index', 'robotics', 'automation'],
    },
    {
        uid: 'paper-007',
        title: 'NEGOTIATOR: A Comprehensive Framework for Human-Agent Negotiation Integrating Preferences, Interaction, and Emotion',
        authors: ['M O Keskin', 'B Berk Buzcu', 'B Koçyigit', 'U Cakan', 'A Dogru', 'R Aydogan'],
        year: 2024,
        venue: 'Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence',
        keywords: ['negotiation', 'emotion', 'human-agent interaction'],
    },
    {
        uid: 'paper-008',
        title: 'Towards Dynamic Self-Organizing Wearables for Head and Neck Digital Rehabilitation',
        authors: ['B Berk Buzcu', 'D Calvaresi', 'B Anuraj', 'J P Calbimonte'],
        year: 2024,
        venue: 'Proceedings of the 18th ACM International Conference on Distributed and Event-based Systems',
        keywords: ['wearables', 'digital rehabilitation', 'self-organizing systems'],
    },
    {
        uid: 'paper-009',
        title: 'A Framework for Explainable Multi-purpose Virtual Assistants: A Nutrition-Focused Case Study',
        authors: ['B Berk Buzcu', 'Y Pannatier', 'R Aydoğan', 'M Ignaz Schumacher', 'J P Calbimonte', 'D Calvaresi'],
        year: 2024,
        venue: 'International Workshop on Explainable, Transparent Autonomous Agents and Multi-Agent Systems',
        keywords: ['explanation', 'virtual assistants', 'nutrition'],
    },
    {
        uid: 'paper-010',
        title: 'Evaluation of the User-Centric Explanation Strategies for Interactive Recommenders',
        authors: ['B Berk Buzcu', 'E Kuru', 'D Calvaresi', 'R Aydoğan'],
        year: 2024,
        venue: 'International Workshop on Explainable, Transparent Autonomous Agents and Multi-Agent Systems',
        keywords: ['explanation', 'evaluation', 'recommender systems'],
    },
    {
        uid: 'paper-011',
        title: 'NEGOTIATOR',
        authors: ['M O Keskin', 'B Berk Buzcu', 'B Koçyiğit', 'U Ç Cakan', 'A D Doğru', 'R Aydoğan'],
        year: 2024,
        keywords: ['negotiation', 'agents'],
    },
    {
        uid: 'paper-012',
        title: 'A Framework for Explainable Multi-purpose Virtual Assistants',
        authors: ['B Berk Buzcu', 'Y Pannatier', 'R Aydoğan', 'M Ignaz Schumacher', 'J P Calbimonte', 'D Calvaresi'],
        year: 2024,
        keywords: ['explainable AI', 'virtual assistants'],
    },
    {
        uid: 'paper-013',
        title: 'Fully Autonomous Trustworthy Unmanned Aerial Vehicle Teamwork',
        authors: ['B Berk Buzcu', 'M Ozgun', 'O Gurcan', 'R Aydoğan'],
        year: 2024,
        keywords: ['autonomous systems', 'UAV', 'trustworthy AI'],
    },
    {
        uid: 'paper-014',
        title: 'Explanation Strategies for Interactive',
        authors: ['B Berk Buzcu', 'E Kuru', 'D Calvaresi', 'R Aydoğan'],
        year: 2024,
        venue: 'Explainable and Transparent AI and Multi-Agent Systems: 6th International Workshop',
        keywords: ['explanation', 'interactive systems'],
    },
    {
        uid: 'paper-015',
        title: 'A general-purpose protocol for multi-agent based explanations',
        authors: ['G Ciatto', 'M Magnini', 'B Berk Buzcu', 'R Aydoğan', 'A Omicini'],
        year: 2023,
        venue: 'International Workshop on Explainable, Transparent Autonomous Agents and Multi-Agent Systems',
        keywords: ['explainability', 'multi-agent systems', 'protocol'],
    },
    {
        uid: 'paper-016',
        title: 'Fully autonomous trustworthy unmanned aerial vehicle teamwork: A research guideline using level 2 blockchain',
        authors: ['B Berk Buzcu', 'M Özgün', 'Ö Gürcan', 'R Aydoğan'],
        year: 2023,
        venue: 'IEEE Robotics & Automation Magazine',
        keywords: ['UAV', 'blockchain', 'trustworthy AI'],
    }
]


