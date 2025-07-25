import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, X } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Smmezy's AI assistant. How can I help you with your branding and digital needs today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Refs for scrolling containers
  const desktopMessagesContainerRef = useRef<HTMLDivElement>(null);
  const mobileMessagesContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the messages container
  const scrollToBottom = useCallback(() => {
    const padding = 20; // Extra padding below the last message
    
    if (window.innerWidth >= 768) {
      // Desktop scrolling
      if (desktopMessagesContainerRef.current) {
        const container = desktopMessagesContainerRef.current;
        const scrollTop = container.scrollHeight - container.clientHeight + padding;
        container.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    } else {
      // Mobile scrolling
      if (mobileMessagesContainerRef.current) {
        const container = mobileMessagesContainerRef.current;
        const scrollTop = container.scrollHeight - container.clientHeight + padding;
        container.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    }
  }, []);

  // Effect to scroll to bottom when messages change or chat opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen, scrollToBottom]);

  // Effect to focus the input field when the chat window opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Prevent background scrolling when mobile chat is open
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isOpen && window.innerWidth < 768) {
        e.preventDefault();
      }
    };

    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen]);

  // Function to send a message
  const sendMessage = async () => {
    // Prevent sending empty messages or if already loading
    if (!inputText.trim() || isLoading) return;

    // Create a new user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    // Add user message to state and clear input
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true); // Set loading state

    try {
      // Initialize Google Generative AI with API key from environment variables
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      // Get the generative model (using gemini-2.0-flash as per previous successful curl)
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      // Define the context for the AI assistant
      const context = `You are Smmezy's AI assistant, a creative digital agency specializing in branding, web development, social media management, and innovative brand solutions.
      Important: Do not begin follow-up responses with "Hi" or "Hello" unless it's the first message of the entire conversation.
Context about Smmezy:
- We provide services like Social Media Management, Website Design & Development, Logo & Brand Identity, and Innovative Brand Solutions
- We've worked with 13+ brands across 5+ industries
- We have 95% client satisfaction and 2+ years of experience
- Don't use * in the response
- Our founders are Mahek Agarwal and Saba Anwar
- We focus on transforming ideas into impactful results

Important formatting rules:
- Do not use asterisks (*) or Markdown-style bullets
- Do not use bold, italic, or any Markdown formatting
- Write in plain text only
- If listing services, use dashes (-) or just write full sentences instead

Conversation guidelines:
- Only use greetings like "Hi" or "Hello" in the very first message of the conversation
- Do not begin follow-up responses with greetings or repeated welcome messages

Please respond as a helpful, professional, and creative assistant representing Smmezy. Keep responses concise but informative. If asked about services, pricing, or specific projects, provide helpful information and suggest contacting the team(Email: yoursmmezy@gmail.com, Phone: +91 7482815533) for detailed discussions.`;

      // Generate content using the model
      const chatHistory = [
        {
          role: 'user',
          parts: [{ text: context }],
        },
        ...messages
          .filter((m) => m.text.trim() !== '')
          .map((m) => ({
            role: m.isUser ? 'user' : 'model',
            parts: [{ text: m.text }],
          })),
        {
          role: 'user',
          parts: [{ text: inputText }],
        },
      ];

  const result = await model.generateContent({ contents: chatHistory });


      // Extract the response text
      const response = result.response;
      const botText = await response.text();

      // Create a new bot message
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: botText,
        isUser: false,
        timestamp: new Date(),
      };

      // Add bot message to state
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      // Log error and display a user-friendly error message
      console.error('Error calling Gemini API:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again or contact our team directly for assistance.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Handle Enter key press for sending messages
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent new line in input
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 ${
          isOpen ? 'hidden' : 'block' // Hide button when chat is open
        }`}
      >
        <Bot className="w-7 h-7 text-white" />
      </motion.button>

      {/* Chat Window (Desktop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex-col overflow-hidden md:flex hidden"
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-lg border-b border-white/20 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Smmezy Assistant</h3>
                  <p className="text-purple-100 text-sm">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Minimize Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Container */}
            <div 
              ref={desktopMessagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(192, 132, 252, 0.5) rgba(255,255,255,0.1)' }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 shadow ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}>
                      {message.isUser ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 backdrop-blur-lg ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30'
                        : 'bg-purple-500/20 border border-purple-400/30'
                    }`}>
                      <p className="text-white text-base leading-relaxed">{message.text}</p>
                      <p className="text-purple-100 text-xs mt-2 text-right">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-purple-500/20 backdrop-blur-lg border border-purple-400/30 rounded-2xl px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-5 h-5 text-purple-200 animate-spin" />
                        <span className="text-purple-100 text-base">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-white/20 p-4">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Smmezy..."
                  disabled={isLoading}
                  className="flex-1 bg-white/15 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-100/70 focus:outline-none focus:border-purple-300/50 focus:ring-2 focus:ring-purple-500/30 transition-all duration-200 text-base disabled:opacity-50"
                  aria-label="Chat input"
                  style={{ 
                    WebkitBackdropFilter: 'blur(10px)',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Responsive Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-20 bottom-10 left-4 right-4 z-50 flex flex-col overflow-hidden rounded-3xl md:hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(30,30,50,0.85) 0%, rgba(20,20,40,0.95) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {/* Mobile Header */}
            <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-lg border-b border-white/20 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Smmezy Assistant</h3>
                  <p className="text-purple-100 text-sm">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Minimize Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Messages Container */}
            <div 
              ref={mobileMessagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(192, 132, 252, 0.5) rgba(255,255,255,0.1)' }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 shadow ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}>
                      {message.isUser ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 backdrop-blur-lg ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30'
                        : 'bg-purple-500/20 border border-purple-400/30'
                    }`}>
                      <p className="text-white text-base leading-relaxed">{message.text}</p>
                      <p className="text-purple-100 text-xs mt-2 text-right">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-purple-500/20 backdrop-blur-lg border border-purple-400/30 rounded-2xl px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-5 h-5 text-purple-200 animate-spin" />
                        <span className="text-purple-100 text-base">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mobile Input Area */}
            <div className="border-t border-white/20 p-4">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Smmezy..."
                  disabled={isLoading}
                  className="flex-1 bg-white/15 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-100/70 focus:outline-none focus:border-purple-300/50 focus:ring-2 focus:ring-purple-500/30 transition-all duration-200 text-base disabled:opacity-50"
                  aria-label="Chat input"
                  style={{ 
                    WebkitBackdropFilter: 'blur(10px)',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
