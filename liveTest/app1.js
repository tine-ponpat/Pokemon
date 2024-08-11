//Question1
//function  lastChar(str) {
//    let len = str.length
//    let indexOfLastChar = len - 1
//    let result = str[indexOfLastChar]
//    console.log(result);
//    return result
//}
//lastChar("westride")
//lastChar("zoo")
//lastChar("student")
//lastChar("ox")


//Question2
//function makeArr(str) {
//    let arr = []
//    for (const e of str) {
//    let char = e
//    arr.push(e)
//    console.log(arr);
//    }
//    return arr
//}
//makeArr("westride")
//makeArr("zoo")
//makeArr("ZxCvBn")


//Question3
//function pow(x,y) {
//    return x ** y
//}
//console.log(pow(8,2));
//console.log(pow(9,3));
//console.log(pow(7,5));
//console.log(pow(6,6));

//Question4
//for (let i = 0; i <= 10; i++) { // ใช้ for
//    console.log(i);
//}
//let num = 0
//while (num <= 10) { // ใช้ while
//    console.log(num);
//    num += 1
//}

//Question5
//for (let i = 10; i >= 0; i--) {
//    console.log(i);    
//}
//let num = 10
//while (num >= 0) {
//    console.log(num);
//    num -= 1
//}


//Question6    //Split ใช้สำหรับการแยกคำแต่ละคำออกมาเป็น Arr
//function findSpace(str) {
//    let splitStr = str.split(" ")
//    let length = splitStr.length
//    let lengthOfSpace = length - 1
//    console.log(lengthOfSpace);
//}
//let result = findSpace("Hello world")
//findSpace("My name is Bob")
//findSpace("westride")


//Question7 //Replace ใช้สำหรับการแทนที่ หากมีมากกว่า 1 จุดให้ใช้ ReplaceAll
//function replaceSpace(str) {
//    let replaced = str.replaceAll(' ', '-')
//    return replaced
//}
//let result = replaceSpace("Hello world");
//console.log(result);
//console.log(replaceSpace("My name is Bob"));
//console.log(replaceSpace("Wow the westride is so great"));

//Question8 ถอดรหัสตัวอักษร
//let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
//    "o","p","q","r","s","t","u","v","w","x","y","z"];
//
//let arrAns = []
//
//function decrypt(str) {
//    let splitStr = str.split('')
//    for (const s of splitStr) {
//    if (s != ' ') {
//        let inputIndex = arr.indexOf(s)
//        let indextAns = inputIndex + 5;
//        let AnsValue = arr[indextAns];
//        if (AnsValue) {
//           arrAns.push(AnsValue) 
//        } else {
//            let numOfEnd = (arr.length - 1) -inputIndex
//            let newLoop = 5 - numOfEnd
//            let ans = arr[newLoop - 1];
//            arrAns.push(ans); 
//
//        } 
//    } else {
//        arrAns.push(s); 
//
//    }
//             
//    }
//     let answer = arrAns.join("")
//     return answer;
//}
//console.log(decrypt("xvo"));
//console.log(decrypt("ht ivhz dn w"));


//Question9
//let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
//           "n","o","p","q","r","s","t","u","v","w","x","y","z"];
//let ans = []
//function converter(str) {
//    let splitStr = str.split('');
//
//    for (const s of splitStr) {
//        console.log(s);
//        if (s != ' ') {
//            let value = String(s).toLowerCase();
//        let index = arr.indexOf(value)
//    let char = ""
//       if (index <= 12) {
//            char = arr[index + 13]
//
//       } else {
//            char = arr[index - 13]
//
//        }
//        ans.push(char)
//        } else {
//            ans.push(s)
//        }
//        
//        console.log(ans.join(''));
//    }
//}
//
//let result = converter("URYYB VAQVN")


