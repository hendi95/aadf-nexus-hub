import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/components/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import MessageCenter from "./components/messaging/MessageCenter";
import ProfilePage from "./components/profile/ProfilePage";
import NetworkConnections from "./pages/NetworkConnections";
import ActiveProjects from "./pages/ActiveProjects";
import UpcomingEvents from "./pages/UpcomingEvents";
import CollaborationDetails from "./pages/CollaborationDetails";
import AlumniCommunity from "./pages/AlumniCommunity";
import Header from "./components/layout/Header";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'dashboard';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'messages':
        return (
          <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">Message Center</h1>
                <p className="text-muted-foreground">Connect and collaborate with your AADF network</p>
              </div>
              <MessageCenter />
            </main>
          </div>
        );
      case 'profile':
        return (
          <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <ProfilePage />
            </main>
          </div>
        );
      case 'network-connections':
        return <NetworkConnections />;
      case 'active-projects':
        return <ActiveProjects />;
      case 'upcoming-events':
        return <UpcomingEvents />;
      case 'collaboration-details':
        return <CollaborationDetails />;
      case 'alumni-community':
        return <AlumniCommunity />;
      default:
        return <Dashboard />;
    }
  };

  return renderPage();
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
