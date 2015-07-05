import React from 'react';

let DailyInfo = React.createClass({
  render() {
    if ('daily' !== this.props.view.get('info_type')) {
      return false;
    }
    return <div>Daily</div>
  }
});

export default DailyInfo;