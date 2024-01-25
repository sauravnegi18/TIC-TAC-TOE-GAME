let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let winners=document.querySelector(".winner");
let msg=document.querySelector(".msg");
let count=0;
let turn0 = true;
const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
boxes.forEach((box) => {

    box.addEventListener("click", () => {
        count++;
        if(turn0==true)
        {
            box.innerText="0";
            box.style.color='red';
            turn0=false;
            
        }
        else{
            box.style.color='skyblue';

            box.innerText="X";
            turn0=true;
            
        }
        box.disabled=true;
        winner();
    })
});

const winner=()=>{
    for (let pattern of winPattern)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !=''&& pos2 !='' && pos3 !='')
        {
            if(pos1 == pos2 && pos2==pos3)
            {
                console.log("WINNER",  pos1);
                showwinner(pos1);
                disable();
            }
            if(count===9)
            {
                draw();
            }
        }
    }
}
const showwinner=(win)=>
{
msg.innerText=`Congratulation Winner is ${win}`;
winners.classList.remove("hide");

}
const draw=()=>
{
   
msg.innerText=`Match is Draw`;
winners.classList.remove("hide");
 
}
const disable=()=>
{
    for(let box of boxes){
        box.disabled=true;
    
    }
}

const enable=()=>
{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
        box.style.color="black"
     

        
    }
}
const reset=()=>
{
    turn0=true;
    enable();
    winners.classList.add("hide");
    count=0;
}
resetbtn.addEventListener("click",reset);