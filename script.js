const container = document.createElement('div');
container.setAttribute("class","container");
document.body.appendChild(container);

let gridSize = 25;

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
}

const children = document.querySelectorAll(".child");
children.forEach((item)=>{
  
    item.addEventListener('mouseover',changeHoverColor)
})

function changeHoverColor(item){
    item.target.style.backgroundColor = "red";
}