'use client';
import React, { useState, useEffect } from 'react';
import ContentBox from './ContentBox';

interface Song {
  id: number;
  title: string;
  artist: string;
  year: string;
}

const SortifyDemo = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [sortBy, setSortBy] = useState<string>('title');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/songs.json');
        const data: Song[] = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error loading songs:', error);
      }
    };
    fetchData();
  }, []);

  const sortSongs = (criteria: string) => {
    const sortedSongs = [...songs].sort();
    if (criteria === 'title') sortedSongs.sort((a, b) => a.title.localeCompare(b.title));
    else if (criteria === 'artist') sortedSongs.sort((a, b) => a.artist.localeCompare(b.artist));
    else if (criteria === 'year') sortedSongs.sort((a, b) => new Date(a.year).getTime() - new Date(b.year).getTime());
    setSongs(sortedSongs);
  };

  return (
    <section className="py-16 px-4 bg-[#121212] font-press-start-2p text-center">
      <ContentBox>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">🎧 Try Sortify</h2>
        <div className="mb-6">
          <select
            onChange={(e) => {
              setSortBy(e.target.value);
              sortSongs(e.target.value);
            }}
            value={sortBy}
            className="px-4 py-2 rounded border border-gray-400 bg-white text-black text-sm"
          >
            <option value="title">Sort by Title</option>
            <option value="artist">Sort by Artist</option>
            <option value="year">Sort by Year</option>
          </select>
        </div>

        <div className="pixelated-border">
          <ul className="space-y-3 text-sm">
            {songs.map((song) => (
              <li key={song.id} className="bg-[#333] text-white rounded px-4 py-3 border border-[#444]">
                <strong>{song.title}</strong> by {song.artist} ({song.year})
              </li>
            ))}
          </ul>
        </div>
      </ContentBox>
    </section>
  );
};

export default SortifyDemo;
