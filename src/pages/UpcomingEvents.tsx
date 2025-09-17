import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, MapPin, Clock, Users, Bookmark, CalendarPlus } from 'lucide-react';

const UpcomingEvents = () => {
  const [participatingEvents, setParticipatingEvents] = useState<number[]>([]);

  const events = [
    {
      id: 1,
      title: 'AADF Innovation Conference 2024',
      date: '2024-11-15',
      time: '09:00 AM',
      location: 'Tirana International Hotel',
      type: 'Conference',
      description: 'Annual gathering of AADF alumni and diaspora professionals to showcase innovations and foster new collaborations.',
      attendees: 150,
      organizer: 'AADF Staff',
      agenda: ['Opening Keynote', 'Innovation Showcase', 'Networking Lunch', 'Panel Discussions', 'Closing Ceremony'],
      featured: true
    },
    {
      id: 2,
      title: 'Diaspora Tech Meetup',
      date: '2024-10-28',
      time: '06:00 PM',
      location: 'Online Event',
      type: 'Meetup',
      description: 'Monthly virtual meetup for tech professionals in the diaspora to share experiences and opportunities.',
      attendees: 45,
      organizer: 'Sarah Chen',
      agenda: ['Tech Trends Discussion', 'Career Stories', 'Open Networking'],
      featured: false
    },
    {
      id: 3,
      title: 'Entrepreneurship Workshop',
      date: '2024-11-05',
      time: '02:00 PM',
      location: 'Business Center, Pristina',
      type: 'Workshop',
      description: 'Hands-on workshop covering business model development, funding strategies, and market entry.',
      attendees: 30,
      organizer: 'Mark Vrudhula',
      agenda: ['Business Model Canvas', 'Pitch Practice', 'Funding Sources', 'Q&A Session'],
      featured: false
    },
    {
      id: 4,
      title: 'Alumni Reunion Dinner',
      date: '2024-12-20',
      time: '07:00 PM',
      location: 'Hotel Rogner, Tirana',
      type: 'Social',
      description: 'Year-end celebration bringing together AADF alumni from all programs for networking and recognition.',
      attendees: 120,
      organizer: 'AADF Staff',
      agenda: ['Welcome Reception', 'Award Ceremony', 'Dinner & Networking', 'Live Entertainment'],
      featured: true
    }
  ];

  const handleParticipation = (eventId: number) => {
    setParticipatingEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return 'default';
      case 'Workshop': return 'secondary';
      case 'Meetup': return 'outline';
      case 'Social': return 'destructive';
      default: return 'secondary';
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
          <h1 className="text-3xl font-bold text-primary">Upcoming Events</h1>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className={`card-professional ${event.featured ? 'ring-2 ring-primary/20' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      {event.featured && (
                        <Badge variant="default" className="bg-primary">
                          Featured
                        </Badge>
                      )}
                      <Badge variant={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleParticipation(event.id)}
                    className={participatingEvents.includes(event.id) ? 'bg-primary text-primary-foreground' : ''}
                  >
                    <Bookmark className="h-4 w-4 mr-1" />
                    {participatingEvents.includes(event.id) ? 'Registered' : 'Register'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Event Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Date</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Time</p>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {event.attendees} attendees
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Organized by {event.organizer}
                      </div>
                    </div>
                  </div>

                  {/* Event Agenda */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Event Agenda</h4>
                    <div className="space-y-2">
                      {event.agenda.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t">
                  <Button 
                    size="sm"
                    className="btn-professional"
                    onClick={() => handleParticipation(event.id)}
                  >
                    {participatingEvents.includes(event.id) ? 'View Registration' : 'Participate'}
                  </Button>
                  <Button variant="outline" size="sm">
                    Add to Calendar
                  </Button>
                  <Button variant="outline" size="sm">
                    Share Event
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Event */}
        <Card className="card-professional mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarPlus className="h-5 w-5" />
              <span>Create New Event</span>
            </CardTitle>
            <CardDescription>
              Organize your own event and invite AADF community members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="btn-professional">
              <CalendarPlus className="mr-2 h-4 w-4" />
              Create Event
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingEvents;