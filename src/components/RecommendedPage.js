import React, { useEffect, useState } from 'react';
import './MoviesPage.css';

const RecommendedPage = () => {
  const [movies, setMovies] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState(null);

 // Sample movie data
    const sampleMovies = [
      {
        title: 'Godzila kong-the-new-empire',
        releaseYear: '2024',
        posterUrl: '/images/Godzila-kong-the-new-empire.jpg',
        videoUrl: 'https://youtu.be/lV1OOlGwExM',
      },
      {
        title: 'The Batman',
        releaseYear: '2022',
        posterUrl: '/images/The-batman.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'The Dark Knight',
        releaseYear: '2008',
        posterUrl: '/images/dark-knight.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Dune part-2',
        releaseYear: '2024',
        posterUrl: '/images/Dune-part-2.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Kingdom of the planet of the apes',
        releaseYear: '2024',
        posterUrl: '/images/Kingdom-of-the-planet-of-the-apes.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'kung fu panda 4',
        releaseYear: '2024',
        posterUrl: '/images/kung-fu-panda-4.png',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Salaar',
        releaseYear: '2023',
        posterUrl: '/images/Salaar.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Shaitaan',
        releaseYear: '2024',
        posterUrl: '/images/Shaitaan.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'If',
        releaseYear: '2024',
        posterUrl: '/images/If.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Stranger Things',
        releaseYear: '2016',
        posterUrl: '/images/stranger-things.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Jailer',
        releaseYear: '2023',
        posterUrl: '/images/Jailer.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Fighter',
        releaseYear: '2024',
        posterUrl: '/images/Fighter.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'The lost city',
        releaseYear: '2022',
        posterUrl: '/images/The-lost-city.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Murder Mubarak',
        releaseYear: '2024',
        posterUrl: '/images/Murder-Mubarak.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'Game of Thrones',
        releaseYear: '2011',
        posterUrl: '/images/game-of-thrones.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
      {
        title: 'One life',
        releaseYear: '2023',
        posterUrl: '/images/One-life.jpg',
        videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
      },
    ];
  useEffect(() => {
    // Use either the API call or the sample data, depending on your preference.
    // For now, let's use the sample data.
    setMovies(sampleMovies);
  }, []);

  const handleBookmark = (item) => {
    // Check if the item is already bookmarked
    const isBookmarked = bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.title === item.title);

    if (isBookmarked) {
      // Remove the item from bookmarks
      setBookmarkedItems((prevItems) => prevItems.filter((bookmarkedItem) => bookmarkedItem.title !== item.title));
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
      <h2 className="movies-header">Recommended for You</h2>
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
        {filteredMovies.slice(0, 16).map((item) => (
          <div key={item.title} className="movie-card">
            <img src={item.posterUrl} alt={item.title} />
            <p>{item.title} ({item.releaseYear})</p>
            <div
              className="play-button"
              onClick={() => playVideo(item.videoUrl)}
            >
              ▶ Play
            </div>
            <div className="bookmark-button" onClick={() => handleBookmark(item)}>
              {bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.title === item.title)
                ? 'Bookmarked'
                : 'Bookmark'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPage;
