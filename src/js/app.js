
var React = require('react');

var ReactDOM = require("react-dom");

var APP_root = document.getElementById('app');

var Hello = React.createClass({
  render:function(){
    return(
      <div> Hello </div>
    );
  }
});


ReactDOM.render(
  <Hello>, APP_root
);
