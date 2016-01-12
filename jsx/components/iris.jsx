import React from 'react';
import Reflux from 'reflux';

import PrimaryPanel from './primary-panel.jsx';
import SecondaryPanel from './secondary-panel.jsx';

import forecastStore from '../stores/forecast';
import viewStore from '../stores/view';

const Iris = React.createClass({
  mixins: [Reflux.connect(forecastStore, 'forecastStore'),
    Reflux.connect(viewStore, 'view')],
  render() {
    return <div className="iris">
      <PrimaryPanel {...this.state}/>
      <SecondaryPanel {...this.state}/>
    </div>
  }
});

export default Iris;