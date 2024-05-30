const box=document.querySelector(".box");
const button=document.querySelector("#btn");
var flag=0;
button.addEventListener("click",function()
{
    if(flag==1)
    {
        button.innerHTML="OFF";
        box.style.backgroundColor="yellow";
        flag=0;
    }
    else{
        button.innerHTML="ON";
        box.style.backgroundColor="black";
        flag=1;
    }
});