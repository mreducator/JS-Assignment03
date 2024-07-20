const calculateAreaOfCircle = {
    radius: 6,
    calculateArea:function(){
    let result = Math.PI * this.radius*this.radius
    console.log(`Area of Circle is ${result}`)
    }
}
calculateAreaOfCircle.calculateArea();