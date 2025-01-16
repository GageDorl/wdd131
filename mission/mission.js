const themeSelector = document.querySelector('select');
function changeTheme(){
    if(themeSelector.value=='dark'){
        document.querySelector('body').classList.add('dark');
        document.querySelector('img').setAttribute('src','byui-logo_white.png');
    }
    else{
        document.querySelector('body').classList.remove('dark');
        document.querySelector('img').setAttribute('src','byui-logo_blue.webp');
    }
}
themeSelector.addEventListener('change', changeTheme);