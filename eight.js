//eighth task

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  
  function auth(obj){
    if(obj.isloggedin === true){
        return `${obj.firstname} ${obj.lastname}`
    }else{
        return false;
    }
  }

  console.log(auth(user));