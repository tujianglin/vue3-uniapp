import { defineConfig } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
import TransformPages from 'uni-read-pages-vite';
import UnoCSS from 'unocss/vite';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig(({}) => {
  return {
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('./src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('./types') + '/',
        },
      ],
    },
    define: {
      ROUTES: new TransformPages().routes,
    },
    plugins: [
      uni(),
      UnoCSS(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: [
          {
            'uni-mini-router': ['useRouter', 'useRoute'],
          },
        ],
        dts: 'types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
      }),
    ],
  };
});
