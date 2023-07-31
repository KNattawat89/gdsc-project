import React, { FC } from 'react'
import styled from '../pages/gallery/fullimages.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination, Navigation } from 'swiper'
import { Photo } from '../types/albums'
import { PhotoSharp } from '@mui/icons-material'
import { Box } from '@mui/material'
const FullImg: FC<{
	onClosePhoto: Function
	selectPhoto: {
		image_base_url: string | null | undefined
		count: any
	}
	photos: Photo[]
}> = ({ onClosePhoto, selectPhoto, photos }) => {
	// console.log(selectPhoto.count);

	return (
		<div className={styled.post}>
			<div className={styled.postBg} onClick={() => onClosePhoto()} />
			<div className={styled.postContent}>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					initialSlide={selectPhoto.count}
					keyboard={{
						enabled: true,
					}}
					navigation={true}
					style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
					modules={[Keyboard, Pagination, Navigation]}
					className="mySwiper"
				>
					{photos.map((photo: Photo) => {
						return (
							<SwiperSlide
								style={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								{' '}
								<img src={selectPhoto.image_base_url + '/' + photo.file_name} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export default FullImg
