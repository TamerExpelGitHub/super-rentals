import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
  get src() {
    console.log('this.args:', this.args);
    let { lng, lat, width, height, zoom } = this.args; // this.args access the component's arguments

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    console.log("coordinates:", coordinates);
    console.log("dimensions:", dimensions);
    console.log("accessToken:", accessToken);
    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
