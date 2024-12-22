'use client';
import { Playlist } from '@/mocks/playlist';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaPlay, FaPlus } from 'react-icons/fa';

interface PlaylistCardProps {
  playlist: Playlist;
  onPlay?: (id: string) => void;
  onCreateNew?: () => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  playlist,
  onPlay,
  onCreateNew,
}) => {
  const router = useRouter();
  const isAddNew = playlist.id === 'add-new';

  const handleCardClick = () => {
    if (!isAddNew) {
      router.push(`/playlist/${playlist.id}`);
    } else {
      if (onCreateNew) onCreateNew();
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className='relative bg-gradient-to-r from-green-400 to-fuchsia-500 rounded-lg p-5 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer'
    >
      <div>
        <h2 className='text-xl font-semibold mb-2'>
          {isAddNew ? 'Create New Playlist' : playlist.title}
        </h2>
        <p className='text-sm mb-4 opacity-90'>
          {isAddNew
            ? 'Tap to create a new playlist'
            : `${playlist.trackCount} songs`}
        </p>
      </div>
      <div className='flex gap-2 justify-end'>
        {isAddNew ? (
          <button
            onClick={onCreateNew}
            className='flex items-center justify-center bg-white/10 text-white font-medium rounded-full p-4 hover:bg-emerald-400 transition-colors duration-300'
          >
            <FaPlus size={24} />
          </button>
        ) : (
          <button
            onClick={() => onPlay?.(playlist.id)}
            className='flex items-center justify-center bg-white/10 text-white font-medium rounded-full p-4 hover:bg-white/20 transition-colors duration-300'
          >
            <FaPlay size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;
