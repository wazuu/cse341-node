const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'L4 API',
    description: 'L4'
  },
  host: 'cse341-lesson-3.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);