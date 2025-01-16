import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import config from './config/config';
import {
  globalErrorHandler,
  notFoundHandler,
} from './middlewares/error-handlers.mw';
import { configurePassport } from './middlewares/passport.mw';
import routes from './routes/routes.index';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['http://localhost:5173']
        : ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Configure Passport middleware
configurePassport(app);

// Enable JSON request parsing
app.use(express.json());

// Apply logging in development mode only
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve static files only in production

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

// Routes and API endpoints
app.use(routes);

app.get(['/', '/marathon', '/carnival', '/login', '/register'], (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Handle 404 errors
app.use(notFoundHandler);

// Global error handling
app.use(globalErrorHandler);

// Start the server and bind to the correct port
const PORT = process.env.PORT || config.app.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}~`);
});

export default app;
