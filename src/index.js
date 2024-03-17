import homeLoad from './homeLoad.js';
import menuLoad from './menuLoad.js';
import aboutLoad from './aboutLoad.js';

homeLoad();
//menuLoad();
//aboutLoad();

const content = document.getElementById('content');

const nav = document.querySelector('#nav');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.innerHTML) {
            case 'Home':
                //console.log('Home selected');
                content.innerHTML = '';
                homeLoad();
                break;
            case 'Menu':
                //console.log('Menu selected');
                content.innerHTML = '';
                menuLoad();
                break;
            case 'About':
                //console.log('About selected');
                content.innerHTML = '';
                aboutLoad();
                break;
        }
    });
});