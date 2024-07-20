const users={
    name:'Raghu',
    age:30,
    role: 'developer'
}

function todisplayAllItsProperties(user){
  console.log(user['name']);
  console.log(user['age']);
  console.log(user['role']);
}
todisplayAllItsProperties(users)