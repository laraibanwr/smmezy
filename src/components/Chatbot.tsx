import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Minimize2, Maximize2, Loader2 } from 'lucide-react';
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
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
    }
    scrollToBottom();
  }, [messages]);

  // Effect to scroll to bottom when loading state changes
  useEffect(() => {
    if (isLoading) {
      scrollToBottom();
    }
  }, [isLoading]);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `You are Smmezy's AI assistant, a creative digital agency specializing in branding, web development, social media management, and innovative brand solutions. 

Context about Smmezy:
- We provide services like Social Media Management, Website Design & Development, Logo & Brand Identity, and Innovative Brand Solutions
- We've worked with 13+ brands across 5+ industries
- We have 95% client satisfaction and 2+ years of experience
- Our founders are Mahek Agarwal and Saba Anwar
- We focus on transforming ideas into impactful results

Please respond as a helpful, professional, and creative assistant representing Smmezy. Keep responses concise but informative. If asked about services, pricing, or specific projects, provide helpful information and suggest contacting the team for detailed discussions.

User question: ${inputText}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botText = response.text();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again or contact our team directly for assistance.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <Bot className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-b border-gray-700/50 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Smmezy Assistant</h3>
                  <p className="text-gray-400 text-xs">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-500/50 scrollbar-track-gray-800/30 hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(107, 114, 128, 0.5) rgba(31, 41, 55, 0.3)'
              }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}>
                      {message.isUser ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-3 py-2 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30'
                        : 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50'
                    }`}>
                      <p className="text-white text-sm leading-relaxed">{message.text}</p>
                      <p className="text-gray-400 text-xs mt-1">
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
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                        <span className="text-gray-300 text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-700/50 p-4">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Smmezy..."
                  disabled={isLoading}
                  className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-sm disabled:opacity-50"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="w-4 h-4 text-white" />
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
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
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
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-4 bottom-4 top-20 z-50 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden md:hidden"
          >
            {/* Mobile Header */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-b border-gray-700/50 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Smmezy Assistant</h3>
                  <p className="text-gray-400 text-sm">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Messages */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-500/50 scrollbar-track-gray-800/30 hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(107, 114, 128, 0.5) rgba(31, 41, 55, 0.3)'
              }}
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
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
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
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30'
                        : 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50'
                    }`}>
                      <p className="text-white leading-relaxed">{message.text}</p>
                      <p className="text-gray-400 text-xs mt-2">
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
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                        <span className="text-gray-300">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Mobile Input */}
            <div className="border-t border-gray-700/50 p-4">
              <div className="flex items-center space-x-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Smmezy..."
                  disabled={isLoading}
                  className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 disabled:opacity-50"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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