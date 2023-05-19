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
const player = document.querySelector('.bi-arrows-angle-expand');
player.addEventListener('click', () => {
	window.location.href = '../play/play.html';
});
const playButton = document.querySelectorAll('.play-button');
playButton.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('clicked');
  });
});