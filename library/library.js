const content = document.getElementsByClassName("main");
const title = document.getElementsByClassName("section");
function clickContent(index){
    for (let i = 0; i < content.length; i++) {
        if(i==index){
            content[i].className ="main active";
            title[i].className = "section active"
        }
        else{
            content[i].className = "main inactive"
            title[i].className = "section inactive"

        }
        
    }
   
}