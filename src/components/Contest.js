import React, {Component, PropTypes} from 'react';


class Contest extends Component {
  render() {
    return (
      <div>
        <div className="Contest">
          <p>{this.props.id}</p>
          <p>{this.props.description}</p>
        </div>
        <div style={{color: '#0000ee', marginTop: '10em', cursor: 'pointer'}}
             onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>

    );
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired
};

export default Contest;
