import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import DocCardList from '@theme/DocCardList';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  /**
   * Components below are imported within the global scope,
   * meaning you don't have to insert the typical 'import SomeStuff from '/path/to/stuff' line
   * at the top of a Markdown file before being able to use these components
  *  — see https://docusaurus.io/docs/next/markdown-features/react#mdx-component-scope
   */
  // Map the "DocCardList" component
  DocCardList: DocCardList,
};
