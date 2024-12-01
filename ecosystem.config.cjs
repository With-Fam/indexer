module.exports = {
  apps: [
    {
      name: "indexer",
      script: "bun",
      args: "start",
      cron_restart: "0 */12 * * *",
      watch: false,
      autorestart: true,
    },
  ],
};
