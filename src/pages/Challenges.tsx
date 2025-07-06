
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Trophy, Calendar, Droplets, Heart, Brain, Sparkles, CheckCircle2 } from "lucide-react";

const Challenges = () => {
  const navigate = useNavigate();
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const challenges = [
    {
      id: "hydration",
      title: "Hydration Hero",
      description: "Drink 8 glasses of water daily for 7 days",
      icon: Droplets,
      color: "from-sky-glow to-electric-mint",
      progress: 5,
      target: 7,
      type: "daily"
    },
    {
      id: "gratitude",
      title: "Gratitude Garden",
      description: "Write 3 things you're grateful for each day",
      icon: Heart,
      color: "from-bubblegum-pink to-sunshine-peach",
      progress: 12,
      target: 30,
      type: "daily"
    },
    {
      id: "mindfulness",
      title: "Mindful Moments",
      description: "Practice 5 minutes of mindfulness daily",
      icon: Brain,
      color: "from-lavender-mist to-cosmic-lilac",
      progress: 8,
      target: 14,
      type: "daily"
    },
    {
      id: "reflection",
      title: "Reflection Streak",
      description: "Complete daily reflection for 21 days",
      icon: Sparkles,
      color: "from-sunshine-peach to-lemon-zest",
      progress: 15,
      target: 21,
      type: "streak"
    }
  ];

  const achievements = [
    {
      id: "first-week",
      title: "First Week Wonder",
      description: "Completed your first week of challenges",
      icon: Trophy,
      earned: true
    },
    {
      id: "consistent",
      title: "Consistency Champion",
      description: "Maintained streaks for 30 days",
      icon: Target,
      earned: false
    },
    {
      id: "wellbeing",
      title: "Wellbeing Warrior",
      description: "Completed all challenge categories",
      icon: Heart,
      earned: false
    }
  ];

  const toggleChallengeComplete = (challengeId: string) => {
    setCompletedChallenges(prev => 
      prev.includes(challengeId) 
        ? prev.filter(id => id !== challengeId)
        : [...prev, challengeId]
    );
  };

  return (
    <div className="min-h-screen p-6 pb-20 relative">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-electric-mint/20 to-sky-glow/20 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-60 left-12 w-16 h-16 bg-gradient-to-br from-bubblegum-pink/20 to-sunshine-peach/20 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/dashboard")}
          className="rounded-full bg-white/50 hover:bg-white/70 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-graphite" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-graphite">
            Growth Challenges 🌱
          </h1>
          <p className="text-graphite/70 text-sm">
            Small steps, big transformations
          </p>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="space-y-4 mb-8">
        <h2 className="text-lg font-semibold text-graphite flex items-center gap-2">
          <Target className="w-5 h-5 text-cosmic-lilac" />
          Active Challenges
        </h2>
        
        {challenges.map((challenge) => {
          const progressPercentage = (challenge.progress / challenge.target) * 100;
          const isCompleted = completedChallenges.includes(challenge.id);
          
          return (
            <Card key={challenge.id} className="card-gradient rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${challenge.color} rounded-xl flex items-center justify-center animate-float`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-graphite">{challenge.title}</h3>
                      <Button
                        size="sm"
                        variant={isCompleted ? "default" : "outline"}
                        onClick={() => toggleChallengeComplete(challenge.id)}
                        className={`rounded-full transition-all duration-300 ${
                          isCompleted 
                            ? "bg-electric-mint text-graphite hover:bg-electric-mint/80" 
                            : "border-cosmic-lilac text-cosmic-lilac hover:bg-cosmic-lilac hover:text-white"
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        {isCompleted ? "Done" : "Mark"}
                      </Button>
                    </div>
                    
                    <p className="text-sm text-graphite/70 mb-3">{challenge.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-graphite/60">Progress</span>
                        <span className="font-medium text-graphite">
                          {challenge.progress}/{challenge.target} days
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${challenge.color} rounded-full transition-all duration-500`}
                          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-semibold text-graphite flex items-center gap-2">
          <Trophy className="w-5 h-5 text-sunshine-peach" />
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 gap-3">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className={`rounded-2xl transition-all duration-300 ${
                achievement.earned 
                  ? "card-gradient border-2 border-sunshine-peach/30" 
                  : "bg-white/30 border border-gray-200"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.earned 
                      ? "bg-gradient-to-br from-sunshine-peach to-bubblegum-pink animate-glow" 
                      : "bg-gray-200"
                  }`}>
                    <achievement.icon className={`w-5 h-5 ${
                      achievement.earned ? "text-white" : "text-gray-400"
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      achievement.earned ? "text-graphite" : "text-graphite/50"
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${
                      achievement.earned ? "text-graphite/70" : "text-graphite/40"
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                  
                  {achievement.earned && (
                    <div className="text-sunshine-peach">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Motivational Quote */}
      <Card className="card-gradient rounded-2xl border-2 border-electric-mint/30">
        <CardContent className="p-6 text-center">
          <Sparkles className="w-8 h-8 text-electric-mint mx-auto mb-3 animate-sparkle" />
          <p className="text-graphite italic text-lg leading-relaxed mb-2">
            "Progress, not perfection. Every small step counts! 🌟"
          </p>
          <p className="text-graphite/60 text-sm">
            Keep going, you're doing amazing!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Challenges;
