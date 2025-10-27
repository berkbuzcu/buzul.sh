export type Project = {
    uid: string
    title: string
    description: string
    tech?: string[]
    link?: string
}

export const sampleProjects: Project[] = [
    {
        uid: 'proj-001',
        title: 'Personal Portfolio',
        description: 'Fast, accessible portfolio with blog and projects.',
        tech: ['Astro', 'TypeScript', 'CSS'],
        link: '#'
    },
    {
        uid: 'proj-002',
        title: 'Design System',
        description: 'Reusable UI components with tokens and theming.',
        tech: ['Storybook', 'Figma', 'TypeScript'],
        link: '#'
    },
    {
        uid: 'proj-003',
        title: 'Analytics API',
        description: 'Event ingestion and reporting service.',
        tech: ['Node.js', 'PostgreSQL', 'Docker'],
        link: '#'
    },
    {
        uid: 'proj-004',
        title: 'Realtime Chat',
        description: 'Minimal chat app with presence and typing indicators.',
        tech: ['WebSocket', 'Redis', 'React'],
        link: '#'
    },
]


