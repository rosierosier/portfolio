console.log("Hello World!");
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var DesignCriticComponent = require('./components/design-critic-2.jsx');
var GameComponent = require('./components/game.jsx');
var ImageBoardComponent = require('./components/board-2.jsx');

ReactDOM.render(
  <DesignCriticComponent />,
  document.getElementById('design-critic-img')
);

ReactDOM.render(
  <GameComponent />,
  document.getElementById('game-img')
);

ReactDOM.render(
  <ImageBoardComponent />,
  document.getElementById('image-board-img')
);
