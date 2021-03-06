import Ember from 'ember';

export default Ember.Component.extend({
  newListing: false,
  actions: {
    newListingShow() {
      this.set('newListing', true);
    },
    addListing() {
      var params = {
        title: this.get('title'),
        price: this.get('price'),
        contact: this.get('contact'),
        date: this.get('date'),
        body: this.get('body')
          // category: this.get('category')
      };
      this.set('newListing', false);
      this.sendAction('addListing', params);
    }
  }
});
