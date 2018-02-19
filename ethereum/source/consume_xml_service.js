var soap = require('soap');
var url=''
soap.createClient(url,function(err,client){
    client.getAllContainers(function(err,result) {
        console.log(result);
      });
});
