var $ = require('jquery'),
    _ = require('lodash'),
    Backbone = require('backbone'),
    Organizations = require('../../models/organizations'),
    template = fs.readFileSync('../../templates/organizations/list.html');

var OrganizationListView = Backbone.View.extend({

  el: '#content',
  template: _.template(template),

  initialize: function(options) {
    console.log("Initialize organization list view", options);
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render);
  },

  render: function() {
    console.log("Rendering these organizations: ", this.collection);
    this.$el.html(this.template({
      organizations: this.collection.toJSON()
    }));
  }
});

module.exports = OrganizationListView;
