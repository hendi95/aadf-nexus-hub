import React from 'react';
import { useAuth } from '@/components/AuthContext';
import { useConnections } from '@/components/connections/ConnectionsContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Calendar, BookOpen, MessageSquare, TrendingUp, Globe } from 'lucide-react';

const AlumniDashboard = () => {
  const { user } = useAuth();
  const { sendRequest } = useConnections();
  const stats = [
    { label: 'Network Connections', value: '127', icon: Users, change: '+12 this month' },
    { label: 'Active Projects', value: '3', icon: BookOpen, change: '2 pending approval' },
    { label: 'Upcoming Events', value: '5', icon: Calendar, change: 'Next: Innovation Conference' },
    { label: 'Messages', value: '23', icon: MessageSquare, change: '8 unread' }
  ];

  const recentConnections = [
    { name: 'Sarah Chen', role: 'Tech Entrepreneur', location: 'Silicon Valley', program: 'MIP 2019' },
    { name: 'Mark Vrudhula', role: 'Investment Banker', location: 'London', program: 'LEAD 2020' },
    { name: 'Elena Koci', role: 'Data Scientist', location: 'Berlin', program: 'MIP 2021' }
  ];

  const opportunities = [
    { title: 'Fintech Startup Co-founder', type: 'Partnership', deadline: '2 weeks', applicants: 8 },
    { title: 'AI Research Collaboration', type: 'Research', deadline: '1 month', applicants: 12 },
    { title: 'Mentorship Program Lead', type: 'Leadership', deadline: '3 days', applicants: 5 }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-primary">Welcome back, Alumni!</h1>
        <p className="text-lg text-muted-foreground">
          Connect, collaborate, and grow with your AADF community
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={index} 
              className="card-professional cursor-pointer hover:bg-card-hover transition-colors"
              onClick={() => {
                if (stat.label === 'Network Connections') window.location.hash = 'network-connections';
                if (stat.label === 'Active Projects') window.location.hash = 'active-projects';
                if (stat.label === 'Upcoming Events') window.location.hash = 'upcoming-events';
                if (stat.label === 'Messages') window.location.hash = 'messages';
              }}
            >
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-success mt-1">{stat.change}</p>
                  </div>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Connections */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Recent Connections</span>
            </CardTitle>
            <CardDescription>
              New professionals who joined your network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentConnections.map((connection, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" />
                      <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{connection.name}</p>
                      <p className="text-sm text-muted-foreground">{connection.role}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Globe className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{connection.location}</span>
                        <Badge variant="secondary" className="text-xs">{connection.program}</Badge>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="whitespace-nowrap"
                    onClick={() => sendRequest(user?.type === 'alumni' ? 'diaspora' : 'alumni', { fromNameOverride: user?.name })}
                  >
                    Connect
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" onClick={() => (window.location.hash = 'network-connections')}>
              View All Connections
            </Button>
          </CardContent>
        </Card>

        {/* Collaboration Opportunities */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Collaboration Opportunities</span>
            </CardTitle>
            <CardDescription>
              Projects and initiatives looking for partners
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{opportunity.title}</h4>
                    <Badge variant={opportunity.type === 'Partnership' ? 'default' : 'secondary'}>
                      {opportunity.type}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Deadline: {opportunity.deadline}</span>
                    <span>{opportunity.applicants} applicants</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 w-full sm:w-auto"
                    onClick={() => window.location.hash = 'collaboration-details'}
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Browse All Opportunities
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              className="btn-professional w-full" 
              onClick={() => window.location.hash = 'messages'}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Send</span> Messages
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.location.hash = 'alumni-community' }
            >
              <Users className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Find</span> Alumni
            </Button>
            <Button variant="outline" className="w-full">
              <BookOpen className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Create</span> Project
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.location.hash = 'upcoming-events' }
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">View</span> Events
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlumniDashboard;