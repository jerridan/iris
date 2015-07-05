import React from 'react';

import DetailedInfo from './detailed-info.jsx';
import HourlyInfo from './hourly-info.jsx';
import DailyInfo from './daily-info.jsx';

let SecondaryPanel = React.createClass({
  render() {
    return <div>
      <DetailedInfo {...this.props}/>
      <HourlyInfo {...this.props}/>
      <DailyInfo {...this.props}/>
    </div>
  }
});

export default SecondaryPanel;