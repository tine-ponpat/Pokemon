//for (let i = 0; i <= 100 ; i += 2) {
//    console.log(i);
///}


//for (let i = 1; i <= 6; i++) {    
//    console.log(i,"แตงโมแตงโมแตงโม");
//}

//for (let i = 100; i >= 0; i -= 10){
//    console.log(i);
//}

//for (let i = 1; i > 0; i++) {
 //   console.log(i);    
//}

//const animal = ["tiger","cat","lion","dog"]
//for (let i = 0; i < animal.length; i++) {
//    console.log(i,animal[i]);    
//}





//const brandMobile = ["Samsung","Apple","Huawei","Xiaomi","Oppo"]
//    for (let i = 0; i <= brandMobile.length - 1; i++) {
 //       console.log(brandMobile[i].toUpperCase());
  //  }


//let str = "LOL"
//for (let i = 0; i <= 5; i++) {
//    console.log("outer",i);
//    
//    for (let j = 0; j < str.length; j++) {
//        console.log("inner",str[j]);
 //   }
//}

//let number = [["cat","dog","tiger"],["lion","fish","whale"],["bee","butterflt","own"]]
   // for (let i = 0; i < number.length; i++) {
   // console.log(number[i]);

   // for (let j = 0; j < number[i].length; j++) {
  //    console.log(number[i],[j]);
        
//}
//}



//let q = 8
//let ans = prompt("pls fill your ans")
//while (true){
//    if (q == ans) {
 //       alert ("your ans is correct")
 //       break; 
 //   }
 //   
  //  else{
   //     ans = prompt("pls fill your ans")
    //}
//}
 //   alert("end loop");




//const animal = ["tiger","lion","cat","dog"]
//
//const num = [[1,2,3],[4,5,6],[7,8,9]]

// (const a of num) {
//console.log(a);
//  for (const b of a) {
//console.log(b);
//}
//}


//const numbers = [0,9,8,7,6,5,4,3,2,1]
//    for (const a of numbers) {
 //     console.log((a*2)+100);
  //  }
//
//  const score = {
//    tommy : 50,
 //   alice : 40,
//    jan : 89,
//    ball : 80,
//    first : 33
//  }

 // let sum = 0

//  for (const s in score) {
//      console.log(`score of ${s} is ${score[s]}`);
 //     sum += score[s]
 //   }
//let n = Object.keys(score).length  
//let avg = sum/n
//console.log(avg);

//let input = prompt ("What would you like to do ?")
//
// todos = [];
//
//while (input != "quit") {
//if (input == "list") {
//    console.log("*****");
///if (todos.length > 0){
//for (let i = 0; i < todos.length; i++) {
//        console.log(`${i} : ${todos[i]}`);
//      }
//} else {
//      alert("This is empty");
//    }
//  } else if (input == "new") {
//    const newTodo = prompt ("What is the new to do?")
 //   if (newTodo != null) {
//todos.push(newTodo);
//      console.log(`${newTodo} added to the list`);
//   }
//
 // } else if (input == "delete") {
 //   const index = Number(prompt ("please enter an index to delete"))
 //   if (!Number.isNaN(index)) {
//      const deleted = todos.splice(index,1)
//      console.log("OK deleted ${deleted}");
//    }
//    
 // }
 // input = prompt ("What would you like to do ?")
//}
//console.log("OK quit App");





//var num1, num2;
//num1 = prompt("Input the First integer", "0");
// = prompt("Input the second integer", "0");
//                                                 
//if(parseInt(num1, 10) > parseInt(num2, 10)) 
//  { 
//console.log("The larger of "+ num1 + " and "+ num2 + " is "+ num1 + ".");
//  }   
//else
//  if(parseInt(num2, 10) > parseInt(num1, 10)) 
//{
//  console.log("The larger of "+ num1 +" and "+ num2 + " is "+ num2 + ".");
 // }                  
//else
//  {
//   console.log("The values "+ num1 + " and "+ num2 + " are equal.");
 // }




//var x=2;
//var y=4;
//var z=6;
// (x>0 && y>0 && z>0)
//{
//alert("The sign is +");
//}
//else if (x<0 && y<0 && z<0)
//{
//          console.log("The sign is -");
///        }
//else if (x>0 && y<0 && z<0)
//{
//          console.log("The sign is +");
//        }
//        else if (x<0 && y>0 && z<0)
//        {
//          console.log("The sign is +");
//        }
//else
//        {
//console.log("The sign is -");
//        }




//var x= 14;
///var y= 2;
//var z= 36;
//if (x>y && x>z)
//{
//        if (y>z)
///        {
 ///           console.log(x + ", " + y + ", " +z);
//        }
//        else
//        {
//            console.log(x + ", " + z + ", " +y);
//        }
//}
//else if (y>x && y >z)
//{
//        if (x>z)
//        {
//            console.log(y + ", " + x + ", " +z);
//        }
//        else
//        {
 //            console.log(y + ", " + z + ", " +x);
//        }
//}//
//else if (z>x && z>y)
//{
//        if (x>y)
//        {
//            console.log(z + ", " + x + ", " +y);
//        }
//        else
//        {
//            console.log(z + ", " + y + ", " +x);
//        }
//}   







//a= 14;
//b= 0.2;
//c= 25;
//d= 36;
//f= 7;
//if (a>b && a>c && a>d && a>f)
//{
//    console.log(a);
//}
//else if (b>a && b>c && b>d && b>f)
//{
//    console.log(b);
//}
//else if (c>a && c>b && c>d && c>f)
//{
//    console.log(c);
//}
//else if (d>a && d>c && d>b && d>f)
//{
//    console.log(d);
//}
//else
//{
//    console.log(f);
//}

//for (var x=0; x<=15; x++) {
//  if (x === 0) {
//          console.log(x +  " is even number");
//  }
///  else if (x % 2 === 0) {
//          console.log(x + " is even number");   
//  }
//  else {
//          console.log(x + " is odd number");
//  }
//}



//




//var sum = 0;
//for (var x = 0; x < 1000; x++)
//{
 // for (let index = 0; index < array.length; index++) {
  //  const element = array[index];
  //  
  //}
   // if (x % 3 === 0 || x % 5 === 0)
   // {
    //   sum += x;
    //}
//}
//console.log(sum);