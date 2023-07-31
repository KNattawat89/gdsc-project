import axios from 'axios'

const getBaseURL = (): string => {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
		return 'http://localhost:8000/api'
	}

	return '/api'
}

const a = axios.create({
	baseURL: getBaseURL(),
	withCredentials: true,
})

// instance.defaults.headers.common["Authorization"] = CookieHelper.read(
// 	"auth-token"
// );

export default a
