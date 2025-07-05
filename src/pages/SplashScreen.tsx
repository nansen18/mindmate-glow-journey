
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const SplashScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Logo */}
      <div className={`transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-bubblegum-pink via-sky-glow to-electric-mint rounded-full flex items-center justify-center shadow-2xl animate-glow">
            <Heart className="w-16 h-16 text-white animate-pulse-gentle" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-lemon-zest to-sunshine-peach rounded-full animate-float"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-cosmic-lilac to-lavender-mist rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* App Name */}
      <div className={`text-center mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-bubblegum-pink via-sky-glow to-electric-mint bg-clip-text text-transparent mb-2">
          MindMate
        </h1>
        <p className="text-xl text-graphite/80 font-medium">
          Your pocket-sized wellness buddy
        </p>
      </div>

      {/* Tagline */}
      <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <p className="text-lg text-graphite/70 max-w-md leading-relaxed">
          ✨ A safe space for your mental health journey with AI-powered support, mood tracking, and gentle daily care
        </p>
      </div>

      {/* Get Started Button */}
      <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <Button 
          onClick={handleGetStarted}
          className="btn-primary text-lg px-8 py-4 h-auto"
        >
          Let's begin your journey 🌿
        </Button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-electric-mint to-sky-glow rounded-full animate-float"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-gradient-to-r from-sunshine-peach to-bubblegum-pink rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-gradient-to-r from-lavender-mist to-cosmic-lilac rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-gradient-to-r from-lemon-zest to-electric-mint rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default SplashScreen;
