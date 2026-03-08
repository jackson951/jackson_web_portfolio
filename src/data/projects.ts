import { Project } from '../types'

const projects: Project[] = [
  {
    id: '1',
    title: 'Telemetry Management API',
    description: 'Production-grade RESTful CRUD API for tracking automation savings by project and client. Deployed live to Microsoft Azure with full Swagger/OpenAPI documentation. Includes a companion ASP.NET Core MVC portal for web-based management.',
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Azure', 'Swagger/OpenAPI', 'MVC'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/jackson951/Telemetry-Management-API-CRUD-operations',
    category: 'web'
  },
  {
    id: '2',
    title: 'Telemetry Portal',
    description: 'Web portal for managing projects and clients with full CRUD operations. Built with ASP.NET Core MVC and hosted on Azure. Provides a clean interface for interacting with the Telemetry Management API.',
    technologies: ['ASP.NET Core', 'C#', 'MVC', 'Azure', 'SQL Server', 'Razor Pages'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/jackson951/TELEMETRY-PORTAL-WITH-CRUD-CREATE-READ-UPDATE-DELETE-OPERATIONS',
    category: 'web'
  },
  {
    id: '3',
    title: 'FlexiLeave',
    description: 'Full-stack leave management system with role-based access control for employees, managers, and HR. Features secure JWT authentication, multi-level approval workflows, and a responsive Material UI dashboard.',
    technologies: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Material UI'],
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/jackson951/flexileave-app',
    category: 'web'
  },
  {
    id: '4',
    title: 'StreetLuxCity — Storefront',
    description: 'Modern e-commerce storefront built with Next.js and TypeScript. Features a responsive product catalog, cart management, and a clean UI powered by TailwindCSS. Backed by a dedicated Spring Boot REST API.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'React', 'REST API'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/jackson951/streetluxcity-shop',
    category: 'web'
  },
  {
    id: '5',
    title: 'StreetLuxCity — API',
    description: 'Dedicated Spring Boot REST API backend for the StreetLuxCity e-commerce platform. Handles product management, orders, authentication, and business logic. Demonstrates full ownership of the API layer.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'Maven'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/jackson951/api.streetluxcity',
    category: 'web'
  },
  {
    id: '6',
    title: 'Surveying App',
    description: 'Full-stack lifestyle survey application with a real-time analytics dashboard. Built entirely on a JavaScript stack with dynamic chart rendering and SQLite-backed data persistence.',
    technologies: ['React.js', 'Node.js', 'Express', 'SQLite', 'Chart.js', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/jackson951/surveying-app',
    category: 'web'
  }
]

export { projects }