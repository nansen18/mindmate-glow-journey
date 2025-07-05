
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Heart, BookOpen } from "lucide-react";

const ReflectionJournal = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [reflection, setReflection] = useState("");
  const [showSparkles, setShowSparkles] = useState(false);
  const navigate = useNavigate();

  const moodQuestions = {
    joyful: [
      "What brought you the most joy today?",
      "How can you share this happiness with others?",
      "What small moment made you smile?"
    ],
    peaceful: [
      "What helped you feel most at peace today?",
      "How did you create calm in your day?",
      "What would you like to release before tomorrow?"
    ],
    anxious: [
      "What's one thing that went well today despite your worries?",
      "How can you be gentle with yourself right now?",
      "What would you tell a dear friend feeling this way?"
    ],
    grateful: [
      "What are three things you're grateful for right now?",
      "Who in your life deserves appreciation today?",
      "What simple pleasure brought you comfort?"
    ]
  };

  const moods = [
    { id: "joyful", emoji: "😊", label: "Joyful", color: "from-sunshine-peach to-lemon-zest" },
    { id: "peaceful", emoji: "😌", label: "Peaceful", color: "from-lavender-mist to-cosmic-lilac" },
    { id: "anxious", emoji: "😰", label: "Anxious", color: "from-sky-glow to-electric-mint" },
    { id: "grateful", emoji: "🙏", label: "Grateful", color: "from-bubblegum-pink to-sunshine-peach" }
  ];

  const getRandomQuestion = (mood: string): string => {
    const questions = moodQuestions[mood as keyof typeof moodQuestions] || [];
    return questions[Math.floor(Math.random() * questions.length)] || "How are you feeling right now?";
  };

  const handleSaveReflection = () => {
    if (reflection.trim()) {
      setShowSparkles(true);
      setTimeout(() => {
        setShowSparkles(false);
        navigate("/dashboard");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen p-6 relative">
      {/* Breathing blob background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-electric-mint/20 to-sky-glow/20 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-lavender-mist/20 to-cosmic-lilac/20 rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Sparkles overlay */}
      {showSparkles && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute top-1/4 left-1/4 text-2xl animate-ping">✨</div>
          <div className="absolute top-1/3 right-1/3 text-xl animate-ping" style={{ animationDelay: '0.5s' }}>⭐</div>
          <div className="absolute bottom-1/3 left-1/2 text-lg animate-ping" style={{ animationDelay: '1s' }}>💫</div>
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
          <BookOpen className="w-6 h-6 text-cosmic-lilac" />
          Reflection Journal
        </h1>
      </div>

      {/* Cozy welcome message */}
      <Card className="card-gradient rounded-3xl mb-6 border-2 border-lavender-mist/30">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-bubblegum-pink to-cosmic-lilac rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <p className="text-graphite/80 leading-relaxed">
            Welcome to your safe, cozy reflection space. Take a deep breath and let your thoughts flow freely. 🌸
          </p>
        </CardContent>
      </Card>

      {/* Mood Selection */}
      <Card className="card-gradient rounded-3xl mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-graphite">
            How's your heart feeling today?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`p-4 rounded-2xl transition-all duration-500 ${
                  selectedMood === mood.id
                    ? `bg-gradient-to-br ${mood.color} shadow-lg scale-105 text-white`
                    : 'bg-white/50 hover:bg-white/70 text-graphite'
                } hover:scale-102`}
              >
                <div className="text-2xl mb-2">{mood.emoji}</div>
                <div className="text-sm font-medium">{mood.label}</div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI-Generated Question */}
      {selectedMood && (
        <Card className="card-gradient rounded-3xl mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-graphite flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cosmic-lilac" />
              A gentle question for you
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-lavender-mist/30 to-cosmic-lilac/30 rounded-2xl p-4 mb-4">
              <p className="text-graphite/80 italic text-lg leading-relaxed">
                "{getRandomQuestion(selectedMood)}"
              </p>
            </div>
            <Badge variant="outline" className="text-cosmic-lilac border-cosmic-lilac/50">
              Take your time 💜
            </Badge>
          </CardContent>
        </Card>
      )}

      {/* Reflection Input */}
      {selectedMood && (
        <Card className="card-gradient rounded-3xl mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-graphite">
              Your thoughts, your sanctuary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Let your thoughts flow here... This is your safe space. 🌙"
              className="min-h-32 border-2 border-lavender-mist/30 focus:border-cosmic-lilac/50 rounded-2xl resize-none text-graphite placeholder:text-graphite/50"
            />
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-graphite/60">
                {reflection.length} gentle words shared
              </p>
              <Button
                onClick={handleSaveReflection}
                disabled={!reflection.trim()}
                className="btn-primary"
              >
                Save Reflection ✨
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Encouragement */}
      <Card className="card-gradient rounded-2xl">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-graphite/70">
            Every reflection is a step toward understanding yourself better. You're doing beautifully. 🌿💚
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReflectionJournal;
