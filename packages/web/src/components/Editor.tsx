import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'
import Toolbar from './Toolbar'
import '../editor.css'

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2] },
      }),
      Highlight.configure({ multicolor: true }),
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: '<h1>Untitled</h1><p>Start typing...</p>',
  })

  if (!editor) return null

  return (
    <div className="mx-auto max-w-[700px] py-8">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
