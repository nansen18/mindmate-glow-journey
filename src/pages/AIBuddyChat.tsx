
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Heart } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  emoji?: string;
}

const AIBuddyChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm your MindMate buddy. I'm here to listen, support, and chat with you about anything on your mind. How are you feeling today? 🌸",
      isUser: false,
      timestamp: new Date(),
      emoji: "🤖"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aiResponses = [
    "That sounds really meaningful. Tell me more about how that makes you feel. ✨",
    "I hear you, and I want you to know that your feelings are completely valid. 💜",
    "It takes courage to share that. Thank you for trusting me with your thoughts. 🌿",
    "That's a lot to process. Would you like to talk about what's been most challenging? 🌸",
    "I'm proud of you for reaching out and taking care of your mental health today. 🌟",
    "Sometimes it helps to take a deep breath together. You're doing great! 🧘‍♀️",
    "Your feelings matter, and so do you. What would help you feel supported right now? 💫"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date(),
        emoji: "🤖"
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const quickReplies = [
    { text: "I'm feeling anxious", emoji: "😰" },
    { text: "I need encouragement", emoji: "💪" },
    { text: "I'm grateful today", emoji: "🙏" },
    { text: "Tell me something positive", emoji: "✨" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-bubblegum-pink via-sky-glow to-electric-mint p-4 flex items-center shadow-lg">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="p-2 rounded-full hover:bg-white/20 text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="ml-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">MindMate Buddy</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-mint rounded-full animate-pulse"></div>
              <span className="text-sm text-white/90">Always here for you</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 pb-32 bg-gradient-rainbow">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md ${message.isUser ? 'order-1' : 'order-2'}`}>
              <div
                className={`p-4 rounded-3xl shadow-lg ${
                  message.isUser
                    ? 'bg-gradient-to-br from-electric-mint to-sky-glow text-white ml-4'
                    : 'bg-white/90 backdrop-blur-sm text-graphite mr-4'
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
                <div className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
            {!message.isUser && (
              <div className="w-10 h-10 bg-gradient-to-br from-bubblegum-pink to-sky-glow rounded-full flex items-center justify-center text-lg shadow-lg order-1">
                {message.emoji}
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="w-10 h-10 bg-gradient-to-br from-bubblegum-pink to-sky-glow rounded-full flex items-center justify-center text-lg shadow-lg">
              🤖
            </div>
            <div className="max-w-xs ml-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-sky-glow rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-bubblegum-pink rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-electric-mint rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickReplies.map((reply, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => setInputMessage(reply.text)}
              className="whitespace-nowrap bg-white/80 backdrop-blur-sm border-white/50 hover:bg-white/90 text-graphite rounded-full"
            >
              {reply.emoji} {reply.text}
            </Button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/90 backdrop-blur-sm border-t border-white/50">
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Share what's on your mind..."
              className="rounded-2xl border-2 border-sky-glow/30 focus:border-sky-glow bg-white/70 backdrop-blur-sm text-graphite placeholder:text-graphite/60"
            />
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-bubblegum-pink to-sky-glow shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
          >
            <Send className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIBuddyChat;
