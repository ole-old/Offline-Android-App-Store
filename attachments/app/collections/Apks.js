var Apks = Backbone.couch.Collection.extend({

  // Define the CouchDB View that this Collection gets its data from
  couch: function() {
    return {
      view: 'apk-deployer/apks?include_docs=true',
    }
  },
 
  model: Apk,

  _db: Backbone.couch.db(thisDb)

})