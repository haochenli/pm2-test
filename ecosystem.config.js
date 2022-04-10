module.exports = {
  apps : [{
    instances: 1, //相比于服务1多的配置
    exec_mode: 'cluster',  //相比于服务1多的配置，其实此项可不加，当instance为number的时候默认是cluster
    out_file: './out.log',
    name   : "node 12 app",
    script : "./index1.js",
    interpreter: "/Users/apple/.nvm/versions/node/v12.0.0/bin/node"
  }, {
    // instances: 1, //相比于服务1多的配置
    // exec_mode: 'cluster',  //相比于服务1多的配置，其实此项可不加，当instance为number的时候默认是cluster
    out_file: './out.log',
    name   : "node 14 app",
    script : "./index2.js",
    interpreter: "/Users/apple/.nvm/versions/node/v14.0.0/bin/node",
  }]
}