var ApkView = Backbone.View.extend({
  
  el: '#app',
  
  render: function () {
    var fileName
    $.each(this.model.get('_attachments'), function(key, value) {
      fileName = key
    })
    // Send this model to template with the levels string as well
    console.log(this.model)
    var template = _.template($('#apk-template').html(), {apk: this.model, fileName:fileName});

    // Append the template output to the el DOM element define above    
    this.$el.append(template);

  }

});