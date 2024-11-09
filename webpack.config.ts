import path from 'path';
import webpack from 'webpack';
import buildWebpack from './config/build-webpack';
import type { BuildMode } from './config/types/types';
import 'webpack-dev-server';

type EnvVariables = {
  mode: BuildMode;
  port: number;
};

const DEFAULT_PORT = 5000;

export default function (env: EnvVariables) {
  const config: webpack.Configuration = buildWebpack({
    mode: env.mode,
    port: env.port ?? DEFAULT_PORT,
    paths: {
      entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
      output: path.resolve(__dirname, 'public'),
    },
  });
  return config;
}
