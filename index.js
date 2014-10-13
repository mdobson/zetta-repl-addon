function setupRepl(app) {
  var handlers = {
    'app.id': function(){
      process.send({msg: app.id});
    },
    'app.name': function() {
      process.send({msg: app._name});
    },
    'app.registry': function() {
      var q = app.runtime.query();
      app.runtime.registry.find(q, function(err, devices) {
        process.send({msg: devices});
      });
    },
    'app.find.id': function(id) {
      var q = app.runtime.query().where({id: id});
      app.runtime.registry.find(q, function(err, devices) {
        process.send({msg: devices});
      });
    },
    'app.find.name': function(name) {
      var q = app.runtime.query().where({name: name});
      app.runtime.registry.find(q, function(err, devices) {
        process.send({msg: devices});
      });
    }
  };

  process.on('message', function(msg) {
    console.log(msg);
    if(msg.params) {
      handlers[msg.msg](msg.params);
    } else {
      handlers[msg.msg]();
    }
  });
}

module.exports = setupRepl;
