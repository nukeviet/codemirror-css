import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js", // Tệp chính
  output: {
    file: "dist/css.bundle.js", // Tệp đầu ra
    format: "iife", // Định dạng IIFE (trình duyệt)
    sourcemap: true, // Tạo file sourcemap để debug
    name: "nukeviet.CSSEditor",
    banner: `
/**
 * NukeViet CodeMirror CSS
 * @version 4.x
 * @author VINADES.,JSC <contact@vinades.vn>
 * @copyright (C) 2009-2024 VINADES.,JSC. All rights reserved
 * @license GNU/GPL version 2 or any later version, see more CodeMirror license at https://codemirror.net/
 * @see https://github.com/nukeviet The NukeViet CMS GitHub project
 */
    `
  },
  plugins: [
    resolve(), // Giúp tìm module
    terser(), // Nén file đầu ra
  ],
};