//Question10
//let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
//           "n","o","p","q","r","s","t","u","v","w","x","y","z"];
//
//    let arrAns = []
//           function encrypt(str) {
//                let splitStr = str.split('')
//
//                for (const s of splitStr) {
//                    if (s != ' ') {
//                        let inputIndex = arr.indexOf(s)
//                    let indexAns = inputIndex - 5
//                    let ansValue = arr[indexAns]
//
//                if (ansValue) {
//                    arrAns.push(ansValue)
//                } else {
//                    let numOfStart = inputIndex
//                    let newLoop = 5 - numOfStart
//                    let indexAns = (arr.length) - (newLoop)
//                    let  ans = arr[indexAns]
//                    arrAns.push(ans);
//                }
//                } else {
//                    arrAns.push(s);
//                }         
//            }
//                let answer = arrAns.join('')
//                return answer
//           }
//           console.log(encrypt("my name is b"));


//Question11
//const input = [2,4,5,6,1,0,8]
//let min = input[0]
//let max = input[0]
//
//input.forEach(function(num) {
//    if (num < min) min = num
//    if (num > max) max = num
//});
//console.log("min ->", min);
//console.log("max ->", max);

//Question12
//const input = 25
//const isPrimeNumber = (num) => {
//    let isPrime = true
// for (let i = 2; i < num; i++){
//    if (num % i == 0) {
//        isPrime = false;
//        break;
//    }
// }
//    return isPrime;
//};
//for (let i = 1; i <= input; i++){
//       if (isPrimeNumber(i)) {
//        console.log(i);
//    }
//}


///Question13
//function batteryTimeCalculator( 
//    percentBattery,
//    StandbyTimeDuration,
//    callTimeDuration,
//    standbyBatteryRate,
//    callBatteryRate) {
//       
//    let batteryReduceWhenStandby = StandbyTimeDuration * standbyBatteryRate;
//    let batteryReduceWhenCall = callTimeDuration * callBatteryRate;
//    let batteryReducePerRound = batteryReduceWhenStandby + batteryReduceWhenCall;
//    let time = ((StandbyTimeDuration + callTimeDuration) / batteryReducePerRound) * percentBattery;
//
//    return time
//}
//const timeToUsePhone1 = batteryTimeCalculator(89,3,1,0.2,0.2*5);
//const timeToUsePhone2 = batteryTimeCalculator(48,5,1,0.4,0.4*2);
//const timeToUsePhone3 = batteryTimeCalculator(78,2,1,0.5,0.5*3);
//const timeToUsePhone4 = batteryTimeCalculator(19,20,1,0.1,0.1*1);
//const timeToUsePhone5 = batteryTimeCalculator(99,5,1,1,1*2);
//const timeToUsePhone6 = batteryTimeCalculator(100,7,1,1,1*3);
//
//console.log(timeToUsePhone1);
//console.log(timeToUsePhone2);
//console.log(timeToUsePhone3);
//console.log(timeToUsePhone4);
//console.log(timeToUsePhone5);
//console.log(timeToUsePhone6);

//Questiom14
//function isLowerCase(str) {
//    return str.toLowerCase() == str;
//}
//function isUpperCase(str) {
//    return str.toUpperCase() == str;
//}
//const input = "LKHlkjnsdlfkjjj"
//
//let haveCapitalLetter = false;
//let haveSmallLetter = false;
//input.split('').forEach((letter) =>{
//    if (isLowerCase(letter)) {
//        haveSmallLetter = true;
//    }
//    if (isUpperCase(letter)) {
//        haveCapitalLetter = true;
//    }
//});
//if (haveCapitalLetter && haveSmallLetter) {
//    console.log("Mix");
//} else {
//    if (haveCapitalLetter) {
//        console.log("All Capital Letter");
//    }
//    if (haveSmallLetter) {
//        console.log("All Smaall Letter");
//    }
//}


//Question15
//const input = "zepelepenapa papapripikapa"
//
//let newString = "";
//for (let index = 0; index < input.length;) {
//    const char = input[index];
//    if (["a","e","i","o","u"].includes(char)) {
//        newString += char;
//        index = index +3; 
//    } 
//    else {
//        newString += char
//        index = index +1;
//    }
//}
//console.log(newString);


