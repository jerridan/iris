import React from 'react';

let HourlyInfo = React.createClass({
  render() {
    if ('hourly' !== this.props.view.get('info_type')) {
      return false;
    }
    return <div>Hourly</div>
  }
});

export default HourlyInfo;