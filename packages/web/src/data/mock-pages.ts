import type { JSONContent } from '@tiptap/react'
import type { TreeNode } from '../types'

export const sidebarTree: TreeNode[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    children: [
      { id: 'installation', title: 'Installation', children: [] },
      { id: 'quick-start', title: 'Quick Start', children: [] },
    ],
  },
  {
    id: 'features',
    title: 'Features',
    children: [
      { id: 'editor', title: 'Rich Text Editor', children: [] },
      { id: 'search', title: 'Full-Text Search', children: [] },
      { id: 'collaboration', title: 'Collaboration', children: [] },
    ],
  },
  { id: 'changelog', title: 'Changelog', children: [] },
]

const contents: Record<string, JSONContent> = {
  'installation': {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Installation' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Follow these steps to install Clarro on your machine.' }] },
      { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Prerequisites' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'You need Node.js 18+ and PostgreSQL installed.' }] },
      { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Setup' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Clone the repository and run pnpm install.' }] },
    ],
  },
  'quick-start': {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Quick Start' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Get up and running in under 5 minutes.' }] },
      { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Create your first page' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Click the + button in the sidebar to create a new page.' }] },
    ],
  },
  'editor': {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Rich Text Editor' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Clarro uses a block-based editor that supports rich formatting.' }] },
      { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Formatting' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Bold, italic, underline, and text highlighting are supported.' }] },
      { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Tables' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Insert tables with any number of rows and columns.' }] },
    ],
  },
  'search': {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Full-Text Search' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Search across all your pages instantly.' }] },
    ],
  },
  'collaboration': {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Collaboration' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Real-time collaboration is planned for a future release.' }] },
    ],
  },
  'changelog': {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Changelog' }] },
      { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'v0.1.0' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Initial release with editor and three-panel layout.' }] },
    ],
  },
  'getting-started': {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Getting Started' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Welcome to Clarro. This section covers installation and first steps.' }] },
    ],
  },
  'features': {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Features' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'An overview of what Clarro can do.' }] },
    ],
  },
}

export const pageContents = new Map(Object.entries(contents))

export const defaultContent: JSONContent = {
  type: 'doc',
  content: [
    { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Untitled' }] },
    { type: 'paragraph', content: [{ type: 'text', text: '' }] },
  ],
}
