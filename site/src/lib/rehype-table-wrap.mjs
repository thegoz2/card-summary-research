// Wrap each <table> in <div class="table-wrap"> so wide tables scroll on mobile.
export default function rehypeTableWrap() {
  return (tree) => walk(tree);

  function walk(node) {
    if (!node || !node.children) return;
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (child.type === 'element' && child.tagName === 'table') {
        node.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-wrap'] },
          children: [child],
        };
      } else {
        walk(child);
      }
    }
  }
}
