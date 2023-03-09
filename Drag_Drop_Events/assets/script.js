///events  ===> dragstart,dragend,drag,dragenter,dragleave,dragover,drop 
/// draga aid ====>dragstart,dragend,drag, dropa aid ===>dragenter,dragleave,dragover,drop
/// dropa elave etmek ucun ==> dragover in default'nu baglamaq ve dropda append etmek

let DragElement=document.querySelector(".dragbox");
let DropElement=document.querySelector(".area");

// DragElement.addEventListener("dragstart",function() {
//     console.log("drag started");
// })
// DragElement.addEventListener("dragend",function () {
//     console.log("drag end");
// })
// DragElement.addEventListener("drag",function () {
//     console.log(" is dragging");
// })
DropElement.addEventListener("dragenter",function() {
    // console.log("drop start");
})
DropElement.addEventListener("dragleave",function() {
    // console.log("drop end");
})
DropElement.addEventListener("dragover",function(e) {
                       // console.log("is dropping");
    //eventle default u baglasaq
            e.preventDefault();
})
DropElement.addEventListener("dragenter",function() {
    // console.log("drop");
    //append etsek drag element dropa elave olunacaq
    this.append(DragElement);
})