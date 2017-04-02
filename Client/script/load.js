'use strict';

window.addEventListener('load', function () {
    var buttonLoad = document.querySelector('.buttonLoad');

    buttonLoad.addEventListener('click', getNames, true);

    function getNames () {
        mediator.pub('buttonClicked');
    }
}, false);