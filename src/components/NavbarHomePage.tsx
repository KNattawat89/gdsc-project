import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image'

export const NavbarHomePage = () => {
	return (
		<Box
			sx={{
				height: '56px',
				backgroundColor: '#FFFFFF',
				boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
			}}
		>
			<Container sx={{ height: '100%' }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '100%',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							gap: '0.5rem',
						}}
					>
						<img
							style={{ borderRadius: '1rem' }}
							width="64"
							// height="64"
							src="https://raw.githubusercontent.com/nimishbongale/DSC-RIT_Recruitment_Test/master/static/dscnew.png?token=AKLHGWOKT4B6YUSLBUNLU526NEMIS"
						/>
						<Typography color="black" fontWeight={'bold'} fontSize="1.25rem">
							GDSC KMUTT
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							gap: '1rem',
						}}
					>
						<Typography
							component="a"
							href="https://gdsc.community.dev/king-mongkuts-university-of-technology-thonburi/"
							target="_blank"
							color="black"
						>
							Chapter Page
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
