import webpack from 'webpack';
import buildLoaders from './build-loaders';
import buildPlugins from './build-plugins';
import buildResolvers from './build-resolvers';
import buildDevServer from './build-dev-server';
import type { BuildOptions } from './types/types';

export default function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = options.mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].js',
    },
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(),
    resolve: buildResolvers(),
    devtool: isDev && 'source-map',
    devServer: buildDevServer(options),
  };
}
