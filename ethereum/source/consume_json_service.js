var Request = require("request");
var emp;
Request.get("http://localhost:8000/api/EmployeeInfoAPI", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    emp=JSON.parse(body);

    myEmployees=emp.employees;
    for (var i =0;i<myEmployees.length;i++){
      console.dir('id: '+myEmployees[i].id);
      console.dir('name: '+myEmployees[i].name);
    }

});