//Question16
//const input = 18
//
//let count1 = 0
//
//for (let i = 0; i <= input; i = i + 3) {
//    count1++;
//}
//let count2 = 0
//for (let i = 0; i <= input; i = i + 11) {
//    count2++;
//}
//console.log(input- (count1 - 1) * 3);
//console.log(input- (count2 - 1) * 11);


//Quest17
//input = 5
//for (let j = 1; j < input + 1; j++) {    
//let a = ''
//for (let i = 0; i < j; i++) {
//    a += '*'    
//}
//    console.log(a);
//}


//Question18
//const input = 5;
//for (let i = input; i >= 0; i--) {
//    let a = '';
//    for (let j = 0; j < i; j++) {
//        a += ' ';        
//    }
//    for (let k = input - i; k > 0; k--) {
//        a += '*';
//    }
//    console.log(a);
//}


//Question19
//function  clockDDegreeCalculator(time) {
//    let splitedTime = time.split(':')
//   let hour = splitedTime[0]
//    let minute = splitedTime[1]
//
//    let degreeInFivemMinute = 30
//    let degreeInAMinute = 6
//    let degreeOfShotPinMinute = 0.5
//
//    let longPinDegree = degreeInAMinute * minute
//    let shotPinDegree = (degreeInFivemMinute * hour) + (minute * degreeOfShotPinMinute)
//   
//    console.log("lobgPimDegree =>",longPinDegree);
//    console.log("shotPinDegree =>", shotPinDegree);
//
//    let degree = Math.abs(longPinDegree - shotPinDegree)
//    if (360 - degree < degree) {
//        return 360 - degree
//    }
//    return degree
//}
//console.log(clockDDegreeCalculator("09:00"));
//console.log(clockDDegreeCalculator("00:00"));
//console.log(clockDDegreeCalculator("01:45"));
//console.log(clockDDegreeCalculator("02:00"));
//console.log(clockDDegreeCalculator("05:56"));
//console.log(clockDDegreeCalculator("09:45"));


//Question20
//const input = [39,40,41,42,43,44,82,83,84,85];
//let count = 0;
//let remainder = [];
//let uniqueNumbers = [];
//
//input.forEach(num => { 
//    const r = num % 42; 
//    if (!remainder.includes(r)) count++; //ใช้ตัวนี้ง่ายกว่า
///    remainder.push(r);
//});

//remainder.forEach(currentNumber => {
//    let isUnique = true;
//
//    uniqueNumbers.forEach(uniqueNumber => {
//        if (currentNumber == uniqueNumber) {
//            isUnique = false;
//        }
//    });
//    if (isUnique) uniqueNumbers.push(currentNumber);       
//});
//console.log(count);


//Cyclr project
//let number = document.getElementById("number")
//number.innerHTML = "65%";



//function calculatorBmi(weight , heightCm) {
//    let heightM = heightCm / 100; 
//    let bmi = weight / (heightM * heightM);
//    return bmi.toFixed(2);
//
//}
//function message(bmi) {
//    if (bmi < 18.5) {
//        return "ผอมเกินไป";
//    } else if (bmi >= 18.5 && bmi< 24.9) {
//        return "น้ำหนักเหมาะสม";
//    } else if (bmi >= 25 && bmi <29.9) {
//        return "หนักเกินไป";
//    } else {
//        return "อ้วน";
//    }
//}
//function bmiChart(bmi) {
//    const status =  message(bmi)
//    if (status == "อ้วน") {
//        console.log("คุณต้องพบแพทย์แย่างเร่งด่วน");
//    } else {
//        console.log(status);
//    }
///}
//
//
//let weight = 95;
//let height = 178;
//let bmi = calculatorBmi(weight,height);
//let chart = bmiChart(bmi);
//
//console.log("ค่า BMI คือ" + '' + bmi + ' ' + chart);
//console.log("ค่่าสถานะ คือ" + '' + chart);


