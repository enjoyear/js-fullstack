import React from 'react';
import ReactDOM from 'react-dom';

const App = function(props){
  return (
    <h2 className="text-center">
      Hello React from {props.author}{props.defaultX}
    </h2>
  );
};

App.propTypes = {
  //Error/Warning messages can be found in the browser's console
  author : React.PropTypes.string.isRequired,
  defaultX: React.PropTypes.string
};

App.defaultProps ={
  defaultX : '!'
};

ReactDOM.render(
  <App author={'Chen'}/>,
  document.getElementById('root')
);
