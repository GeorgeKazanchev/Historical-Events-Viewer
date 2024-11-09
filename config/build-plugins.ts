import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';

export default function buildPlugins(): Configuration['plugins'] {
  return [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),
  ];
}
