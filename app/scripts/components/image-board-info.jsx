var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var ImageBoardComponent = require('./board-2.jsx');

var ImageBoardInfo = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Image Board</h3>
        <p>Image Board is an app that allows users to upload images along with captions. I am currently using this app as an inspiration to continue traveling. I love to travel, and many of the images are of cities I have visited or am looking forward to visiting soon!</p>
        <p>I used HTML, CSS, SASS, Bootstrap, JavaScript, JQuery, Backbone, and React components to build this app.</p>
        <a href="http://rosierosier.github.io/7.1-backbone-image-board/dist/index.html">View live</a>
        <a href="https://github.com/rosierosier/7.1-backbone-image-board/blob/master/app/index.html">View code</a>
      </div>
    )
  }
});

module.exports = ImageBoardInfo
