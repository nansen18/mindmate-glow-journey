
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Heart, Star, Calendar } from "lucide-react";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const navigate = useNavigate();

  const onboardingSteps = [
    {
      title: "Welcome to MindMate! 🌈",
      description: "Your personal wellness companion is here to support you every step of the way.",
      icon: <Heart className="w-16 h-16 text-bubblegum-pink" />,
      animation: "animate-pulse-gentle"
    },
    {
      title: "Track Your Emotions 💭",
      description: "Daily mood check-ins with beautiful visualizations and gentle insights.",
      icon: <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-glow to-electric-mint flex items-center justify-center text-2xl">😊</div>,
      animation: "animate-glow"
    },
    {
      title: "AI Buddy Support 🤖✨",
      description: "Chat with your caring AI companion anytime you need emotional support or just want to talk.",
      icon: <Star className="w-16 h-16 text-cosmic-lilac" />,
      animation: "animate-float"
    },
    {
      title: "What are your wellness goals?",
      description: "Select what you'd like to focus on (you can change these later):",
      icon: <Calendar className="w-16 h-16 text-sunshine-peach" />,
      animation: "animate-pulse-gentle",
      isGoalSelection: true
    }
  ];

  const wellnessGoals = [
    { id: "mood", label: "Track my mood", emoji: "😊", color: "from-sky-glow to-electric-mint" },
    { id: "anxiety", label: "Manage anxiety", emoji: "🌸", color: "from-bubblegum-pink to-lavender-mist" },
    { id: "sleep", label: "Better sleep", emoji: "🌙", color: "from-cosmic-lilac to-sky-glow" },
    { id: "stress", label: "Reduce stress", emoji: "🧘‍♀️", color: "from-sunshine-peach to-lemon-zest" },
    { id: "gratitude", label: "Practice gratitude", emoji: "🙏", color: "from-electric-mint to-sunshine-peach" },
    { id: "mindfulness", label: "Daily mindfulness", emoji: "🧠", color: "from-lavender-mist to-bubblegum-pink" }
  ];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const currentSlide = onboardingSteps[currentStep];

  return (
    <div className="min-h-screen flex flex-col p-6">
      {/* Progress Bar */}
      <div className="w-full bg-white/30 rounded-full h-2 mb-8">
        <div 
          className="bg-gradient-to-r from-bubblegum-pink to-sky-glow h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <Card className="card-gradient max-w-md w-full p-8 rounded-3xl">
          <CardContent className="p-0">
            {/* Icon */}
            <div className={`mb-6 flex justify-center ${currentSlide.animation}`}>
              {currentSlide.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-graphite mb-4">
              {currentSlide.title}
            </h2>

            {/* Description */}
            <p className="text-graphite/70 mb-8 leading-relaxed">
              {currentSlide.description}
            </p>

            {/* Goal Selection */}
            {currentSlide.isGoalSelection && (
              <div className="grid grid-cols-2 gap-3 mb-8">
                {wellnessGoals.map(goal => (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`p-4 rounded-2xl transition-all duration-300 ${
                      selectedGoals.includes(goal.id)
                        ? `bg-gradient-to-r ${goal.color} shadow-lg scale-105`
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  >
                    <div className="text-2xl mb-2">{goal.emoji}</div>
                    <div className={`text-sm font-medium ${
                      selectedGoals.includes(goal.id) ? 'text-white' : 'text-graphite'
                    }`}>
                      {goal.label}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-graphite/70 hover:text-graphite disabled:opacity-30"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <div className="flex gap-2">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-gradient-to-r from-bubblegum-pink to-sky-glow w-6'
                  : 'bg-white/50'
              }`}
            ></div>
          ))}
        </div>

        <Button
          onClick={handleNext}
          className="btn-primary flex items-center gap-2"
        >
          {currentStep === onboardingSteps.length - 1 ? "Let's start!" : "Next"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingFlow;
