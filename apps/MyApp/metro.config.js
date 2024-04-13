const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');

  //Get all the workspa e
  const workspaces = getWorkspaces(__dirname);

  console.log("workspaces", workspaces);
  
  //Filter all the unnessary paths
  const watchFolders = [
      path.resolve(__dirname, 'node_modules'),
      ...workspaces.filter(
          workPath =>
          !workPath
          .split('/')
          .pop()
          .match(/[.].*|src|dist|packages|components/) &&
          !workPath.match('node_modules/'),
          ),
        ];
        
        
        
    console.log("watchFolders", watchFolders);
        
        
        /**
         * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    watchFolders,
    resetCache: true,
    resolver: {
      nodeModulesPaths: watchFolders,
      disableHierarchicalLookup: false
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
