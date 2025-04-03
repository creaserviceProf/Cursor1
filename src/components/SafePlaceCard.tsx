import React from 'react';
import { Star, MessageSquare, Map } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface SafePlaceCardProps {
  name: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  tags: string[];
  address: string;
  distance: string;
}

const SafePlaceCard = ({
  name,
  description,
  image,
  rating,
  reviews,
  tags,
  address,
  distance
}: SafePlaceCardProps) => {
  return (
    <Card className="bg-drugbuster-card border-white/10 mb-6 animate-fade-in will-change-transform">
      <div className="w-full overflow-hidden rounded-t-lg">
        <AspectRatio ratio={16/9}>
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1 bg-purple-dark/60 px-2 py-1 rounded-md">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="text-sm text-gray-400 flex items-center gap-1 mt-1">
          <Map className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">{address}</span>
          <span className="mx-1 flex-shrink-0">•</span>
          <span className="flex-shrink-0">{distance}</span>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 text-left">
        <p className="text-white/90 text-sm line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-purple-dark/40 text-purple-light hover:bg-purple-dark text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <button
          className="flex items-center gap-1.5 p-2 rounded-full text-gray-300 hover:text-white transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs font-medium">{reviews} avis</span>
        </button>
        
        <button
          className={cn(
            "flex items-center gap-1 py-1.5 px-4 rounded-full text-white bg-purple-light hover:bg-purple-dark transition-colors text-sm"
          )}
        >
          Consulter
        </button>
      </CardFooter>
    </Card>
  );
};

export default SafePlaceCard;
