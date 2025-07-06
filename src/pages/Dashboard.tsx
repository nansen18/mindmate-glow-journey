
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Calendar, Star, User, BookOpen, Palette, Lock, Sparkles } from "lucide-react";
import MilestoneBadge from "@/components/MilestoneBadge";

const Dashboard = () => {
  const [userName] = useState("Alex");
  const [reflectionCount] = useState(5); // This would come from user data
  const [gratitudeCount] = useState(8);
  const [moodCount] = useState(12);
  const navigate = useNavigate();

  const todayAffirmation = "You are stronger than you think and braver than you feel. Today is a new opportunity to shine! ✨";

  const moodEmojis = [
    { emoji: "😊", label: "Great", color: "from-electric-mint to-sky-glow" },
    { emoji: "🙂", label: "Good", color: "from-sunshine-peach to-lemon-zest" },
    { emoji: "😐", label: "Okay", color: "from-lavender-mist to-cosmic-lilac" },
    { emoji: "😔", label: "Low", color: "from-bubblegum-pink to-lavender-mist" },
    { emoji: "😢", label: "Tough", color: "from-cosmic-lilac to-bubblegum-pink" }
  ];

  const handleMoodSelect = (mood: string) => {
    console.log("Mood selected:", mood);
    navigate("/mood-tracker");
  };

  const quickStats = [
    { label: "Water Intake", value: "6/8", icon: "💧", color: "from-sky-glow to-electric-mint" },
    { label: "Sleep Quality", value: "7.5h", icon: "🌙", color: "from-cosmic-lilac to-lavender-mist" },
    { label: "Streak", value: "5 days", icon: "🔥", color: "from-sunshine-peach to-bubblegum-pink" }
  ];

  return (
    <div className="min-h-screen p-6 pb-20 relative">
      {/* Breathing background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-electric-mint/20 to-sky-glow/20 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-40 left-8 w-20 h-20 bg-gradient-to-br from-bubblegum-pink/20 to-sunshine-peach/20 rounded-full animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header with milestone badges */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-graphite mb-1">
            Hey {userName}, let's take care of you today 🌿✨
          </h1>
          <p className="text-graphite/70">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <MilestoneBadge type="reflection" count={reflectionCount} />
            <MilestoneBadge type="gratitude" count={gratitudeCount} />
            <MilestoneBadge type="mood" count={moodCount} />
          </div>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-bubblegum-pink to-sky-glow rounded-full flex items-center justify-center shadow-lg animate-float">
          <User className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Quick Mood Check-in */}
      <Card className="card-gradient rounded-3xl mb-6">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-graphite flex items-center gap-2">
            <Heart className="w-5 h-5 text-bubblegum-pink" />
            How are you feeling right now?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between gap-2">
            {moodEmojis.map((mood, index) => (
              <button
                key={index}
                onClick={() => handleMoodSelect(mood.label)}
                className={`flex-1 aspect-square bg-gradient-to-br ${mood.color} rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg`}
              >
                <span className="text-2xl mb-1">{mood.emoji}</span>
                <span className="text-xs font-medium text-white drop-shadow-sm">{mood.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Today's Affirmation */}
      <Card className="card-gradient rounded-3xl mb-6 border-2 border-sunshine-peach/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-graphite flex items-center gap-2">
            <Star className="w-5 h-5 text-sunshine-peach" />
            Today's Affirmation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-graphite/80 italic leading-relaxed mb-4 text-lg">
            "{todayAffirmation}"
          </p>
          <Button variant="ghost" className="text-cosmic-lilac hover:text-cosmic-lilac/80">
            Save to favorites ⭐
          </Button>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="card-gradient rounded-2xl">
            <CardContent className="p-4 text-center">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2 text-lg animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                {stat.icon}
              </div>
              <div className="text-sm font-semibold text-graphite">{stat.value}</div>
              <div className="text-xs text-graphite/60">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Cozy Features - Improved readability */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold text-graphite flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cosmic-lilac" />
          Your Cozy Wellness Space
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => navigate("/reflection-journal")}
            className="h-20 rounded-2xl bg-gradient-to-br from-lavender-mist/80 to-cosmic-lilac/70 text-graphite shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-white/30"
          >
            <BookOpen className="w-6 h-6 mb-1 text-graphite drop-shadow-sm" />
            <span className="text-sm font-semibold drop-shadow-sm">Reflection Journal</span>
          </Button>
          
          <Button 
            onClick={() => navigate("/gratitude-tracker")}
            className="h-20 rounded-2xl bg-gradient-to-br from-sunshine-peach/80 to-bubblegum-pink/70 text-graphite shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-white/30"
          >
            <Heart className="w-6 h-6 mb-1 text-graphite drop-shadow-sm" />
            <span className="text-sm font-semibold drop-shadow-sm">Gratitude Garden</span>
          </Button>
          
          <Button 
            onClick={() => navigate("/doodle-space")}
            className="h-20 rounded-2xl bg-gradient-to-br from-electric-mint/80 to-sky-glow/70 text-graphite shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-white/30"
          >
            <Palette className="w-6 h-6 mb-1 text-graphite drop-shadow-sm" />
            <span className="text-sm font-semibold drop-shadow-sm">Mindful Doodles</span>
          </Button>
          
          <Button 
            onClick={() => navigate("/private-notes")}
            className="h-20 rounded-2xl bg-gradient-to-br from-cosmic-lilac/70 to-bubblegum-pink/60 text-graphite shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-white/30"
          >
            <Lock className="w-6 h-6 mb-1 text-graphite drop-shadow-sm" />
            <span className="text-sm font-semibold drop-shadow-sm">Safe Haven</span>
          </Button>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="space-y-4">
        <Button 
          onClick={() => navigate("/ai-chat")}
          className="btn-primary w-full h-14 text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          Chat with MindMate
        </Button>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => navigate("/mood-tracker")}
            className="btn-secondary h-12 rounded-2xl"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Mood Journal
          </Button>
          <Button 
            onClick={() => navigate("/challenges")}
            variant="outline" 
            className="h-12 rounded-2xl border-2 border-lavender-mist bg-white/50 hover:bg-lavender-mist/20 text-cosmic-lilac hover:text-cosmic-lilac/80 font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Star className="w-5 h-5 mr-2 text-cosmic-lilac" />
            Challenges
          </Button>
        </div>
      </div>

      {/* Emergency Support */}
      <Card className="card-gradient rounded-2xl mt-6 border-2 border-bubblegum-pink/30">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-graphite/70 mb-3">
            Need immediate support? We're here for you.
          </p>
          <Button variant="outline" className="text-bubblegum-pink border-bubblegum-pink hover:bg-bubblegum-pink hover:text-white">
            Crisis Resources 🆘
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
