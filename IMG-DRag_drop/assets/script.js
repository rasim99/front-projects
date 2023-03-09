let DropElements=document.querySelectorAll(".drop");
DropElements.forEach(drops=> {
    drops.addEventListener("dragover",function(e) {
        e.preventDefault();
    })
    drops.addEventListener("drop",function() {
        this.append(document.getElementById("img"))
    })
})