
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Heart } from "lucide-react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedIntensity, setSelectedIntensity] = useState<number | null>(null);
  const navigate = useNavigate();

  const moods = [
    { id: "joyful", emoji: "😄", label: "Joyful", color: "from-lemon-zest to-sunshine-peach" },
    { id: "content", emoji: "😊", label: "Content", color: "from-electric-mint to-sky-glow" },
    { id: "calm", emoji: "😌", label: "Calm", color: "from-lavender-mist to-cosmic-lilac" },
    { id: "neutral", emoji: "😐", label: "Neutral", color: "from-white to-gray-100" },
    { id: "anxious", emoji: "😰", label: "Anxious", color: "from-sunshine-peach to-bubblegum-pink" },
    { id: "sad", emoji: "😢", label: "Sad", color: "from-sky-glow to-lavender-mist" },
    { id: "angry", emoji: "😠", label: "Angry", color: "from-bubblegum-pink to-cosmic-lilac" },
    { id: "tired", emoji: "😴", label: "Tired", color: "from-cosmic-lilac to-lavender-mist" }
  ];

  const intensityLevels = [1, 2, 3, 4, 5];

  const handleSaveMood = () => {
    if (selectedMood && selectedIntensity) {
      console.log("Saving mood:", { mood: selectedMood, intensity: selectedIntensity });
      // Here you would save to your backend/local storage
      navigate("/dashboard");
    }
  };

  const selectedMoodData = moods.find(mood => mood.id === selectedMood);

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="p-2 rounded-full hover:bg-white/20"
        >
          <ArrowLeft className="w-6 h-6 text-graphite" />
        </Button>
        <h1 className="text-2xl font-bold text-graphite ml-4">Mood Check-in</h1>
      </div>

      {/* Date */}
      <Card className="card-gradient rounded-2xl mb-6">
        <CardContent className="p-4 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-sky-glow mr-2" />
          <span className="text-graphite font-medium">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </CardContent>
      </Card>

      {/* Mood Selection */}
      <Card className="card-gradient rounded-3xl mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-graphite flex items-center gap-2">
            <Heart className="w-5 h-5 text-bubblegum-pink" />
            How are you feeling?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`relative p-4 rounded-2xl transition-all duration-300 ${
                  selectedMood === mood.id
                    ? 'bg-white/70 shadow-lg scale-105 ring-2 ring-white/50'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                style={{
                  background: selectedMood === mood.id 
                    ? `linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 100%), linear-gradient(135deg, ${mood.color.includes('from-') ? mood.color.replace('from-', '').replace('to-', ', ') : mood.color})`
                    : undefined
                }}
              >
                {selectedMood === mood.id && (
                  <>
                    {/* Soft glow behind the button */}
                    <div 
                      className={`absolute -inset-1 rounded-2xl opacity-30 blur-sm bg-gradient-to-br ${mood.color}`}
                      style={{ zIndex: -1 }}
                    />
                    {/* Subtle sparkle effect */}
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white/80 rounded-full sparkle" />
                  </>
                )}
                
                <div className="relative z-10">
                  <div className="text-3xl mb-2 drop-shadow-sm">{mood.emoji}</div>
                  <div className="text-sm font-medium text-graphite drop-shadow-sm">
                    {mood.label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Intensity Selection */}
      {selectedMood && (
        <Card className="card-gradient rounded-3xl mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-graphite">
              How intense is this feeling?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between gap-2">
              {intensityLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedIntensity(level)}
                  className={`flex-1 aspect-square rounded-2xl transition-all duration-300 relative ${
                    selectedIntensity === level
                      ? 'bg-white/70 shadow-lg scale-105 ring-2 ring-white/50'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  style={{
                    background: selectedIntensity === level && selectedMoodData
                      ? `linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 100%), linear-gradient(135deg, ${selectedMoodData.color.includes('from-') ? selectedMoodData.color.replace('from-', '').replace('to-', ', ') : selectedMoodData.color})`
                      : undefined
                  }}
                >
                  {selectedIntensity === level && selectedMoodData && (
                    <div 
                      className={`absolute -inset-1 rounded-2xl opacity-30 blur-sm bg-gradient-to-br ${selectedMoodData.color}`}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  <div className="relative z-10 text-lg font-bold text-graphite drop-shadow-sm">{level}</div>
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-graphite/60">
              <span>Mild</span>
              <span>Intense</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mood Ring Visualization */}
      {selectedMood && selectedIntensity && (
        <Card className="card-gradient rounded-3xl mb-6 animate-fade-in">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-graphite mb-2">Your Mood Ring</h3>
              <div className={`mood-ring active w-24 h-24 bg-gradient-to-br ${selectedMoodData?.color} rounded-full mx-auto flex items-center justify-center text-4xl shadow-2xl`}>
                {selectedMoodData?.emoji}
              </div>
            </div>
            <p className="text-graphite/70">
              You're feeling <span className="font-semibold">{selectedMoodData?.label}</span> with intensity level <span className="font-semibold">{selectedIntensity}</span>
            </p>
          </CardContent>
        </Card>
      )}

      {/* Save Button */}
      {selectedMood && selectedIntensity && (
        <div className="animate-fade-in">
          <Button 
            onClick={handleSaveMood}
            className="btn-primary w-full h-14 text-lg rounded-2xl"
          >
            Save My Mood ✨
          </Button>
        </div>
      )}

      {/* Encouragement */}
      <Card className="card-gradient rounded-2xl mt-6">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-graphite/70">
            Every feeling is valid. Thank you for checking in with yourself today! 💜
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodTracker;
