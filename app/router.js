import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about'); // defining route(s)
  this.route('contact', { path: '/getting-in-touch' }); // defining route(s) with custom paths
  // useful for legacy URL and use new shorter
  // name for the route as well as template filename
  this.route('rental', { path: '/rentals/:rental_id' }); // dynamic segment
});
