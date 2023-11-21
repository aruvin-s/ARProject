const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    assetExts: ['obj', 'mtl', 'jpg', 'png', 'gltf', 'glb', 'vrx', 'hdr'],
  },
});
