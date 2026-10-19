import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import { healthRouter } from './routes/health';

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN.split(',') }));
app.use(express.json());

app.use('/health', healthRouter);

app.use((_req, res) => res.status(404).json({ error: 'Not found' }));