import React from 'react';

import DetailedInfo from './detailed-info.jsx';

const SecondaryPanel = React.createClass({
  render() {
    if (null === this.props.forecastStore.get('forecast', null)) {
      return false;
    }
    return <div className="secondary-panel">
      <DetailedInfo {...this.props}/>
    </div>
  }
});

export default SecondaryPanel;