 /*var fullName = 'LEQUYLE';
alert(fullName);
var age ='18';
alert(age);

console.log('ledinhquy');
confirm('xac nhan m du tuoi');
prompt('nhap tuoi cua m di');

var a = 123;
var b = 234;
var c = a + b + a%b;
c++;
c++;

console.log(c); 

var a = 2;

a **= 2; bình phương

console.log (a); 
var firstName = 'quy';
var lastName = 'le';
console.log(firstName +' '+ lastName);

/*mảng
join
toString
pop   xóa cuối
push   thêm cuối
shift    xóa đầu
unshift   thêm đầu 
splice   xóa,chèn phần tử

var num =[
    'ledinhquy',
    'lequyle',
    'lequyle',
    'lequy',
    
];


function writeLog(num,num1) {
    if (num)  {
        console.log(num1)
    }
    if (num1)  {
        console.log(num)
    }
  
}
writeLog ('lql', 'ql');
function toan (a, b, c)  {
    return  a+b+c
}
var result = toan (2, 3, 4);
console.log(result)
var date = new Date()
var year = date.getFullYear();
var month =date.getMonth() +1;
var day = date.getDay();
console.log( day, month, year);


var i=0;    do/while: vòng lặp
 do {
i++
console.log(i);
 }while (i<100);

 for(var i=0 ; i<10; i++) {
    

    if (i%3 !== 0){
        continue; // lấy các số chia đc cho 3 của i
    }
    console.log(i);}
for (var i =0 ; i<10; i++){
    console.log(i)
    if (i >=4){ // bỏ các số trước 4
        break;
    }
}

// vong lap Lồng nhau
 var myArray =[
 [1,2],
 [3,4],
 [5,6]
]
for (var i=0; i< myArray.length; i++){
    for (var j =0; j<myArray[i].length;j++){
console.log(myArray[i][j])
    }
// } */
// array map()

/* function array1(array) {
return {
   name: `ten cua toi la: ${array.ten}`,
   age: `tuoi cua toi la:${array.tuoi}` 
    
};
}

var newarray = array.map(array1);
console.log(newarray); */
// array reduce()


// var i = 0;
// function lesson1(accumulator , currrentValue, currrentIndex, originArray){
// i++;
// var total = accumulator + currrentValue.gia;
// console.table({
//     'luot chay:':i,
//     'tien tich tru':accumulator,
//     ' so tien ban duoc':currrentValue.gia,
//     'doanh thu': total
// });
// return total;
// }
// var a=array.reduce(lesson1, 0);
// console.log(a);
    
// var i=0;
// var coin = array.reduce(function(total, array){
// i++;
// // console.log(i, total, array);
//     return total + array.gia;
//     },0)
//  console.log(coin)

// var num =[19000,
//     20000,
//     17000
// ]
// var coin = num.reduce(function(total , num){
//     return total + num ;
// },0)
// console.log(coin)

console.log(Math.PI)