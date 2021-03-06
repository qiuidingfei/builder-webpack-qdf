'use strict';

// import './search.less';
// import '../../../common/utils.js';
// import { a } from './tree-shaking.js';
// import logo from '../../images/logo.jpg';

require('./search.less');
require('../../../common/utils.js');
const logo = require('../../images/logo.jpg');
const treeShaking = require('./tree-shaking.js');

const createElements = () => {
    let div = document.createElement("div");
    let img = document.createElement("img");

    div.className = "search-text";
    div.innerHTML = "search Text is one hot " + treeShaking.a();

    img.src = logo
    div.appendChild(img);

    getText({
        call(res) {
            console.log(res);
            img.onclick = () => {
                div.appendChild(res);
            }
        }
    });

    return div;
};

const getText = (callback) => {
    import('./text.js')
    .then((Text) => {
        callback.call(Text.dync());
    });
}

document.body.appendChild(createElements());