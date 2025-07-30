let pacman=document.getElementById("pacman");
let horizontalMove=0;
let verticalMove=0;
document.addEventListener("keydown",function (keyboardEventObject){
    if(keyboardEventObject.key=="ArrowUp"){
        console.log(keyboardEventObject.key)
        pacman.style.transform=`translate(${horizontalMove}vw,${verticalMove--}vh) rotateZ(-90deg)`;
    }
});
document.addEventListener("keydown",function (keyboardEventObject){
    if(keyboardEventObject.key=="ArrowDown"){
        console.log(keyboardEventObject.key)
        pacman.style.transform=`translate(${horizontalMove}vw,${verticalMove++}vh) rotateZ(90deg)`;
    }
});
document.addEventListener("keydown",function (keyboardEventObject){
    if(keyboardEventObject.key=="ArrowRight"){
        console.log(keyboardEventObject.key)
        pacman.style.transform=`translate(${horizontalMove++}vw,${verticalMove}vh) rotateX(180deg)`;
    }
});
document.addEventListener("keydown",function (keyboardEventObject){
    if(keyboardEventObject.key=="ArrowLeft"){
        console.log(keyboardEventObject.key)
        pacman.style.transform=`translate(${horizontalMove--}vw,${verticalMove}vh) rotateZ(-180deg)`;
    }
});