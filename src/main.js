import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "codemirror"
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";

class Editor {
    constructor(selector, options) {
        let element;
        if (selector instanceof Element) {
            element = selector;
        } else {
            element = document.querySelector(selector);
        }

        this.settings = {
            dark: false,
            content: ''
        };
        this.settings = this.extend(this.settings, options);
        this.editor = new EditorView({
            state: EditorState.create({
                doc: this.settings.content,
                extensions: [basicSetup, css(), (this.settings.dark ? oneDark : [])],
            }),
            parent: element
        });
    }

    // Mở rộng các cấu hình
    extend(target, ...sources) {
        sources.forEach(source => {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
        });
        return target;
    }

    // Đặt chế độ tối hoặc sáng
    setDarkMode(isDark) {
        isDark = !!isDark; // Chuyển thành boolean
        const newTheme = isDark ? oneDark : [];
        const newState = EditorState.create({
            doc: this.editor.state.doc.toString(),
            extensions: [basicSetup, css(), newTheme],
        });
        this.editor.setState(newState);
        this.settings.dark = isDark;
    }

    // Trả về text đang soạn thảo
    getValue() {
        return this.editor.state.doc.toString();
    }

    // Đặt nội dung soạn thảo mới
    setValue(text) {
        const newState = EditorState.create({
            doc: text,
            extensions: [basicSetup, css(), (this.settings.dark ? oneDark : [])],
        });
        this.editor.setState(newState);
        this.settings.content = text;
    }
}

export default Editor;
