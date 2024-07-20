const map = new Map();
//console.log(map);
map.set('uname','Sonam');
map.set('age',30);
map.set('email','sonam@gmail.com');
console.log(map)
//To delete specific info
map.delete('uname')
console.log(map)
//To get Specific info
map.set('uname','Rahil')
let n = map.get('uname')
console.log(n)