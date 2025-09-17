const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentation for the Full Stack JS Project API',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development server',
    },
    {
      url: 'http://host.docker.internal:3000',
      description: 'Docker development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'User ID',
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'User email',
          },
          pseudo: {
            type: 'string',
            description: 'User pseudo',
          },
        },
      },
      RegisterRequest: {
        type: 'object',
        required: ['email', 'password', 'pseudo'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            description: 'User email',
          },
          password: {
            type: 'string',
            minLength: 6,
            description: 'User password',
          },
          pseudo: {
            type: 'string',
            description: 'User pseudo',
          },
        },
      },
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            description: 'User email',
          },
          password: {
            type: 'string',
            description: 'User password',
          },
        },
      },
      AuthResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
          user: {
            $ref: '#/components/schemas/User',
          },
          token: {
            type: 'string',
            description: 'JWT token',
          },
        },
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js', './src/controllers/*.js'], // Paths to files containing OpenAPI definitions
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;