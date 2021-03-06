A highlighted text higher order component for use with [React](https://facebook.github.io/react/ "React").
<p>
<b>New version: 1.0.2</b>
<ul>
  <li>Fix typings</li>
  <li>Fix an issue with tsc being called postinstall</li>
  <li>Minor bug fixes and performance improvements</li>
</ul>
<b>React-highlighted-text</b> is a React higher-order component designed to be used in situations where you need to highlight some text.
This was initially built as a wrapper round react-highlighter that better served the needs of our project.
</p>

<p>
<b>Installation:</b><br />
The easiest way to install the component is to use NPM and insert into your React build process:
<pre><code>npm install react-highlighted-text --save</code></pre>
</p>

<p>
<b>Usage:</b><br/>
To use the component (ES6 module syntax):
<pre>
<code>
import highlightedText from 'react-highlighted-text'

const TextWrapper = props => &lt;div&gt;{ props.children }&lt;/div&gt;
const HighlightedText = highlightedText(TextWrapper)

const Example = props => &lt;HighlightedText highlightedText="Gon" &gt;Gon & Killua&lt;/HighlightedText>
</code>
</pre>
<b>PropTypes:</b>
<pre>
<code>
ReactHighlightedText.propTypes = {
  highlightedText: PropTypes.string,
  matchClass: PropTypes.string,
}
</code>
</pre>
</p>

<p>
<b>Examples</b>
<br />
To run the example(s) clone the [repo](https://github.com/admmasters/react-highlighted-text.git"repo") and then use NPM scripts to start a dev server at <b>http://localhost:8080/</b>:
<pre>
<code>
npm install
npm start
</code>
</pre>

<p>
We are PR friendly - please get involved!