import { visit } from "unist-util-visit";

export function escapeJsx() {
  return (tree : any) => {
    visit(tree, 'jsx', (node : any) => {
      node.type = 'text';
      node.value = node.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    });
  };
}
