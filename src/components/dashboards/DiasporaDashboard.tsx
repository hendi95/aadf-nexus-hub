import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Globe, Users, Briefcase, MessageSquare, Lightbulb, MapPin } from 'lucide-react';

const DiasporaDashboard = () => {
  const stats = [
    { label: 'Global Network', value: '89', icon: Globe, change: '+5 new countries' },
    { label: 'Active Collaborations', value: '7', icon: Briefcase, change: '3 cross-border projects' },
    { label: 'Mentorship Sessions', value: '12', icon: Users, change: '4 this month' },
    { label: 'Innovation Ideas', value: '18', icon: Lightbulb, change: '6 in development' }
  ];

  const globalProjects = [
    { title: 'Albania Tech Hub Initiative', location: 'Tirana, Albania', partners: 8, status: 'Active' },
    { title: 'Diaspora Investment Fund', location: 'Multi-country', partners: 15, status: 'Planning' },
    { title: 'Remote Work Academy', location: 'Online', partners: 12, status: 'Launching' }
  ];

  const mentorshipRequests = [
    { name: 'Andi Hoxha', field: 'Software Engineering', location: 'Pristina', experience: '2 years' },
    { name: 'Lira Spahiu', field: 'Marketing Strategy', location: 'Tirana', experience: '1 year' },
    { name: 'Erion Meta', field: 'Data Science', location: 'Shkodra', experience: '3 years' }
  ];

  const diasporaLab = [
    { title: 'AI-Powered Tourism Platform', category: 'Technology', seeking: 'Technical Co-founder' },
    { title: 'Sustainable Agriculture Initiative', category: 'Environment', seeking: 'Investment & Expertise' },
    { title: 'Educational Content Platform', category: 'Education', seeking: 'Content Creators' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-primary">Diaspora Professional Hub</h1>
        <p className="text-lg text-muted-foreground">
          Bridge continents, share expertise, and drive innovation across borders
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-success">{stat.value}</p>
                    <p className="text-xs text-accent mt-1">{stat.change}</p>
                  </div>
                  <Icon className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Global Projects */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Global Projects</span>
            </CardTitle>
            <CardDescription>
              Cross-border initiatives connecting diaspora expertise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {globalProjects.map((project, index) => (
                <div key={index} className="p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{project.title}</h4>
                    <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{project.partners} partners</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 btn-professional">
              <Briefcase className="mr-2 h-4 w-4" />
              Create New Project
            </Button>
          </CardContent>
        </Card>

        {/* Mentorship Requests */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Mentorship Requests</span>
            </CardTitle>
            <CardDescription>
              Local talents seeking guidance from diaspora professionals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mentorshipRequests.map((request, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" />
                      <AvatarFallback>{request.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{request.name}</p>
                      <p className="text-sm text-muted-foreground">{request.field}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{request.location}</span>
                        <Badge variant="outline" className="text-xs">{request.experience} exp</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Mentor
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Requests
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Diaspora Lab */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5" />
            <span>Diaspora Lab</span>
          </CardTitle>
          <CardDescription>
            Innovation initiatives connecting diaspora professionals with local talent
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {diasporaLab.map((initiative, index) => (
              <div key={index} className="p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                <Badge className="mb-2">{initiative.category}</Badge>
                <h4 className="font-semibold mb-2">{initiative.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Seeking: {initiative.seeking}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Join Initiative
                </Button>
              </div>
            ))}
          </div>
          <Button className="w-full mt-6 btn-professional">
            <Lightbulb className="mr-2 h-4 w-4" />
            Submit New Initiative
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Connect and collaborate across borders</CardDescription>
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
            <Button variant="outline" className="w-full">
              <Globe className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Find</span> Diaspora
            </Button>
            <Button variant="outline" className="w-full">
              <Users className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Mentor</span> Talent
            </Button>
            <Button variant="outline" className="w-full">
              <Briefcase className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Start</span> Project
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiasporaDashboard;