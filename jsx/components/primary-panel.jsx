import React from 'react';

import Geocoder from './geocoder.jsx';
import CurrentTemp from './current-temp.jsx';

const PrimaryPanel = React.createClass({
  render() {
    return <div className="primary-panel">
      <Geocoder {...this.props}/>
      <CurrentTemp {...this.props}/>
    </div>
  }
});

export default PrimaryPanel;