export type Artwork = {
  id: number;
  title: string;
  medium: string;
  inferredYear: string;
  imageUrl: string;
  thumbnailUrl: string;
  artistId: number;
};

export type ArtworkWithArtist = Artwork & {
  artist: string;
};
