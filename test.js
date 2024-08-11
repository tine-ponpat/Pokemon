//var sum = 0;
//for (var x = 0; x < 1000; x++)
//{
//    if (x % 3 === 0 || x % 5 === 0)
//    {
 //      sum += x;
 //   }
//console.log(sum);




//var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
//
//var Avgmarks = 0;
//
//for (var i=0; i < students.length; i++) {
//        Avgmarks += students[i][1];
 //       var avg = (Avgmarks/students.length);
//}
//
//console.log("Average grade: " + (Avgmarks)/students.length);
//
  //      if (avg < 60){
    //      console.log("Grade : F");      
      //    } 
        //else if (avg < 70) {
          //      console.log("Grade : D"); 
            //      } 
//        else if (avg < 80) 
  //           {
    //            console.log("Grade : C"); 
      //  } else if (avg < 90) {
        //        console.log("Grade : B"); 
        //} else if (avg < 100) {
          //      console.log("Grade : A"); 
//}


///var chr = 0
//for (var x = 1; x < 6; x++ ){
//    }
//    for (var y = 1; y < x; y++) {
//        if (y < x) {
///            console.log(chr=chr+("*"));
//        }
//    }   
///    console.log(chr);


//function listNameOfSafeety() {  
//  console.log("Gate");
//  console.log("Blue");
//  console.log("Pu");
 // console.log("Nah");
 // console.log("Winai");
//  console.log("Tine");
//}
// listNameOfSafeety();




//function ptintHello() {
//  console.log("Hello^-^");
//}
//ptintHello();




///function hello(name) {
//  console.log(`Hello! ${name}`);
//}
//
///hello ("Gate")
//hello ("Blue")
//hello("Pu")

//function tellSomething(message) {
//  console.log(`${message}`.toUpperCase());  
//  console.log(`${message}`.toUpperCase());
//  console.log(`${message}`.toUpperCase());
//
//
//}
//tellSomething ("i want sleep");



//function findLarges(x,y) {
//  if (x > y) {
//    console.log(`${x} is larger`);
//  } else if (x < y) {
//    console.log(`${y} is larger`);
//
//  } else {
//    console.log(`${x} and ${y} is equal`);
//
//  }
//}



///function isHotWather(x) {
//  if (x >= 75) {
//    console.log("true");
//  } else {
//    console.log("false");
//  }
//}



//function add(x , y) {
//  let sum = x + y
//  console.log(sum);
//  return sum
//}
//
//let sum = add (4 , 3)
//console.log(sum,"sum");

//function add(arr) {
//  let sum = 0
//  for (let i = 0; i < arr.length; i++) {
//    sum += arr[i]    
///  }
//  return sum
//}


//function sumArray(arr) {
//  let sum = 0
//  for (let i = 0; i < arr.length; i++) { 
//    sum += arr[i]
//    }
//    return sum
//  }



//function mutiply(x , y) {
//  let sum = x * y
//  console.log(sum);
//  return sum
//}
// let sum = mutiply (1402,2536); // 3,355,475


//function capilatize(text) {
//  return text.toLocaleUpperCase(1);
//}
//capilatize();


///function capitalizeFirstLetter(string) {
//  return string[0].toUpperCase() + string.slice(1);
//}



//function lastElement (num) {
//  if (num !== undefined){
//      return num[num.length -1];
//  } return null;
//}


//const weekDAY = new Array(7);
//weekDAY[1] = 'Monday';
//weekDAY[2] = 'Tuesday';
//weekDAY[3] = 'Wednseday';
//weekDAY[4] = 'Thursday';
//weekDAY[5] = 'Friday';
//weekDAY[6] = 'Saturday';
///weekDAY[7] = 'Sunday';
//
//function returnDay(x){
//  if(x < 1 || x > 7) {
//    return null;
//  }
//  else {
//    return weekDAY[x];
//  }
//}
//returnDay(2);


//function animal() {
//  let animalName = ["Tiger","Lion","Rabbit"]
//  function inner() {
//    for (let i = 0; i < animalName.length; i++) {
//          console.log(`Wow this is ${animalName[i]}`);      
//    }
//  }
//  inner()
//}

// Function_expression
//let add = function (num) {
//  return (num * 2 ) +1
//}

//let squar = function (num) {
//  return num * num
//}


//high order function
//function callMyName(func) {
//  func ()
//  func ()
//  func ()
//}
//function namme() {
//  console.log("Hello Tine'nie");
//}
//callMyName(namme)



