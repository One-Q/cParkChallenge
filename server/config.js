const config = {
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/cparkchallenge',
  PORT: process.env.PORT || 8000,
};

export default config;