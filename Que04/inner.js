const users={
    name:'Raghu',
    age:30,
    role: 'developer'
}

function togetUser(fn,uname){
  fn(users,uname)
}
const userSearch = togetUser(todisplayAllItsProperties,'Raghu');

function todisplayAllItsProperties(users,uname){
    if(users.name === uname){
      console.log('Properties specified')
    }else{
      console.log('not specified')
    }
}