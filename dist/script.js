let colors = randomColor();

const QuoteText = props => {
  const faClasses = "fa fa-quote-left";

  return /*#__PURE__*/(
    React.createElement("div", { className: "quote-text" }, /*#__PURE__*/
    React.createElement("i", { className: faClasses, style: props.style }), /*#__PURE__*/
    React.createElement("span", { id: "text", style: props.style },
    props.value)));



};

const Author = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "author" }, /*#__PURE__*/
    React.createElement("i", { style: props.style }, "- "), /*#__PURE__*/
    React.createElement("span", { style: props.style }, props.value)));


};

const Buttons = props => {
  const twClasses = "fa fa-twitter";
  const tmblrClasses = "fa fa-tumblr";
  return /*#__PURE__*/(
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", {
      className: "button",
      id: "tweet-quote",
      href: "https://twitter.com/intent/tweet",
      target: "_top" }, /*#__PURE__*/

    React.createElement("i", { className: twClasses, style: props.style })), /*#__PURE__*/

    React.createElement("a", {
      className: "button",
      id: "tumblr-quote",
      href: "https://www.tumblr.com/tagged/%D0%BF%D0%BE%D0%B8%D1%81%D0%BA?sort=top" }, /*#__PURE__*/

    React.createElement("i", { className: tmblrClasses, style: props.style })), /*#__PURE__*/

    React.createElement("button", { id: "new-quote", style: props.style, onClick: props.backColor }, "New quote")));




};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      butStyle: {
        backgroundColor: colors },

      letterStyle: {
        color: colors },

      text: [] };


    this.backColor = this.backColor.bind(this);
  }
  componentDidMount() {
    /*this.backColor();*/
    document.body.style.backgroundColor = colors;

    fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").

    then(response => response.json()).
    then(result => {
      let allQuotes = result.quotes.length;
      let quoteNum = Math.floor(Math.random() * allQuotes);
      this.setState({
        text: result.quotes[quoteNum] });

    });
  }
  backColor() {
    animText("#text");
    animText("#author");
    animText(".fa-quote-left");
    let colors = randomColor();
    const newBackStyle = {
      ...this.state.butStyle,
      backgroundColor: colors };

    const newLetStyle = {
      ...this.state.letterStyle,
      color: colors };

    this.setState({
      butStyle: newBackStyle,
      letterStyle: newLetStyle });

    document.body.style.backgroundColor = colors;

    fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").

    then(response => response.json()).
    then(result => {
      let allQuotes = result.quotes.length;
      let quoteNum = Math.floor(Math.random() * allQuotes);
      this.setState({
        text: result.quotes[quoteNum] });

    });
  }
  render() {
    const twClasses = "fa fa-twitter";
    const tmblrClasses = "fa fa-tumblr";
    const text = this.state.text;

    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement(QuoteText, { style: this.state.letterStyle, value: text.quote }), /*#__PURE__*/
      React.createElement(Author, { style: this.state.letterStyle, value: text.author }), /*#__PURE__*/
      React.createElement(Buttons, { style: this.state.butStyle, backColor: this.backColor })));


  }}


function randomColor() {
  const possibleColors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
  "#FF8C00",
  "#696969"];


  for (let i = 0; i < 2; i++) {
    let randomIndex = Math.floor(Math.random() * possibleColors.length);
    let selected = possibleColors.splice(randomIndex, 1);
    return selected;
  }
}

function animText(selector) {
  let elem = document.querySelector(selector);
  elem.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));