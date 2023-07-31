import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import axios from '../utils/axios'
import { Box } from '@mui/system'
const LogoutNav = () => {
	const navigate = useNavigate()
	const logOut = () => {
		axios.post('/account/logout', { withCredentials: true })
		signOut(auth)
			.then(() => {
				navigate('/gallery')
			})
			.catch((err) => {
				alert(err.message)
			})
	}
	return (
		<Box onClick={logOut} sx={{ cursor: 'pointer', backgroundColor: 'white', borderRadius: '3rem' }} color="white">
			<Stack direction={'row'} spacing={1} padding={'0.3rem'}>
				<LogoutIcon sx={{ ml: '0.5rem' }} color="primary" fontSize="medium" />
				<Typography sx={{ paddingRight: '0.5rem' }} color={'black'} fontSize="14px">
					Logout
				</Typography>
			</Stack>
		</Box>
	)
}

export default LogoutNav
