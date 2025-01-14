const themeSelector = document.querySelector('select');
function changeTheme(){
    if(themeSelector.value=='dark'){
        document.querySelector('body').setAttribute('class','dark');
        document.querySelector('img').setAttribute('src','byui-logo_white.png');
    }
    else{
        document.querySelector('body').setAttribute('class', '');
        document.querySelector('img').setAttribute('src','byui-logo_blue.webp');
    }
}
themeSelector.addEventListener('change', changeTheme);