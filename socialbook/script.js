const settingsMenu = document.querySelector('.settings-menu');
const darkBtn = document.querySelector('#dark-btn');

function settingsMenuToggle() {
    if(settingsMenu.classList.contains('settings-menu-height')){
        settingsMenu.classList.remove('settings-menu-height')
    } else{
        settingsMenu.classList.add('settings-menu-height');
    }
}

darkBtn.onclick = function() {
    if (darkBtn.classList.contains('dark-btn-on')) {
        darkBtn.classList.remove('dark-btn-on');
    } else{
        darkBtn.classList.add('dark-btn-on');
    }

    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
    } else{
        document.body.classList.add('dark-theme');
    }

    if (localStorage.getItem('theme') == "light") {
        localStorage.setItem("theme", "dark");
    } else{
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem('theme') == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem('theme') == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add('dark-theme');
}
else{
    localStorage.setItem("theme", "light");
}