import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": _resolve("src") }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 主题修改
          "@primary-color": "#000" // 全局主色
        }
      }
    }
  }
});
