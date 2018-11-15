import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from './template';

const columns = 3;

export default Component.extend({
  layout,
  tagName: '',

  style: computed('gridRowStart', 'gridRowEnd', 'gridColumnStart', 'gridColumnEnd', {
    get() {
      let all = [];

      if (this.gridColumnStart) {
        all.push(`grid-column-start: ${this.gridColumnStart};`);
      }

      if (this.gridColumnEnd) {
        all.push(`grid-column-end: ${this.gridColumnEnd};`);
      }

      if (this.gridRowStart) {
        all.push(`grid-row-start: ${this.gridRowStart};`);
      }

      if (this.gridRowEnd) {
        all.push(`grid-row-end: ${this.gridRowEnd};`);
      }

      return all.join('\n');
    }
  }),

  actions: {
    right() {
      let gridColumnEnd = this.gridColumnEnd;
      let itemIndex = this.itemIndex;

      if (!gridColumnEnd) {
        gridColumnEnd = itemIndex + 3;
      } else {
        gridColumnEnd = gridColumnEnd + 1;
      }
      
      this.set('gridColumnStart', itemIndex + 1);
      this.set('gridColumnEnd', gridColumnEnd);
    },

    down() {
      let gridRowEnd = this.gridRowEnd;
      let gridRowStart = this.gridRowStart;
      let itemIndex = this.itemIndex;
      let itemWidth = gridRowEnd === undefined ? 1 : gridRowEnd - gridRowStart;
      let numElementsPerRow = Math.floor(columns / itemWidth);
      let row = Math.ceil(numElementsPerRow / columns);

      if (!gridRowEnd) {
        gridRowEnd = row + 2;
      } else {
        gridRowEnd = gridRowEnd + 1;
      }
      
      this.set('gridRowStart', itemIndex + 1);
      this.set('gridRowEnd', gridRowEnd);
    }
  }
});