//Return_funcrion --ตัวอย่างค่าจะออกมาเป็น จริง / เท็จ
//function value(min,max) {
//  return function (val) {
//    return val >= min && val <= max
//  }
//}
//let EX = value(10,99)
//console.log(EX(50));


//Method_Function
//function add(x,y) {
//  return x + y
//}
//
//function minus(x,y) {
//  return x - y
//}
//
//function mutiply(x,y) {
//  return x * y
//}
//
//function divide(x,y) {
// return x / y
//}

//เขียนแบบทั่วไป
//const math = {
//  add : function (x,y) {
//    return x + y
//  },
//  minus : function (x,y) {
//    return x - y
//  },
//  mutiply : function (x,y) {
//    return x * y
//  },
//  divide : function (x,y) {
//    return x / y
//  },
//}

//เขียนแบบสั้นๆ
//const math = {
//  add(x,y){
//    return x + y
//  },
//  minus(x,y){
//    return x - y
//  },
//  mutiply(x,y){
//    return x * y
//  },
//  divide(x,y){
//    return x / y
//  },
//}
//
//console.log(add(5,2));
//console.log(minus(5,2));
//console.log(mutiply(5,2));
//console.log(divide(5,2));



//function area(x) {
//  return x*x
//}
//
//function perimeter(x) {
//  return x * 4
//}
//const squar = {
//  area(x) {
//    return x * x
//  },
// perimeter(x){
//    return x * 4
//  }
//
//}
//console.log(area(40));
//console.log(perimeter(50));



///THIS_
//let student = {
//  first : "Pongpat",
//  last : "Boonsiri",
//  age : 31,
//  fullName(){
//    return `${this.first} ${this.last}`
//  }
//}
//
//console.log(student.first);
//console.log(student.fullName());
//student.first = "Gritcharat"
//console.log(student.fullName());



//let farm = {
  //name : "Farm Chokchai",
  //cowCount : 0,
  //cowsIntoEnclosure : "Mow Mow ",
  //resetNumCows : 0,
  //myFarm(){ 
    //return `${this.name}
    //${this.cowCount} 
    //${this.cowsIntoEnclosure}
    //${this.cowsIntoEnclosure}
    //${this.cowsIntoEnclosure}`
 // }
//
//}
//console.log(farm.name);
//console.log(farm.cowCount);
//console.log(farm.cowsIntoEnclosure);
//console.log(farm.myFarm());



//let farm = {
//  name: 'Farm Chokchai',
//  cowCount: 0,
//  cowsIntoEnclosure: function() {
//    this.cowCount++;
//    return "Mow Mow";
//  },
//  resetNumCows: function() {
//    this.cowCount = 0;
//    return "Go Go";
//  }
//};
//console.log(farm.name);
//console.log(farm.cowCount);
//console.log(farm.cowsIntoEnclosure());
//console.log(farm.cowsIntoEnclosure());
//console.log(farm.cowsIntoEnclosure());
//console.log(farm.resetNumCows());
//console.log(farm.cowCount);

//=====Foreach=====//
////const nums = [9,8,7,6,5,4,3,2,1]
//nums.forEach(function (n) {
//  console.log(n * 2);
//}
//หรือ
//const student = [
//  {
//    name : "Tine",
//    age : 31,
//    score : 74
//  },
//  {
//    name : "Enit",
//    age : 31,
//    score : 53
//  },
//  {
 //   name : "Nite",
//    age : 31,
//    score : 82
//  },
//  {
//    name : "Eint",
//    age : 31,
//    score : 91
//  },
//]
//student.forEach(function (s) {
//  console.log(`scor of ${s.name} is ${s.score}`);
//})


//=====MAP=====// จะเป็นการประกาศตัวแปล 2 รอบ
//const num = [1,3,5,7,9,11]
//const mutiply = num.map(function (x) {
//  return ((x * x) + 1 )
//})
//console.log(mutiply);
//const student = [
//  {
///    name : "Tine",
//    age : 31,
 //     score : 74
  //  },
 // {
   // name : "Enit",
//    age : 31,
//    score : 53
//  },
//  {
//     name : "Nite",
//      age : 31,
//      score : 82
//    },
//    {
//      name : "Eint",
//      age : 31,
//      score : 91
//    },
//  ]
//  const newData = student.map(function (s) {//
//    return{
//      firstname : s.name,
//      score : s.score
//    }
//  })
//  console.log(newData);

