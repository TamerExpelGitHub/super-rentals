import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RentalComponent extends Component {
  @tracked query = '';
}
