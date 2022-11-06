//fourth task

let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if(user.age < 18 && user.studentstatus === 'active'){
    console.log('hello');
}else if(user.name === 'levan'){
    console.log('hello levan');
}else if(user.age < 25 || user.studentstatus === 'active'){
    console.log('hello wordl');
}else{
    console.log('error');
}