//const fullName = [
//  {
//    first : 'Albus',
//    last : 'Dambledor'
//  },
//  {
//    first : 'Harry',
//    last : 'Potter'
//  },
///  {
//    first : 'Hermione',
//    last : 'Granger'
//  },
//  {
//    first : 'Ron',
//    last : 'Weasley'
//  },
//  {
//    first : 'Rubeus',
 //   last : 'Hargrid'
//  },
 // {
//    first : 'Minerva',
//    last : 'McGonagall'
//  },
//  {
//    first : 'Severus',
//    last : 'Snape'
//  },
//]
//const firstName = fullName.map(function (h) {
//  return {
//    first :h.first,
//  }
//})
//console.log(firstName);


//=====Arrow_Function======// จะคล้ายกับ Function expression แต่สั้นกว่า เช่น
///const add = (x,y) => { // mutiple input หรืออินพุทหลายตัว
////  return x * (x + y)
//}
//console.log(add(2,2));
//const sum = (x) => { // single input หรืออินพุทตัวเดียว
//  return x + 4
//}
//const sum1 = x => { // ไม่่ต้องใส่วงเล็บก็ได้
//  return x + 4
//}
//console.log(sum(4));
//console.log(sum1(3));
//
//const hello = () => {         //ไม่ต้องมีอินพุทก็ได้
//  return "Hello world"
//}
//console.log(hello);



//const name = [
// / {
//    name : 'Luna'
//  },
 // {
//    name : 'Hargrid'
//  }
//]
//const greet = (name) => {
//  return `Hey ${name}`
//}
//console.log(greet('Luna'));
//console.log(greet('Hargrid'));
//greet('Luna');


//=====Implicit_Function=====// จะคล้ายกับ Arrow function แต่่เปลี่่่ยนจาก {} >> () หรือไม่่มี วงเล็บก็ได้ และไม่ต้องเขียน Return ก็ได้
//const add = (x,y) => (    //จะมีได้แค่ค่า return เท่านั้นไม่สามารถมีหลาบรรททัด
//  x * y
//)
//console.log(add(3,2));
//
//const add2 = (x,y) => x +   //เขียนแบบ one line ไม่ต้องมี ()
//console.log(add2(2,2)); 


//===setTimeOut===// เป็นการตั้งเวลาหน่วง เช่นจะให้แสดงค่า console.log()หลังผ่านไปกี่่วิ (หน่วยจะเป็น มิลิเซล : 1000 ms = 1 s)
//ตัวอย่าง //console.log("Hello");
//setTimeout(()=>{
//  console.log("World");
//},3000)
//===setInterval===//จะเป็รการตั้งว่าจะให้ทำ something ทุกๆกี่่่วิ (หน่วยจะเหมือน setTimeOut)
//ตัวอย่าง
//setInterval(() => {
//  console.log(Math.random());
//}, 3000);


//=====Filter=====// จะใช้ร่วมกับ Arrow function 
//ตัวอย่าง 
//let nums = [1,2,3,4,5,6,7,8,9,0]    
//
//let newNum = nums.filter((n) => {   //แบบปกติ
//  return n % 2 == 1
//})
//console.  log(newNum);
//let newNum = nums.filter(n => (n % 2 == 1))   //แบบ implicit
//console.log(newNum);
//ตัวอย่าง 2
//const student = [
//  {
//    name : "Tine",
//    score : 87,
//    class : "A"
//  },
//  {
//    name : "Nite",
//    score : 63,
//    class : "B"
//  },
//  {
//    name : "Enit",
//    score : 80,
 //   class : "A"
  //}
//]
//let studentNew = student.filter((s) => {
//  return s.score >= 70
//}).map(e =>({
 // nickname : e.name,
  //final_score : e.score
//}))
//console.log(studentNew);



//let validUserNames = ["mark","staceymom1978","q29832128238983","carrie98","MoanaFan"]
//let usernames = validUserNames.filter((u) => {
//  return u.length < 10
//})
//const usernames = validUserNames.filter(validUserNames => ((validUserNames.length < 10)))
//console.log(usernames);


//===Every & Some===// จะเป็นการตรวจเช็ค แล้วให้ค่่าเป็ร บูลลีน //
///ตัวอย่าง Every (ต้องตรงกับเงื่่อนไขที่ตั้งไว้ทุุกตัว จึงจะมีค่าเป็นจริง)
//const words = ['dog','dig','log','bag','wag']
//const result1 = words.every(words => {
//  return words.length ==3;
//})
//const result1 = words.some(w =>(w.length === 4))
//const result2 = words.every((words) => words[0] == 'd');
//const result2 = words.some(w =>(w[1] == 'o'));
//const result3 = words.every(w => {
//  let last_letter = w[w.length -1];
//  return last_letter == 'g'
//})
//
//console.log(result1);
//console.log(result2);
//console.log(result3);




 // const num = [1,2,3,4,5,6,8]
  //let allEvens = num.every(n => n % 2 === 0);

