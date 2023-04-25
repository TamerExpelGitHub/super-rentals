import JSONAPIAdapter from '@ember-data/adapter/json-api';

// application.js are known as 'application adapter' which is use to fetch data for all models in the app
export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
