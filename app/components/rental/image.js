import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // tracked decorator attached to instance variable, inform Ember to monitor this variable for updates
  @tracked isLarge = false;

  // action decorator attached to method, inform ember that we intend to use this method from our template
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
