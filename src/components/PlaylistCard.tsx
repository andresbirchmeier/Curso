import { Playlist } from '@/mocks/playlist';
import React from 'react';

interface PlaylistCardProps {
  playlist: Playlist;
  onPlay?: (id: string) => void;
  onDelete?: (id: string) => void;
  onCreateNew?: () => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onPlay, onDelete, onCreateNew }) => {
  const isAddNew = playlist.id === 'add-new';

  return (
    <div className="bg-gradient-to-r from-green-400 to-fuchsia-500 rounded-lg p-5 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-2">{isAddNew ? 'Create New Playlist' : playlist.title}</h2>
        <p className="text-sm mb-4 opacity-90">
          {isAddNew ? 'Tap to create a new playlist' : `${playlist.trackCount} songs`}
        </p>
      </div>
      <div className="flex gap-2">
        {isAddNew ? (
          <button
            onClick={onCreateNew}
            className="w-full bg-white/90 text-green-600 font-medium px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300"
          >
            ➕ Add
          </button>
        ) : (
          <>
            <button
              onClick={() => onPlay?.(playlist.id)}
              className="flex-1 bg-white/90 text-green-600 font-medium px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300"
            >
              ▶️ Play
            </button>
            <button
              onClick={() => onDelete?.(playlist.id)}
              className="flex-1 bg-red-100 text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300"
            >
              🗑️ Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;