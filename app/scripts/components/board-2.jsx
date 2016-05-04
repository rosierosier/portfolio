var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var ImageBoardInfo = require('./image-board-info.jsx');

var ImageBoardComponent = React.createClass({
  handleClick(e){
    e.preventDefault();
    console.log('clicked');
    ReactDOM.render(
      <ImageBoardInfo/>,
      document.getElementById('image-board')
    )
  },
  render: function(){
    return (
      <div onClick={this.handleClick}>
        <div id="image-board-img"></div>
      </div>
    )
  }
});

module.exports = ImageBoardComponent
