module.exports = {
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  // future: {
  //   webpack5: true,
  // },
};
