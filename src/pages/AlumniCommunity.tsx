import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Users, TrendingUp, Award, MessageSquare, Heart, Share, BookOpen } from 'lucide-react';

const AlumniCommunity = () => {
  const news = [
    {
      id: 1,
      title: 'AADF Alumni Sarah Chen Raises $2M Series A for FinTech Startup',
      content: 'Sarah Chen (MIP 2019) successfully closed a $2M Series A round for her financial technology startup focusing on digital banking solutions...',
      author: 'AADF Staff',
      date: '2024-10-15',
      category: 'Achievement',
      likes: 24,
      comments: 8,
      featured: true
    },
    {
      id: 2,
      title: 'New Mentorship Program Launch: Connecting Generations',
      content: 'We are excited to announce the launch of our cross-generational mentorship program connecting senior alumni with recent graduates...',
      author: 'Elena Koci',
      date: '2024-10-12',
      category: 'Program',
      likes: 15,
      comments: 12
    },
    {
      id: 3,
      title: 'Alumni Spotlight: Mark Vrudhula\'s Journey from Banking to Impact Investing',
      content: 'In our latest alumni spotlight, we dive deep into Mark\'s transition from traditional investment banking to impact investing...',
      author: 'AADF Staff',
      date: '2024-10-10',
      category: 'Story',
      likes: 31,
      comments: 6
    }
  ];

  const achievements = [
    {
      name: 'Andi Hoxha',
      achievement: 'Published research paper on AI in healthcare',
      program: 'READ 2022',
      date: '2024-10-08'
    },
    {
      name: 'Lira Spahiu',
      achievement: 'Promoted to Marketing Director at tech unicorn',
      program: 'MIP 2020',
      date: '2024-10-05'
    },
    {
      name: 'Erion Meta',
      achievement: 'Launched successful e-learning platform',
      program: 'LEAD 2021',
      date: '2024-10-01'
    }
  ];

  const topics = [
    { title: 'Entrepreneurship & Startups', posts: 45, active: '2h ago' },
    { title: 'Career Development', posts: 23, active: '4h ago' },
    { title: 'Technology & Innovation', posts: 67, active: '1h ago' },
    { title: 'Investment & Finance', posts: 34, active: '3h ago' },
    { title: 'Social Impact', posts: 28, active: '5h ago' },
    { title: 'Alumni Events', posts: 19, active: '6h ago' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Achievement': return 'default';
      case 'Program': return 'secondary';
      case 'Story': return 'outline';
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
          <h1 className="text-3xl font-bold text-primary">Alumni Community</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-professional">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">247</p>
                      <p className="text-sm text-muted-foreground">Active Alumni</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-professional">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-8 w-8 text-success" />
                    <div>
                      <p className="text-2xl font-bold">156</p>
                      <p className="text-sm text-muted-foreground">Discussions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-professional">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-2xl font-bold">23</p>
                      <p className="text-sm text-muted-foreground">Achievements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* News & Updates */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Latest News & Updates</span>
                </CardTitle>
                <CardDescription>
                  Stay updated with the latest happenings in our alumni community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {news.map((article) => (
                    <div key={article.id} className={`p-4 rounded-lg border border-border ${article.featured ? 'ring-2 ring-primary/20' : ''}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Badge variant={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                          {article.featured && (
                            <Badge variant="default" className="bg-primary">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                      <p className="text-muted-foreground mb-4">{article.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
                            <Heart className="h-4 w-4" />
                            <span>{article.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
                            <MessageSquare className="h-4 w-4" />
                            <span>{article.comments}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
                            <Share className="h-4 w-4" />
                            <span>Share</span>
                          </button>
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Recent Achievements</span>
                </CardTitle>
                <CardDescription>
                  Celebrating the successes of our alumni community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-card-hover transition-colors">
                      <Avatar>
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback>{achievement.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold">{achievement.name}</p>
                        <p className="text-sm text-muted-foreground">{achievement.achievement}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">{achievement.program}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(achievement.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Congratulate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Discussion Topics */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">Popular Topics</CardTitle>
                <CardDescription>
                  Join ongoing discussions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topics.map((topic, index) => (
                    <div key={index} className="p-3 rounded-lg border border-border hover:bg-card-hover transition-colors cursor-pointer">
                      <h4 className="font-medium text-sm mb-1">{topic.title}</h4>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{topic.posts} posts</span>
                        <span>{topic.active}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View All Topics
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">Community Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full btn-professional">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Discussion
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Award className="h-4 w-4 mr-2" />
                    Share Achievement
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Find Alumni
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCommunity;