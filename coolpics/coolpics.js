let nav = document.querySelector('nav');

document.querySelector('#menuButton').addEventListener('click', function() {
    nav.classList.toggle('hidden');
});

document.querySelector('.gallery').addEventListener('click', viewHandler);

window.addEventListener('resize', handleResize);

function handleResize() {
    if(window.innerWidth>1000){
        nav.classList.remove('hidden');
    } else if(window.innerWidth<=1000){
        nav.classList.add('hidden');
    }
}

function viewHandler(event){
    let target = event.target;
    let pictureInfo = target.src.split('-');
    let newPic =document.createElement('img')
    newPic.setAttribute('src',pictureInfo[0] + '-full.jpeg');
    newPic.setAttribute('alt', pictureInfo[0]);
    document.querySelector('.viewer').insertAdjacentHTML("afterbegin", newPic.outerHTML);
    document.querySelector('.viewer').classList.remove('hidden');
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

function closeViewer(event){
    document.querySelector('.viewer').classList.add('hidden');
    document.querySelector('.viewer').innerHTML = '<button class="close-viewer">X</button>';
}

handleResize();