export interface Album {
	albums_id: string
	cover_photo: string
	date: string
	image_base_url: string
	name: string
	thumbnail_base_url: string
	count: number
}

export interface Data {
	album: Album
	photos: Photo[]
}

export interface RootObject {
	success: boolean
	data: Data
}

export interface AlbumForPhoto {
	name: string
	photo_count: number
	saved_count: number
	date: string
	cover_photo: string
}

export interface Photo {
	photo_id: number
	file_name: string
}

export interface DataForPhoto {
	album: Album
	photos: Photo[]
}
export interface SelectedPhoto {
	image_base_url: string | null | undefined
	count: number | null | undefined
}
