module.exports = function(api) {
  api.cache(true);

  const presets = ["next/babel"];

  return {
    presets,
    sourceMaps: true,
    retainLines: true
  };
};
