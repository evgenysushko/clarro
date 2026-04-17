import type { Editor } from '@tiptap/react'

interface ToolbarProps {
  editor: Editor
}

export default function Toolbar({ editor }: ToolbarProps) {
  const buttonClass = (isActive: boolean) =>
    `px-2 py-1 text-sm rounded ${
      isActive
        ? 'bg-gray-200 text-gray-900'
        : 'bg-white text-gray-600 hover:bg-gray-100'
    }`

  return (
    <div className="flex flex-wrap gap-1 border-b border-gray-200 pb-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive('bold'))}
      >
        <strong>B</strong>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive('italic'))}
      >
        <em>I</em>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={buttonClass(editor.isActive('underline'))}
      >
        <u>U</u>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={buttonClass(editor.isActive('highlight'))}
      >
        Highlight
      </button>

      <div className="w-px bg-gray-200 mx-1" />

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={buttonClass(editor.isActive('heading', { level: 1 }))}
      >
        H1
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClass(editor.isActive('heading', { level: 2 }))}
      >
        H2
      </button>

      <div className="w-px bg-gray-200 mx-1" />

      <button
        onClick={() => editor.chain().focus().insertTable({ rows: 2, cols: 2, withHeaderRow: false }).run()}
        className={buttonClass(false)}
      >
        Table
      </button>
    </div>
  )
}
