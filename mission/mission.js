const themeSelector = document.querySelector('select');
function changeTheme(){
    if(themeSelector.value=='dark'){
        document.querySelector('body').setAttribute('class','dark');
    }
    else{
        document.querySelector('body').setAttribute('class', '')
    }
}
themeSelector.addEventListener('change', changeTheme);