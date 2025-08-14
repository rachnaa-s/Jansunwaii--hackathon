import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { ComplaintForm } from './components/ComplaintForm';
import { TrackingPage } from './components/TrackingPage';
import { AdminDashboard } from './components/AdminDashboard';
import { FeedbackPage } from './components/FeedbackPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handlePageChange} />;
      case 'complaint':
        return <ComplaintForm onNavigate={handlePageChange} />;
      case 'tracking':
        return <TrackingPage onNavigate={handlePageChange} />;
      case 'admin':
        return <AdminDashboard />;
      case 'feedback':
        return <FeedbackPage onNavigate={handlePageChange} />;
      default:
        return <LandingPage onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                  <span className="font-poppins text-white font-bold">J</span>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg">जनसुनवाई</h3>
                  <p className="text-sm text-white/80">Indore Smart City</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                इंदौर स्मार्ट सिटी के लिए आधुनिक और पारदर्शी शिकायत निवारण प्लेटफॉर्म।
              </p>
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold mb-4">त्वरित लिंक</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => handlePageChange('home')} className="hover:text-white transition-colors">होम</button></li>
                <li><button onClick={() => handlePageChange('complaint')} className="hover:text-white transition-colors">शिकायत दर्ज करें</button></li>
                <li><button onClick={() => handlePageChange('tracking')} className="hover:text-white transition-colors">ट्रैकिंग</button></li>
                <li><button onClick={() => handlePageChange('feedback')} className="hover:text-white transition-colors">फीडबैक</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold mb-4">विभाग</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="hover:text-white transition-colors cursor-pointer">जल आपूर्ति</li>
                <li className="hover:text-white transition-colors cursor-pointer">सड़क निर्माण</li>
                <li className="hover:text-white transition-colors cursor-pointer">सफाई व्यवस्था</li>
                <li className="hover:text-white transition-colors cursor-pointer">विद्युत</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold mb-4">संपर्क जानकारी</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>हेल्पलाइन: 0731-2530530</p>
                <p>ईमेल: help@jansunwai.indore.gov.in</p>
                <p>पता: इंदौर स्मार्ट सिटी ऑफिस<br />इंदौर, मध्य प्रदेश</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80 text-sm">
              © 2025 जनसुनवाई - इंदौर स्मार्ट सिटी। सभी अधिकार सुरक्षित।
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}