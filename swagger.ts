import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js app',
      description: 'Example of User CRUD API',
      version: '1.0.0',
    },
      components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
      security: [{
        bearerAuth: []
    }]
  },
  // looks for configuration in specified directories
  apis: ['./src/routes/*.ts'], // Change the file extension to .ts for TypeScript route files
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
  console.log(`Swagger running on port ${port}.`);
  // Swagger Page
    try{
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }
    catch(error){
        console.log(error)
    }

  // Documentation in JSON format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
