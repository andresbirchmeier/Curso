'use client';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search for a playlist"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full px-4 py-2 rounded-lg border border-emerald-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 bg-white/10 text-white placeholder-gray-300"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;