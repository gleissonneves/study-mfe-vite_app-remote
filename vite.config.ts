import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8081
  },
  plugins: [
    vue(),
    federation({
      name: 'teste',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './HelloWorld': './src/component/HelloWorld.vue',
      },
      shared: ['vue']
    })
  ]
});
