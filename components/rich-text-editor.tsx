"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list"
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorToolbar } from "./editor-toolbar"

interface Props {
  value?: string,
  onChange: (content: string) => void
}

export default function RichTextEditor({value, onChange}: Props) {
  const editor = useEditor({
    extensions: [StarterKit, BulletList, ListItem, OrderedList, Underline, Blockquote, CodeBlock, 
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ],
    content: value || "",
    onUpdate: ({editor}) => {
      const html = editor.getHTML()
      onChange?.(html)
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none'
      }
    }
  })

  return (
    <div className="border rounded">
      <EditorToolbar editor={editor} />
      <div className="my-5 p-5">

        <EditorContent editor={editor} className="focus:outline-none min-h-72" />
      </div>
    </div>
  )
}
