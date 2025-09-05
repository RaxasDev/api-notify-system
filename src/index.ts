import express, { Application } from "express";
import { healthCheck } from "./controllers/health-check.controller";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerDefinition } from "./swagger-def";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const options = {
	swaggerDefinition,
	apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", healthCheck);

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});