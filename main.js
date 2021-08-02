var num = +prompt("Raqam kiriting");
while (isNaN(num)||!num){
    var num = +prompt("Iltimos raqam kiriting!!");
}
num % 2 == 0 ? alert("Juft Son") : alert("Toq Son");


let res = 1;
for (let i = 0; i < num; i++) {
    res *= num;
}
alert("Siz kiritgan sonning darajasi  " + res); 