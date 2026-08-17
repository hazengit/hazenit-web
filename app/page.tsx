import { Header } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero'
import { Services } from '@/components/ui/services'
import { About } from '@/components/ui/about'
import { Testimonials } from '@/components/ui/testimonials'
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
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatbotPlaceholder />
    </>
  )
}
