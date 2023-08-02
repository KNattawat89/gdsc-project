import {
	Box,
	Button,
	Container,
	Stack,
	Typography,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Grid,
	Link as MuiLink,
} from '@mui/material'
import React from 'react'
import Img from './img/dodle.png'
import { NavbarHomePage } from '../components/NavbarHomePage'
import BookIcon from '@mui/icons-material/Book'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import ImageIcon from '@mui/icons-material/Image'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div>
			<NavbarHomePage />
			<Box
				sx={{
					backgroundImage:
						'url("https://res.cloudinary.com/startup-grind/image/upload/v1/gcs/platform-data-dsc/chapter_banners/0447_53210620-03-TEERUCH.jpg?md")',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					padding: { xs: '5rem 0rem', md: '8rem 0rem' },
				}}
			>
				<Container>
					<Stack color={'white'}>
						<Typography>Google Developer Student Clubs</Typography>
						<Typography fontSize={'3rem'}>King Mongkut’s University of</Typography>
						<Typography fontSize={'3rem'}>Technology Thonburi</Typography>
					</Stack>
				</Container>
			</Box>
			<Box
				sx={{
					backgroundImage: `url(${Img})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					height: '10rem',
					padding: { xs: '5rem 0rem', md: '8rem 0rem' },
				}}
			>
				<Stack color={'black'} justifyContent="center" alignItems="center">
					<Typography margin={3} textAlign="center" fontSize={'1.2rem'}>
						To learn more about contents and events, you can view <br />
						in the chapter page in the Event Platform
					</Typography>

					<a
						href="https://gdsc.community.dev/king-mongkuts-university-of-technology-thonburi/"
						target="_blank"
					>
						<Button variant="contained">Visit chapter page</Button>
					</a>
				</Stack>
			</Box>
			<Box
				sx={{
					padding: { xs: '2rem', md: '4rem ' },
					margin: 'auto',
					maxWidth: { xs: '450px', md: '800px' },
				}}
			>
				<Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 3, md: 4 }} margin="auto">
					<Grid item xs={12} sm={6}>
						<MuiLink href="https://gdsc.sit.kmutt.ac.th/bookstack" underline="none">
							<Card>
								<CardActionArea>
									<CardContent>
										<Box
											sx={{
												padding: { xs: '1rem' },
												margin: 'auto',
											}}
										>
											<BookIcon sx={{ color: '#D22F91', fontSize: '300%' }} />
											<Typography
												gutterBottom
												variant="h6"
												component="div"
												sx={{ color: '#000000', fontWeight: 'bold' }}
											>
												Knowledge Base
											</Typography>
											<Typography variant="body2">
												Articles for guide you through the workshop and the knowledge base that
												you can read along
											</Typography>
											{/* <Typography variant="body2">date</Typography> */}
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</MuiLink>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card>
							<CardActionArea>
								<CardContent>
									<Box
										sx={{
											padding: { xs: '1rem' },
											margin: 'auto',
										}}
									>
										<BubbleChartIcon sx={{ color: '#00B674', fontSize: '300%' }} />
										<Typography
											gutterBottom
											variant="h6"
											component="div"
											sx={{ color: '#000000', fontWeight: 'bold' }}
										>
											Diffuse
										</Typography>
										<Typography variant="body2">
											Event engagement and collaboration platform for bringing all attendees
											closer to the community
										</Typography>
										{/* <Typography variant="body2">date</Typography> */}
									</Box>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Link to="/gallery" style={{ textDecoration: 'none' }}>
							<Card>
								<CardActionArea>
									<CardContent>
										<Box
											sx={{
												padding: { xs: '1rem' },
												margin: 'auto',
											}}
										>
											<ImageIcon sx={{ color: '#FF8E25', fontSize: '300%' }} />
											<Typography
												gutterBottom
												variant="h6"
												component="div"
												sx={{ color: '#000000', fontWeight: 'bold' }}
											>
												Gallery
											</Typography>
											<Typography variant="body2">
												Archives of photo albums from hosted events at GDSC
											</Typography>
											{/* <Typography variant="body2">date</Typography> */}
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</Link>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card>
							<CardActionArea>
								<CardContent>
									<Box
										sx={{
											padding: { xs: '1rem' },
											margin: 'auto',
										}}
									>
										<AutoFixHighIcon sx={{ color: '#2575BF', fontSize: '300%' }} />
										<Typography
											gutterBottom
											variant="h6"
											component="div"
											sx={{ color: '#000000', fontWeight: 'bold' }}
										>
											Assesment
										</Typography>
										<Typography variant="body2">
											Activity submission platform for claiming event reward from finished task
										</Typography>
										{/* <Typography variant="body2">date</Typography> */}
									</Box>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</Box>

			<Box
				sx={{
					height: '100px',
					backgroundColor: '#E4E4E4',
					boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
				}}
			>
				<Container sx={{ height: '100%' }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
						}}
					>
						<Typography color="black" fontSize="1rem">
							© 2022-2023 Google Developer Students Club, King Mongkut’s University of Technology
							Thonburi Chapter
						</Typography>
					</Box>
				</Container>
			</Box>
		</div>
	)
}

export default HomePage
