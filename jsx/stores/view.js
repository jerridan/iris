import Reflux from 'reflux';
import Immutable from 'immutable';

import viewActions from '../actions/view';

let viewStore = Reflux.createStore({
  listenables: [viewActions],
  data: Immutable.Map({
    celsius: true
  }),
  getInitialState() {
    return this.data;
  },
  onToggleCelsius() {
    this.data = this.data.set('celsius', !this.data.get('celsius', false));
    this.trigger(this.data);
  }
});

export default viewStore;