//.log(allEvens.valueOf([2,4,6,8]));



//function allEvens(array) {
//  const num = [1,2,3,4,5,6,8]
//  return array.every(num => num % 2 === 0);
//}
//
//
//console.log(allEvens([2, 4, 6, 8])); 
//console.log(allEvens([1, 4, 6, 8])); 
//console.log(allEvens([1, 2, 3]));



//===Defualt Param===// ในกรณีที่่ไม่มีค่่าใน Param จะไม่สามารถหาค่าได้ 
//ตัวอย่่าง 
//function minus(x=0,y=0) { //วิธีแก้ให้ทำการกำหนดค่าให้ Param
//  return x - y
//}
//console.log(minus(2)); //หากตัวแปล่่ครบ ค่าที่ไดดจะเป็ NaN

//function greet(name) {
//  if ((name == undefined)) {
//    return name = "Guest"
//  }
//  return `Hello, ${name}!`
//}
//console.log(greet());

//function mutiply(x,y=5) {
//  return x * y
//}
//console.log(mutiply(3));

//function createPerson(name,age = 18) {
//  return {name,age}
//}
//console.log(createPerson("Tine",));

//====Spread===// จะไม่สามรถใช้ชื่อตัวแปลแทนข้อมูลที่เป็น อาร์เรย์ได้ วิธีการคือใให้ใส่ ... + ตัวแปล
//ตัวอย่าง 
//const nums = [2,7,4,6,5,3]
//console.log(Math.max(nums)); //เนื่องจากชนิดของค่าใใน math.max , math.min ต้องเป็นตัวเลขเท่านั้น
//console.log(Math.max(2,7,4,6,5,3,9)); // ใส่เป็๋นตัวเลข
//console.log(Math.max(...nums)); // การใช้ Spread

//===Spread Array===// เป็นการสร้าง arr ใหม่โดยใช้ arr ที่มีอยู้กระจายสมาชิกเข้าไปใน arr ใหม่่โดยใส่ ...(ตัวแปล) + ,
//const num1 = [2,4,6]
//const num2 = [8,10]
//console.log(num1.concat(num2).concat([5,5,5])); // สามารถรวมได่ เเต่จะรวมได้เฉพาะค่าที่เป็น arr
//console.log(...num1,...num2,5,5,5,5,); //ใช้ไกด้เหมือนกันเเต่จะเพื่อมชนิดช้อมูลใดก็ได้


//const numbers = [3,7,2,8,6]
//console.log(Math.max(...numbers));


//  const arr1 = [2,4,6,8,10]
//  const arr2 = [1,3,5,7,9]
//  function combineArrays(arr1,arr2) {
//    return arr1 +++ arr2 
//  }
//console.log(...arr1,...arr2);


//const word = "hello"
//const chars = [...word];
//console.log(chars);


//const arr1 = [1,2,3]
//const arr2 = [4,5,6]
//const merge = [...arr1,...arr2];
//console.log(merge);


//===Soread Objjjjeect===/// เหมือนกับ Arr


//const obj1 = {a:1,b:2};
//const obj2 = {c:3,d:4}
//const mergeObjj = {...obj1,...obj2};
//console.log(mergeObjj);


//const obj = {x:10,y:20}
//const newObj ={
//  ...obj,
//  z: 30
//};
//console.log(newObj);


//const obj1 = {a:1,b:2,c:3};
//const obj2 = {c:4,d:5};
//const mergeObj = {
//  ...obj1,...obj2
//  
//};
//console.log(mergeObj);
 


//===Rest Param===// เป็นการส่ง Agrument หรือค่าต่างๆเข้าไปใรฟังค์ชั่นได้(กี่ตัวก็ได้)โดยที่เราไม่จำเป็นต้องประกาศตัวแปร
//และค่าที่ส่งเข้าไปจะเป็นลักษณะของ Array // สามารถใช้ร่วมกับ Length property ได้ // ไม่สามารถใช้ push,,pop และ Arrow function
// EX ที่ไม่ประกาศตัวแปร
//function sum() {
//  console.log(arguments.length);
// let sum = 0
//  for (let i = 0; i < arguments.length; i++) {
//      sum += arguments[i]    
//  }
//  return sum
//}
//EX ประกาศตัวแปล
//function sum(...num) {
//  console.log(num);
//  let sum = 0
//  for (let i = 0; i < num.length; i++) {
//    sum += num[i]    
//  }
//  return sum;
//}
//console.log(sum(2,4,6,9,8,3,7,5,4,1,0));



