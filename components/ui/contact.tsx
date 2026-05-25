'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We\'ll be in touch soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight mb-6 text-balance">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Ready to transform your business with AI and automation? We&apos;d love to hear from you. Reach out for a free consultation.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: 'Email', value: 'hello@hazenit.com', href: 'mailto:hello@hazenit.com' },
                { icon: Phone, label: 'Phone', value: '+65 1234 5678', href: 'tel:+6512345678' },
                { icon: MapPin, label: 'Location', value: 'Singapore', href: null },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary border border-border rounded-xl flex items-center justify-center hover:border-primary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:p-10 bg-card rounded-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 bg-secondary border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-secondary border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company (optional)
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 bg-secondary border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-secondary border-border resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-14 rounded-xl text-base">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
