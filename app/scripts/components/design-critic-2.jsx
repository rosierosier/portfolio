var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var DesignCriticInfo = require('./design-critic-info.jsx');

var DesignCriticComponent = React.createClass({
  handleClick(e){
    e.preventDefault();
    console.log('clicked');
    ReactDOM.render(
      <DesignCriticInfo/>,
      document.getElementById('dc')
    )
  },
  render: function(){
    return (
      <div onClick={this.handleClick}>
        <div id="design-critic-img"></div>
      </div>
    )
  }
});

module.exports = DesignCriticComponent
