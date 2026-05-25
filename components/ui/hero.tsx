import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted by Singapore SMEs
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-foreground leading-[1.1] tracking-tight mb-8">
              Transform Your Business with{' '}
              <span className="gradient-text">AI & Automation</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              We help SMEs in Singapore adopt intelligent automation and AI solutions to streamline operations, reduce costs, and accelerate growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="rounded-full px-8 h-14 text-base">
                <Link href="#contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 h-14 text-base border-border hover:bg-secondary">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Stats/Feature cards */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="p-8 bg-card border border-border rounded-2xl glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-foreground">Microsoft Partner</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <div className="text-3xl font-serif font-medium text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <div className="text-3xl font-serif font-medium text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <div className="text-3xl font-serif font-medium text-primary mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <div className="text-3xl font-serif font-medium text-primary mb-1">30+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 p-4 bg-card border border-border rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Average ROI</div>
                    <div className="text-xl font-serif font-medium text-foreground">300%+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="lg:hidden mt-16 grid grid-cols-2 gap-4">
          <div className="p-4 bg-card border border-border rounded-xl text-center">
            <div className="text-2xl font-serif font-medium text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl text-center">
            <div className="text-2xl font-serif font-medium text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
