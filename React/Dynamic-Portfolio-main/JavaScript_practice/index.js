/*
// Basics To Learn....!

function learn(a,b,c,d) {
let moha={
    name:"Moha",gender:"Male",mark:99.00,
    java:{
        rating:9,avg:"Succes"
    }
}

let arr = ["hello","welcome","to","Js"];
console.log(moha.mark)
console.log(moha.java.avg)
console.log(arr[2])
console.log(arr.length)
console.log((a+b)+" "+c+" "+d)
console.log(2+"3")
}
let a=6,b=4,c="in",d="MEC";
learn(a,b,c,d)
*/


function dynamic(name) {
    return{
        name,
        greting(){
            console.log("The Name is:" + n);
        }
    }
}

//let n = "Moha";
console.log(dynamic("Mohan"));
//console.log(dynamic.greting());


function Person(name) {
    
        this.name = name,
        this.greeting =function(age){
            this.age = age;
            console.log(`The Name is:${this.name} and Age is${this.age}`);
        }
}

/*let x = new Person("Moha","21");
console.log(x.name);
console.log(x.greeting(" 21"));
function Person(name,age) {
    
    this.name = name,this.age=age,
    this.greeting = function(ae,nae){
        this.ae = ae,this.nae=nae,
        document.write(`The Name is: ${this.nae} and Age is ${this.ae}`);
    }
}

function Moha(age) {
    //this.age =age;
    document.write("The Age is : "+age);
}
*/

let x = new Person("Moha","21");
const str = "Learn in your own Way...!";
//str.trim;str.trim;str.trim;
document.write("The name is: "+x.name+"<br> Age : "+x.age);
//document.write(Person.greeting("mo","0"));
document.write("<br><br>");
document.write(str);
let a = 18;

//document.write("<br>"+ new Moha(22));
document.write(str.length);
document.write(str.substring(4,17));


//map
const numbers1 = [45, 4, 9, 16, 25,67,766];
const numbers2 = numbers1.map(myFunction);
const numbers = numbers1.map(myFunctio);
//document.getElementById("demo").innerHTML = numbers2;
//alert(numbers2);

function myFunction(value, index, array) {
  document.write("<br>",value-1);
}

function myFunctio(value, index, array) {
  document.write("<br>", value>18);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x;
  //text+=1;
}
document.write(text);

//let v = new Date().getHours();
if(new Date().getHours() < 18){
  alert("morning");
}else{
  alert("eveninguh");
}
const letters = new Set(["a","b","c"]);

// List all Elements
let t = "";
for (const x of letters.values()) {
  t += x + "<br>";
}

//document.getElementById("demo").innerHTML = t;
if (new Date().getHours() > 18) {
  document.write(" Good day!");
}

const xx = ['Amma'];
xx.push('Appa');
//xx.pop('Appa');
document.write("</br>Family Members:",xx);

class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      document.write('</br>I have a ' + this.brand);
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        document.write(this.present() + ', it is a ' + this.model)
    }
  }
  const mycar = new Model("Raina", "Addidas");
  mycar.show();
  mycar.present();