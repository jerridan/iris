import React from 'react';
import cx from 'classnames';

import viewActions from '../actions/view';

let TabMenu = React.createClass({
  setInfoType(type) {
    viewActions.setForecastInfoType(type);
  },
  render() {
    return <div className="tab-menu">
      <div className={cx("tab",{active: 'details' === this.props.view.get('info_type')})}
           onClick={viewActions.setForecastInfoType.bind(this,'details')}>Details</div>
      <div className={cx("tab",{active: 'hourly' === this.props.view.get('info_type')})}
           onClick={viewActions.setForecastInfoType.bind(this,'hourly')}>Hourly</div>
      <div className={cx("tab",{active: 'daily' === this.props.view.get('info_type')})}
           onClick={viewActions.setForecastInfoType.bind(this,'daily')}>Daily</div>
    </div>
  }
});
export default TabMenu;