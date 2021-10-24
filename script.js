var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var health=3;


function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(health==0){
        
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter));
        counter=0;
        health=3;
        block.style.animation = "block 1s infinite linear";
        return
    }
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130 && health!=0){
        health--;
        document.getElementById("healthSpan").innerHTML = health;
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = counter;
        document.getElementById("healthSpan").innerHTML = health
    }
}, 65);