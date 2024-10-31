import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import version from "vite-plugin-package-version";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ma.github.io/', // Đường dẫn cơ sở cho GitHub Pages
  plugins: [react(), version()],
  build: {
    rollupOptions: {
      output: {
        // Tùy chọn manualChunks đã được điều chỉnh
        manualChunks(id) {
          // Nếu id chứa 'node_modules', tách và trả về tên gói
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        // Nếu bạn muốn tạo các chunk riêng cho một số thư viện, bạn có thể bỏ comment và sử dụng
        // manualChunks: {
        //   react: ["react", "react-dom"],
        //   lottie: ["react-lottie"],
        // },
      },
    },
  },
});
