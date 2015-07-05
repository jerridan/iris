import React from 'react';

let DetailedInfo = React.createClass({
  render() {
    if ('details' !== this.props.view.get('info_type')) {
      return false;
    }
    return <div>Details</div>
  }
});

export default DetailedInfo;