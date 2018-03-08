var soap = require('strong-soap').soap;
var url='http://des-integra-000.cloud.osde.ar:8080/centroValidador-backend/webservices/ContainerService?wsdl'
soap.createClient(url,function(err,client){
    client.getAllContainers(function(err,result) {
        console.log(JSON.stringify(result,null,4));
      });
});