//console.log("นับถอยหลัง" +''+ 1);
//setTimeout(() => {
//    console.log("นับถอยหลัง" +''+ 2);
//}, 2000);
//setTimeout(() => {
//    console.log("นับถอยหลัง" +''+ 3);
//}, 3000);
//setTimeout(() => {
//    console.log("นับถอยหลัง" +''+ 4);
//}, 4000);
///setTimeout(() => {
//    console.log("olo"+''+ "ควย!!");
//}, 5500);

//ตัวอย่าง Callback //
//const fakeRequestCallback = (url,success, failure) => {
//    const delay = Math.floor(Math.random()*4500) + 500
//    setTimeout(() => {
//       if (delay > 4000) {
//        failure('Connection Timeout :(')
//       } else {
//        success(`Here is your fake data from ${url}`)
//       }
//    }, delay)
//}
//fakeRequestCallback('tine.com',(data) => {
//    console.log('IT WORK!!!')
//    console.log(data)
//    fakeRequestCallback('tine.com/page1', (data1) => {
//        console.log('IT WORK AGAIN!!!')
//        console.log(data1)
//        fakeRequestCallback('tine.com/page2',(data2) =>{
//            console.log('IT WORK AGAIN AND AGAIN')
//            console.log(data2);
//        },(err2) => {
//            console.log('ERROR PAGE 2!!!')
//            console.log(err2);
//        })
//    },(err1) => {
//        console.log("ERRPR PAGE 1!!!")
//        console.log(err1)
//   })
//}, (err) => {
//    console.log('ERROR')
//    console.log(err)
//})


//ตัวอย่าง promise//
//const fakeRequestPromise = (url) => {
//    return new Promise ((resolve,reject) => {
//        const delay = Math.floor(Math.random()* 4500) + 500
//       setTimeout(() => {
//          if (delay > 4000) {
//            reject('Connection Timeout')
//          } else {
//            resolve (`Here is your fake data from ${url}`)
//          }  
//        },delay);
//    })
//}
//
//fakeRequestPromise('Tinenie.com//page1')
//    .then(() => {               //.then & catch   จะทำงานหลัง Promise
//        console.log('SUCCESS!!! PAGE1');
//        fakeRequestPromise('tinenie.com/page2')
//            .then(() => {
//                console.log('SUCCESS!!! PAGE2');
//                fakeRequestPromise('tinenie.com//page3')
//                    .then(() => {
//                        console.log('SUCCESS!!! PAGE3');
//                    })
//                    .catch(() => {
//                        console.log('FAILED!!! PAGE3');
//                    })
//            })
//            .catch(() => {
//                console.log('FAILED!!! PAGE2');
//            })
//    })
//   .catch (() => {
//        console.log('FAILED!!! PAGE1' );
//    })

//ตัวอย่างการใช้ return ใน call back function ผลลัพธ์จะเหมือนกับด้านบน//
//const fakeRequestPromise = (url) => {
//   return new Promise ((resolve,reject) => {
//        const delay = Math.floor(Math.random()* 4500) + 500
//            setTimeout(() => {
//                if (delay > 4000) {
//                reject('Connection Timeout')
//                } else {
//                resolve (`Here is your fake data from ${url}`)
//            }  
//        },delay);
//    })
//}
//fakeRequestPromise('Tinenie.com/page1')
//.then((data) => {
//    console.log('SUCCESS!!! (page1)');
//    console.log(data);
//    return fakeRequestPromise('Tiennie.com/page2') //อันที่ return จะเป็นของ .then ครั้วถัดไปเสมอ
//})
//.then((data1) => {
//    console.log('SUCCESS!!! (page2)');
//    console.log(data1);
//    return fakeRequestPromise('Tinenie.com/page3')
//})
//.then ((data2) => {
//    console.log('SUCCESS!!! (page3)');
//    console.log(data2);
//})
//.catch ((err) =>{
//    console.log('SORRY IT IS FAILED');
//    console.log(err);
//})


