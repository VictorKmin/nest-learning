export const variables = {
  PORT: process.env.PORT || '3000',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/nest_start',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  NODE_ENV: process.env.NODE_ENV || '',
};
