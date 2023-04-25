import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      // depending on the query, the data in rentals are filtered to match
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }

    return rentals;
  }
}
