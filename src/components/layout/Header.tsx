import React from 'react';
import { useAuth } from '@/components/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut, Settings, User, MessageSquare, Home, Users, Calendar } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const getUserTypeLabel = (type: string) => {
    switch (type) {
      case 'alumni': return 'Alumni';
      case 'diaspora': return 'Diaspora Professional';
      case 'admin': return 'AADF Staff';
      default: return 'User';
    }
  };

  const getUserTypeColor = (type: string) => {
    switch (type) {
      case 'alumni': return 'bg-accent text-accent-foreground';
      case 'diaspora': return 'bg-success text-success-foreground';
      case 'admin': return 'bg-primary text-primary-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-lg md:text-xl font-bold text-primary">BlackSheep</h1>
            <p className="text-xs md:text-sm text-muted-foreground">AADF Connect Hub</p>
          </div>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.location.hash = 'dashboard'}
            className="hover:bg-accent"
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.location.hash = 'messages'}
            className="hover:bg-accent"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="hover:bg-accent"
          >
            <Users className="mr-2 h-4 w-4" />
            Network
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="hover:bg-accent"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Events
          </Button>
        </nav>

        {/* User Info & Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* User Type Badge - Hidden on small screens */}
          <span className={`hidden sm:inline-flex px-2 md:px-3 py-1 rounded-full text-xs font-medium ${getUserTypeColor(user.type || '')}`}>
            {getUserTypeLabel(user.type || '')}
          </span>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 md:h-10 md:w-10 rounded-full">
                <Avatar className="h-8 w-8 md:h-10 md:w-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-xs md:text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                  <span className={`inline-flex sm:hidden px-2 py-0.5 rounded-full text-xs font-medium ${getUserTypeColor(user.type || '')}`}>
                    {getUserTypeLabel(user.type || '')}
                  </span>
                </div>
              </div>
              
              {/* Mobile Navigation Items */}
              <div className="lg:hidden border-t border-border my-1">
                <DropdownMenuItem onClick={() => window.location.hash = 'dashboard'}>
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.hash = 'messages'}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Network
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  Events
                </DropdownMenuItem>
              </div>
              
              <DropdownMenuItem onClick={() => window.location.hash = 'profile'}>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;