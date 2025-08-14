import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { 
  Star, 
  Search, 
  ThumbsUp, 
  ThumbsDown,
  Heart,
  Smile,
  Frown,
  Meh,
  MessageSquare,
  Send,
  CheckCircle2,
  Award,
  TrendingUp
} from 'lucide-react';

interface FeedbackPageProps {
  onNavigate: (page: string) => void;
}

export function FeedbackPage({ onNavigate }: FeedbackPageProps) {
  const [trackingId, setTrackingId] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showResults, setShowResults] = useState(false);

  const emojis = [
    { emoji: '😊', label: 'खुश', value: 'happy' },
    { emoji: '😐', label: 'ठीक', value: 'neutral' },
    { emoji: '😔', label: 'दुखी', value: 'sad' },
    { emoji: '😠', label: 'नाराज़', value: 'angry' },
    { emoji: '😍', label: 'बहुत खुश', value: 'love' }
  ];

  const recentFeedbacks = [
    {
      id: 'JUN2025001230',
      rating: 5,
      comment: 'बहुत तेज़ी से समस्या का समाधान हुआ। धन्यवाद!',
      emoji: '😊',
      category: 'जल आपूर्ति',
      date: '14 अगस्त 2025',
      helpful: 23
    },
    {
      id: 'JUN2025001225',
      rating: 4,
      comment: 'अच्छा काम किया। थोड़ा और जल्दी हो सकता था।',
      emoji: '😐',
      category: 'सड़क निर्माण',
      date: '13 अगस्त 2025',
      helpful: 18
    },
    {
      id: 'JUN2025001220',
      rating: 5,
      comment: 'बेहतरीन सेवा! अधिकारी बहुत सहयोगी थे।',
      emoji: '😍',
      category: 'सफाई व्यवस्था',
      date: '12 अगस्त 2025',
      helpful: 31
    }
  ];

  const stats = [
    { label: 'औसत रेटिंग', labelEn: 'Average Rating', value: '4.2', icon: Star, color: 'text-[#f59e0b]' },
    { label: 'कुल फीडबैक', labelEn: 'Total Feedback', value: '8,456', icon: MessageSquare, color: 'text-[#1e3a8a]' },
    { label: 'संतुष्टि दर', labelEn: 'Satisfaction Rate', value: '89%', icon: ThumbsUp, color: 'text-[#16a34a]' },
    { label: 'सुधार दर', labelEn: 'Improvement Rate', value: '+12%', icon: TrendingUp, color: 'text-[#16a34a]' }
  ];

  const handleSearch = () => {
    if (trackingId.trim()) {
      setShowResults(true);
    }
  };

  const handleSubmitFeedback = () => {
    if (rating > 0 && feedback.trim()) {
      alert('आपका फीडबैक सफलतापूर्वक सबमिट हो गया। धन्यवाद!');
      // Reset form
      setRating(0);
      setSelectedEmoji('');
      setFeedback('');
      setTrackingId('');
      setShowResults(false);
    }
  };

  const renderStars = (count: number, interactive: boolean = false) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-6 w-6 cursor-pointer transition-colors ${
          index < count 
            ? 'fill-[#f59e0b] text-[#f59e0b]' 
            : 'text-gray-300 hover:text-[#f59e0b]'
        }`}
        onClick={interactive ? () => setRating(index + 1) : undefined}
        onMouseEnter={interactive ? () => setHoveredRating(index + 1) : undefined}
        onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
            फीडबैक और रेटिंग
          </h1>
          <p className="text-lg text-[#6b7280]">
            आपकी राय हमारे लिए महत्वपूर्ण है
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-jansunwai">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color} bg-current/10`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-1 text-[#1e3a8a]">{stat.value}</h3>
                <p className="font-inter text-[#6b7280]">{stat.label}</p>
                <p className="text-sm text-[#6b7280]/70">{stat.labelEn}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feedback Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search for Complaint */}
            <Card className="shadow-jansunwai">
              <CardHeader>
                <CardTitle className="font-poppins text-xl text-[#1e3a8a]">
                  फीडबैक दें
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                      शिकायत ID दर्ज करें
                    </Label>
                    <div className="flex gap-3">
                      <Input
                        placeholder="जैसे: JUN2025001234"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="border-gray-300 focus:border-[#1e3a8a]"
                      />
                      <Button onClick={handleSearch} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                        <Search className="h-4 w-4 mr-2" />
                        खोजें
                      </Button>
                    </div>
                  </div>

                  {showResults && (
                    <div className="mt-6 p-4 bg-[#16a34a]/5 border border-[#16a34a]/20 rounded-lg">
                      <div className="flex items-center mb-3">
                        <CheckCircle2 className="h-5 w-5 text-[#16a34a] mr-2" />
                        <span className="font-poppins font-medium text-[#16a34a]">
                          शिकायत मिली: सड़क में बड़े गड्ढे की समस्या
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-[#6b7280]">
                        <div>ID: {trackingId}</div>
                        <div>स्थिति: पूर्ण</div>
                        <div>श्रेणी: सड़क निर्माण</div>
                        <div>समाधान दिनांक: 20 अगस्त 2025</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {showResults && (
              <>
                {/* Rating Section */}
                <Card className="shadow-jansunwai">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl text-[#1e3a8a]">
                      समाधान को रेट करें
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-6">
                      <div>
                        <p className="text-[#6b7280] mb-4">
                          समाधान की गुणवत्ता से आप कितने संतुष्ट हैं?
                        </p>
                        <div className="flex justify-center space-x-2 mb-4">
                          {renderStars(hoveredRating || rating, true)}
                        </div>
                        <p className="text-sm text-[#6b7280]">
                          {rating === 0 && 'कृपया रेटिंग दें'}
                          {rating === 1 && 'बहुत खराब'}
                          {rating === 2 && 'खराब'}
                          {rating === 3 && 'ठीक'}
                          {rating === 4 && 'अच्छा'}
                          {rating === 5 && 'बेहतरीन'}
                        </p>
                      </div>

                      <Separator />

                      {/* Emoji Selection */}
                      <div>
                        <p className="text-[#6b7280] mb-4">
                          आपकी समग्र संतुष्टि कैसी है?
                        </p>
                        <div className="flex justify-center space-x-4">
                          {emojis.map((emoji, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedEmoji(emoji.value)}
                              className={`p-3 rounded-lg transition-all ${
                                selectedEmoji === emoji.value
                                  ? 'bg-[#1e3a8a]/10 ring-2 ring-[#1e3a8a]'
                                  : 'hover:bg-gray-100'
                              }`}
                            >
                              <div className="text-3xl mb-1">{emoji.emoji}</div>
                              <div className="text-xs text-[#6b7280]">{emoji.label}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Comment Section */}
                <Card className="shadow-jansunwai">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl text-[#1e3a8a]">
                      अपनी टिप्पणी दें
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Textarea
                        placeholder="कृपया अपना अनुभव साझा करें... (वैकल्पिक)"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="min-h-32 border-gray-300 focus:border-[#1e3a8a]"
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-[#6b7280]">
                          {feedback.length}/500 वर्ण
                        </p>
                        <Button 
                          onClick={handleSubmitFeedback}
                          disabled={rating === 0}
                          className="bg-[#16a34a] hover:bg-[#16a34a]/90"
                        >
                          <Send className="h-4 w-4 mr-2" />
                          फीडबैक सबमिट करें
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {!showResults && (
              <Card className="shadow-jansunwai">
                <CardContent className="p-12 text-center">
                  <Award className="h-16 w-16 mx-auto mb-4 text-[#6b7280]" />
                  <h3 className="font-poppins font-semibold text-xl text-[#1e3a8a] mb-2">
                    अपनी शिकायत ID दर्ज करें
                  </h3>
                  <p className="text-[#6b7280] mb-6">
                    फीडबैक देने के लिए पहले अपनी शिकायत ID खोजें
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => onNavigate('tracking')}
                    className="border-[#1e3a8a] text-[#1e3a8a]"
                  >
                    शिकायत ट्रैक करें
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Feedback */}
            <Card className="shadow-jansunwai">
              <CardHeader>
                <CardTitle className="font-poppins text-lg text-[#1e3a8a]">
                  हाल का फीडबैक
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedbacks.map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex">{renderStars(item.rating)}</div>
                          <span className="text-2xl">{item.emoji}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#6b7280] mb-2 leading-relaxed">
                        "{item.comment}"
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#6b7280]">
                        <span>ID: {item.id}</span>
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          <span className="text-xs">{item.helpful}</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Feedback Guidelines */}
            <Card className="shadow-jansunwai">
              <CardHeader>
                <CardTitle className="font-poppins text-lg text-[#1e3a8a]">
                  फीडबैक दिशानिर्देश
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#16a34a] mt-0.5" />
                  <p className="text-sm text-[#6b7280]">
                    ईमानदार और रचनात्मक फीडबैक दें
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#16a34a] mt-0.5" />
                  <p className="text-sm text-[#6b7280]">
                    अधिकारियों के कार्य की सराहना करें
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#16a34a] mt-0.5" />
                  <p className="text-sm text-[#6b7280]">
                    सुधार के सुझाव दें
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#16a34a] mt-0.5" />
                  <p className="text-sm text-[#6b7280]">
                    सभ्य भाषा का प्रयोग करें
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-jansunwai">
              <CardHeader>
                <CardTitle className="font-poppins text-lg text-[#1e3a8a]">
                  अन्य कार्य
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => onNavigate('complaint')}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  नई शिकायत दर्ज करें
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => onNavigate('tracking')}
                >
                  <Search className="h-4 w-4 mr-2" />
                  शिकायत ट्रैक करें
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  सुझाव दें
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}