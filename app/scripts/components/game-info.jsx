var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var GameComponent = require('./game.jsx');

var GameInfo = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Slay the Dragon</h3>
        <p>Slay the Dragon (or dragons if you&apos;re lucky!) is a turn-based game created during my time at The Iron Yard. The player chooses a hero while the enemy is randomly selected and begins the fight. Health meters decline with each battle! Be careful, these dragons may be cute, but they&apos;re fierce competitors!</p>
        <p>I used HTML, CSS, SASS, Bootstrap, JavaScript, and JQuery to build this app.</p>
        <a href="http://rosierosier.github.io/5.4-turn-based-game/dist/index.html">View live</a>
        <a href="https://github.com/rosierosier/5.4-turn-based-game/blob/master/app/scripts/index.js">View code</a>
      </div>
    )
  }
});

module.exports = GameInfo
