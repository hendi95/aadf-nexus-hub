import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Search, Send, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/components/AuthContext';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantType: string;
  lastMessage: string;
  unreadCount: number;
  avatar: string;
}

const MessageCenter = () => {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock conversations
  const conversations: Conversation[] = [
    {
      id: '1',
      participantId: '2',
      participantName: 'Maria Doe',
      participantType: 'diaspora',
      lastMessage: 'Thanks for connecting! Looking forward to collaborating.',
      unreadCount: 2,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '2',
      participantId: '3',
      participantName: 'AADF Staff',
      participantType: 'admin',
      lastMessage: 'New opportunities available in the portal.',
      unreadCount: 0,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '3',
      participantId: '4',
      participantName: 'Alex Johnson',
      participantType: 'alumni',
      lastMessage: 'Great presentation at the conference!',
      unreadCount: 1,
      avatar: '/api/placeholder/40/40'
    }
  ];

  // Mock messages for selected conversation
  const messages: Message[] = [
    {
      id: '1',
      senderId: '1',
      senderName: 'John Smith',
      content: 'Hi, I’m interested in collaborating with diaspora members on education projects.',
      timestamp: new Date('2024-01-15T10:00:00'),
      read: true
    },
    {
      id: '2',
      senderId: '2',
      senderName: 'Maria Doe',
      content: 'Great! I’d love to connect. Let’s schedule a call next week.',
      timestamp: new Date('2024-01-15T10:05:00'),
      read: true
    },
    {
      id: '3',
      senderId: '1',
      senderName: 'John Smith',
      content: 'Perfect, I’ll send you my availability.',
      timestamp: new Date('2024-01-15T10:10:00'),
      read: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.participantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[600px] flex rounded-lg border border-border overflow-hidden">
      {/* Conversations List */}
      <div className={`${selectedConversation ? 'hidden md:block' : 'block'} w-full md:w-1/3 border-r border-border bg-card`}>
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-semibold mb-3">Messages</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-100px)]">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 border-b border-border cursor-pointer hover:bg-card-hover transition-colors ${
                selectedConversation === conversation.id ? 'bg-accent' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback>
                    {conversation.participantName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{conversation.participantName}</p>
                    {conversation.unreadCount > 0 && (
                      <Badge variant="default" className="ml-2">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </p>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {conversation.participantType}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`${selectedConversation ? 'block' : 'hidden md:block'} flex-1 flex flex-col`}>
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-border bg-card flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setSelectedConversation(null)}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/api/placeholder/40/40" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Maria Doe</p>
                <p className="text-sm text-muted-foreground">Diaspora Professional</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === user?.id ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.senderId === user?.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.senderId === user?.id
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex space-x-2">
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="self-end"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-center p-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
              <p className="text-muted-foreground">
                Choose a conversation from the list to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageCenter;