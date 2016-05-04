var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var GameInfo = require('./game-info.jsx');

var GameComponent = React.createClass({
  handleClick(e){
    e.preventDefault();
    console.log('clicked');
    ReactDOM.render(
      <GameInfo/>,
      document.getElementById('game-img')
    )
  },
  render: function(){
    return (
      <div onClick={this.handleClick}>
        <img src="./images/game.png"/>
      </div>
    )
  }
});

module.exports = GameComponent
