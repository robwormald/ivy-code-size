import buildOptimizer from 'rollup-plugin-angular-optimizer';
import nodeResolve from 'rollup-plugin-node-resolve';
import paths from 'rollup-plugin-paths';
import pathMapping from 'rxjs/_esm5/path-mapping';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: `./lib/src/hello-world.js`,
  output: {
    name: 'hw',
    file: `public/bundle.js`,
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    paths(pathMapping()),
    nodeResolve(),
    buildOptimizer(),
    uglify({
      mangle: true,
      compress: {
        global_defs: {
          ngDevMode: false
        },
        keep_fargs: false,
        passes: 3,
        pure_getters: true,
        unsafe: true
      }
    })
  ],
  external: []
};
