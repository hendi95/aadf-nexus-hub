import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart, Users, Globe, TrendingUp, Shield, Settings, Calendar, Mail } from 'lucide-react';

const AdminDashboard = () => {
  const platformStats = [
    { label: 'Total Users', value: '2,847', icon: Users, change: '+12.5%', color: 'text-primary' },
    { label: 'Active Alumni', value: '1,923', icon: BarChart, change: '+8.2%', color: 'text-accent' },
    { label: 'Diaspora Professionals', value: '724', icon: Globe, change: '+15.7%', color: 'text-success' },
    { label: 'Platform Engagement', value: '89%', icon: TrendingUp, change: '+3.1%', color: 'text-warning' }
  ];

  const recentActivity = [
    { action: 'New user registration', user: 'Elena Marku', type: 'alumni', time: '2 minutes ago' },
    { action: 'Project collaboration started', user: 'Arben Koci', type: 'diaspora', time: '15 minutes ago' },
    { action: 'Mentorship session completed', user: 'Sara Chen', type: 'alumni', time: '1 hour ago' },
    { action: 'New diaspora lab initiative', user: 'Mark Vrudhula', type: 'diaspora', time: '2 hours ago' }
  ];

  const pendingApprovals = [
    { title: 'AI Research Collaboration Project', submitter: 'Dr. Ana Hoxha', type: 'Project', priority: 'High' },
    { title: 'Innovation Conference 2024 Proposal', submitter: 'AADF Events Team', type: 'Event', priority: 'Medium' },
    { title: 'New Mentorship Program Guidelines', submitter: 'Mentorship Committee', type: 'Program', priority: 'Low' }
  ];

  const systemHealth = [
    { metric: 'Server Uptime', value: 99.8, status: 'Excellent' },
    { metric: 'Response Time', value: 89, status: 'Good' },
    { metric: 'User Satisfaction', value: 94, status: 'Excellent' },
    { metric: 'Security Score', value: 96, status: 'Excellent' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-primary">AADF Administration Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Monitor, manage, and grow the BlackSheep Connect Hub community
        </p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-success mt-1">{stat.change} from last month</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Recent Platform Activity</span>
            </CardTitle>
            <CardDescription>
              Latest user interactions and platform events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start justify-between p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-primary">{activity.user}</span>
                      <Badge variant={activity.type === 'alumni' ? 'default' : 'secondary'} className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Pending Approvals</span>
            </CardTitle>
            <CardDescription>
              Items requiring administrative review
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((item, index) => (
                <div key={index} className="p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <Badge variant={item.priority === 'High' ? 'destructive' : item.priority === 'Medium' ? 'default' : 'secondary'}>
                      {item.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Submitted by: {item.submitter}
                  </p>
                  <Badge variant="outline" className="text-xs mb-3">
                    {item.type}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart className="h-5 w-5" />
            <span>System Health & Performance</span>
          </CardTitle>
          <CardDescription>
            Platform performance metrics and system status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemHealth.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{metric.metric}</span>
                  <Badge variant={metric.status === 'Excellent' ? 'default' : 'secondary'}>
                    {metric.status}
                  </Badge>
                </div>
                <Progress value={metric.value} className="h-2" />
                <p className="text-xs text-muted-foreground">{metric.value}%</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Admin Actions */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Administrative Actions</CardTitle>
          <CardDescription>Common management tasks and system controls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="btn-professional">
              <Users className="mr-2 h-4 w-4" />
              Manage Users
            </Button>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              System Settings
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Event Management
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Send Announcements
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;