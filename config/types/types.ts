type BuildPaths = {
  entry: string;
  output: string;
};

export type BuildMode = 'production' | 'development';

export type BuildOptions = {
  mode: BuildMode;
  port: number;
  paths: BuildPaths;
};
