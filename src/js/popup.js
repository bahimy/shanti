(function() {
    'use strict';
    var popupArea = document.querySelector('.js-toggle');
    var popupCloseButton = document.querySelector('.js-close');
    var popupContainer = document.querySelector('.js-container');
    var elementToBlock = {
        'js-book': 'js-contacts',
        'js-viewprices': 'js-prices',
        'js-viewschool': 'js-school'
    };

    var hidePopup = function() {
        popupArea.classList.add('u-hidden');
        popupArea.classList.remove('u-opaque');
    };

    for (var element in elementToBlock) {
        Array.prototype.slice.call(
            document.querySelectorAll('.' + element), null
        ).forEach(function(currentTarget) {
            currentTarget.addEventListener('click', function(e) {

                while(popupContainer.firstChild)
                    popupContainer.removeChild(popupContainer.firstChild);

                popupContainer.appendChild(
                    document.querySelector('.' +
                        elementToBlock[currentTarget.className
                            .match(/js-\w*/)[0]]
                    ).cloneNode(true)
                );

                popupArea.classList.remove('u-hidden');
                popupArea.classList.add('u-opaque');
                e.preventDefault();
                e.stopPropagation();
            });
        });
    }

    /* var buttonBook = Array.prototype.slice.call(
        document.querySelectorAll('.js-book'), null
    );
    var buttonViewPrices = Array.prototype.slice.call(
        document.querySelectorAll('.js-viewprices'), null
    );

    var linkAnother = document.querySelector('.js-viewanother');
    var linkSchool = document.querySelector('.js-viewschool');

    var popupContainer = document.querySelector('.js-container');

    var popupPrices = document.querySelector('.js-prices');
    var popupContacts = document.querySelector('.js-contacts');

    var hidePopup = function() {
        popupArea.classList.add('u-hidden');
        popupArea.classList.remove('u-opaque');
    };

    buttonBook.forEach(function(current) {
        current.addEventListener('click', function(e) {
            while(popupContainer.firstChild)
                popupContainer.removeChild(popupContainer.firstChild);
            popupArea.classList.remove('u-hidden');
            popupArea.classList.add('u-opaque');
            popupContainer.appendChild(popupContacts);
            e.stopPropagation();
        });
    });

    buttonViewPrices.forEach(function(current) {
        current.addEventListener('click', function(e) {
            while(popupContainer.firstChild)
                popupContainer.removeChild(popupContainer.firstChild);
            popupArea.classList.remove('u-hidden');
            popupArea.classList.add('u-opaque');
            popupContainer.appendChild(popupPrices);
            e.stopPropagation();
        });
    });

    linkAnother.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    linkSchool.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }); */

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
