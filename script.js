let parent=document.getElementById("parent");
let draggedElement=null;
parent.addEventListener("dragstart",(event)=>{
		draggedElement=event.target;
	    //event.target.style.opacity="0.5";
});
/*parent.addEventListener("dragend", (event)=>{
	  event.target.style.opacity="1";
});*/
parent.addEventListener("dragover", (event)=>{
		event.preventDefault();
});
parent.addEventListener("drop", (event)=>{
	 event.preventDefault();
	 let target=event.target;
	if(target.classList.contains("image") && target!=draggedElement){
		 let draggedNext=draggedElement.nextSibling;
		 let targetNext=target.nextSibling;
		 parent.insertBefore(draggedElement, targetNext);
		parent.insertBefore(target, draggedNext);
	}
})
