import api from './api'

const register = (pseudo, email, password) => {
  return api.post('/auth/register', { pseudo, email, password })
}

const login = (email, password) => {
  return api.post('/auth/login', { email, password })
}

const getMe = () => {
  return api.get('/auth/me')
}

export const authService = {
  register,
  login,
  getMe,
}