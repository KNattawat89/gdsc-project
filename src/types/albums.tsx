export interface Album {
  name: string;
  photo_count: number;
  date: string;
  cover_photo: string;
}

export interface Data {
  albums: Album[];
}

export interface RootObject {
  success: boolean;
  data: Data;
}

export interface AlbumForPhoto {
  name: string;
  photo_count: number;
  saved_count: number;
  date: string;
  cover_photo: string;
}

export interface Photo {
  thumbnail_url: string;
  full_url: string;
  date: string;
}

export interface DataForPhoto {
  album: Album;
  photos: Photo[];
}
export interface SelectedPhoto {
  thumbnail_url: string | null;
  full_url: string | null;
  date: string | null;
}
