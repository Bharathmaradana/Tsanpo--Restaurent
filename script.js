function preloader()
{
    document.getElementsByClassName('.preloader').classList.add('fade-out');
}
function fadeout(){
    setInterval(preloader,3000);
}
window.onload=fadeout;