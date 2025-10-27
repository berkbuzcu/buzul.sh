export type Project = {
    uid: string
    title: string
    description: string
    year: number
    tech?: string[]
    link?: string
    image?: string
}

export const sampleProjects: Project[] = [
    {
        uid: 'proj-001',
        title: 'Unity6G',
        description: 'Building A unified architecture for open RAN-enabled distributed, scalable and sustainable 6G networks',
        year: 2025,
        tech: ['6G', 'Energy Efficiency', 'Distributed Networks'],
        link: 'https://unity-6g.eu/',
        image: '/projects/UNITY-6G_logo_white-1024x939.png'
    },
    {
        uid: 'proj-002',
        title: 'SmartEdge',
        description: 'SMARTEDGE is a European project on semantic low-code programming tools for edge intelligence, with use cases in manufacturing, automotive, and healthcare.',
        year: 2025,
        tech: ['BLE', 'Knowledge Graphs', 'Flutter'],
        link: 'https://smart-edge.eu/',
        image: '/projects/logo-smartedge-full.png'
    },
    {
        uid: 'proj-003',
        title: 'EXPECTATION',
        description: 'The project includes the validation of the personalization and heterogeneous knowledge integration approach through a prototype application in the domain of food and nutrition monitoring and recommendation, including the evaluation of agent-human explainability, and the performance of the employed techniques in a collaborative AI environment.',
        year: 2021,
        tech: ['XAI', 'Recommender Systems', 'Multi-agent Systems'],
        link: 'https://expectation.ehealth.hevs.ch/posts/home/',
        image: '/projects/full_expectation_logo.png'
    },
]


