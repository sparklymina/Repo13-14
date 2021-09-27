
var modal = document.getElementsByClassName('modal')[0]

window.addEventListener('click', clickOutside);

function modalWow(id) {
    var htmlGet = new XMLHttpRequest();

    htmlGet.open('GET', id, true);
    htmlGet.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        document.getElementsByClassName('modal-content')[0].innerHTML= this.responseText;
    };
    htmlGet.send();
    console.log('TEST')
    openModal()

}

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}