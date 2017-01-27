import React, {Component, PropTypes} from 'react';


class Contest extends Component {
  render() {
    return (
      <div className="Contest">
        <p>{this.props.id}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default Contest;
