import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The lecturers, mainly xxx, and Tay Mei Lan, went above and beyond to make sure the knowledge is transferred to us. I look forward to apply what I’ve learnt on my daily work.',
    run: 'Jun-2026 run',
    role: 'Business Workflow Automation participant',
  },
  {
    quote:
      'The trainer Mei Lan is very professional and has shared many tips on power Automate. Good job and thank her very much!',
    run: 'Feb-2026 run',
    role: 'Business Workflow Automation participant',
  },
  {
    quote: 'Wonder coaching by Tay Mei lan !',
    run: 'Jul-2026 run',
    role: 'Business Workflow Automation participant',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it—hear from clients we worked with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-serif font-medium">
                      {testimonial.run.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.run}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
