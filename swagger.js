const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'L4 API',
    description: 'L5-8'
  },
  host: 'cse341-lessons-5-8.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);