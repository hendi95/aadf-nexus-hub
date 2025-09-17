import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen, ArrowLeft, Users, Calendar, Target, TrendingUp } from 'lucide-react';

const ActiveProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Albania Tech Hub Initiative',
      description: 'Building a technology ecosystem in Tirana to support local startups and connect with international markets.',
      status: 'Active',
      progress: 75,
      team: ['Sarah Chen', 'Mark Vrudhula', 'Elena Koci'],
      deadline: '2024-12-15',
      category: 'Technology',
      budget: '$50,000',
      milestones: ['Research Phase Complete', 'Partnership Agreements', 'Location Secured']
    },
    {
      id: 2,
      title: 'Diaspora Investment Fund',
      description: 'Creating an investment vehicle to channel diaspora capital towards Albanian startups and SMEs.',
      status: 'Planning',
      progress: 30,
      team: ['Andi Hoxha', 'Lira Spahiu'],
      deadline: '2025-06-30',
      category: 'Finance',
      budget: '$200,000',
      milestones: ['Legal Framework', 'Fund Structure', 'Initial Commitments']
    },
    {
      id: 3,
      title: 'Remote Work Academy',
      description: 'Training program to prepare Albanian professionals for remote work opportunities with international companies.',
      status: 'Launching',
      progress: 90,
      team: ['Erion Meta', 'Sarah Chen'],
      deadline: '2024-10-01',
      category: 'Education',
      budget: '$30,000',
      milestones: ['Curriculum Design', 'Platform Development', 'Pilot Testing']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'default';
      case 'Planning': return 'secondary';
      case 'Launching': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-primary">Active Projects</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="card-professional">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge variant={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Due: {new Date(project.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span>{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span>Budget: {project.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{project.team.length} members</span>
                    </div>
                  </div>

                  {/* Team Members */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Team Members</h4>
                    <div className="flex -space-x-2">
                      {project.team.map((member, index) => (
                        <Avatar key={index} className="border-2 border-background">
                          <AvatarImage src="/api/placeholder/32/32" />
                          <AvatarFallback className="text-xs">
                            {member.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>

                  {/* Milestones */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Milestones</h4>
                    <div className="space-y-1">
                      {project.milestones.map((milestone, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" className="btn-professional flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Join Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create New Project */}
        <Card className="card-professional mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Start a New Project</span>
            </CardTitle>
            <CardDescription>
              Launch your own initiative and invite other AADF members to collaborate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="btn-professional">
              <BookOpen className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActiveProjects;