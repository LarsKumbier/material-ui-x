module.exports = {
  recursive: true,
  reporter: 'dot',
  require: [require.resolve('./test/utils/setup')],
  extension: ['js', 'tsx', 'ts'],
};
