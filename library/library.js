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
const Playbtn=document.querySelector('.bi-play-circle');
const Pausebtn=document.querySelector('.bi-pause-circle');
Playbtn.addEventListener('click', () => {
  Playbtn.style.display = "none";
  Pausebtn.style.display = "block";
});
Pausebtn.addEventListener('click', () => {
  Pausebtn.style.display = "none";
  Playbtn.style.display = "block";
});
const player = document.querySelector('.bi-arrows-angle-expand');
player.addEventListener('click', () => {
	window.location.href = '../play/play.html';
});