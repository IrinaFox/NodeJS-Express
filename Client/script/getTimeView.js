'use strict';

window.addEventListener('load', function () {
    var buttonGetTime = document.querySelector('.buttonGetTime'),
        container = document.querySelector('#timeContent');

    buttonGetTime.addEventListener('click', getTime, true);

    function getTime () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'getTime', false);

        xhr.addEventListener('readystatechange',function () {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    container.innerHTML = xhr.responseText + '</br>';
                }
            }
        }, false);

        xhr.send();
    }
}, false);
