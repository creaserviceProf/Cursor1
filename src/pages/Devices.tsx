import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Settings, Power, Battery, Wifi } from 'lucide-react';

// Mock data for devices
const devices = [
  {
    id: 1,
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D',
    status: 'connected',
    battery: 85,
    lastUsed: '2 hours ago',
    wifi: true,
    size: 'small'
  },
  {
    id: 2,
    name: 'Heart Rate Monitor',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhcnQlMjByYXRlJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D',
    status: 'disconnected',
    battery: 45,
    lastUsed: '1 day ago',
    wifi: false,
    size: 'small'
  },
  {
    id: 3,
    name: 'Blood Pressure Monitor',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymxvb2QlMjBwcmVzc3VyZSUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D',
    status: 'connected',
    battery: 92,
    lastUsed: '30 minutes ago',
    wifi: true,
    size: 'small'
  },
  {
    id: 4,
    name: 'Smart Scale',
    image: 'https://images.unsplash.com/photo-1595076591335-1a0a0a0f0f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjBzY2FsZXxlbnwwfHwwfHx8MA%3D%3D',
    status: 'connected',
    battery: 78,
    lastUsed: '2 days ago',
    wifi: true,
    size: 'large'
  }
];

const Devices = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-black text-white pb-16">
      <Navbar />
      
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold mb-6">My Devices</h1>
        
        <ScrollArea className="h-[calc(100vh-180px)]">
          <div className="grid grid-cols-2 gap-4">
            {devices.map((device) => (
              <Card 
                key={device.id} 
                className={`bg-drugbuster-card border-white/10 ${
                  device.size === 'large' ? 'row-span-2' : ''
                } ${device.id === 1 ? 'h-[90%]' : ''}`}
              >
                <CardContent className="p-4 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                        <img 
                          src={device.image} 
                          alt={device.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium text-white mb-2">{device.name}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-2 h-2 rounded-full ${
                          device.status === 'connected' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <span className="text-sm text-gray-400">
                          {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Battery className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{device.battery}%</span>
                        {device.wifi && (
                          <Wifi className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-400">
                        Last used: {device.lastUsed}
                      </span>
                      <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <Settings className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Devices; 