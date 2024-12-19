'use client';
import { useParams } from 'next/navigation';
import { allPlaylists } from '@/mocks/playlist';
import CreatePlaylist from '@/components/CreatePlaylist';

const EditPlaylistPage = () => {
  const { id } = useParams();
  const playlist = allPlaylists.find((playlist) => playlist.id === id);

  if (!playlist) {
    return <div>Playlist not found</div>;
  }

  return <CreatePlaylist initialData={playlist} />;
};

export default EditPlaylistPage;
