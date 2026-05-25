import { ArrowRight, ArrowUpRight, Calendar, User } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    title: '5 Ways AI Can Transform Your SME Operations',
    excerpt: 'Discover practical AI applications that small businesses can implement today to improve efficiency and reduce costs.',
    category: 'AI Insights',
    author: 'Hazen IT',
    date: 'May 20, 2026',
    slug: '#',
  },
  {
    title: 'Getting Started with Microsoft Power Automate',
    excerpt: 'A beginner-friendly guide to automating your first workflow using Microsoft Power Automate.',
    category: 'Tutorials',
    author: 'Hazen IT',
    date: 'May 15, 2026',
    slug: '#',
  },
  {
    title: 'The ROI of Digital Transformation for SMEs',
    excerpt: 'Real numbers and case studies showing how digital transformation investments pay off for small businesses.',
    category: 'Business',
    author: 'Hazen IT',
    date: 'May 10, 2026',
    slug: '#',
  },
]

const hobbyProjects = [
  {
    title: 'Weather Dashboard',
    description: 'A clean, real-time weather app built with React',
    category: 'Hobby Project',
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'Simple productivity tool with local storage',
    category: 'Hobby Project',
    link: '#',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Blog & Resources
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight text-balance">
              Insights & Experiments
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="aspect-[16/10] bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-2xl">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Hobby Projects Section */}
        <div className="pt-16 border-t border-border">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-serif font-medium text-foreground">
              Hobby Projects & Experiments
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hobbyProjects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="group p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary">{project.category}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
              </Link>
            ))}
            {/* Placeholder for more projects */}
            <div className="p-5 rounded-xl border border-dashed border-border flex flex-col items-center justify-center text-center">
              <span className="text-sm text-muted-foreground">More coming soon...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
