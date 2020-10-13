// Determine the environment is which the application is running
const env = process.env.JWT_SECRET || 'development';

if (env === 'development' || env === 'test') {
    // Load the non versioned 
    const config = require('./config.json');
    const envConfig = config[env];
    // Object.keys() function returns an array with all the key names of the object provided.
    // Ej: Object.keys(envConfig): returns ['PORT', 'MONGODB_URI', 'JWT_SECRET']
    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}