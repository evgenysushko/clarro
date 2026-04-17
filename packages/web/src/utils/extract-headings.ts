import type { JSONContent } from '@tiptap/react'
import type { HeadingItem } from '../types'

export function extractHeadings(doc: JSONContent): HeadingItem[] {
  const headings: HeadingItem[] = []

  if (!doc.content) return headings

  for (const node of doc.content) {
    if (node.type === 'heading' && node.attrs?.level) {
      const level = node.attrs.level
      if (level !== 1 && level !== 2) continue

      const text = node.content
        ?.map((inline) => inline.text ?? '')
        .join('') ?? ''

      if (text) {
        headings.push({ level, text })
      }
    }
  }

  return headings
}
