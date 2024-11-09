import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { BuildOptions } from './types/types';

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    historyApiFallback: true,
    port: options.port,
    compress: false,
    open: true,
    client: {
      overlay: false,
    },
  };
}
