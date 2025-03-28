'use client';
import { useState, useEffect } from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  year: string;
}

const Songs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [sortBy, setSortBy] = useState<string>('title'); // Default sort by title

  // Fetch song data from the local JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/songs.json'); // Fetching from public folder
        const data: Song[] = await response.json();
        setSongs(data); // Set the fetched song data
      } catch (error) {
        console.error("Error loading songs:", error);
      }
    };
    fetchData();
  }, []);

  // Sort the songs based on selected criteria
  const sortSongs = (criteria: string) => {
    let sortedSongs = [...songs];

    if (criteria === 'title') {
      sortedSongs.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === 'artist') {
      sortedSongs.sort((a, b) => a.artist.localeCompare(b.artist));
    } else if (criteria === 'year') {
      sortedSongs.sort((a, b) => new Date(a.year).getTime() - new Date(b.year).getTime());
    }

    setSongs(sortedSongs);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Songs</h2>
      
      {/* Sorting Dropdown */}
      <select
        onChange={(e) => {
          setSortBy(e.target.value);
          sortSongs(e.target.value);
        }}
        value={sortBy}
        className="p-2 mb-4 border border-white-400 rounded"
      >
        <option value="title">Sort by Title</option>
        <option value="artist">Sort by Artist</option>
        <option value="year">Sort by Year</option>
      </select>

      {/* Render Songs */}
      <ul className="space-y-2">
        {songs.map((song) => (
          <li key={song.id} className="p-2 border-b border-white-300">
            <strong>{song.title}</strong> by {song.artist} ({song.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
