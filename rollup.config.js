import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js", // Tệp chính
  output: {
    file: "dist/codemirror.css.bundle.js", // Tệp đầu ra
    format: "iife", // Định dạng IIFE (trình duyệt)
    sourcemap: true, // Tạo file sourcemap để debug
    name: "nukeviet.CSSEditor"
  },
  plugins: [
    resolve(), // Giúp tìm module
    terser(), // Nén file đầu ra
  ],
};
