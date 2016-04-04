import Ember from 'ember';

export default Ember.Component.extend({
  editListing: false,

  actions: {
    editListingShow() {
      this.set('editListing', true);
    },
    updateListing(listing) {
      var params = {
        title: this.get('title'),
        price: this.get('price'),
        contact: this.get('contact'),
        date: this.get('date'),
        body: this.get('body')
          // category: this.get('category')
      };
      this.set('editListing', false);
      this.sendAction('updateListing', listing, params);
    }
  }
});
