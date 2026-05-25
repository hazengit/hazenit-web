import { Header } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero'
import { Services } from '@/components/ui/services'
import { Projects } from '@/components/ui/projects'
import { About } from '@/components/ui/about'
import { Testimonials } from '@/components/ui/testimonials'
import { Blog } from '@/components/ui/blog'
import { Contact } from '@/components/ui/contact'
import { Footer } from '@/components/ui/footer'
import { ChatbotPlaceholder } from '@/components/ui/chatbot-placeholder'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ChatbotPlaceholder />
    </>
  )
}
