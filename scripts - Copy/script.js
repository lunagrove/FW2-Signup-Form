'use strict';
const dropdown = document.getElementById('referredby');
const details = document.getElementById('hidden-input');
const clearform = document.getElementById('clear-form');

dropdown.addEventListener('change', (e) => {
    e.preventDefault();

    var text = dropdown.options[dropdown.selectedIndex].text;

    if (text === "Magic!" && details.classList.contains("visually-hidden")) {
        details.classList.toggle("visually-hidden");
    }

    if (text != "Magic!" && !details.classList.contains("visually-hidden")) {
        details.classList.toggle("visually-hidden");
    }
});

clearform.addEventListener('click', (e) => {
    e.preventDefault();

    if (!details.classList.contains("visually-hidden")) {
        details.classList.toggle('visually-hidden');
    }
    dropdown.selectedIndex = 0;
});