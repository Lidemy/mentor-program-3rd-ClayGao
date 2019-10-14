import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 設置高亮樣式
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
// 設置高亮的語言
import { jsx, javascript, php, sass, scss } from "react-syntax-highlighter/dist/esm/languages/prism";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  componentWillMount() {
    // 註冊要高亮的語法，
    // 注意：如果不設置打包後供第三方使用是不起作用的
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
    SyntaxHighlighter.registerLanguage("php", php);
  }

  render() {
    const { language, value } = this.props;
    return (
      <figure className="highlight">
        <SyntaxHighlighter language={language} style={tomorrow}>
          {value}
        </SyntaxHighlighter>
      </figure>
    );
  }
}

export default CodeBlock;