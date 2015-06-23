import Reflux from 'reflux';
import request from 'superagent';
import Immutable from 'immutable';

import forecastActions from '../actions/forecast';

export default Reflux.createStore({
  data: Immutable.Map({
    forecast: null,
    geolocation: true
  }),
  getInitialState() {
    return this.data;
  },
  listenables: [forecastActions],
  onGetForecast(lat, lng) {
    request
      .get("http://localhost:3001/get_forecast")
      .query({latitude: lat})
      .query({longitude: lng})
      .end((err, res)=> {
        this.data = this.data.set('forecast', Immutable.fromJS(res.body));
        this.trigger(this.data);
      });
  },
});