import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/AuthContext';
import { 
  Edit, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Calendar, 
  Award,
  Users,
  BookOpen,
  MessageSquare,
  Settings
} from 'lucide-react';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Passionate professional dedicated to innovation and collaboration in the tech industry.',
    location: 'Tirana, Albania',
    company: 'Tech Innovations LLC',
    position: 'Senior Software Engineer',
    education: 'Computer Science, University of Tirana',
    program: user?.type === 'alumni' ? 'MIP 2020' : user?.type === 'diaspora' ? 'Diaspora Professional' : 'AADF Staff',
    website: 'https://example.com',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Leadership'],
    interests: ['Innovation', 'Entrepreneurship', 'Mentoring', 'Technology'],
    experience: '5+ years in software development and team leadership'
  });

  const stats = {
    alumni: {
      connections: 127,
      projects: 8,
      mentees: 12,
      events: 24
    },
    diaspora: {
      collaborations: 15,
      contributions: 32,
      networks: 89,
      initiatives: 6
    },
    admin: {
      users: 450,
      events: 67,
      programs: 12,
      reports: 156
    }
  };

  const currentStats = stats[user?.type as keyof typeof stats] || stats.alumni;

  const handleSave = () => {
    // Here you would typically save to backend
    console.log('Saving profile data:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data if needed
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
      {/* Profile Header */}
      <Card className="card-professional">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback className="text-2xl">
                {user?.name?.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <Button 
                  variant={isEditing ? "default" : "outline"} 
                  onClick={() => setIsEditing(!isEditing)}
                  className="mt-2 sm:mt-0 w-full sm:w-auto"
                >
                  <Edit className="mr-2 h-4 w-4" />
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Briefcase className="mr-1 h-4 w-4" />
                    {profileData.position} at {profileData.company}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {profileData.location}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">{profileData.program}</Badge>
                  <Badge variant="secondary">{user?.type}</Badge>
                </div>
                
                <p className="text-muted-foreground mt-2">{profileData.bio}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(currentStats).map(([key, value]) => (
          <Card key={key} className="card-professional">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{value}</div>
              <div className="text-sm text-muted-foreground capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="education">Education</Label>
                      <Input
                        id="education"
                        value={profileData.education}
                        onChange={(e) => setProfileData({...profileData, education: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="program">Program</Label>
                      <Input
                        id="program"
                        value={profileData.program}
                        onChange={(e) => setProfileData({...profileData, program: e.target.value})}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="font-medium">{profileData.education}</p>
                    <Badge variant="outline">{profileData.program}</Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Contact & Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm">{profileData.email}</p>
                    <p className="text-sm text-primary">{profileData.website}</p>
                    <p className="text-sm text-muted-foreground">{profileData.location}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  placeholder="Tell us about yourself..."
                  className="min-h-[100px]"
                />
              ) : (
                <p className="text-muted-foreground">{profileData.bio}</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience" className="space-y-4">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={profileData.company}
                      onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      value={profileData.position}
                      onChange={(e) => setProfileData({...profileData, position: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience Description</Label>
                    <Textarea
                      id="experience"
                      value={profileData.experience}
                      onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{profileData.position}</h4>
                    <p className="text-primary">{profileData.company}</p>
                    <p className="text-sm text-muted-foreground">{profileData.experience}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((interest, index) => (
                    <Badge key={index} variant="outline">{interest}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">Profile Visibility</h4>
                  <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                </div>
                <Button variant="outline" className="mt-2 sm:mt-0 w-full sm:w-auto">Configure</Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">Notification Preferences</h4>
                  <p className="text-sm text-muted-foreground">Manage your notification settings</p>
                </div>
                <Button variant="outline" className="mt-2 sm:mt-0 w-full sm:w-auto">Manage</Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">Data & Privacy</h4>
                  <p className="text-sm text-muted-foreground">Download or delete your data</p>
                </div>
                <Button variant="outline" className="mt-2 sm:mt-0 w-full sm:w-auto">View Options</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {isEditing && (
        <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
          <Button variant="outline" onClick={handleCancel} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={handleSave} className="w-full sm:w-auto">
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;