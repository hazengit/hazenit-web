import { CheckCircle } from 'lucide-react'

const values = [
  'Practical, results-driven approach',
  'Deep understanding of SME challenges',
  'Microsoft-certified expertise',
  'Ongoing support and training',
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              About Hazen IT
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight mb-8 text-balance">
              Your Trusted Partner in Digital Transformation
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Hazen IT was founded with a simple mission: to make AI and automation accessible to small and medium enterprises in Singapore. We believe that every business, regardless of size, deserves the competitive advantages that modern technology can provide.
              </p>
              <p>
                Our team combines deep technical expertise with a practical, business-first mindset. We don&apos;t just implement technology—we partner with you to understand your unique challenges and deliver solutions that drive real, measurable results.
              </p>
            </div>

            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-8 bg-card rounded-2xl border border-border text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl lg:text-5xl font-serif font-medium text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
