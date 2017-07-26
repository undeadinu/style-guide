import React from 'react';
import {render, Artboard} from 'react-sketchapp';
import Badge from './Badge.jsx';

const Document = () => <Artboard name="Badges">
  <Badge>123</Badge>
</Artboard>;

export default context => {
  render(<Document />, context.document.currentPage());
};

// build (&watch) with `npm run sketch`
