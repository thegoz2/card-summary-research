// Converts Obsidian callouts:  > [!warning] Title  ->  styled <div class="callout callout-warning">
const META = {
  note:      { icon: '📝', label: 'Note' },
  info:      { icon: 'ℹ️', label: 'Info' },
  abstract:  { icon: '📋', label: 'Abstract' },
  summary:   { icon: '📋', label: 'Summary' },
  tip:       { icon: '💡', label: 'Tip' },
  hint:      { icon: '💡', label: 'Hint' },
  success:   { icon: '✅', label: 'Success' },
  check:     { icon: '✅', label: 'Check' },
  done:      { icon: '✅', label: 'Done' },
  question:  { icon: '❓', label: 'Question' },
  help:      { icon: '❓', label: 'Help' },
  faq:       { icon: '❓', label: 'FAQ' },
  warning:   { icon: '⚠️', label: 'Warning' },
  caution:   { icon: '⚠️', label: 'Caution' },
  attention: { icon: '⚠️', label: 'Attention' },
  failure:   { icon: '❌', label: 'Failure' },
  fail:      { icon: '❌', label: 'Fail' },
  missing:   { icon: '❌', label: 'Missing' },
  danger:    { icon: '⛔', label: 'Danger' },
  error:     { icon: '⛔', label: 'Error' },
  bug:       { icon: '🐛', label: 'Bug' },
  example:   { icon: '📋', label: 'Example' },
  quote:     { icon: '💬', label: 'Quote' },
  cite:      { icon: '💬', label: 'Cite' },
  important: { icon: '❗', label: 'Important' },
};

export default function remarkCallout() {
  return (tree) => walk(tree);

  function walk(node) {
    if (!node || !node.children) return;
    for (const child of node.children) {
      if (child.type === 'blockquote') handle(child);
      walk(child);
    }
  }

  function handle(node) {
    const firstPara = node.children?.[0];
    if (!firstPara || firstPara.type !== 'paragraph') return;
    const firstText = firstPara.children?.[0];
    if (!firstText || firstText.type !== 'text') return;

    const m = /^\[!([\w-]+)\]([+-]?)\s*(.*)$/m.exec(firstText.value.split('\n')[0]);
    if (!m) return;

    const type = m[1].toLowerCase();
    const meta = META[type] || { icon: '🔹', label: type };
    const customTitle = m[3].trim();

    // Strip the marker line out of the first paragraph.
    const nl = firstText.value.indexOf('\n');
    firstText.value = nl >= 0 ? firstText.value.slice(nl + 1) : '';
    if (firstText.value === '') {
      firstPara.children.shift();
      if (firstPara.children.length === 0) node.children.shift();
    }

    const titleNode = {
      type: 'paragraph',
      data: { hName: 'div', hProperties: { className: ['callout-title'] } },
      children: [
        { type: 'text', value: meta.icon + '  ' + (customTitle || meta.label) },
      ],
    };
    node.children.unshift(titleNode);

    node.data = node.data || {};
    node.data.hName = 'div';
    node.data.hProperties = {
      className: ['callout', 'callout-' + type],
      'data-callout': type,
    };
  }
}
