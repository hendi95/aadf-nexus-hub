import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Globe, ArrowLeft, Bell, Check, X } from 'lucide-react';
import { useAuth } from '@/components/AuthContext';
import { useConnections } from '@/components/connections/ConnectionsContext';

const NetworkConnections = () => {
  const { user } = useAuth();
  const { requests, acceptRequest, declineRequest } = useConnections();

  const connections = [
    { name: 'Sarah Chen', role: 'Tech Entrepreneur', location: 'Silicon Valley', program: 'MIP 2019', status: 'Connected', mutualConnections: 12 },
    { name: 'Mark Vrudhula', role: 'Investment Banker', location: 'London', program: 'LEAD 2020', status: 'Connected', mutualConnections: 8 },
    { name: 'Elena Koci', role: 'Data Scientist', location: 'Berlin', program: 'MIP 2021', status: 'Connected', mutualConnections: 15 },
    { name: 'Andi Hoxha', role: 'Software Engineer', location: 'Pristina', program: 'READ 2022', status: 'Pending', mutualConnections: 3 },
    { name: 'Lira Spahiu', role: 'Marketing Director', location: 'Tirana', program: 'MIP 2020', status: 'Connected', mutualConnections: 10 }
  ];

  const handleConnectionResponse = (id: string, accept: boolean) => {
    if (accept) acceptRequest(id);
    else declineRequest(id);
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
          <h1 className="text-3xl font-bold text-primary">Network Connections</h1>
        </div>

        {/* Connection Requests */}
        {requests.filter(r => r.toType === user?.type).length > 0 && (
          <Card className="card-professional mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Connection Requests</span>
                <Badge variant="secondary">{requests.filter(r => r.toType === user?.type).length}</Badge>
              </CardTitle>
              <CardDescription>
                Pending connection requests from other professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requests.filter(r => r.toType === user?.type).map((notification) => (
                   <div key={notification.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback>{notification.fromName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{notification.fromName}</p>
                         <p className="text-sm text-muted-foreground">{notification.message}</p>
                         <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleConnectionResponse(notification.id as any, true)}
                        className="btn-professional"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Accept
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleConnectionResponse(notification.id as any, false)}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Decline
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* All Connections */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Your Network ({connections.length} connections)</span>
            </CardTitle>
            <CardDescription>
              Your professional network within the AADF community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {connections.map((connection, index) => (
                <div key={index} className="p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/60/60" />
                      <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{connection.name}</p>
                      <p className="text-sm text-muted-foreground">{connection.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{connection.location}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{connection.program}</Badge>
                    <p className="text-xs text-muted-foreground">
                      {connection.mutualConnections} mutual connections
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant={connection.status === 'Connected' ? 'outline' : 'default'}
                      className="flex-1"
                    >
                      {connection.status === 'Connected' ? 'Message' : 'Connect'}
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NetworkConnections;