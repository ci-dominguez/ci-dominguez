import { useState } from 'react';
import { fetchWithApiKey } from '../lib/api/fetcher';
import type { Artwork } from '../lib/types/art-api/artwork';

const useArtwork = () => {
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [respMessage, setRespMessage] = useState<string | null>(null);

  const fetchRandomArtwork = async () => {
    setIsLoading(true);
    setRespMessage(null);

    try {
      const data = await fetchWithApiKey<Artwork>('/artworks/random');

      setArtwork(data);
      return data;
    } catch (error) {
      console.error('Error fetching artwork:', error);
      setRespMessage('Failed to fetch artwork');

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { artwork, fetchRandomArtwork, isLoading, respMessage };
};

export default useArtwork;
