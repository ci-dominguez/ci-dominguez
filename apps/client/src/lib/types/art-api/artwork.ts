export type Artwork = {
  id: number;
  title: string;
  medium: string;
  inferredYear: string;
  fullImageUrl: string;
  thumbnailImageUrl: string;
  artistId: number;
};

export type ArtworkWithArtist = Artwork & {
  artist: string;
};
