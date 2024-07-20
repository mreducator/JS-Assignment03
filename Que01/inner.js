const car = {
    make:"Tata",
    model:"Tata G566y",
    year:"1999",
    features: function(){
        console.log(this)
    }
}
car.features();