import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  Users, 
  TrendingUp,
  Shield,
  Smartphone,
  MapPin,
  Star,
  ChevronRight,
  MessageSquare,
  BarChart3,
  Timer
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const stats = [
    { 
      icon: FileText, 
      number: '12,847', 
      label: 'कुल शिकायतें',
      labelEn: 'Total Complaints',
      color: 'text-[#1e3a8a]'
    },
    { 
      icon: CheckCircle, 
      number: '10,234', 
      label: 'हल की गई',
      labelEn: 'Resolved',
      color: 'text-[#16a34a]'
    },
    { 
      icon: Clock, 
      number: '2,613', 
      label: 'प्रगति में',
      labelEn: 'In Progress',
      color: 'text-[#f59e0b]'
    },
    { 
      icon: Users, 
      number: '8,456', 
      label: 'संतुष्ट नागरिक',
      labelEn: 'Satisfied Citizens',
      color: 'text-[#1e3a8a]'
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: 'आसान शिकायत दर्ज',
      titleEn: 'Easy Complaint Filing',
      description: 'मोबाइल और वेब दोनों प्लेटफॉर्म पर आसानी से शिकायत दर्ज करें',
      descriptionEn: 'File complaints easily on both mobile and web platforms'
    },
    {
      icon: MapPin,
      title: 'जीपीएस ट्रैकिंग',
      titleEn: 'GPS Tracking',
      description: 'अपने स्थान को सटीक रूप से चिह्नित करें',
      descriptionEn: 'Mark your location accurately with GPS'
    },
    {
      icon: MessageSquare,
      title: 'रियल-टाइम अपडेट',
      titleEn: 'Real-time Updates',
      description: 'अपनी शिकायत की स्थिति की लाइव जानकारी प्राप्त करें',
      descriptionEn: 'Get live updates on your complaint status'
    },
    {
      icon: BarChart3,
      title: 'पारदर्शी प्रक्रिया',
      titleEn: 'Transparent Process',
      description: 'पूरी प्रक्रिया में पारदर्शिता और जवाबदेही',
      descriptionEn: 'Complete transparency and accountability in the process'
    }
  ];

  const departments = [
    'जल आपूर्ति',
    'सफाई व्यवस्था',
    'सड़क निर्माण',
    'स्ट्रीट लाइट',
    'पार्किंग',
    'ट्रैफिक'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/5 to-[#16a34a]/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-[#1e3a8a]/10 text-[#1e3a8a] border-[#1e3a8a]/20">
              <Star className="w-4 h-4 mr-2" />
              इंदौर स्मार्ट सिटी | Indore Smart City
            </Badge>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 text-[#1e3a8a] leading-tight">
              जनसुनवाई
            </h1>
            <h2 className="font-inter text-2xl md:text-3xl mb-4 text-[#6b7280] font-medium">
              आपकी आवाज़, हमारी प्राथमिकता
            </h2>
            <p className="text-lg text-[#6b7280] mb-8 max-w-2xl mx-auto leading-relaxed">
              इंदौर स्मार्ट सिटी के लिए एक आधुनिक और पारदर्शी शिकायत निवारण प्लेटफॉर्म। 
              अपनी समस्याओं को तुरंत दर्ज करें और रियल-टाइम अपडेट प्राप्त करें।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-3 rounded-xl shadow-jansunwai font-poppins"
                onClick={() => onNavigate('complaint')}
              >
                शिकायत दर्ज करें
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-3 rounded-xl font-poppins"
                onClick={() => onNavigate('tracking')}
              >
                शिकायत ट्रैक करें
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-jansunwai hover:shadow-jansunwai-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color} bg-current/10`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <h3 className="font-poppins font-bold text-3xl mb-2 text-[#1e3a8a]">{stat.number}</h3>
                  <p className="font-inter text-[#6b7280] font-medium">{stat.label}</p>
                  <p className="text-sm text-[#6b7280]/70">{stat.labelEn}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
              प्लेटफॉर्म की विशेषताएं
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              आधुनिक तकनीक और उपयोगकर्ता-केंद्रित डिज़ाइन के साथ शिकायत निवारण को आसान बनाना
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-jansunwai hover:shadow-jansunwai-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e3a8a]/10 rounded-xl mb-4">
                    <feature.icon className="h-8 w-8 text-[#1e3a8a]" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2 text-[#1e3a8a]">{feature.title}</h3>
                  <p className="text-sm text-[#6b7280]/70 mb-2">{feature.titleEn}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
              विभाग
            </h2>
            <p className="text-lg text-[#6b7280]">
              निम्नलिखित विभागों की शिकायतें दर्ज करें
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((dept, index) => (
              <Card key={index} className="border-2 border-[#1e3a8a]/10 hover:border-[#1e3a8a]/30 transition-colors duration-200 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <p className="font-poppins font-medium text-[#1e3a8a]">{dept}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a8a] to-[#16a34a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-white">
            आज ही अपनी शिकायत दर्ज करें
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            हमारे साथ जुड़ें और इंदौर को और भी बेहतर बनाने में योगदान दें
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#1e3a8a] hover:bg-white/90 px-8 py-3 rounded-xl shadow-lg font-poppins"
            onClick={() => onNavigate('complaint')}
          >
            शिकायत दर्ज करें
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}