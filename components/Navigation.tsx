import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'होम', labelEn: 'Home' },
    { id: 'complaint', label: 'शिकायत दर्ज करें', labelEn: 'File Complaint' },
    { id: 'tracking', label: 'ट्रैकिंग', labelEn: 'Track Complaint' },
    { id: 'feedback', label: 'फीडबैक', labelEn: 'Feedback' },
    { id: 'admin', label: 'एडमिन', labelEn: 'Admin' },
  ];

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-jansunwai sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#1e3a8a] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>हेल्पलाइन: 0731-2530530</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>help@jansunwai.indore.gov.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>इंदौर स्मार्ट सिटी</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center">
              <span className="font-poppins text-white font-bold text-xl">J</span>
            </div>
            <div>
              <h1 className="font-poppins font-bold text-[#1e3a8a] text-xl">जनसुनवाई</h1>
              <p className="text-sm text-[#6b7280]">Indore Smart City</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-inter transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-[#1e3a8a] border-b-2 border-[#1e3a8a] pb-1'
                    : 'text-[#6b7280] hover:text-[#1e3a8a]'
                }`}
              >
                <div className="text-center">
                  <div className="text-sm">{item.label}</div>
                  <div className="text-xs opacity-75">{item.labelEn}</div>
                </div>
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="py-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                    <span className="font-poppins text-white font-bold">J</span>
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-[#1e3a8a]">जनसुनवाई</h2>
                    <p className="text-sm text-[#6b7280]">Indore Smart City</p>
                  </div>
                </div>
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                        currentPage === item.id
                          ? 'bg-[#1e3a8a] text-white'
                          : 'hover:bg-[#f3f4f6] text-[#6b7280]'
                      }`}
                    >
                      <div>{item.label}</div>
                      <div className="text-xs opacity-75">{item.labelEn}</div>
                    </button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}