//ลองสร้าง Prommise // 
//const request = (url) => {
//    return new Promise ((resolve,reject) => {
//        const rand = Math.random()
//        setTimeout(() => {
//            if (rand > 0.7) {
//                resolve('REQUEST SUCCESS!!!')
//            } else {
//                reject('REQUEST FAILED!!!')
//            }            
//        }, 1000);
//    })
//}
//request('Tine.com/page1')
// .then((data) =>{
//    console.log('Your dada is:,data (page1)');
//    console.log(data);
//    return request('Tine.com/page2')
// })
// .then((data) =>{
//    console.log('Your data is:,data (page2)');
//    console.log(data);
//    return request('Tine.com/page3')
// })
// .then ((data) => {
//    console.log('Your data is:, data (page3)');
//    console.log(data);
// })
// .catch((error) => {
//    console.log('ERROE:',error);
//    console.log(error);
// })

//ตัวอย่างการเปลี่ยนพื้นหลัง
//const changeBackgroundPromise = (color, delay) => {
//    return new Promise((resolve,reject) =>{
//        setTimeout(() => {
//            document.body.style.backgroundColor = color;
//            resolve()
//        }, delay);
//    })   
//}
//ตัวอย่างการเขียน .then ใน callback แบบสั้นๆไม่ต้องมีปีกกา
//changeBackgroundPromise('red',1500)
//    .then(() => changeBackgroundPromise('lightyellow',1500))
//    .then (() =>changeBackgroundPromise('lightgreen',1500))
//    .then (() =>changeBackgroundPromise('lightblue',1500))
//   .then (() =>changeBackgroundPromise('black',1500))
//    .then (() =>changeBackgroundPromise('pink',1500))



///const typeOfNumberPromise = (data) =>{
//    return new Promise ((resolve,reject) =>{
//        if (typeof data !== 'number') {
//            reject('error')
//        } else if (data % 2 === 0 ) {
//            setTimeout(() => {
//               resolve('even')
//            }, 2000);
//        } else {
//            setTimeout(() => {
//                resolve('odd')
//            }, 1000);
//        }    
//    })
//}
//typeOfNumberPromise(5)
//.then ((result)=> console.log(result))
//.catch((error)=> console.log(error));
//
//typeOfNumberPromise(10)
//.then ((result)=> console.log(result))
//.catch((error)=> console.log(error));
//
//typeOfNumberPromise('test')
//.then ((result)=> console.log(result))
//.catch((error)=> console.log(error));
//
//typeOfNumberPromise(15)
//.then ((result)=> console.log(result))
//.catch((error)=> console.log(error));


//Async function การทำงานจะเหมือน Promise แต่การทำงานจะต่างกัน
//Async function จะ return ค่าเป็น Promise 
//async function hello() {
//    return 'Hello world'
//}
//หาก Function Throws บางอย่างออกไปค่่่าจะเป็น reject เสมอ
//async function test() { //เป็นการเขียนแบบฟังค์ชั่้่นทั้วไป
//    return 'HELLO'
//}
//const testArrow = async () => { เขียนแบบ Arrow function
//    return 'Hi there'
//}
// ตัวอย่าง const login = async (username, password) => {
//    if (!username || !password ) throw 'Missing Credentials'
//    if (password === 'hello') return 'WELCOME!'
//    throw 'Invalid Password'
//}
//login('tine','hello')
//    .then((data) =>{
//        console.log('SUCCESS!!!',data);
//    })
//    .catch((error) =>{
//        console.log('FAILED!!!', error);
//    })


