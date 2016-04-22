"use strict";
require('./styles.css');
const React = require('react');
const ReactDOM = require('react-dom');
const index_1 = require('../src/index');
const App = props => (<div>
    {props.children}
  </div>);
const HighlightedApp = index_1.default(App);
ReactDOM.render(<HighlightedApp highlightedText="Example">
    <div>
      This is a first Example of highlighted text
      <div>This is a second Example of highlighted text</div>
      <div>
        <div>This is a third Example of highlighted text</div>
        <div>This is a fourth Example of highlighted text<div>This is a fith Example of highlighted text</div></div>
      </div>
    </div>
  </HighlightedApp>, document.getElementById('app'));
//# sourceMappingURL=index.js.map