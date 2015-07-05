import React from 'react';

import Geocoder from './geocoder.jsx';
import CurrentTemp from './current-temp.jsx';
import TabMenu from './tab-menu.jsx';

let PrimaryPanel = React.createClass({
  render() {
    return <div className="primary-panel">
      <Geocoder {...this.props}/>
      <CurrentTemp {...this.props}/>
      <TabMenu {...this.props}/>
    </div>
  }
});

export default PrimaryPanel;