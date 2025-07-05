
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Plus, Star } from "lucide-react";

const GratitudeTracker = () => {
  const [gratitudeItems, setGratitudeItems] = useState<string[]>([]);
  const [newGratitude, setNewGratitude] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);
  const navigate = useNavigate();

  const gratitudePrompts = [
    "A person who made you smile today",
    "Something beautiful you noticed",
    "A comfort that brought you peace",
    "A small victory you achieved",
    "Something that made you laugh",
    "A moment of unexpected kindness"
  ];

  const addGratitude = () => {
    if (newGratitude.trim()) {
      setGratitudeItems([...gratitudeItems, newGratitude]);
      setNewGratitude("");
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 1500);
    }
  };

  return (
    <div className="min-h-screen p-6 relative">
      {/* Breathing background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-sunshine-peach/30 to-lemon-zest/30 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-40 left-12 w-28 h-28 bg-gradient-to-br from-electric-mint/30 to-sky-glow/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Celebration sparkles */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute top-1/3 left-1/4 text-3xl animate-bounce">🌟</div>
          <div className="absolute top-1/2 right-1/4 text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</div>
          <div className="absolute bottom-1/3 left-1/2 text-2xl animate-bounce" style={{ animationDelay: '0.6s' }}>💫</div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="p-2 rounded-full hover:bg-white/20"
        >
          <ArrowLeft className="w-6 h-6 text-graphite" />
        </Button>
        <h1 className="text-2xl font-bold text-graphite ml-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-bubblegum-pink" />
          Gratitude Garden
        </h1>
      </div>

      {/* Welcome message */}
      <Card className="card-gradient rounded-3xl mb-6 border-2 border-sunshine-peach/30">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-sunshine-peach to-bubblegum-pink rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
            <Star className="w-8 h-8 text-white" />
          </div>
          <p className="text-graphite/80 leading-relaxed">
            Plant seeds of gratitude in your heart's garden. Each appreciation blooms into joy. 🌻
          </p>
        </CardContent>
      </Card>

      {/* Today's Gratitude Count */}
      <Card className="card-gradient rounded-2xl mb-6">
        <CardContent className="p-4 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-sunshine-peach to-bubblegum-pink bg-clip-text text-transparent">
            {gratitudeItems.length}
          </div>
          <p className="text-sm text-graphite/70">beautiful moments appreciated today</p>
        </CardContent>
      </Card>

      {/* Gratitude Prompts */}
      <Card className="card-gradient rounded-3xl mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-graphite">
            What fills your heart today?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {gratitudePrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setNewGratitude(prompt)}
                className="text-left p-3 rounded-xl bg-gradient-to-r from-white/50 to-white/30 hover:from-sunshine-peach/20 hover:to-bubblegum-pink/20 transition-all duration-300 text-graphite/80 text-sm border border-white/20"
              >
                💝 {prompt}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              value={newGratitude}
              onChange={(e) => setNewGratitude(e.target.value)}
              placeholder="Or write your own gratitude..."
              className="w-full p-4 rounded-2xl border-2 border-sunshine-peach/30 focus:border-bubblegum-pink/50 outline-none bg-white/70 text-graphite placeholder:text-graphite/50"
              onKeyPress={(e) => e.key === 'Enter' && addGratitude()}
            />
            <Button
              onClick={addGratitude}
              className="absolute right-2 top-2 h-10 w-10 p-0 bg-gradient-to-r from-sunshine-peach to-bubblegum-pink hover:scale-105 transition-transform"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Gratitude List */}
      {gratitudeItems.length > 0 && (
        <Card className="card-gradient rounded-3xl mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-graphite">
              Today's Gratitude Blooms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {gratitudeItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-gradient-to-r from-sunshine-peach/20 to-bubblegum-pink/20 border border-white/30 animate-fade-in"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🌸</span>
                    <p className="text-graphite/80 leading-relaxed flex-1">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Encouragement */}
      <Card className="card-gradient rounded-2xl">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-graphite/70">
            Gratitude turns what we have into enough. Your heart is growing more beautiful each day. 🌙✨
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GratitudeTracker;
