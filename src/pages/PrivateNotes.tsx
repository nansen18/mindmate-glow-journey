
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Lock, Plus, BookOpen, Heart } from "lucide-react";

const PrivateNotes = () => {
  const [notes, setNotes] = useState<{id: number, title: string, content: string, date: string}[]>([]);
  const [newNote, setNewNote] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [showNewNote, setShowNewNote] = useState(false);
  const navigate = useNavigate();

  const saveNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        title: noteTitle.trim() || "Untitled Thought",
        content: newNote,
        date: new Date().toLocaleDateString()
      };
      setNotes([note, ...notes]);
      setNewNote("");
      setNoteTitle("");
      setShowNewNote(false);
    }
  };

  return (
    <div className="min-h-screen p-6 relative">
      {/* Cozy floating elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-24 left-4 w-20 h-20 bg-gradient-to-br from-lavender-mist/30 to-cosmic-lilac/30 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-32 right-4 w-16 h-16 bg-gradient-to-br from-bubblegum-pink/30 to-sunshine-peach/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-8 w-12 h-12 bg-gradient-to-br from-electric-mint/30 to-sky-glow/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '3s' }}></div>
      </div>

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
          <Lock className="w-6 h-6 text-cosmic-lilac" />
          Your Safe Haven
        </h1>
      </div>

      {/* Welcome to safe space */}
      <Card className="card-gradient rounded-3xl mb-8 border-2 border-lavender-mist/40 shadow-2xl">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-lavender-mist to-cosmic-lilac rounded-full mx-auto mb-6 flex items-center justify-center animate-float shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-graphite mb-3">Welcome to Your Cozy Nook</h2>
          <p className="text-graphite/80 leading-relaxed text-lg">
            This is your completely private, sacred space. Every word here is safe, every thought is honored. 
            Write freely, feel deeply, and know that you are held with love.
          </p>
          <div className="mt-4 text-2xl">🌙✨🤗</div>
        </CardContent>
      </Card>

      {/* Add New Note Button */}
      {!showNewNote && (
        <Button
          onClick={() => setShowNewNote(true)}
          className="w-full mb-6 h-16 text-lg btn-primary rounded-3xl shadow-xl"
        >
          <Plus className="w-6 h-6 mr-3" />
          Share Your Heart 💜
        </Button>
      )}

      {/* New Note Form */}
      {showNewNote && (
        <Card className="card-gradient rounded-3xl mb-8 border-2 border-cosmic-lilac/40 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-graphite flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cosmic-lilac" />
              A new page in your story
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="text"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              placeholder="Give your thoughts a gentle title..."
              className="w-full p-4 rounded-2xl border-2 border-lavender-mist/40 focus:border-cosmic-lilac/60 outline-none bg-white/80 text-graphite placeholder:text-graphite/50 font-medium"
            />
            <Textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Pour your heart out here... Every feeling is welcome, every thought is valid. This space holds you with infinite tenderness. 🌸"
              className="min-h-40 border-2 border-lavender-mist/40 focus:border-cosmic-lilac/60 rounded-2xl resize-none text-graphite placeholder:text-graphite/50 bg-white/80 leading-relaxed"
            />
            <div className="flex gap-3">
              <Button
                onClick={saveNote}
                className="flex-1 btn-primary"
                disabled={!newNote.trim()}
              >
                Save With Love ✨
              </Button>
              <Button
                onClick={() => setShowNewNote(false)}
                variant="outline"
                className="px-6 border-lavender-mist text-graphite/70"
              >
                Maybe Later
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notes List */}
      {notes.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-graphite mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-bubblegum-pink" />
            Your Beautiful Thoughts ({notes.length})
          </h3>
          {notes.map((note, index) => (
            <Card key={note.id} className="card-gradient rounded-3xl border-2 border-white/30 animate-fade-in shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-graphite text-lg">{note.title}</h4>
                  <span className="text-sm text-graphite/60 bg-white/50 px-3 py-1 rounded-full">
                    {note.date}
                  </span>
                </div>
                <p className="text-graphite/80 leading-relaxed whitespace-pre-wrap">
                  {note.content}
                </p>
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="text-xs text-graphite/60 italic">
                    "You trusted this space with your truth. That takes courage. 💜"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty state */}
      {notes.length === 0 && !showNewNote && (
        <Card className="card-gradient rounded-3xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-electric-mint to-sky-glow rounded-full mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <p className="text-graphite/70 leading-relaxed">
              Your safe haven awaits your first thoughts. When you're ready, this space will hold them with infinite care. 🌿
            </p>
          </CardContent>
        </Card>
      )}

      {/* Bottom encouragement */}
      <div className="mt-8">
        <Card className="card-gradient rounded-2xl border border-bubblegum-pink/30">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-graphite/70">
              Remember: You are brave for feeling, wise for reflecting, and beautiful for being exactly who you are. 🌸💫
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivateNotes;
