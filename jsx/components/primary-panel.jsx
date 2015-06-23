import React from 'react';

import Geocoder from './geocoder.jsx';
import CurrentTemp from './current-temp.jsx';

let PrimaryPanel = React.createClass({
  render() {
    return <div>
      <Geocoder {...this.props}/>
      <CurrentTemp {...this.props}/>
    </div>
  }
});

export default PrimaryPanel;