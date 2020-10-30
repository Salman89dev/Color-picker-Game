var circleContainer=document.querySelector(".cirlces");
var ansNode=document.querySelector(".answer");
var container=document.querySelector(".container");
var reset=document.querySelector(".reset");
var ans=null;
var circles=null;


function getRandomInt(min,max)
{
    var min=Math.ceil(min);
    var max=Math.floor(max);
    return Math.floor(Math.random() * (max-min))+ min;
}

function randomRgbGenerator()
{
    return `rgb(${getRandomInt(0,256)},${getRandomInt(0,256)},${getRandomInt(0,256)})`
}

function settingUI()
{
    circleContainer.innerHTML=""
    for(i=0;i<6;i++)
    {   
        circleContainer.insertAdjacentHTML("beforeend",
        `<div class="circleWrapper flex">
        <div style="background:${randomRgbGenerator()}" class="circle" ></div>
        </div>`
        );
    }
    RandomNumberForAns=getRandomInt(0,6);
    circles=Array.from(document.querySelectorAll(".circle"));
   ans=circles[RandomNumberForAns].style.background;
   ansNode.innerText=ans;
}
settingUI()

ansNode.innerText=ans;
circleContainer.addEventListener("click",function(e)
{
    if(Array.from(e.target.classList).includes("circle"))
    {
        var ansPicked=e.target.style.background
        if(ansPicked===ans)
        {
            container.style.background=ans;
            container.style.transition="all 0.5s ease-in-out";
            circles.forEach(function(circle)
            {
                if(circle.style.background !==ans)
                {
                   circle.style.opacity=0
                   circle.style.transition="all 0.5s ease-in-out"
                }
            })
        }
        else
        {
            e.target.style.opacity=0;
            e.target.style.transition="0.5s"
         
        }
    }
})

reset.addEventListener('click',function()
{
    settingUI()
})