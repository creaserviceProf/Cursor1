import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for heart rate
const heartRateData = [
  { time: '00:00', rate: 65 },
  { time: '04:00', rate: 62 },
  { time: '08:00', rate: 70 },
  { time: '12:00', rate: 75 },
  { time: '16:00', rate: 68 },
  { time: '20:00', rate: 72 },
  { time: '24:00', rate: 65 },
];

// Mock data for drug tests
const drugTests = [
  {
    id: 1,
    date: '2024-03-15',
    time: '14:30',
    type: 'Cannabis',
    result: 'negative',
    location: 'Home'
  },
  {
    id: 2,
    date: '2024-03-14',
    time: '09:15',
    type: 'Cocaine',
    result: 'negative',
    location: 'Work'
  },
  {
    id: 3,
    date: '2024-03-13',
    time: '18:45',
    type: 'MDMA',
    result: 'positive',
    location: 'Party'
  },
  {
    id: 4,
    date: '2024-03-12',
    time: '11:20',
    type: 'Amphetamines',
    result: 'negative',
    location: 'Gym'
  },
];

const MyHealth = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-black text-white pb-16">
      <Navbar />
      
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold mb-6">My Health</h1>
        
        {/* Heart Rate Section */}
        <Card className="bg-drugbuster-card border-white/10 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Heart Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis 
                    dataKey="time" 
                    stroke="#fff"
                    tick={{ fill: '#fff' }}
                  />
                  <YAxis 
                    stroke="#fff"
                    tick={{ fill: '#fff' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#222',
                      border: '1px solid #333',
                      color: '#fff'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#4C4CFF" 
                    strokeWidth={2}
                    dot={{ fill: '#4C4CFF' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Drug Tests History */}
        <Card className="bg-drugbuster-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Drug Tests History</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                {drugTests.map((test) => (
                  <div 
                    key={test.id}
                    className="flex items-center justify-between p-4 bg-drugbuster-darkgray rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        test.result === 'positive' ? 'bg-red-500' : 'bg-green-500'
                      }`} />
                      <div>
                        <p className="font-medium">{test.type}</p>
                        <p className="text-sm text-gray-400">
                          {test.date} at {test.time}
                        </p>
                        <p className="text-sm text-gray-400">{test.location}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${
                      test.result === 'positive' ? 'text-red-500' : 'text-green-500'
                    }`}>
                      {test.result.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default MyHealth; 