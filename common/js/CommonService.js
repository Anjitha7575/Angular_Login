angular.module('ionos.common.CommonService',[]).factory('CommonService', ['$http','$q','testUrl','baseUrl',function($http, $q, testUrl, baseUrl){
	var viewUsrheaders =[
  {
    "header": "User ID",
    "key": "id"
  },
  {
    "header": "First Name",
    "key": "fname"
  },
  {
    "header": "Last Name",
    "key": "lname"
  },
  {
    "header": "Password",
    "key": "pswd"
  }
];
	
	var loginObject = [
  {
    "id": "admin@gmail.com",
    "fname": "KarlMin",
    "lname": "Swan",
    "usr": "admin",
    "pswd": "pass",
    "isAdmin": true
  },
  {
    "id": "test1@gmail.com",
    "fname": "Candice",
    "lname": "Swan",
    "usr": "swan",
    "pswd": "Test1",
    "isAdmin": false
  },
  {
    "id": "test2@gmail.com",
    "fname": "Kaira",
    "lname": "Knight",
    "usr": "kai",
    "pswd": "Test2",
    "isAdmin": false
  },
  {
    "id": "test3@gmail.com",
    "fname": "Chris",
    "lname": "Hemsworth",
    "usr": "chris",
    "pswd": "Test3",
    "isAdmin": false
  },
  {
    "id": "test4@gmail.com",
    "fname": "John",
    "lname": "Fly",
    "usr": "john",
    "pswd": "Test4",
    "isAdmin": false
  }
];

	var respObj = {};
    respObj.isAuthenticated = false;
    
    return {
      login : function(username, password) {
		  if(localStorage.loginObject === undefined){
			localStorage.setItem('loginObject', JSON.stringify(loginObject));
			var retrievedObject = JSON.parse(localStorage.getItem('loginObject'));
		  }else{
			var retrievedObject = JSON.parse(localStorage.getItem('loginObject'));  
		  }
		  respObj = {};
		  respObj.isAuthenticated = false;
		  angular.forEach(retrievedObject, function(obj){
			  if(username === obj.usr && password === obj.pswd){
				  if(obj.isAdmin){
					  respObj = {
						  isAdmin : true,
						  usrInfo:retrievedObject,
						  isAuthenticated : true
					  }
				  }else{
					  respObj = {
						  isAdmin : false,
						  myInfo:obj,
						  isAuthenticated : true
					  }
				  }
			  }
		  });
    return respObj;
      },
	  getAllUersHeaders : function(){
		  return viewUsrheaders;
	  },
	  addUser : function(usrN, pswd, fn, ln){
		  var retrievedObject = JSON.parse(localStorage.getItem('loginObject'));
		  var newObj = {
						"id": usrN,
						"fname": fn,
						"lname": ln,
						"usr": usrN,
						"pswd": pswd,
						"isAdmin": false
					  }
		  retrievedObject.push(newObj);
		  localStorage.setItem('loginObject', JSON.stringify(retrievedObject));
		  return newObj;
	  },
	  updateUser : function(myData){
		  var retrievedObject = JSON.parse(localStorage.getItem('loginObject'));
		  angular.forEach(retrievedObject, function(obj){
			  if(myData.id === obj.usr){
				  obj.pswd = myData.pswd;
				  obj.fname = myData.fname;
				  obj.lname = myData.lname;
			  }
		  });
		  localStorage.setItem('loginObject', JSON.stringify(retrievedObject));
	  }
    };
    
}]);