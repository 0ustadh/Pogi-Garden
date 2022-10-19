let modal = document.getElementById('notify');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}