const winston = require('winston');

// eslint-disable-next-line no-multi-assign
const isProduction = process.env.NODE_ENV === 'production';
const loggingLevel = 'debug';
const transports = [new winston.transports.Console({ format: winston.format.json() })];

if (!isProduction) {
  transports.push(
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  );
}

const logger = winston.createLogger({
  level: loggingLevel,
  format: winston.format.simple(),
  transports,
});

export default logger;
