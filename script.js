const container = document.createElement('div');
container.setAttribute("class","container");
document.body.appendChild(container);

let gridSize = 16;

createGrid(gridSize);

function createGrid(gSize){
    for(let i =0;i<gSize*gSize;i++){
        const div = document.createElement('div');
        div.setAttribute('class','child');
        container.appendChild(div);
    }
    const children = document.querySelectorAll(".child");
    children.forEach((item)=>{
        item.style.flexBasis = `${(800-gSize)/gSize}px`;
    })
    hoverEvent();
}

function hoverEvent(){
    const children = document.querySelectorAll(".child");
    children.forEach((item)=>{
        let opacity = 0;
        item.addEventListener('mouseover',(event)=>{
            opacity= changeHoverColor(event,opacity)
        })
    })
}


function changeHoverColor(item,opacity){
    opacity = opacity + 0.1;
    let r = generateRandomNumber();
    let g = generateRandomNumber();
    let b = generateRandomNumber();
    item.target.style.backgroundColor = `rgba(${r},${g},${b},${1 - opacity})`;
    return opacity;
}

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random()*255);
    return randomNumber;
}
function removeGrid(){
    const children = document.querySelectorAll('.child');
    children.forEach((item)=>{
        container.removeChild(item);
    })
}
const button = document.querySelector("button")
button.addEventListener('click',()=>{
    let gridSize=Number(prompt("Enter a number"));
    if(gridSize>100||isNaN(gridSize)){
        alert("invalid number");
    }
    else{
        removeGrid();
        createGrid(gridSize)
        hoverEvent();
    }

})

