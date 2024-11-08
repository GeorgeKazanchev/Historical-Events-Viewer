import webpack from 'webpack';
import { BuildOptions } from './types/types';

export default function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].js',
    },
  };
}
