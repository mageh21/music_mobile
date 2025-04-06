import { build } from 'esbuild';
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import process from 'process';

function argv(name) {
  const prefix = `--${name}=`;
  const arg = process.argv.find((arg) => arg.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : null;
}

const targets = {
  'esm': {
    format: 'esm',
    outdir: 'build',
    entryNames: '[name]',
    assetNames: '[name]',
    loader: {
      '.css': 'css'
    },
    bundle: true,
    splitting: true,
    chunkNames: '[name]-[hash]',
    publicPath: '/build/'
  },
  'cjs': {
    format: 'cjs',
    platform: 'node',
    packages: 'external',
    outdir: 'build',
    entryNames: '[name]',
    assetNames: '[name]',
    loader: {
      '.css': 'css'
    },
    bundle: true
  }
};

const format = argv('format') ?? 'esm';

build({
  entryPoints: ['src/index.ts', 'src/player.css'],
  plugins: [nodeModulesPolyfillPlugin()],
  minify: true,
  sourcemap: true,
  ...targets[format]
}).catch(() => process.exit(1));
