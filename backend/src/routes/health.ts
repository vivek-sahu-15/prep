import { Router } from 'express';
import { supabaseAdmin } from '../lib/supabase';

export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'prep-backend', time: new Date().toISOString() });
});

healthRouter.get('/db', async (_req, res) => {
  const { error } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1 });
  if (error) return res.status(500).json({ status: 'error', message: error.message });
  res.json({ status: 'ok', database: 'connected' });
});