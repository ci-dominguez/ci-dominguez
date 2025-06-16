import { useState } from 'react';
import { fetchWithApiKey } from '../lib/api/fetcher';
import type { Artist } from '../lib/types/art-api/artist';

const useArtist = () => {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [respMessage, setRespMessage] = useState<string | null>(null);

  const fetchArtistById = async (id: number) => {
    setIsLoading(true);
    setRespMessage(null);

    try {
      const data = await fetchWithApiKey<Artist>(`/artists/${id}`);

      setArtist(data);
      return data;
    } catch (error) {
      console.error('Error fetching artist:', error);
      setRespMessage('Failed to fetch artist');

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { artist, fetchArtistById, isLoading, respMessage };
};

export default useArtist;
