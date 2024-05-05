// client/src/components/MoviesPage.js
import React, { useEffect, useState } from 'react';
import './MoviesPage.css';
import SearchBox from './SearchBox'; // Import the SearchBox component

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState(null);

  // Sample movie data
  const sampleMovies = [
    {
      title: 'Kung Fu Panda ',
      releaseYear: '2024',
      posterUrl: '/images/kung-fu-panda-4.png',
      videoUrl: 'https://youtu.be/Jvurpf91omw',
    },
    {
      title: 'If',
      releaseYear: '2024',
      posterUrl: '/images/if.jpg',
      videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
    },
    {
      title: 'The Dark Knight',
      releaseYear: '2008',
      posterUrl: '/images/dark-knight.jpg',
      videoUrl: 'images/dark-night.mp4',
    },
    {
      title: 'All of us strangers ',
      releaseYear: '2024',
      posterUrl: '/images/All-of-strangers.jpg',
      videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
    },
    {
      title: 'Challengers',
      releaseYear: '2024',
      posterUrl: '/images/Challengers.jpg',
      videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
    },
    {
      title: 'Civil War ',
      releaseYear: '2024',
      posterUrl: '/images/Civil-War.jpg',
      videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
    },
    {
      title: 'Bsd Boys Ride Or Die',
      releaseYear: '2024',
      posterUrl: '/images/download.jpg',
      videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
    },
    {
      title: 'Dune Part 2',
      releaseYear: '2024',
      posterUrl: '/images/Dune-part-2.jpg',
      videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
    },
    // ... (add other movies similarly)
  ];

  useEffect(() => {
    // Use either the API call or the sample data, depending on your preference.
    // For now, let's use the sample data.
    setMovies(sampleMovies);
  }, []);

  const handleBookmark = (item) => {
    // Check if the item is already bookmarked
    const isBookmarked = bookmarkedItems.some(
      (bookmarkedItem) => bookmarkedItem.title === item.title
    );

    if (isBookmarked) {
      // Remove the item from bookmarks
      setBookmarkedItems((prevItems) =>
        prevItems.filter((bookmarkedItem) => bookmarkedItem.title !== item.title)
      );
    } else {
      // Add the item to bookmarks
      setBookmarkedItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const playVideo = (videoUrl) => {
    setPlayingVideo(videoUrl);
  };

  const stopVideo = () => {
    setPlayingVideo(null);
  };

  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBox onSearch={handleSearch} /> {/* Include the SearchBox component */}
      <h2 className="movies-header">Movies</h2>
      {playingVideo && (
        <div className="video-overlay" onClick={stopVideo}>
          {/* Video component goes here */}
          <video
            className="centered-video"
            width="70%"
            controls
            autoPlay
            onEnded={stopVideo}
          >
            <source src={playingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="movies-list">
        {filteredMovies.slice(0, 8).map((item) => (
          <div key={item.title} className="movie-card">
            <img src={item.posterUrl} alt={item.title} />
            <p>{item.title} ({item.releaseYear})</p>
            <div
              className="play-button"
              onClick={() => playVideo(item.videoUrl)}
            >
              ▶ Play
            </div>
            <div
              className="bookmark-button"
              onClick={() => handleBookmark(item)}
            >
              {bookmarkedItems.some(
                (bookmarkedItem) => bookmarkedItem.title === item.title
              )
                ? 'Bookmarked'
                : 'Bookmark'}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MoviesPage;
