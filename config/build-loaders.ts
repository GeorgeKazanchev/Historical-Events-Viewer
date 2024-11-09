import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import type { BuildOptions } from './types/types';

export default function buildLoaders(
  options: BuildOptions
): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[name]__[local]--[hash:base64:8]',
        exportLocalsConvention: 'camelCase',
      },
    },
  };

  const stylesLoader = {
    test: /\.(sc|sa|c)ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoader,
      'sass-loader',
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    stylesLoader,
    tsLoader
  ];
}
