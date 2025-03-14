"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";

export default function Editor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px",
        class:
          "focus:outline-none bg-white print:border-0 border border-[#c7c7c7] flex flex-col min-h-[1056px] w-[816px] py-10 pr-14 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      Table,
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      Image.configure({ inline: true }),
      ImageResize,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: `
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th colspan="3">Description</th>
        </tr>
        <tr>
          <td>Cyndi Lauper</td>
          <td>Singer</td>
          <td>Songwriter</td>
          <td>Actress</td>
        </tr>
      </tbody>
    </table>


  `,
  });
  return (
    <div className="size-full p-4 print:p-0 bg-[#f9fbfd] overflow-x-auto print:overflow-visible print:bg-white">
      <div className="min-w-max justify-center flex w-[816px] py-4 mx-auto print:w-full print:min-w-0 print:py-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
