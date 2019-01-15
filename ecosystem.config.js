module.exports = {
  apps : [{
    name: "app",
    script: "./code/server/index.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}