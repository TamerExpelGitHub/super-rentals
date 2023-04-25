import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  async model() {
    // fetched from /public/api/rentals.json
    let response = await fetch('/api/rentals.json');

    // destruture data object
    let { data } = await response.json();

    // map through each array element of data
    return data.map((model) => {
      let { attributes } = model; // destructure attribute obj out of model obj
      let type;

      // check against type in data obj against what is categorized as "community"
      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      // {
      //   "type": "...",
      //   "title": "...",
      //   "owner": "...",
      //   "city": "...",
      //   "location": {
      //     "lat": 0,
      //     "lng": -0
      //   },
      //   "category": "...",
      //   "bedrooms": 0,
      //   "image": "...",
      //   "description": "..."
      // }
      // console.log('api data:', { type, ...attributes });
      return { type, ...attributes };
    });
  }
}
