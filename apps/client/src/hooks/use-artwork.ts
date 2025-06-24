import { useState } from 'react';
import { fetchWithApiKey } from '../lib/api/fetcher';
import type { Artwork, ArtworkWithArtist } from '../lib/types/art-api/artwork';
import type { Artist } from '../lib/types/art-api/artist';

const useArtwork = () => {
  const [artwork, setArtwork] = useState<ArtworkWithArtist | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [respMessage, setRespMessage] = useState<string | null>(null);

  const fetchAndEnrichArtwork = async () => {
    setIsLoading(true);
    setRespMessage(null);

    let enrichedArtwork: ArtworkWithArtist | null = null;
    try {
      const artworkData = await fetchWithApiKey<Artwork>('/artworks/random');
      //console.log('Fetched artwork:', artworkData);

      const artistData = await fetchWithApiKey<Artist>(
        `/artists/${artworkData.artistId}`
      );
      //console.log('Fetched artist:', artistData);

      // enrich artwork with artist data
      enrichedArtwork = {
        ...artworkData,
        artist: artistData.name,
      };

      setRespMessage(
        `Artwork enriched with artist data: ${JSON.stringify(enrichedArtwork)}`
      );

      setArtwork(enrichedArtwork);
    } catch (error) {
      console.error('Error fetching and/or enriching artwork:', error);
      setRespMessage('Error fetching and/or enriching artwork');
      throw new Error('Error fetching and/or enriching artwork');
    } finally {
      setIsLoading(false);
    }
  };

  return { artwork, fetchAndEnrichArtwork, isLoading, respMessage };
};

export default useArtwork;
