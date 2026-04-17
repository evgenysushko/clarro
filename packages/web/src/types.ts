export type TreeNode = {
  id: string
  title: string
  children: TreeNode[]
}

export type HeadingItem = {
  level: 1 | 2
  text: string
}
