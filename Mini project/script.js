prev=document.getElementById("prev");
add=document.getElementById("add");
next=document.getElementById("next");
result=document.getElementById("result");
box=document.getElementById("box");
price=document.getElementById("price").innerHTML;
prices=document.getElementById("price");
course=document.getElementById("course");
current=document.getElementById("course").innerHTML;
const courses=["FSD","APTITUDE","POWER BI","DJANGO"];
const cost=[1000,2000,3000,4000];
var total=0;
console.log(current);
let a= courses.indexOf(current);
console.log(price);
num=Number(price);
let b= cost.indexOf(num);
console.log(b);
console.log(a);

result.addEventListener("click",function(e){
    box.innerHTML="Congratulation you have saved  "+total+"rs"+"  by joining SURE TRUST";
});
prev.addEventListener("click",function(e){
    if (a==0 & b==0) {
        a=courses.length;
        b=cost.length;
        console.log(b);
        console.log(a);
    }
   console.log(a);
    course.innerHTML=courses[a-1];
    prices.innerHTML=cost[b-1];
    b-=1;
    a-=1;
});
next.addEventListener("click",function(e){
       if (a==courses.length-1 & b==cost.length-1) {
        a=-1;
        b=-1;
    }
     a+=1;
     b+=1;
   console.log(a);
    course.innerHTML=courses[a];
   prices.innerHTML=cost[b];
});
add.addEventListener("click",function(e){
    price=document.getElementById("price").innerHTML;
    total =Number(total)+Number(price);
    console.log(total);
});
