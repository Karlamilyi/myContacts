const User = require('../models/User')
const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
}

const register = async (req, res) => {
  try {
    const { email, password, pseudo } = req.body

    const existingUser = await User.findOne({
      $or: [{ email }, { pseudo }]
    })

    if (existingUser) {
      return res.status(400).json({
        message: existingUser.email === email ? 'Email already exists' : 'Pseudo already exists'
      })
    }

    const user = new User({
      email,
      password,
      pseudo
    })

    await user.save()

    const token = generateToken(user._id)

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user._id,
        email: user.email,
        pseudo: user.pseudo
      },
      token
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ message: 'Server error during registration' })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = generateToken(user._id)

    res.json({
      message: 'Login successful',
      user: {
        id: user._id,
        email: user.email,
        pseudo: user.pseudo
      },
      token
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Server error during login' })
  }
}

module.exports = {
  register,
  login
}