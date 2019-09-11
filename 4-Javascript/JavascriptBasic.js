//alert("Hey! javascript file is linked properly.");

/*var _mineString123 ="MyString";
var _mineString124 ="YourString";
var _mineString125 = 20;
var _mineString126 = 10;
var sumString=_mineString125+_mineString126;
var isThisMyName=true;
var combinedString = _mineString123+" "+_mineString124+"-"+sumString+"_"+isThisMyName;

//alert(combinedString);

console.log(combinedString);

var showName = prompt("name you favorite tv show.");

if(showName=="gold"){
    alert("hurray! i found your tv show;");
}else if(showName=="silver"){
    alert("is is a fine show.");
}else{
    alert("i don't know that show.");
}*/

var myArray = ["Red", "Blue", "Green"];

/*alert(myArray.length);
alert(myArray[0]);

for(var i =0;i<=10;i++){
    console.log(i);
}

var x=20;
while(x>10){
    console.log(x);
    x--;
}*/

for(var i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}


function buttonClicked(whichButton){
    console.log(whichButton+" is clicked.");
    console.log(addTwoNumbers(10,5));
}

function addTwoNumbers(number1, number2){
    return number1+number2;
}