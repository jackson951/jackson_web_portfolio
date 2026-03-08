import { Skill } from '../types'

const skills: Record<string, Skill[]> = {
  frontend: [
    { id: '1', name: 'React', level: 95, category: 'frontend' },
    { id: '2', name: 'TypeScript', level: 90, category: 'frontend' },
    { id: '3', name: 'JavaScript (ES6+)', level: 90, category: 'frontend' },
    { id: '4', name: 'HTML5', level: 95, category: 'frontend' },
    { id: '5', name: 'CSS3', level: 90, category: 'frontend' },
    { id: '6', name: 'Styled Components', level: 85, category: 'frontend' },
    { id: '7', name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { id: '8', name: 'Framer Motion', level: 85, category: 'frontend' },
    { id: '9', name: 'React Router', level: 85, category: 'frontend' },
  ],
  backend: [
    { id: '10', name: 'Node.js', level: 85, category: 'backend' },
    { id: '11', name: 'Express.js', level: 80, category: 'backend' },
    { id: '12', name: 'Python', level: 75, category: 'backend' },
    { id: '13', name: 'Django', level: 70, category: 'backend' },
    { id: '14', name: 'RESTful APIs', level: 85, category: 'backend' },
    { id: '15', name: 'GraphQL', level: 70, category: 'backend' },
    { id: '16', name: 'MongoDB', level: 75, category: 'backend' },
    { id: '17', name: 'PostgreSQL', level: 70, category: 'backend' },
  ],
  tools: [
    { id: '18', name: 'Git & GitHub', level: 90, category: 'tools' },
    { id: '19', name: 'Docker', level: 75, category: 'tools' },
    { id: '20', name: 'VS Code', level: 95, category: 'tools' },
    { id: '21', name: 'npm/yarn', level: 90, category: 'tools' },
    { id: '22', name: 'Webpack', level: 70, category: 'tools' },
    { id: '23', name: 'Vite', level: 80, category: 'tools' },
    { id: '24', name: 'Jest', level: 70, category: 'tools' },
    { id: '25', name: 'Postman', level: 80, category: 'tools' },
  ],
  other: [
    { id: '26', name: 'UI/UX Design', level: 75, category: 'other' },
    { id: '27', name: 'Responsive Design', level: 90, category: 'other' },
    { id: '28', name: 'Performance Optimization', level: 80, category: 'other' },
    { id: '29', name: 'Problem Solving', level: 90, category: 'other' },
    { id: '30', name: 'Team Collaboration', level: 85, category: 'other' },
  ],
}

export { skills }