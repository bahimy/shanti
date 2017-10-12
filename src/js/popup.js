(function() {
    'use strict';
    var popupArea = document.querySelector('.js-toggle');
    var popupCloseButton = document.querySelector('.js-close');
    var popupContainer = document.querySelector('.js-container');
    var elementToBlock = {
        'js-book': 'js-contacts',
        'js-viewprices': 'js-prices',
        'js-viewschool': 'js-school',
        'js-showdescription': 'js-descript'
    };

    var hidePopup = function() {
        popupArea.classList.add('u-hidden');
        popupArea.classList.remove('u-opaque');
    };

    for (var element in elementToBlock) {
        Array.prototype.slice.call(
            document.querySelectorAll('.' + element), null
        ).forEach(function(currentTarget) {

            var staticSelector = (function(selector) {
                return '.' + selector;
            })(elementToBlock[element]);

            currentTarget.addEventListener('click', function(e) {

                while(popupContainer.firstChild)
                    popupContainer.removeChild(popupContainer.firstChild);

                var elementToAppend = document.querySelector(staticSelector).
                    cloneNode(true);

                popupContainer.appendChild(elementToAppend);

                popupArea.classList.remove('u-hidden');
                popupArea.classList.add('u-opaque');
                e.preventDefault();
                e.stopPropagation();
            });
        });
    }

    // Hide popup when clicked any place of a page...
    document.body.addEventListener('click', hidePopup);

    // ...except of a popup area...
    popupArea.addEventListener('click', function(e) {

        // ...excluding 'close' button from exception.
        if (e.target != popupCloseButton) e.stopPropagation();
    })

    document.body.addEventListener('keydown', function(e) {
        if (e.code == 'Escape') hidePopup();
    });

})();
