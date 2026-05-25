import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    number: '01',
    title: 'Invoice Processing Automation',
    category: 'Workflow Automation',
    description: 'Automated invoice processing for a logistics company, reducing manual data entry by 80% and processing time from days to minutes.',
    results: ['80% time saved', '99.5% accuracy', 'ROI in 3 months'],
  },
  {
    number: '02',
    title: 'AI Customer Service Bot',
    category: 'AI Adoption',
    description: 'Implemented an AI-powered chatbot for a retail SME, handling 70% of customer queries automatically and improving response times.',
    results: ['70% queries automated', '24/7 availability', '40% cost reduction'],
  },
  {
    number: '03',
    title: 'Power Automate Integration',
    category: 'Microsoft Power Automate',
    description: 'Connected CRM, accounting, and inventory systems for a wholesale distributor, creating seamless data flow across departments.',
    results: ['5 systems integrated', 'Real-time sync', 'Zero manual transfers'],
  },
  {
    number: '04',
    title: 'Digital Transformation Roadmap',
    category: 'Consulting',
    description: 'Developed and executed a 12-month digital transformation strategy for a manufacturing SME, modernizing operations end-to-end.',
    results: ['30% efficiency gain', 'Cloud migration', 'Team upskilled'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Sample Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight mb-6 text-balance">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we&apos;ve helped Singapore SMEs achieve measurable improvements through automation and AI.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Number */}
                <div className="hidden lg:block w-20 flex-shrink-0">
                  <span className="text-5xl font-serif font-medium text-border group-hover:text-primary/40 transition-colors">
                    {project.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-medium text-foreground">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-0">
                    {project.description}
                  </p>
                </div>
                
                {/* Results */}
                <div className="flex flex-wrap gap-2 lg:flex-shrink-0 lg:w-64">
                  {project.results.map((result, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <Link
                  href="#contact"
                  className="hidden lg:flex w-12 h-12 items-center justify-center rounded-full border border-border group-hover:border-primary group-hover:bg-primary transition-all"
                  aria-label={`Discuss ${project.title}`}
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-secondary border border-border rounded-full font-medium text-foreground hover:border-primary/50 transition-all"
          >
            Discuss Your Project
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
