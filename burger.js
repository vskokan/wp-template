let userPanel = document.querySelector('.menuMobile');
let isOpened = false;

function openMenu() {
    isOpened = true;
    let menuBlock = document.createElement('div')
    menuBlock.className = 'menu__block'
    let menuList = document.createElement('ul');
    menuList.className = 'menu__list';
    document.querySelector('.nav').append(menuBlock);
    menuBlock.append(menuList)
    let menuItems = ['Главная', 'Карта', 'Новости', 'Предложить объект', 'Вход'];
    let menuLinks = ['index.html', 'map.html', 'news.html', 'addobject.html','signin.html'];

    for (let i = 0; i < menuItems.length; i++ ) {
            let menuItem = document.createElement('li');

            menuItem.className = 'menu__item';
            menuList.append(menuItem);

            let itemContent = document.createElement('a');

            itemContent.className = 'menu__item-link';
            menuItem.append(itemContent);
            itemContent.innerHTML = menuItems[i];
            itemContent.href = menuLinks[i];
    }
    menuBlock.style.animation = 'showmenu 0.5s ease-in-out forwards'
}

function closeMenu() {
    let menu = document.querySelector('.menu__block');

    menu.remove();
    isOpened = false;
}


function menuMain() {
    if (!isOpened) {
        openMenu(); 
    } else { 
        closeMenu();
    }
}

userPanel.onclick = menuMain;