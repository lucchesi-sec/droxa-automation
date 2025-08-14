"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Minimize2, Maximize2, Bot, User, CheckCircle } from "lucide-react"

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  suggestions?: string[]
}

export function LiveChatDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "👋 Hello! I'm Droxa's AI assistant. I'm here to help you learn about our automation solutions and answer any questions you might have.",
      timestamp: new Date(),
      suggestions: [
        "How can automation help my business?",
        "What services do you offer?",
        "How much does automation cost?"
      ]
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const suggestions = [
    "Tell me about process automation",
    "What's your pricing structure?",
    "How long does implementation take?",
    "Can you integrate with my current systems?"
  ]

  const responses = {
    "how": "Automation can help your business by reducing manual tasks, minimizing errors, improving efficiency, and allowing your team to focus on high-value work. Our clients typically see 20-80% time savings on automated processes within the first 3 months.",
    "services": "We offer comprehensive automation solutions including: Process Automation, Data Integration, Workflow Optimization, and Intelligent Analytics. Each solution is customized to fit your specific business needs.",
    "cost": "Our automation solutions start at $5,000 and scale based on the complexity and scope. Most clients see ROI within 6-12 months. Would you like to try our ROI calculator above?",
    "time": "Implementation timelines vary from 2-8 weeks depending on the complexity. We use agile methodologies to deliver value quickly while ensuring robust solutions.",
    "integrate": "Yes! We specialize in integrating with existing systems including CRM, ERP, accounting software, custom databases, and third-party APIs. We'll work with your team to ensure seamless data flow."
  }

  const getBotResponse = (userInput: string) => {
    const normalizedInput = userInput.toLowerCase()
    
    for (const [key, response] of Object.entries(responses)) {
      if (normalizedInput.includes(key)) {
        return response
      }
    }
    
    // Default response based on keywords
    if (normalizedInput.includes('automation') || normalizedInput.includes('automated')) {
      return "Automation is our specialty! We provide customized solutions that streamline your operations. What specific area of automation interests you most?"
    }
    
    if (normalizedInput.includes('price') || normalizedInput.includes('cost')) {
      return responses.cost
    }
    
    if (normalizedInput.includes('time') || normalizedInput.includes('how long')) {
      return responses.time
    }
    
    return "I'd be happy to help answer that question! For the most accurate information, I recommend chatting with one of our automation specialists. You can reach us through the contact form or send an email to hello@droxa-automation.com."
  }

  const handleSend = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsMinimized(false)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(content),
        timestamp: new Date(),
        suggestions: suggestions[Math.floor(Math.random() * suggestions.length)]
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000 + Math.random() * 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend(inputValue)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`mb-4 w-80 sm:w-96 shadow-2xl ${isMinimized ? 'h-14' : 'h-[500px]'}`}
          >
            <Card className="h-full flex flex-col border-2">
              {!isMinimized && (
                <CardHeader className="border-b bg-gradient-to-r from-primary to-primary/80 text-white p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Bot className="h-4 w-4" />
                      Droxa AI Assistant
                      <div className="flex items-center gap-1 ml-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs">Online</span>
                      </div>
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 hover:bg-white/20"
                        onClick={() => setIsMinimized(true)}
                      >
                        <Minimize2 className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 hover:bg-white/20"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-lg leading-none">×</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              )}
              
              <div className="flex flex-col flex-1">
                {isMinimized ? (
                  <div 
                    className="flex items-center justify-between p-3 cursor-pointer h-full"
                    onClick={() => setIsMinimized(false)}
                  >
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">Click to expand chat</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <Maximize2 className="h-3 w-3" />
                    </div>
                  </div>
                ) : (
                  <>
                    <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {message.type === 'bot' && (
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="h-4 w-4 text-primary" />
                            </div>
                          )}
                          <div className={`max-w-[80%] ${message.type === 'user' ? 'order-1' : ''}`}>
                            <div
                              className={`p-3 rounded-2xl text-sm ${
                                message.type === 'user'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted'
                              }`}
                            >
                              {message.content}
                            </div>
                            <div className={`text-xs text-muted-foreground mt-1 ${
                              message.type === 'user' ? 'text-right' : ''
                            }`}>
                              {formatTime(message.timestamp)}
                            </div>
                            {message.suggestions && (
                              <div className="mt-2 space-y-1">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="w-full justify-start text-xs p-2 h-auto"
                                  onClick={() => handleSend(message.suggestions!)}
                                >
                                  {message.suggestions}
                                </Button>
                              </div>
                            )}
                          </div>
                          {message.type === 'user' && (
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="h-4 w-4 text-primary-foreground" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </CardContent>
                    
                    <div className="border-t p-4 space-y-2">
                      <div className="flex gap-2 flex-wrap">
                        {suggestions.slice(0, 2).map((suggestion, index) => (
                          <Button
                            key={index}
                            size="sm"
                            variant="outline"
                            className="text-xs p-2 h-auto"
                            onClick={() => handleSend(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type your message..."
                          className="flex-1"
                        />
                        <Button
                          size="sm"
                          onClick={() => handleSend(inputValue)}
                          disabled={!inputValue.trim()}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Button
        size="lg"
        className="shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        Chat with AI
      </Button>
    </div>
  )
}