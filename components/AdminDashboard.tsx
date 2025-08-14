import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  MapPin,
  Filter,
  Download,
  RefreshCw,
  Calendar,
  Target,
  ThermometerSun
} from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    {
      title: 'कुल शिकायतें',
      titleEn: 'Total Complaints',
      value: '12,847',
      change: '+12%',
      changeType: 'increase',
      icon: FileText,
      color: 'text-[#1e3a8a]'
    },
    {
      title: 'हल की गई',
      titleEn: 'Resolved',
      value: '10,234',
      change: '+8%',
      changeType: 'increase',
      icon: CheckCircle2,
      color: 'text-[#16a34a]'
    },
    {
      title: 'प्रगति में',
      titleEn: 'In Progress',
      value: '2,613',
      change: '-5%',
      changeType: 'decrease',
      icon: Clock,
      color: 'text-[#f59e0b]'
    },
    {
      title: 'औसत समाधान समय',
      titleEn: 'Avg Resolution Time',
      value: '6.2 दिन',
      change: '-2 दिन',
      changeType: 'decrease',
      icon: Target,
      color: 'text-[#1e3a8a]'
    }
  ];

  const departments = [
    { name: 'जल आपूर्ति', complaints: 3245, resolved: 2891, pending: 354, sla: 89 },
    { name: 'सड़क निर्माण', complaints: 2876, resolved: 2234, pending: 642, sla: 78 },
    { name: 'सफाई व्यवस्था', complaints: 2134, resolved: 1987, pending: 147, sla: 93 },
    { name: 'विद्युत', complaints: 1892, resolved: 1645, pending: 247, sla: 87 },
    { name: 'ट्रैफिक', complaints: 1456, resolved: 1267, pending: 189, sla: 82 },
    { name: 'आवास', complaints: 1244, resolved: 1210, pending: 34, sla: 97 }
  ];

  const recentComplaints = [
    {
      id: 'JUN2025001245',
      title: 'पानी की कमी',
      department: 'जल आपूर्ति',
      status: 'नया',
      priority: 'उच्च',
      time: '2 मिनट पहले'
    },
    {
      id: 'JUN2025001244',
      title: 'सड़क में गड्ढे',
      department: 'सड़क निर्माण',
      status: 'प्रगति में',
      priority: 'मध्यम',
      time: '15 मिनट पहले'
    },
    {
      id: 'JUN2025001243',
      title: 'स्ट्रीट लाइट खराब',
      department: 'विद्युत',
      status: 'पूर्ण',
      priority: 'कम',
      time: '1 घंटा पहले'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'नया': return 'bg-blue-100 text-blue-800';
      case 'प्रगति में': return 'bg-yellow-100 text-yellow-800';
      case 'पूर्ण': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'उच्च': return 'bg-red-100 text-red-800';
      case 'मध्यम': return 'bg-yellow-100 text-yellow-800';
      case 'कम': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSLAColor = (sla: number) => {
    if (sla >= 90) return 'text-[#16a34a]';
    if (sla >= 75) return 'text-[#f59e0b]';
    return 'text-[#dc2626]';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-poppins font-bold text-3xl md:text-4xl text-[#1e3a8a]">
              एडमिन डैशबोर्ड
            </h1>
            <p className="text-lg text-[#6b7280] mt-1">
              जनसुनवाई प्रबंधन केंद्र
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              फिल्टर
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              रिपोर्ट
            </Button>
            <Button size="sm" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
              <RefreshCw className="h-4 w-4 mr-2" />
              रिफ्रेश
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-jansunwai hover:shadow-jansunwai-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6b7280] mb-1">{stat.title}</p>
                    <p className="text-xs text-[#6b7280] mb-2">{stat.titleEn}</p>
                    <p className="font-poppins font-bold text-2xl text-[#1e3a8a]">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'increase' ? 'text-[#16a34a]' : 'text-[#dc2626]'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-[#6b7280] ml-1">पिछले महीने से</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-current/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Charts and Analytics */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">अवलोकन</TabsTrigger>
                <TabsTrigger value="analytics">विश्लेषण</TabsTrigger>
                <TabsTrigger value="heatmap">हीटमैप</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* Department Performance */}
                <Card className="shadow-jansunwai">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl text-[#1e3a8a]">
                      विभागवार प्रदर्शन
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {departments.map((dept, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-poppins font-medium text-[#1e3a8a]">{dept.name}</h4>
                            <div className="flex items-center space-x-4">
                              <span className="text-sm text-[#6b7280]">
                                कुल: {dept.complaints}
                              </span>
                              <span className={`font-poppins font-semibold ${getSLAColor(dept.sla)}`}>
                                SLA: {dept.sla}%
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div className="text-center">
                              <p className="text-sm text-[#6b7280]">हल की गई</p>
                              <p className="font-poppins font-semibold text-[#16a34a]">{dept.resolved}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-[#6b7280]">लंबित</p>
                              <p className="font-poppins font-semibold text-[#f59e0b]">{dept.pending}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-[#6b7280]">समाधान दर</p>
                              <p className="font-poppins font-semibold text-[#1e3a8a]">
                                {Math.round((dept.resolved / dept.complaints) * 100)}%
                              </p>
                            </div>
                          </div>
                          <Progress 
                            value={(dept.resolved / dept.complaints) * 100} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <Card className="shadow-jansunwai">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl text-[#1e3a8a]">
                      विश्लेषण रिपोर्ट
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 rounded-lg p-12 text-center">
                      <BarChart3 className="h-16 w-16 mx-auto mb-4 text-[#6b7280]" />
                      <p className="text-[#6b7280] mb-4">
                        विस्तृत चार्ट और ग्राफ यहाँ दिखाए जाएंगे
                      </p>
                      <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a]">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        विस्तृत रिपोर्ट देखें
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="heatmap">
                <Card className="shadow-jansunwai">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl text-[#1e3a8a]">
                      शिकायत हीटमैप
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 rounded-lg p-12 text-center">
                      <ThermometerSun className="h-16 w-16 mx-auto mb-4 text-[#6b7280]" />
                      <p className="text-[#6b7280] mb-4">
                        इंदौर शहर का शिकायत हीटमैप
                      </p>
                      <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a]">
                        <MapPin className="h-4 w-4 mr-2" />
                        पूरा मैप देखें
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Complaints */}
            <Card className="shadow-jansunwai">
              <CardHeader>
                <CardTitle className="font-poppins text-lg text-[#1e3a8a]">
                  हाल की शिकायतें
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentComplaints.map((complaint, index) => (
                    <div key={index} className="border-l-4 border-[#1e3a8a] pl-4 py-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-poppins font-medium text-[#1e3a8a] mb-1">
                            {complaint.title}
                          </p>
                          <p className="text-xs text-[#6b7280] mb-2">
                            ID: {complaint.id}
                          </p>
                          <p className="text-sm text-[#6b7280] mb-2">
                            {complaint.department}
                          </p>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getStatusColor(complaint.status)} variant="secondary">
                              {complaint.status}
                            </Badge>
                            <Badge className={getPriorityColor(complaint.priority)} variant="outline">
                              {complaint.priority}
                            </Badge>
                          </div>
                          <p className="text-xs text-[#6b7280]">
                            {complaint.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SLA Monitor */}
            <Card className="shadow-jansunwai">
              <CardHeader>
                <CardTitle className="font-poppins text-lg text-[#1e3a8a]">
                  SLA मॉनिटर
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6b7280]">समग्र SLA अनुपालन</span>
                    <span className="font-poppins font-semibold text-[#16a34a]">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6b7280]">समय पर पूर्ण</span>
                      <span className="text-[#16a34a] font-medium">82%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6b7280]">देर से पूर्ण</span>
                      <span className="text-[#f59e0b] font-medium">13%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6b7280]">SLA उल्लंघन</span>
                      <span className="text-[#dc2626] font-medium">5%</span>
                    </div>
                  </div>
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
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  उच्च प्राथमिकता शिकायतें
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  SLA उल्लंघन अलर्ट
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  अधिकारी असाइनमेंट
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  साप्ताहिक रिपोर्ट
                </Button>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card className="shadow-jansunwai border-red-200">
              <CardHeader>
                <CardTitle className="font-poppins text-lg text-red-600 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  तुरंत ध्यान चाहिए
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-sm font-medium text-red-800">5 शिकायतें SLA समय सीमा पार</p>
                    <p className="text-xs text-red-600">तुरंत कार्रवाई आवश्यक</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">12 शिकायतें 24 घंटे से अधिक लंबित</p>
                    <p className="text-xs text-yellow-600">समीक्षा की आवश्यकता</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}