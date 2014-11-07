// Generated by LiveScript 1.3.1
(function(){
  var cluster, cpus, i$, to$;
  cluster = require('cluster');
  cpus = require('os').cpus();
  console.log(cpus.length);
  cluster.setupMaster({
    exec: "worker.js"
  });
  for (i$ = 1, to$ = cpus.length; i$ <= to$; ++i$) {
    (fn$.call(this, i$));
  }
  cluster.on('exit', function(worker, code, signal){
    console.log('worker ' + worker.process.pid + ' died');
  });
  function fn$(i){
    cluster.fork();
  }
}).call(this);
