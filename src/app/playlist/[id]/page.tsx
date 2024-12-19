'use client';
import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { allPlaylists } from '@/mocks/playlist';
import { FaEllipsisV } from 'react-icons/fa';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  albumCover?: string;
}

const PlaylistDetail: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSongActions, setShowSongActions] = useState<string | null>(null);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);

  // Mock data - replace with your actual data fetching
  const { id } = useParams();
  const playlist =
    allPlaylists.find((playlist) => playlist.id === id) || allPlaylists[0];

  const songs: Song[] = [
    { id: '1', title: 'Summer Song', artist: 'Beach Band', duration: '3:45' },
    { id: '2', title: 'Sunny Day', artist: 'The Waves', duration: '4:20' },
    // Add more songs as needed
  ];

  const [searchResults, setSearchResults] = useState<Song[]>([
    {
      id: 'search1',
      title: 'Searching Stars',
      artist: 'Night Sky',
      duration: '3:30',
    },
    { id: 'search2', title: 'Moon Dance', artist: 'Luna', duration: '4:15' },
    // Add more mock search results
  ]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSongAction = (
    songId: string,
    action: 'play' | 'queue' | 'add'
  ) => {
    console.log(`Action: ${action} for song: ${songId}`);
    setShowSongActions(null);
  };

  const handleOptionsClick = () => {
    setShowOptionsMenu(!showOptionsMenu);
  };

  const handleEditPlaylist = () => {
    router.push(`/playlist/edit/${playlist.id}`); // Redirige a la ruta edit con el ID
  };

  const handleDeletePlaylist = () => {
    console.log('Deleting playlist');
    setShowOptionsMenu(false);
  };

  return (
    <div className='max-w-4xl mx-auto p-6'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-green-400 to-fuchsia-500 rounded-lg p-6 mb-8 text-white'>
        <div className='flex items-start gap-6 relative'>
          <div className='w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center'>
            <span className='text-6xl'>🎵</span>
          </div>
          <div className='flex-1'>
            <h1 className='text-4xl font-bold mb-2'>{playlist.title}</h1>
            <p className='text-white/80 mb-4'>{playlist.description}</p>
            <div className='flex items-center gap-4 text-sm'>
              <span>{playlist.trackCount} tracks</span>
              <span>•</span>
              <span>{playlist.duration}</span>
              <span>•</span>
              <span>Created by {playlist.createdBy}</span>
            </div>
          </div>

          {/* Three Dots Menu */}
          <div
            onClick={handleOptionsClick}
            className='absolute top-0 right-0 cursor-pointer'
          >
            <FaEllipsisV size={24} color='white' />
            {showOptionsMenu && (
              <div className='absolute top-8 right-0 bg-white/10 text-white p-2 w-40 rounded-lg shadow-lg'>
                <ul className='space-y-2'>
                  <li>
                    <button
                      onClick={handleEditPlaylist}
                      className='w-full text-left px-3 py-1 hover:bg-white/10 rounded-md'
                    >
                      Edit Playlist
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleDeletePlaylist}
                      className='w-full text-left px-3 py-1 hover:bg-white/10 rounded-md'
                    >
                      Delete Playlist
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Playlist Songs */}
      <div className='bg-gradient-to-r from-green-400 to-fuchsia-500 rounded-lg p-6'>
        <h2 className='text-xl font-bold mb-4 text-white'>Playlist Songs</h2>
        <div className='space-y-2 divide-y divide-white/10'>
          {songs.map((song) => (
            <div
              key={song.id}
              className='p-4 flex items-center justify-between hover:bg-white/5 rounded-lg relative'
              onMouseEnter={() => setShowSongActions(song.id)}
              onMouseLeave={() => setShowSongActions(null)}
            >
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-white/20 rounded flex items-center justify-center'>
                  🎵
                </div>
                <div>
                  <h3 className='font-medium text-white'>{song.title}</h3>
                  <p className='text-sm text-white/70'>{song.artist}</p>
                </div>
              </div>

              {/* Action buttons */}
              {showSongActions === song.id && (
                <div className='flex gap-2 ml-auto mr-2'>
                  <button
                    onClick={() => handleSongAction(song.id, 'play')}
                    className='px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors duration-150'
                  >
                    Play Now
                  </button>
                  <button
                    onClick={() => handleSongAction(song.id, 'queue')}
                    className='px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors duration-150'
                  >
                    Add to Queue
                  </button>
                </div>
              )}

              {/* Duration */}
              <div className='text-white/70'>{song.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetail;
