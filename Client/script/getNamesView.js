'use strict';

window.addEventListener('load', function () {
    var buttonGetNames = document.querySelector('.buttonGetNames'),
        container = document.querySelector('#namesContent');

    buttonGetNames.addEventListener('click', getNames, true);

    function getNames () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'getNames', false);

        xhr.addEventListener('readystatechange',function () {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    var JSONNames = JSON.parse(xhr.responseText),
                        stringNames = getStringNames(JSONNames);

                   container.innerHTML = stringNames;
                }
            }
        }, false);

        xhr.send();
    }

    function getStringNames (_JSONNames) {
        var JSONNames = _JSONNames,
            string = '',
            key;

        for (key in JSONNames) {
            string += '- ' + JSONNames[key] + '<br>';
        }

        return string;
    }
}, false);

