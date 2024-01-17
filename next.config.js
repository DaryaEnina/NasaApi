module.exports = {
  reactStrictMode: true,
  // Другие настройки Next.js, если они есть

  // Пример настройки пути к папке src
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.modules.push(__dirname);
    }

    return config;
  },
};
