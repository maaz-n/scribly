"use client"

import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Editor } from "@tiptap/react"
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Heading3,
  Heading4,
  Underline
} from "lucide-react"
import { Separator } from "./ui/separator"

export function EditorToolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null

  return (
    <div className="flex flex-wrap justify-center  lg:h-12 items-center gap-2 border-b p-2 bg-muted/30 rounded-t-md">
      <div className="flex items-center gap-2">

        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline size={16} />
        </Toggle>
      </div>

      <Separator className="md:hidden" />
      <Separator orientation="vertical" className="hidden md:block mx-10 h-6" />

      <div className="flex items-center gap-2">

        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 size={16} />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 size={16} />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 3 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3 size={16} />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 4 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
        >
          <Heading4 size={16} />
        </Toggle>
      </div>

      <Separator className="md:hidden" />
      <Separator orientation="vertical" className="hidden md:block mx-10 h-6" />


      <div className="flex items-center gap-2">

        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("orderedList")}
          onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={16} />
        </Toggle>
      </div>
      <Separator className="md:hidden" />
      <Separator orientation="vertical" className="hidden md:block mx-10 h-6" />


      <div className="flex items-center gap-2">

        <Toggle
          size="sm"
          pressed={editor.isActive("blockquote")}
          onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote size={16} />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("codeBlock")}
          onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Code size={16} />
        </Toggle>
      </div>
      <Separator className="md:hidden" />
      <Separator orientation="vertical" className="hidden md:block mx-10 h-6" />

      <ToggleGroup
        type="single"
        size="sm"
        value={
          editor.isActive({ textAlign: "left" })
            ? "left"
            : editor.isActive({ textAlign: "center" })
              ? "center"
              : editor.isActive({ textAlign: "right" })
                ? "right"
                : editor.isActive({ textAlign: "justify" })
                  ? "justify"
                  : ""
        }
      >
        <ToggleGroupItem
          value="left"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft size={16} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="center"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter size={16} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="right"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight size={16} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="justify"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <AlignJustify size={16} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
