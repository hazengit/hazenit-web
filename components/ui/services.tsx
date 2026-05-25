import { 
  Workflow, 
  Brain, 
  Zap, 
  GraduationCap, 
  Laptop,
  ArrowUpRight 
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and business processes with intelligent automation solutions that save time and reduce errors.',
    number: '01',
  },
  {
    icon: Brain,
    title: 'AI Adoption',
    description: 'Leverage the power of artificial intelligence to gain insights, automate decisions, and enhance customer experiences.',
    number: '02',
  },
  {
    icon: Zap,
    title: 'Microsoft Power Automate',
    description: 'Expert implementation of Microsoft Power Platform to connect apps, automate workflows, and build business solutions.',
    number: '03',
  },
  {
    icon: GraduationCap,
    title: 'IT Training',
    description: 'Empower your team with hands-on training in automation tools, AI applications, and modern productivity solutions.',
    number: '04',
  },
  {
    icon: Laptop,
    title: 'Digital Transformation',
    description: 'End-to-end consulting to modernize your business operations, from strategy to implementation and beyond.',
    number: '05',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight text-balance">
              Solutions Tailored for SME Success
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            We offer a comprehensive range of services designed to help small and medium enterprises thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href="#contact"
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:glow"
            >
              <div className="absolute top-6 right-6">
                <span className="text-5xl font-serif font-medium text-muted-foreground/50 group-hover:text-primary/40 transition-colors">
                  {service.number}
                </span>
              </div>
              
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </div>
            </Link>
          ))}
          
          {/* CTA Card */}
          <div className="p-8 bg-primary/10 rounded-2xl border border-primary/20 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-medium text-foreground mb-3">
              Need something custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss your unique requirements.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
