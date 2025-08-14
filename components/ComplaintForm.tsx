import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Upload, 
  MapPin, 
  MessageCircle, 
  Camera, 
  FileText,
  Droplets,
  Zap,
  Car,
  Trash2,
  Home,
  Construction,
  Phone,
  Mail,
  User,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ComplaintFormProps {
  onNavigate: (page: string) => void;
}

export function ComplaintForm({ onNavigate }: ComplaintFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    title: '',
    description: '',
    location: '',
    name: '',
    phone: '',
    email: '',
    files: [] as File[]
  });

  const departments = [
    { id: 'water', name: 'जल आपूर्ति', nameEn: 'Water Supply', icon: Droplets, color: 'text-blue-600' },
    { id: 'electricity', name: 'विद्युत', nameEn: 'Electricity', icon: Zap, color: 'text-yellow-600' },
    { id: 'roads', name: 'सड़क निर्माण', nameEn: 'Road Construction', icon: Construction, color: 'text-gray-600' },
    { id: 'sanitation', name: 'सफाई व्यवस्था', nameEn: 'Sanitation', icon: Trash2, color: 'text-green-600' },
    { id: 'traffic', name: 'ट्रैफिक', nameEn: 'Traffic', icon: Car, color: 'text-red-600' },
    { id: 'housing', name: 'आवास', nameEn: 'Housing', icon: Home, color: 'text-purple-600' }
  ];

  const subcategories = {
    water: ['पानी की कमी', 'पाइप लीकेज', 'गंदा पानी', 'नल कनेक्शन'],
    electricity: ['बिजली कटौती', 'स्ट्रीट लाइट', 'मीटर समस्या', 'तार की समस्या'],
    roads: ['सड़क में गड्ढे', 'निर्माण कार्य', 'फुटपाथ', 'डिवाइडर'],
    sanitation: ['कूड़ा संग्रह', 'सफाई कार्य', 'सीवर समस्या', 'कीड़े-मकोड़े'],
    traffic: ['ट्रैफिक जाम', 'सिग्नल समस्या', 'पार्किंग', 'ओवरस्पीड'],
    housing: ['निर्माण परमिट', 'बिल्डिंग गुणवत्ता', 'अवैध निर्माण', 'नक्शा अनुमोदन']
  };

  const steps = [
    { number: 1, title: 'श्रेणी चुनें', titleEn: 'Select Category' },
    { number: 2, title: 'विवरण भरें', titleEn: 'Fill Details' },
    { number: 3, title: 'स्थान चुनें', titleEn: 'Select Location' },
    { number: 4, title: 'संपर्क जानकारी', titleEn: 'Contact Info' }
  ];

  const progress = (currentStep / steps.length) * 100;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...Array.from(files)]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    // Simulate form submission
    alert('शिकायत सफलतापूर्वक दर्ज की गई! आपका शिकायत ID: JUN2025001234');
    onNavigate('tracking');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
            शिकायत दर्ज करें
          </h1>
          <p className="text-lg text-[#6b7280]">
            कृपया नीचे दी गई जानकारी भरें
          </p>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8 shadow-jansunwai">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-poppins font-bold ${
                    currentStep >= step.number 
                      ? 'bg-[#1e3a8a] text-white' 
                      : 'bg-[#e5e7eb] text-[#6b7280]'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="ml-3 text-left hidden sm:block">
                    <p className={`font-poppins font-medium ${
                      currentStep >= step.number ? 'text-[#1e3a8a]' : 'text-[#6b7280]'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-sm text-[#6b7280]">{step.titleEn}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden sm:block w-16 h-0.5 ml-6 ${
                      currentStep > step.number ? 'bg-[#1e3a8a]' : 'bg-[#e5e7eb]'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Step Content */}
        <Card className="shadow-jansunwai">
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div>
                <h2 className="font-poppins font-semibold text-xl mb-6 text-[#1e3a8a]">
                  शिकायत की श्रेणी चुनें
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {departments.map((dept) => (
                    <Card 
                      key={dept.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-jansunwai ${
                        formData.category === dept.id 
                          ? 'border-2 border-[#1e3a8a] bg-[#1e3a8a]/5' 
                          : 'border border-gray-200 hover:border-[#1e3a8a]/30'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, category: dept.id, subcategory: '' }))}
                    >
                      <CardContent className="p-6 text-center">
                        <dept.icon className={`h-12 w-12 mx-auto mb-4 ${dept.color}`} />
                        <h3 className="font-poppins font-medium text-[#1e3a8a] mb-1">{dept.name}</h3>
                        <p className="text-sm text-[#6b7280]">{dept.nameEn}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {formData.category && (
                  <div className="mt-6">
                    <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                      उप-श्रेणी चुनें
                    </Label>
                    <Select 
                      value={formData.subcategory} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, subcategory: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="उप-श्रेणी चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        {subcategories[formData.category as keyof typeof subcategories]?.map((sub) => (
                          <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="font-poppins font-semibold text-xl text-[#1e3a8a]">
                  शिकायत का विवरण
                </h2>
                
                <div>
                  <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                    शिकायत का शीर्षक
                  </Label>
                  <Input
                    placeholder="संक्षेप में समस्या बताएं"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="border-gray-300 focus:border-[#1e3a8a]"
                  />
                </div>

                <div>
                  <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                    विस्तृत विवरण
                  </Label>
                  <Textarea
                    placeholder="कृपया अपनी समस्या का विस्तृत विवरण दें..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="min-h-32 border-gray-300 focus:border-[#1e3a8a]"
                  />
                </div>

                <div>
                  <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                    फोटो/वीडियो अपलोड करें
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1e3a8a] transition-colors">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-[#6b7280]" />
                    <p className="text-[#6b7280] mb-2">फाइल अपलोड करने के लिए क्लिक करें</p>
                    <p className="text-sm text-[#6b7280]">JPG, PNG, MP4 (अधिकतम 10MB)</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      फाइल चुनें
                    </Button>
                  </div>
                  
                  {formData.files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-[#f3f4f6] rounded">
                          <span className="text-sm text-[#6b7280]">{file.name}</span>
                          <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                            ✕
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="font-poppins font-semibold text-xl text-[#1e3a8a]">
                  स्थान की जानकारी
                </h2>
                
                <div>
                  <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                    पता/स्थान
                  </Label>
                  <Input
                    placeholder="पूरा पता दर्ज करें"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="border-gray-300 focus:border-[#1e3a8a]"
                  />
                </div>

                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-[#6b7280]" />
                  <p className="text-[#6b7280] mb-4">मैप पर स्थान चुनें</p>
                  <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a]">
                    <MapPin className="h-4 w-4 mr-2" />
                    GPS से स्थान प्राप्त करें
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="font-poppins font-semibold text-xl text-[#1e3a8a]">
                  संपर्क जानकारी
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                      पूरा नाम
                    </Label>
                    <Input
                      placeholder="आपका नाम"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="border-gray-300 focus:border-[#1e3a8a]"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                      मोबाइल नंबर
                    </Label>
                    <Input
                      placeholder="10 अंक का मोबाइल नंबर"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="border-gray-300 focus:border-[#1e3a8a]"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-[#1e3a8a] font-poppins font-medium mb-2 block">
                    ईमेल आईडी (वैकल्पिक)
                  </Label>
                  <Input
                    placeholder="आपका ईमेल पता"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="border-gray-300 focus:border-[#1e3a8a]"
                  />
                </div>

                <Card className="bg-[#16a34a]/5 border-[#16a34a]/20">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-[#16a34a] mt-0.5" />
                      <div>
                        <p className="font-poppins font-medium text-[#16a34a] mb-1">
                          महत्वपूर्ण जानकारी
                        </p>
                        <p className="text-sm text-[#16a34a]/80">
                          आपकी व्यक्तिगत जानकारी सुरक्षित रखी जाएगी और केवल शिकायत निवारण के लिए उपयोग की जाएगी।
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <Separator className="my-8" />
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                disabled={currentStep === 1}
                className="border-[#1e3a8a] text-[#1e3a8a] disabled:border-gray-300 disabled:text-gray-400"
              >
                पिछला
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  disabled={
                    (currentStep === 1 && !formData.category) ||
                    (currentStep === 2 && (!formData.title || !formData.description)) ||
                    (currentStep === 3 && !formData.location)
                  }
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90"
                >
                  अगला
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.phone}
                  className="bg-[#16a34a] hover:bg-[#16a34a]/90"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  शिकायत दर्ज करें
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Chatbot */}
        <div className="fixed bottom-6 right-6">
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bg-[#16a34a] hover:bg-[#16a34a]/90 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}