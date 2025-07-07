
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, User, Edit, Settings, Trophy, Calendar, Heart, BookOpen, Star, LogOut, Save, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // User data state
  const [userData, setUserData] = useState({
    name: "Alex",
    email: "alex@mindmate.com",
    bio: "Finding peace in small moments and gratitude in everyday life. Mental wellness is a journey, not a destination.",
    joinDate: "January 2024",
    profileImage: ""
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: userData.name,
    bio: userData.bio,
    profileImage: userData.profileImage
  });

  // Validation errors
  const [errors, setErrors] = useState({
    name: "",
    bio: ""
  });

  const streakData = [
    { label: "Current Streak", value: "5 days", icon: "🔥", color: "from-sunshine-peach to-bubblegum-pink" },
    { label: "Best Streak", value: "12 days", icon: "🏆", color: "from-electric-mint to-sky-glow" },
    { label: "Total Check-ins", value: "47", icon: "📅", color: "from-lavender-mist to-cosmic-lilac" }
  ];

  const achievements = [
    { title: "First Reflection", description: "Wrote your first journal entry", earned: true, icon: "📝" },
    { title: "Gratitude Master", description: "5 days of gratitude entries", earned: true, icon: "🙏" },
    { title: "Mood Tracker", description: "Track mood for 7 days", earned: false, icon: "😊" },
    { title: "Mindful Week", description: "Complete 7 days straight", earned: false, icon: "🧘" }
  ];

  const preferences = [
    { label: "Daily Reminders", enabled: true },
    { label: "Crisis Alerts", enabled: true },
    { label: "Weekly Reports", enabled: false },
    { label: "Share Progress", enabled: false }
  ];

  const validateForm = () => {
    const newErrors = { name: "", bio: "" };
    
    if (!editForm.name.trim()) {
      newErrors.name = "Name is required";
    } else if (editForm.name.length > 50) {
      newErrors.name = "Name must be 50 characters or less";
    }
    
    if (editForm.bio.length > 200) {
      newErrors.bio = "Bio must be 200 characters or less";
    }
    
    setErrors(newErrors);
    return !newErrors.name && !newErrors.bio;
  };

  const handleEditClick = () => {
    setEditForm({
      name: userData.name,
      bio: userData.bio,
      profileImage: userData.profileImage
    });
    setErrors({ name: "", bio: "" });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditForm({
      name: userData.name,
      bio: userData.bio,
      profileImage: userData.profileImage
    });
    setErrors({ name: "", bio: "" });
  };

  const handleSaveChanges = () => {
    if (!validateForm()) {
      return;
    }

    // Simulate API call - in real app, this would be a backend request
    setTimeout(() => {
      setUserData(prev => ({
        ...prev,
        name: editForm.name,
        bio: editForm.bio,
        profileImage: editForm.profileImage
      }));
      
      setIsEditing(false);
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been saved successfully!",
        duration: 3000,
      });
    }, 500);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen p-6 pb-20 relative">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-electric-mint/10 to-sky-glow/10 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-40 left-8 w-20 h-20 bg-gradient-to-br from-bubblegum-pink/10 to-sunshine-peach/10 rounded-full animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-graphite" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-graphite">Profile</h1>
          <p className="text-graphite/70 text-sm">Your wellness journey</p>
        </div>
      </div>

      {/* Profile Info */}
      <Card className={`card-gradient rounded-3xl mb-6 transition-all duration-500 ${isEditing ? 'ring-2 ring-electric-mint/30' : ''}`}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20 border-4 border-white/50">
              <AvatarImage src={userData.profileImage} />
              <AvatarFallback className="bg-gradient-to-br from-bubblegum-pink to-sky-glow text-white text-2xl font-bold">
                {userData.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              {!isEditing ? (
                <>
                  <h2 className="text-2xl font-bold text-graphite mb-1">{userData.name}</h2>
                  <p className="text-graphite/70 mb-2">{userData.email}</p>
                  <p className="text-sm text-graphite/60 mb-3">Member since {userData.joinDate}</p>
                  {userData.bio && (
                    <p className="text-sm text-graphite/80 bg-white/30 rounded-2xl p-3">{userData.bio}</p>
                  )}
                </>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <Input
                      value={editForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name"
                      className={`text-lg font-bold bg-white/70 border-2 transition-all duration-300 ${
                        errors.name ? 'border-red-300 focus:border-red-400' : 'border-white/50 focus:border-electric-mint'
                      }`}
                      maxLength={50}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.name}</p>
                    )}
                  </div>
                  <p className="text-graphite/70 text-sm">{userData.email}</p>
                  <div>
                    <Textarea
                      value={editForm.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      placeholder="Tell us about your wellness journey..."
                      className={`bg-white/70 border-2 transition-all duration-300 resize-none ${
                        errors.bio ? 'border-red-300 focus:border-red-400' : 'border-white/50 focus:border-electric-mint'
                      }`}
                      rows={3}
                      maxLength={200}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.bio ? (
                        <p className="text-red-500 text-xs animate-fade-in">{errors.bio}</p>
                      ) : (
                        <div></div>
                      )}
                      <p className="text-xs text-graphite/50">{editForm.bio.length}/200</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {!isEditing ? (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleEditClick}
                  className="hover:bg-white/50 transition-all duration-300 hover:scale-105"
                >
                  <Edit className="w-5 h-5 text-graphite" />
                </Button>
              ) : (
                <>
                  <Button 
                    size="icon"
                    onClick={handleSaveChanges}
                    className="bg-gradient-to-r from-electric-mint to-sky-glow hover:from-electric-mint/80 hover:to-sky-glow/80 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Save className="w-5 h-5 text-white" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={handleCancelEdit}
                    className="hover:bg-red-100 hover:text-red-600 transition-all duration-300 hover:scale-105"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Streak Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {streakData.map((stat, index) => (
          <Card key={index} className="card-gradient rounded-2xl">
            <CardContent className="p-4 text-center">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2 text-lg animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                {stat.icon}
              </div>
              <div className="text-lg font-bold text-graphite">{stat.value}</div>
              <div className="text-xs text-graphite/60">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="card-gradient rounded-3xl mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-graphite flex items-center gap-2">
            <Trophy className="w-5 h-5 text-sunshine-peach" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className={`flex items-center gap-3 p-3 rounded-2xl ${achievement.earned ? 'bg-white/50' : 'bg-graphite/5'} transition-all duration-300`}>
              <div className={`text-2xl ${achievement.earned ? 'grayscale-0' : 'grayscale opacity-50'}`}>
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold ${achievement.earned ? 'text-graphite' : 'text-graphite/50'}`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm ${achievement.earned ? 'text-graphite/70' : 'text-graphite/40'}`}>
                  {achievement.description}
                </p>
              </div>
              {achievement.earned && (
                <Star className="w-5 h-5 text-sunshine-peach" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="card-gradient rounded-2xl">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 text-bubblegum-pink mx-auto mb-2" />
            <div className="text-lg font-bold text-graphite">47</div>
            <div className="text-xs text-graphite/60">Mood Entries</div>
          </CardContent>
        </Card>
        <Card className="card-gradient rounded-2xl">
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 text-cosmic-lilac mx-auto mb-2" />
            <div className="text-lg font-bold text-graphite">23</div>
            <div className="text-xs text-graphite/60">Journal Entries</div>
          </CardContent>
        </Card>
      </div>

      {/* Settings */}
      <Card className="card-gradient rounded-3xl mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-graphite flex items-center gap-2">
            <Settings className="w-5 h-5 text-electric-mint" />
            Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {preferences.map((pref, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-2xl bg-white/50">
              <span className="font-medium text-graphite">{pref.label}</span>
              <button 
                className={`w-12 h-6 rounded-full transition-all duration-300 ${pref.enabled ? 'bg-gradient-to-r from-electric-mint to-sky-glow' : 'bg-graphite/20'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300 ${pref.enabled ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
              </button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Logout Button */}
      <Button 
        variant="outline"
        className="w-full h-12 rounded-2xl border-2 border-graphite/20 text-graphite hover:bg-graphite/5 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <LogOut className="w-5 h-5 mr-2" />
        Sign Out
      </Button>
    </div>
  );
};

export default Profile;
