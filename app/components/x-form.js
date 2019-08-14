import Component from '@ember/component';
import { guidFor } from '@ember/object/internals';

export default Component.extend({
  tagName: '',

  init() {
    this._super(...arguments);

    this.set('uniqueId', `${guidFor(this)}-field`);
  }
});