//function includeLast() {
///  return arguments[arguments.length - 1];
//}
//console.log(includeLast(2,3,4,1));
//console.log(includeLast("A","B","C","D"));


//function excludeLast(...args) {
//  return args.slice(0,-1);
//}
//console.log(excludeLast(2,3,4,1));
//console.log(excludeLast("A","B","C","D"));



//function sumFirstLast(...nums) {
//  if (nums.length === 0) {
//    return 0;
//  }
//    return nums[0] + nums[nums.length -1]
//}
//
//
//console.log(sumFirstLast(2,3,4,1));
//console.log(sumFirstLast(4,2,1,8));



//===Array Desructuring / Object Destructuring===// สามารถดึง value จาก Arr / Prperty จาก Object ได้ โดยการตั้งตัวแปลอีกตัวแปลหนึ่งขึ้นมาในตำแหน่งเดียวกันกับ value จะสามารถทำให้เราดึง value จาก Arr ได้
//**== ข้อแตกต่าง arr ต้องอยู่ใน ตน.ที่่ตรงกันเท่่านั้น ==**/// แต่ Obj แค่่ตัวแปลตรงกับคีย์ก็พอ ////
//===Param Destructuring===// เอาไว้ใช้กับ Function
//EX
//const nums = [1,2,3,4]
//let [one,two,three,four] = nums // ตน. ของ one ตรงกับ 1 จึงสามรถดึง value ออกมาได้

//console.log(one,"one");
//console.log(three,"three");
//console.log(two,"two");
//หรือถ้าตั้งการแค่ตัวใดตังหนึ้ง สามารถใช้ร่วมกับ Spread ได้ เช่น 
//let [first,...everyOneEles] = nums;
//console.log(first,"First");
//console.log(everyOneEles,"EVERYONEELSE");

//const arr1 = [1,2,3,4,5];
//const [a,b,c,d,e] = arr1 
//console.log(a,"a",b,"b",c,"c",d,"d",e,"e");

//const arr1 = [1,2,3,4,5];
//const [a,,b,,c] = arr1
//console.log(a,b,c);


//const arr1 = [1,2,3,4,5];
//const [one,...rest] = arr1;
//console.log(one,"ONE");
//console.log(rest,"rest");



//const person = {
//  name : "Alice",
//  are : 25,
//  city : "Wonderland"
//}
//const {name,city} = person
//console.log(name,city);

//const person = { 
//  name : "Bob",
//  age : 30
//};
//const {name : firstname , age} = person
//console.log(firstname,age);

//const person ={ name : "Charlie"};
//const {country: countryNew = "Thailand"} = person
//console.log(name,countryNew);


//EX param des
//const fullName = ({first,last}) => {
//  return first +  "" + last
//}
//let runner = {
//  first : "tine",
//  last : 31,
//  country : "Chiang-rai"
//}
//console.log(fullName(runner));


//function displayPerson({ name, age }) {
//  console.log(`Name: ${name}, Age: ${age}`);
//}
//displayPerson({ name: 'Harry', age: 10 }); 
//displayPerson({ name: 'Ron', age: 25 });   


//function getCoords (num) {
//  let {x, y} = num
//  return [x, y];
//}
//const nums = {x:1,y:2};
//console.log(getCoords(nums));



//const config = ({width = 100 ,hight = 100,color = "White"}) => {
//  return {width,hight,color};
//}
//console.log(config({width:20,color:"red"}));

//let test = document.getElementsByTagName('img')
//for (const i of test) {
//i.src = "https://cdn2.unrealengine.com/13-tips-you-need-to-know-before-starting-honkai-star-rail-1920x1080-f8b940ba841a.jpg"
//}

//InnerText = ใช้สำหรับแก้ไขข้อมูล
//InnerHTML = ใข้เปลี่ยนสไตล์ของรูปแบบเว็ปไซต์


// Get the container element






//const container = document.getElementById('button-container');
//for (let i = 0; i < 100; i++) {
//const button = document.createElement('button');
      
//button.innerText = 'Hey!';
//.appendChild(button);
        
        
        
        
