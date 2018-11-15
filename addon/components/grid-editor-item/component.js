import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from './template';

const columns = 3;

export default Component.extend({
  layout,
  tagName: '',

  init() {
    this._super(...arguments);

    this.gridColumnStart = 'auto';
    this.gridColumnEnd = 'auto';
    this.gridRowStart = 'auto';
    this.gridRowEnd = 'auto';
    this.initial = true;
  },

  style: computed('gridRowStart', 'gridRowEnd', 'gridColumnStart', 'gridColumnEnd', {
    get() {
      let itemIndex = this.itemIndex;
      //let numElementsPerRow = Math.floor(columns / 1);
     // let position = itemIndex + 1;
      let row = Math.floor((itemIndex + 1) / columns);
      let col = itemIndex % columns;
      let gridColumnStart = this.gridColumnStart;
      let gridColumnEnd = this.gridColumnEnd;
      let gridRowStart = this.gridRowStart;
      let gridRowEnd = this.gridRowEnd;
      let initial = this.initial;

      if (!initial) {
        gridColumnStart = gridColumnStart !== 'auto' ? gridColumnStart : col + 1;
        gridColumnEnd = gridColumnEnd !== 'auto' ? gridColumnEnd : col + 2;
        gridRowStart = gridRowStart !== 'auto' ? gridRowStart : row + 1;
        gridRowEnd = gridRowEnd !== 'auto' ? gridRowEnd : row + 2;
      }

      return `
        grid-column-start: ${gridColumnStart};
        grid-column-end: ${gridColumnEnd};
        grid-row-start: ${gridRowStart};
        grid-row-end: ${gridRowEnd};
      `;
    }
  }),

  actions: {
    right() {
      let gridColumnEnd = this.gridColumnEnd;
      let itemIndex = this.itemIndex;

      if (gridColumnEnd === 'auto') {
        gridColumnEnd = itemIndex + 3;
      } else {
        gridColumnEnd = gridColumnEnd + 1;
      }
      
      this.set('initial', false);
      this.set('gridColumnStart', itemIndex + 1);
      this.set('gridColumnEnd', gridColumnEnd);
    },

    down() {
      let gridRowEnd = this.gridRowEnd;
      //let gridRowStart = this.gridRowStart;
      let itemIndex = this.itemIndex;
      //let itemWidth = gridRowEnd === undefined ? 1 : gridRowEnd - gridRowStart;
      //let numElementsPerRow = Math.floor(columns / itemWidth);
      //let row = Math.ceil(numElementsPerRow / columns);
      let row = Math.floor(itemIndex / columns);

      if (gridRowEnd === 'auto') {
        gridRowEnd = row + 3;
      } else {
        gridRowEnd = gridRowEnd + 1;
      }
      
      this.set('initial', false);
      this.set('gridRowStart', row + 1);
      this.set('gridRowEnd', gridRowEnd);
    }
  }
});
