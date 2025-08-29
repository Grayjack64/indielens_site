import React from 'react';
import { Play, Star, Clock, Calendar } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  director?: string;
  year: number;
  rating: number;
  genre: string;
  duration?: string;
  image: string;
  description: string;
  progress?: number;
}

interface VideoCardProps {
  video: Video;
  showProgress?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, showProgress = false }) => {
  return (
    <div className="group cursor-pointer flex-shrink-0 w-80">
      <div className="relative rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Progress Bar */}
        {showProgress && video.progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
            <div 
              className="h-full bg-yellow-400 transition-all duration-300"
              style={{ width: `${video.progress}%` }}
            />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="w-16 h-16 text-white bg-yellow-500 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-200" />
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold mb-2 line-clamp-1">{video.title}</h3>
          {video.director && (
            <p className="text-gray-300 text-sm mb-2">Directed by {video.director}</p>
          )}
          <p className="text-gray-400 text-sm mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {video.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">{video.rating}</span>
              </div>
              <span className="text-sm text-gray-400">{video.year}</span>
              {video.duration && (
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{video.duration}</span>
                </div>
              )}
            </div>
            <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded font-semibold">
              {video.genre}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;