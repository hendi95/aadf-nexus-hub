import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Calendar, Users, MapPin, Target, MessageSquare, Send } from 'lucide-react';

const CollaborationDetails = () => {
  const [comment, setComment] = useState('');
  const [applied, setApplied] = useState(false);

  const opportunity = {
    id: 1,
    title: 'Fintech Startup Co-founder',
    type: 'Partnership',
    description: 'We are seeking a technical co-founder to join our fintech startup focused on digital banking solutions for the Albanian market. This is an equity-based partnership opportunity with significant growth potential.',
    fullDescription: `Our startup is developing a mobile-first digital banking platform specifically designed for the Albanian market. We have already secured initial seed funding and have a proven business model validated through market research.

We are looking for a technical co-founder who will:
- Lead the technical development of our mobile and web platforms
- Build and manage the engineering team
- Ensure security and compliance with banking regulations
- Drive product innovation and feature development

The ideal candidate should have experience in fintech, mobile app development, and ideally some background in financial services or banking technology.`,
    deadline: '2 weeks',
    applicants: 8,
    location: 'Tirana, Albania (Remote possible)',
    postedBy: {
      name: 'Elena Koci',
      role: 'Founder & CEO',
      company: 'FinanceNext',
      program: 'MIP 2021'
    },
    requirements: [
      '5+ years software engineering experience',
      'Experience with mobile app development (React Native/Flutter)',
      'Background in fintech or financial services',
      'Knowledge of banking regulations and security standards',
      'Fluent in Albanian and English'
    ],
    benefits: [
      'Equity stake in the company (15-25%)',
      'Competitive salary after Series A',
      'Flexible remote work options',
      'Opportunity to build from ground up',
      'Access to AADF network and mentorship'
    ],
    timeline: 'Immediate start preferred, with product launch planned for Q2 2025',
    commitment: 'Full-time commitment required'
  };

  const comments = [
    {
      id: 1,
      author: 'Mark Vrudhula',
      content: 'This sounds like an exciting opportunity! I have experience in fintech from my time at Goldman Sachs. Would love to discuss further.',
      time: '2 hours ago',
      program: 'LEAD 2020'
    },
    {
      id: 2,
      author: 'Sarah Chen',
      content: 'Great initiative Elena! I know several talented engineers in my network who might be interested. Will share this with them.',
      time: '1 day ago',
      program: 'MIP 2019'
    }
  ];

  const handleApply = () => {
    setApplied(true);
    // Here you would typically send the application to the backend
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      // Here you would typically submit the comment to the backend
      setComment('');
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
            Back
          </Button>
          <h1 className="text-3xl font-bold text-primary">Collaboration Opportunity</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{opportunity.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant="default">{opportunity.type}</Badge>
                      <Badge variant="outline">
                        <Calendar className="h-3 w-3 mr-1" />
                        {opportunity.deadline} left
                      </Badge>
                      <Badge variant="secondary">
                        <Users className="h-3 w-3 mr-1" />
                        {opportunity.applicants} applicants
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-lg">
                  {opportunity.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Full Description</h3>
                    <div className="text-muted-foreground whitespace-pre-line">
                      {opportunity.fullDescription}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {opportunity.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">What We Offer</h4>
                      <ul className="space-y-2">
                        {opportunity.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-success rounded-full mt-2" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-card rounded-lg">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Timeline</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Commitment</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.commitment}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Comments & Questions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="p-4 rounded-lg bg-card">
                      <div className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarImage src="/api/placeholder/40/40" />
                          <AvatarFallback>{comment.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-sm">{comment.author}</span>
                            <Badge variant="outline" className="text-xs">{comment.program}</Badge>
                            <span className="text-xs text-muted-foreground">{comment.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex space-x-3 pt-4 border-t">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" />
                      <AvatarFallback>YU</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <Textarea
                        placeholder="Ask a question or leave a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                      />
                      <Button 
                        size="sm" 
                        onClick={handleCommentSubmit}
                        disabled={!comment.trim()}
                        className="btn-professional"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Post Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Posted By */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">Posted By</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/api/placeholder/60/60" />
                    <AvatarFallback>{opportunity.postedBy.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{opportunity.postedBy.name}</p>
                    <p className="text-sm text-muted-foreground">{opportunity.postedBy.role}</p>
                    <p className="text-sm text-muted-foreground">{opportunity.postedBy.company}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-4">{opportunity.postedBy.program}</Badge>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{opportunity.location}</span>
                </div>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message Directly
                </Button>
              </CardContent>
            </Card>

            {/* Apply */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">Apply for this Opportunity</CardTitle>
                <CardDescription>
                  Submit your application to be considered for this collaboration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full btn-professional mb-4"
                  onClick={handleApply}
                  disabled={applied}
                >
                  <Target className="h-4 w-4 mr-2" />
                  {applied ? 'Application Submitted' : 'Apply Now'}
                </Button>
                {applied && (
                  <p className="text-sm text-success text-center">
                    Your application has been submitted successfully!
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">Opportunity Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Applications</span>
                    <span className="font-semibold">{opportunity.applicants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Time Left</span>
                    <span className="font-semibold">{opportunity.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type</span>
                    <Badge variant="outline">{opportunity.type}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationDetails;