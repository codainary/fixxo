require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  // dbUser: process.env.DB_USER,
  // dbPassword: process.env.DB_PASSWORD,
  // dbHost: process.env.DB_HOST,
  // dbName: process.env.DB_NAME,
  // dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  jwtRecoverySecret: process.env.JWR_RECOVERY_SECRET,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  smtpUsername: process.env.SMTP_USERNAME,
  smtpPassword: process.env.SMTP_PASSWORD,
  // smtpFrom: process.env.SMTP_FROM


}

module.exports = { config };
