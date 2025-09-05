import express, { Application } from "express";
import { healthCheck } from "./controllers/health-check.route";
import swaggerUi from "swagger-ui-express";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", healthCheck);

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});