var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var ImageBoardComponent = require('./board-2.jsx');

var ImageBoardInfo = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Image Board</h3>
        <p>I value feedback! In fact, I value it so much that I created an app for developers to get feedback on their designs.</p>
        <p>I used HTML, CSS, SASS, Bootstrap, JavaScript, JQuery, Backbone, and React components to build this app.</p>
        <a href="http://rosierosier.github.io/final-project/dist/index.html">View live</a>
        <a href="https://github.com/rosierosier/final-project/blob/master/app/index.html">View code</a>
      </div>
    )
  }
});

module.exports = ImageBoardInfo
