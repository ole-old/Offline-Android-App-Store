var ApksView = Backbone.View.extend({

  el: '#app',
  
  render: function () {

    // Boot up the Resources collection
    var apks = new Apks();

    // Get the resources from the server and then template them out one by one
    apks.fetch({

      success: function (resources) {

        _.each(apks.models, function(apk) {

          var apkView = new ApkView({model: apk})
          apkView.render()

        })

      }

    })

  }

});