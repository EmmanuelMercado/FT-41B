// var x = 10;

// function foo(){
//     x = 20
//     console.log(x);
// }

// console.log(x);
// foo();
// console.log(x);


// bar();
// console.log(foo);

// var foo = 'foo'
// function bar(){
//     console.log(baz);
//     console.log('Soy una función');
//     var baz = 'Baz'
//     console.log(baz);
// }

// function a(){
//     function b()
// {
//     console.log(this)
//     return this
// }
// console.log(this)
// return b();
// }

// console.log(a());
// console.log(this);

// var object ={
//     prop : 37,
//     f: function(){
//         return this.prop ;
//     },
// }
// console.log(object.f());


// var snack = 'Meow Mix';

// function getFood(food) {
//     if (food) {
//       var snack = 'Friskies';
//       return snack;
//    }
//    return snack;
// }

// console.log(getFood(false)); 


// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname()); //Natalia

// var test = obj.prop.getFullname;

// console.log(test()); //Aurelio De Rosa
// console.log(x);
// var x = 10
// console.log(x);
// var f = function(){
//    console.log(x);
//    var x = 15
//    console.log(x);
//    var c = function(){
//       console.log(x);
//       x = 16
//       console.log(x);
//    }
//    console.log(x);
//    c()
//    console.log(x);
// }
// console.log(x);
// f()
// console.log(x);

var instructor = 'Tony'; 
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); //Franco
