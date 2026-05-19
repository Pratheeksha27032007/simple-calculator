display=document.querySelector(".display")
clear=document.querySelector(".clear")
nums=document.querySelectorAll(".nums")
ops=document.querySelectorAll(".ops")
solve=document.querySelector(".solve")
let equation="",solved=false;
let disp=(a)=>{

    if(solved){
        equation=""
        display.innerText=""
        solved=false
    }
    //edge cases
    if(a=="x"){equation+="*";display.innerText+=a}
    else if(a=="x2"){equation+="**2";display.innerText+="^2"}
    else if(a=="BKSP"){
    equation=equation.slice(0,-1)
    display.innerText=display.innerText.slice(0,-1)
    }
    else{ equation+=a;
    display.innerText+=a;}
}
nums.forEach((num)=>{
    num.addEventListener("click",()=>{
        disp(num.innerText);
        // console.log(num.innerText)
    })
})
ops.forEach((op)=>{
    op.addEventListener("click",()=>{
       // console.log(op.innerText)
        disp(op.innerText);
    })
})
document.addEventListener("keydown",(e)=>{
    let allowed="0123456789+-*/%."
    if(allowed.includes(e.key))disp(e.key); 
    //console.log(e.key)  
    if(e.key=="Backspace"){
    disp("BKSP")
    }
    if(e.key=="Enter"){
    solve.click();
    }
 })

clear.addEventListener("click",()=>{
    equation="";
    display.innerText=""
})
solve.addEventListener("click",()=>{
    if(equation=="")return;
    try{
    let ans=eval(equation)
    equation=ans.toString()
    //console.log(ans)
    display.innerText=ans;
    solved=true;
    }
    catch{
        display.innerText="Error"
        equation=""
        solved=true;
    }
})

