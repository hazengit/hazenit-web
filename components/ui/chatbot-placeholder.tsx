'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ChatbotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center glow"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold">H</span>
              </div>
              <div>
                <div className="font-medium text-primary-foreground">Hazen IT Assistant</div>
                <div className="text-xs text-primary-foreground/70">Typically replies instantly</div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-72 p-5 overflow-y-auto bg-background/50">
            <div className="flex flex-col gap-4">
              {/* Bot Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-primary font-serif font-bold">H</span>
                </div>
                <div className="bg-card p-4 rounded-2xl rounded-tl-md border border-border max-w-[85%]">
                  <p className="text-sm text-foreground leading-relaxed">
                    Hi there! I&apos;m the Hazen IT assistant. How can I help you today?
                  </p>
                </div>
              </div>

              {/* Placeholder Notice */}
              <div className="text-center py-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-muted-foreground">AI chatbot coming soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-card">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Chatbot coming soon! Please use the contact form for now.')
                setMessage('')
              }}
              className="flex gap-2"
            >
              <Input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 h-11 bg-secondary border-border"
              />
              <Button type="submit" size="icon" className="h-11 w-11 rounded-xl">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
