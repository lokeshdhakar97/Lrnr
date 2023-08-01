"use client";
import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CodeTool from "@editorjs/code";
import Table from "@editorjs/table";

const Editor = ({ data, onDataChange }) => {
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      data: data,
      onChange: (api) => {
        api.saver.save().then((outputData) => {
          onDataChange(outputData);
        });
      },
      inlineToolbar: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ["link", "bold", "italic", "marker"],
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 1,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        image: {
          class: ImageTool,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        code: {
          class: CodeTool,
          shortcut: "CMD+SHIFT+C",
          inlineToolbar: true,
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
      },
    });

    editorInstanceRef.current = editor;

    return () => {
      editorInstanceRef.current.destroy();
    };
  }, []);

  return (
    <div id="editorjs" style={{ zIndex: 9, position: "relative" }}>
      {/* Editor.js will be rendered inside this div */}
    </div>
  );
};

export default Editor;
