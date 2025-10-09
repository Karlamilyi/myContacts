# myContacts

A modern contact management application built with a React frontend and Node.js backend.

## 📋 Table of Contents

- [myContacts](#mycontacts)
  - [📋 Table of Contents](#-table-of-contents)
    - [Backend](#backend)
    - [DevOps](#devops)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
  - [🐳 Docker Setup (Recommended)](#-docker-setup-recommended)
    - [Quick Start with Docker](#quick-start-with-docker)
    - [Docker Commands](#docker-commands)
  - [💻 Local Development Setup](#-local-development-setup)
    - [Quick Start](#quick-start)
  - [💻 Frontend Setup](#-frontend-setup)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
  - [⚙️ Backend Setup](#️-backend-setup)
    - [Installation](#installation-1)
    - [Available Scripts](#available-scripts-1)
  - [🔧 Development](#-development)
    - [Code Style](#code-style)
    - [Building for Production](#building-for-production)
      - [With Docker](#with-docker)
      - [Local Build](#local-build)
    - [Development with Docker](#development-with-docker)
  - [🤝 Contributing](#-contributing)
  - [📝 License](#-license)
  - [📞 Support](#-support)
  - [🔄 Version History](#-version-history)

// ...existing code...

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB/JSON** - Data storage
- **CORS** - Cross-origin resource sharing

### DevOps
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container application management

## 📁 Project Structure

```
myContacts/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   ├── styles/          # CSS files
│   │   └── App.js          # Main application component
│   ├── Dockerfile          # Frontend Docker configuration
│   ├── package.json         # Frontend dependencies
│   └── README.md           # Frontend documentation
├── backend/                 # Node.js backend application
│   ├── routes/             # API routes
│   ├── models/             # Data models
│   ├── middleware/         # Custom middleware
│   ├── Dockerfile          # Backend Docker configuration
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── README.md          # Backend documentation
├── docker-compose.yml      # Docker Compose configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Docker** and **Docker Compose** (recommended)
- OR **Node.js** (v14 or higher) and **npm** for local development

## 🐳 Docker Setup (Recommended)

The easiest way to run the application is using Docker Compose.

### Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/myContacts.git
   cd myContacts
   ```

2. **Start the application with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Docker Commands

```bash
# Start services in background
docker-compose up -d

# Stop services
docker-compose down

# Rebuild and start services
docker-compose up --build

# View logs
docker-compose logs

# View logs for specific service
docker-compose logs frontend
docker-compose logs backend
```

## 💻 Local Development Setup

If you prefer to run the application locally without Docker:

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/myContacts.git
   cd myContacts
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Start the development servers**
   
   In one terminal (Backend):
   ```bash
   cd backend
   npm run dev
   ```
   
   In another terminal (Frontend):
   ```bash
   cd frontend
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 💻 Frontend Setup

### Installation
```bash
cd frontend
npm install
```

### Available Scripts
- `npm start` - Start development server
- `npm build` - Build for production
- `npm run lint` - Run ESLint

// ...existing code...

## ⚙️ Backend Setup

### Installation
```bash
cd backend
npm install
```

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

// ...existing code...

## 🔧 Development

### Code Style
- Use ESLint and Prettier for consistent code formatting
- Follow React best practices and hooks patterns
- Use meaningful variable and function names
- Write clear comments for complex logic

### Building for Production

#### With Docker
```bash
# Production build with Docker
docker-compose -f docker-compose.prod.yml up --build
```

#### Local Build
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm start
```

### Development with Docker

For development with live reload:
```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Or use the default compose file which includes dev features
docker-compose up
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or run into issues, please:
- Check the documentation
- Open an issue on GitHub
- Contact the development team

## 🔄 Version History

- **v1.0.0** - Initial release with basic contact management features

---

**Happy coding! 🎉**