//Awiat จะใช้ได้เมื่อฟังค์ชั้นนั้นเป็น Async functioin มีหน้าที่ในการหยุดการทำงานของโปรแกรมจนกว่่่าที่ Promise จะ return ค่าออกมา
//const changeBackgroundPromise = (color, delay) => {
//    return new Promise((resolve,reject) =>{
//        setTimeout(() => {
//            document.body.style.backgroundColor = color;
//            resolve()
//        }, delay);
//    })   
//}
//ตัวอย่างการเขียน .then ใน callback แบบสั้นๆไม่ต้องมีปีกกา
//changeBackgroundPromise('red',1500)
//    .then(() => changeBackgroundPromise('lightyellow',1500))
//    .then (() =>changeBackgroundPromise('lightgreen',1500))
//    .then (() =>changeBackgroundPromise('lightblue',1500))
//    .then (() =>changeBackgroundPromise('black',1500))
//    .then (() =>changeBackgroundPromise('pink',1500))
//ตัวอย่างการใช้ await
//const rainbow = async () => {
//    await changeBackgroundPromise('red',1000)
//    await changeBackgroundPromise('lightyellow',1000)
//    await changeBackgroundPromise('lightgreen',1000)
//    await changeBackgroundPromise('lightblue',1000)
//    await changeBackgroundPromise('pink',1000)
//    changeBackgroundPromise('orange',1000)
//}

//const fakeRequestPromise = (url) => {
//   return new Promise ((resolve,reject) => {
//        const delay = Math.floor(Math.random()* 4500) + 500
//            setTimeout(() => {
//                if (delay > 4000) {
//                reject('Connection Timeout')
//                } else {
//                resolve (`Here is your fake data from ${url}`)
//            }  
//        },delay);
//    })
//}
//
//
//requestAsync()
//    .then ((data) =>{
//        console.log('TINE');
//        console.log(data);
//    })
//const requestAsync = async () =>{
//try {
//        const res = await fakeRequestPromise('Tinenie.com/page1')
//        console.log(res);
//        const res2 = await fakeRequestPromise('Tinenie.com/page2')
//        console.log(res2);
//        return 'SUCCESS!!!'
//    } catch (e) {
//    console.log('FAILED!!!');
//    console.log('Error is:', e);
//}
//}


//const typeOfNumberPromise = (data) => {
//    return new Promise ((resolve,reject) =>{
//        if (typeof data !== 'number') {
//            reject ('error')
//        } else if (data % 2 === 0) {
//            setTimeout(() => {
//                resolve ('even')
//            }, 2000);
//        } else {
//            setTimeout(() => {
//                resolve ('odd')
//            }, 1000);
//        }
//    })
//}
//const numberAcync = async () =>{
// await typeOfNumberPromise(5)
// await typeOfNumberPromise(10)
//await typeOfNumberPromise(15)
// typeOfNumberPromise('test')
//}

//const typeOfNumber = async (data) =>{
//    if (data !== 'number') {
//        reject ('error')
//    } else if (data % 2 === 0) {
//        setTimeout(() => {
//            resolve ('even')
//        }, 2000);
//    } else {
//        setTimeout(() => {
//            resolve ('odd')
//        }, 1000);
//    }
//}
//typeOfNumber(5)
//.then(result => {
//    console.log(result);
//}) .catch(e =>{
//    console.log(e);
//})


//async function typeOfNumber (data) {
//  if (typeof data !== 'number') {
//    return Promise.reject('error');
//  }
//  if (data % 2 === 0) {
//    await new Promise(resolve => setTimeout(resolve, 2000));
//    return 'even';
//  } else {
//    await new Promise(resolve => setTimeout(resolve, 1000));
//    return 'odd';
//  }
//}
//
//typeOfNumber(5).then(result => {
//  console.log(result);
//}).catch(error => {
//  console.error(error); 
//});
//
//typeOfNumber(10).then(result => {
//  console.log(result);
//}).catch(error => {
//  console.error(error); 
//});
//
//typeOfNumber(15).then(result => {
//    console.log(result);
//  }).catch(error => {
//    console.error(error); 
//  });
//
//typeOfNumber('hello').then(result => {
//  console.log(result); 
///}).catch(error => {
//  console.error(error);
//});
//
//typeOfNumber(0).then(result => {
//    console.log(result);
//  }).catch(error => {
//    console.error(error); 
//  });


