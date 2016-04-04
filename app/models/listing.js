import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  price: DS.attr(),
  contact: DS.attr(),
  date: DS.attr(),
  body: DS.attr()
  // category: DS.belongsTo('category', {async: true})
});
