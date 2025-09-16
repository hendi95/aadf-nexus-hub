import React from 'react';
import { useAuth } from '@/components/AuthContext';
import AlumniDashboard from '@/components/dashboards/AlumniDashboard';
import DiasporaDashboard from '@/components/dashboards/DiasporaDashboard';
import AdminDashboard from '@/components/dashboards/AdminDashboard';
import Header from '@/components/layout/Header';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  const renderDashboard = () => {
    switch (user.type) {
      case 'alumni':
        return <AlumniDashboard />;
      case 'diaspora':
        return <DiasporaDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <div>Invalid user type</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {renderDashboard()}
      </main>
    </div>
  );
};

export default Dashboard;