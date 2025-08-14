import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Mail,
  User,
  Calendar,
  FileText,
  Eye,
  MessageSquare,
  Star,
  Timer,
  Navigation
} from 'lucide-react';

interface TrackingPageProps {
  onNavigate: (page: string) => void;
}

export function TrackingPage({ onNavigate }: TrackingPageProps) {
  const [trackingId, setTrackingId] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Mock complaint data
  const complaintData = {
    id: 'JUN2025001234',
    title: 'सड़क में बड़े गड्ढे की समस्या',
    category: 'सड़क निर्माण',
    status: 'प्रगति में',
    statusEn: 'In Progress',
    priority: 'उच्च',
    priorityEn: 'High',
    submittedDate: '15 अगस्त 2025',
    expectedDate: '25 अगस्त 2025',
    location: 'विजयनगर स्क्वायर, इंदौर',
    description: 'मुख्य सड़क पर बड़े गड्ढे के कारण यातायात में बाधा और दुर्घटना का खतरा है।',
    officer: {
      name: 'राज कुमार शर्मा',
      designation: 'सहायक इंजीनियर',
      department: 'सड़क निर्माण विभाग',
      phone: '+91 98765 43210',
      email: 'raj.sharma@indore.gov.in',
      photo: ''
    },
    timeline: [
      {
        date: '15 अगस्त 2025',
        time: '10:30 AM',
        status: 'शिकायत दर्ज',
        statusEn: 'Complaint Registered',
        description: 'आपकी शिकायत सफलतापूर्वक दर्ज की गई है',
        completed: true
      },
      {
        date: '15 अगस्त 2025',
        time: '2:15 PM',
        status: 'प्रारंभिक समीक्षा',
        statusEn: 'Initial Review',
        description: 'शिकायत की प्रारंभिक जांच पूर्ण',
        completed: true
      },
      {
        date: '16 अगस्त 2025',
        time: '11:45 AM',
        status: 'अधिकारी को सौंपा',
        statusEn: 'Assigned to Officer',
        description: 'संबंधित अधिकारी को शिकायत सौंपी गई',
        completed: true
      },
      {
        date: '17 अगस्त 2025',
        time: '9:20 AM',
        status: 'साइट निरीक्षण',
        statusEn: 'Site Inspection',
        description: 'स्थल का निरीक्षण किया गया',
        completed: true
      },
      {
        date: '18 अगस्त 2025',
        time: 'अपेक्षित',
        status: 'कार्य प्रारंभ',
        statusEn: 'Work Started',
        description: 'मरम्मत कार्य प्रारंभ होगा',
        completed: false
      },
      {
        date: '25 अगस्त 2025',
        time: 'अपेक्षित',
        status: 'कार्य पूर्ण',
        statusEn: 'Work Completed',
        description: 'समस्या का समाधान पूर्ण',
        completed: false
      }
    ]
  };

  const handleSearch = () => {
    if (trackingId.trim()) {
      setShowResults(true);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'प्रगति में': return 'bg-[#f59e0b] text-white';
      case 'पूर्ण': return 'bg-[#16a34a] text-white';
      case 'लंबित': return 'bg-[#6b7280] text-white';
      default: return 'bg-[#1e3a8a] text-white';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'उच्च': return 'bg-red-100 text-red-800 border-red-200';
      case 'मध्यम': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'कम': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const completedSteps = complaintData.timeline.filter(step => step.completed).length;
  const progressPercentage = (completedSteps / complaintData.timeline.length) * 100;

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
            शिकायत ट्रैकिंग
          </h1>
          <p className="text-lg text-[#6b7280]">
            अपनी शिकायत की स्थिति जांचें
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-jansunwai">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="शिकायत ID दर्ज करें (जैसे: JUN2025001234)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="border-gray-300 focus:border-[#1e3a8a] text-lg py-3"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 px-8 py-3"
              >
                <Search className="h-5 w-5 mr-2" />
                खोजें
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Complaint Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Complaint Summary */}
              <Card className="shadow-jansunwai">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-poppins text-xl text-[#1e3a8a] mb-2">
                        {complaintData.title}
                      </CardTitle>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={getStatusColor(complaintData.status)}>
                          {complaintData.status}
                        </Badge>
                        <Badge variant="outline" className={getPriorityColor(complaintData.priority)}>
                          {complaintData.priority} प्राथमिकता
                        </Badge>
                      </div>
                      <p className="text-[#6b7280] text-sm">ID: {complaintData.id}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      विवरण देखें
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-poppins font-medium text-[#1e3a8a] mb-2">प्रगति</h4>
                      <Progress value={progressPercentage} className="h-3 mb-2" />
                      <p className="text-sm text-[#6b7280]">
                        {completedSteps}/{complaintData.timeline.length} चरण पूर्ण
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-poppins font-medium text-[#1e3a8a] mb-1">श्रेणी</h5>
                        <p className="text-[#6b7280]">{complaintData.category}</p>
                      </div>
                      <div>
                        <h5 className="font-poppins font-medium text-[#1e3a8a] mb-1">स्थान</h5>
                        <div className="flex items-center text-[#6b7280]">
                          <MapPin className="h-4 w-4 mr-1" />
                          {complaintData.location}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-poppins font-medium text-[#1e3a8a] mb-1">दर्ज दिनांक</h5>
                        <div className="flex items-center text-[#6b7280]">
                          <Calendar className="h-4 w-4 mr-1" />
                          {complaintData.submittedDate}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-poppins font-medium text-[#1e3a8a] mb-1">अपेक्षित पूर्णता</h5>
                        <div className="flex items-center text-[#6b7280]">
                          <Timer className="h-4 w-4 mr-1" />
                          {complaintData.expectedDate}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-poppins font-medium text-[#1e3a8a] mb-2">विवरण</h5>
                      <p className="text-[#6b7280] text-sm leading-relaxed">
                        {complaintData.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="shadow-jansunwai">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl text-[#1e3a8a]">
                    प्रगति विवरण
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {complaintData.timeline.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed 
                            ? 'bg-[#16a34a] text-white' 
                            : 'bg-[#e5e7eb] text-[#6b7280]'
                        }`}>
                          {step.completed ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <Clock className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className={`font-poppins font-medium ${
                              step.completed ? 'text-[#1e3a8a]' : 'text-[#6b7280]'
                            }`}>
                              {step.status}
                            </h4>
                            <div className="text-sm text-[#6b7280]">
                              {step.date} • {step.time}
                            </div>
                          </div>
                          <p className="text-sm text-[#6b7280] mb-1">{step.statusEn}</p>
                          <p className="text-sm text-[#6b7280]">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Live Map */}
              <Card className="shadow-jansunwai">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl text-[#1e3a8a]">
                    लाइव मैप
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg p-12 text-center">
                    <Navigation className="h-16 w-16 mx-auto mb-4 text-[#6b7280]" />
                    <p className="text-[#6b7280] mb-4">शिकायत स्थान और कार्य की लाइव स्थिति</p>
                    <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a]">
                      <MapPin className="h-4 w-4 mr-2" />
                      मैप में देखें
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Officer Information */}
              <Card className="shadow-jansunwai">
                <CardHeader>
                  <CardTitle className="font-poppins text-lg text-[#1e3a8a]">
                    जिम्मेदार अधिकारी
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <Avatar className="w-20 h-20 mx-auto mb-3">
                      <AvatarImage src={complaintData.officer.photo} />
                      <AvatarFallback className="bg-[#1e3a8a] text-white text-lg">
                        {complaintData.officer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-poppins font-semibold text-[#1e3a8a]">
                      {complaintData.officer.name}
                    </h3>
                    <p className="text-sm text-[#6b7280] mb-1">
                      {complaintData.officer.designation}
                    </p>
                    <p className="text-sm text-[#6b7280]">
                      {complaintData.officer.department}
                    </p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-3 text-[#1e3a8a]" />
                      <span className="text-[#6b7280]">{complaintData.officer.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-3 text-[#1e3a8a]" />
                      <span className="text-[#6b7280]">{complaintData.officer.email}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1 bg-[#16a34a] hover:bg-[#16a34a]/90">
                      <Phone className="h-4 w-4 mr-1" />
                      कॉल करें
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      संदेश
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-jansunwai">
                <CardHeader>
                  <CardTitle className="font-poppins text-lg text-[#1e3a8a]">
                    त्वरित कार्य
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-[#1e3a8a] text-[#1e3a8a]"
                    onClick={() => onNavigate('feedback')}
                  >
                    <Star className="h-4 w-4 mr-2" />
                    फीडबैक दें
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    रिपोर्ट डाउनलोड करें
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onNavigate('complaint')}
                  >
                    <AlertCircle className="h-4 w-4 mr-2" />
                    नई शिकायत दर्ज करें
                  </Button>
                </CardContent>
              </Card>

              {/* Statistics */}
              <Card className="shadow-jansunwai">
                <CardHeader>
                  <CardTitle className="font-poppins text-lg text-[#1e3a8a]">
                    आंकड़े
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6b7280]">औसत समाधान समय</span>
                    <span className="font-poppins font-semibold text-[#1e3a8a]">7 दिन</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6b7280]">समाधान दर</span>
                    <span className="font-poppins font-semibold text-[#16a34a]">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6b7280]">संतुष्टि स्कोर</span>
                    <span className="font-poppins font-semibold text-[#f59e0b]">4.2/5</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {!showResults && (
          <div className="text-center py-12">
            <FileText className="h-24 w-24 mx-auto mb-6 text-[#6b7280]" />
            <h3 className="font-poppins font-semibold text-xl text-[#1e3a8a] mb-2">
              अपनी शिकायत ID दर्ज करें
            </h3>
            <p className="text-[#6b7280] mb-6">
              शिकायत दर्ज करने के बाद मिली ID को ऊपर दिए गए बॉक्स में डालें
            </p>
            <Button 
              variant="outline" 
              onClick={() => onNavigate('complaint')}
              className="border-[#1e3a8a] text-[#1e3a8a]"
            >
              नई शिकायत दर्ज करें
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}