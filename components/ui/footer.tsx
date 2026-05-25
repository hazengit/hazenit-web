import Link from 'next/link'
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Workflow Automation', href: '#services' },
    { label: 'AI Adoption', href: '#services' },
    { label: 'Microsoft Power Automate', href: '#services' },
    { label: 'IT Training', href: '#services' },
    { label: 'Digital Transformation', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-medium text-foreground tracking-tight">Hazen IT</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Helping Singapore SMEs embrace AI and automation for sustainable growth. Your trusted partner in digital transformation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-secondary border border-border rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="mailto:hello@hazenit.com"
                className="w-11 h-11 bg-secondary border border-border rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Hazen IT. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
