import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('items', [
      { name: 'a' },
      { name: 'b' },
      { name: 'c' },
      { name: 'd' },
      { name: 'e' },
      { name: 'f' },
    ]);
  }
});
