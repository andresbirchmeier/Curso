'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreatePlaylist: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    trackCount: 0,
    duration: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'trackCount' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the API call or state management
    console.log(formData);
    router.push('/'); // Redirect to homepage after creation
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gradient-to-r from-green-400 to-fuchsia-500 rounded-lg p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Create New Playlist</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20"
              placeholder="Enter playlist title"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20"
              placeholder="Enter playlist description"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20"
              placeholder="Enter image URL"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-white/90 text-green-600 font-medium px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300"
            >
              Create Playlist
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-white/10 text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylist;