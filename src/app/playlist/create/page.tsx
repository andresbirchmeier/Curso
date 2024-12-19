'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PlaylistFormProps {
  initialData?: {
    title: string;
    description: string;
    trackCount: number;
    duration: string;
  };
}

const CreatePlaylist: React.FC<PlaylistFormProps> = ({ initialData }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    trackCount: 0,
    duration: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'trackCount' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    if (initialData) {
      console.log('Updating playlist...');
    } else {
      console.log('Creating new playlist...');
    }

    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <div className='bg-gradient-to-r from-green-400 to-fuchsia-500 rounded-lg p-8 text-white shadow-lg'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          {initialData ? 'Edit Playlist' : 'Create New Playlist'}
        </h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block mb-2 text-sm font-semibold'>Title</label>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20'
              placeholder='Enter playlist title'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-semibold'>
              Description
            </label>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20'
              placeholder='Enter playlist description'
              rows={3}
              required
            />
          </div>
          <div className='flex gap-4 pt-4'>
            <button
              type='submit'
              className='flex-1 bg-white/90 text-green-600 font-medium px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300'
            >
              {initialData ? 'Update Playlist' : 'Create Playlist'}
            </button>
            <button
              type='button'
              onClick={handleCancel}
              className='flex-1 bg-white/10 text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300'
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
