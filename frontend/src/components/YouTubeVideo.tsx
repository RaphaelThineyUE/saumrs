import { useState } from 'react';
import './YouTubeVideo.css';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  description?: string;
}

export const YouTubeVideo = ({ videoId, title, description }: YouTubeVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="youtube-video-container">
      {!isPlaying ? (
        <div className="video-thumbnail" onClick={handlePlay}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title || 'Video thumbnail'}
            loading="lazy"
          />
          <div className="play-button">
            <svg 
              aria-hidden="true" 
              viewBox="0 0 1000 1000" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z"></path>
            </svg>
          </div>
        </div>
      ) : (
        <div className="video-iframe-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&cc_load_policy=0`}
            title={title || 'YouTube video player'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {description && <p className="video-description">{description}</p>}
    </div>
  );
};