//ตัวอย่างของ XHR ไม่่สามารถใช่ Promise ได้
/// const req = new XMLHttpRequest()
//
// req.onload = function () {
//  console.log('success')
//  const res = JSON.parse(this.responseText)
//  console.log(res.name)
//}
//
// req.onerror = function () {{
//  console.log('fialed')
//  console.log(this)
// }}
//
// req.open("GET", "https://swapi.dev/api/people/1/")
// req.send()


//Fetch_API สามารถทำงานร่วมกับ Promise ได้ แต่่่ไม่สามรถใช้กับ Internet Xeploer ได้
//fetch("https://swapi.dev/api/people/1/")
//.then(res => {
//  console.log("resolve!")
//  return res.json()
//})
//.then(data => {
///  console.log(data);
//  return fetch ("https://swapi.dev/api/people/14/")
//})
//.then(res => {
///  console.log("resolve! 2")
//  return res.json()
//})
//.then(data => {
//  console.log(data);
//})
//.catch(err => {
// console.log("Reject",err)
//})
///เขียนแบบ Async
//async function starWar() {
//  try {
//    const res = await fetch("https://swapi.dev/api/people/1/");
//  const data = await res.json();
//  console.log(data)
//  const res2 = await fetch("https://swapi.dev/api/people/14/");
//  const data2 = await res2.json();
//  console.log(data2)
//  } catch (e){
//    console.log('Error',e);
//  }
//}
//starWar();


//Axios เอาไว้สร้าง Req คล้าย XHR & fetch API แต่จะมีการใช้งานในแบบของมัน (Clean code)
//axios.get('https://swapi.dev/api/people/1/') //Axios แบบทัวไป
//    .then (res =>{
//        console.log("Success!", res)
//    })
//    .catch (err => {
//        console.log("Failed!",err)
//    })
    //ใช้ Axios แบบใช้ Arrow function 
//    const makeAxiosRequest = async (id) => {
//        try {
//            const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//            console.log("Success!", res.data.name)
//           // const res2 = await axios.get('https://swapi.dev/api/people/14/')
//           // console.log("Success!", res2.data.name)
//        } catch (err) {
//                console.log("Failed!",err);
//        }
//        
//    }
//    makeAxiosRequest(1)
//    makeAxiosRequest(4)
//    makeAxiosRequest(2)
//    makeAxiosRequest(2)
//    makeAxiosRequest(5)
//    makeAxiosRequest(3)
//    makeAxiosRequest(6)


//ตัวอย่างการทำ กดปุ่มละเรียกมุขตลก
//const renderJoke = async () =>{
//    const jokeString =  await getDadJoke()
//    const ulEle = document.querySelector('#joke')
//    const liEle = document.createElement('li')
//    liEle.append(jokeString)
//    ulEle.append(liEle)
//}
//
//const getDadJoke = async() =>{
//    try {
//        const config = { headers:{ Accept:'application/json' } }
//        const res = await axios.get(`https://icanhazdadjoke.com/`,config)
//        return res.data.joke
//    } catch (err) {
//        return "No joke available :("
//    }
//}
//const buttonEle = document.querySelector('button')
//buttonEle.addEventListener('click', renderJoke)



//const formEle = document.querySelector('#searchForm')

//https://api.tvmaze.com/search/show?q=girls
//
//formEle.addEventListener('submit', function (e) {
//    e.preventDefault()
//    const search = formEle.elements.query.value
//    getMovieDetails(search)
//})
//
//const getMovieDetails = async(search) =>{
//    try {
//        const config = {params: { q: search } }
//        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
//        renderImg(res.data)
//    } catch(err) {
//        console.log(err);
//    }
//}
//
//const renderImg = (data) =>{
//    for (let item of data) {
//        if(item.show.image?.medium){
//            const imgEle = document.createElement('img')
//            imgEle.src = item.show.image.medium
//            document.body.append(imgEle)
//        }    
//    }
//}



//const searchAPI = async() =>{
//    const res = await axios.get(`https://github.com/davemachado/public-api`)
//    return res
//}