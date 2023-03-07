window.oncontextmenu=function(e) {
         e.preventDefault();
   let div= document.createElement("div");
    div.style.width="22px"
    div.style.height="22px"
    div.style.backgroundColor="aqua";
    div.style.position="absolute"
    div.style.left=`${e.clientX}px`;
    div.style.top=`${e.clientY}px`;
    document.body.append(div)
}