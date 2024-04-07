function rolldice(){
    let m=Math.floor(Math.random()*6)+1;
    console.log(m);
}
rolldice();


function personinfo(name,age){
    console.log(`${name}'s is age is ${age}`);

}
personinfo("vamsi",63);


function average(num1,num2,num3){
    let a=(num1+num2+num3)/3;
    console.log(a);
}
average(5,5,5);

function table(n){
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
}
table(5);

function sumof(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;

    }
    return sum;
}