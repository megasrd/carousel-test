var slides = document.getElementsByClassName('slide');
var nav_nodes = document.getElementById('nav_nodes');
var slide_index = 0;
let offset = slides.length - 1;

function cycleSlider(){
    
    let first = document.getElementsByClassName("first")[0];
    
    first.setAttribute("class", "slide");
    
    slides[slide_index].setAttribute("class", "slide first fade");
    
    //set primary node
    
    let current_node = document.getElementsByClassName('current-node')[0];
    
    current_node.setAttribute("class", "slider-node");
    
    let nodes = document.getElementsByClassName('slider-node');
    
    nodes[slide_index].setAttribute("class", "slider-node current-node");
    
}

function createNodes(){

//create nodes
    
    for  (i=0; i < slides.length; i++) {
        
        let node = document.createElement("span");
        
        node.setAttribute("class", "slider-node");
        
        nav_nodes.appendChild(node);
        
    }
    
//set primary node
    
    document.getElementsByClassName('slider-node')[0].setAttribute("class", "slider-node current-node");
    
}

function next() {
    
    if (slide_index < offset) {
        
        slide_index++;    
        
    }else{
        
        slide_index = 0;
        
    }
    
    cycleSlider();
    
}

function previous() {
    
    slide_index--;
    
    if (slide_index < 0) {
        slide_index = offset;
    }
    
    cycleSlider();
    
}

createNodes();