const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    extraNodeModules: {
      "@/constants": path.resolve(__dirname, "constants"),
      "@/components": path.resolve(__dirname, "components"), // New alias for 'components'
    },
  },
};
