'use strict';

window.addEventListener('DOMContentLoaded', () => {

  let pack = document.querySelectorAll('.cat-card__border'),
    buy = document.querySelectorAll('.blue');

  // Часть для текста SELECTED
  buy.forEach((buy) => {
    buy.addEventListener('click', () => {
      buy.parentElement.classList.toggle('none');
      buy.parentElement.nextElementSibling.classList.toggle('none');

      buy.parentElement.previousElementSibling.classList.toggle('selected');
      buy.parentElement.previousElementSibling.firstElementChild.lastElementChild.classList.toggle('selected');

    });
  });

  // Часть для упаковки SELECTED
  pack.forEach((pack) => {
    pack.addEventListener('click', () => {

      if (!pack.classList.contains('disabled')) {
        pack.classList.toggle('selected');
        pack.firstElementChild.lastElementChild.classList.toggle('selected');

        pack.nextElementSibling.classList.toggle('none');

        pack.nextElementSibling.nextElementSibling.classList.toggle('none');
      }

    });
  });

  // Часть для текста HOVER
  buy.forEach((buy) => {
    buy.addEventListener('mouseover', () => {
      buy.classList.add('hover__text');

      buy.parentElement.previousElementSibling.classList.add('hover');
      buy.parentElement.previousElementSibling.firstElementChild.lastElementChild.classList.add('hover');
    });
  });

  buy.forEach((buy) => {
    buy.addEventListener('mouseout', () => {
      buy.classList.remove('hover__text');

      buy.parentElement.previousElementSibling.classList.remove('hover');
      buy.parentElement.previousElementSibling.firstElementChild.lastElementChild.classList.remove('hover');
    });
  });

  // Часть для упаковки HOVER
  pack.forEach((pack) => {
    pack.addEventListener('mouseover', () => {
      pack.classList.add('hover');
      pack.firstElementChild.lastElementChild.classList.add('hover');

      pack.nextElementSibling.firstElementChild.classList.add('hover__text');
    });
  });

  pack.forEach((pack) => {
    pack.addEventListener('mouseout', () => {
      pack.classList.remove('hover');
      pack.firstElementChild.lastElementChild.classList.remove('hover');

      pack.nextElementSibling.firstElementChild.classList.remove('hover__text');
    });
  });

  // Часть для упаковки SELECTED-HOVER
  pack.forEach((pack) => {
    pack.addEventListener('mouseout', () => {
      if (pack.classList.contains('selected') && !pack.classList.contains('disabled')) {
        pack.classList.add('selected-hover');
        pack.firstElementChild.lastElementChild.classList.add('selected-hover');
        pack.firstElementChild.firstElementChild.classList.add('none');
        pack.firstElementChild.firstElementChild.nextElementSibling.classList.remove('none');
      }
    });
  });

  pack.forEach((pack) => {
    pack.addEventListener('mouseover', () => {
      if (pack.classList.contains('selected') && !pack.classList.contains('disabled')) {
        pack.classList.remove('selected-hover');
        pack.firstElementChild.lastElementChild.classList.remove('selected-hover');
        pack.firstElementChild.firstElementChild.classList.remove('none');
        pack.firstElementChild.firstElementChild.nextElementSibling.classList.add('none');
      }
    });
  });

  // Часть для упаковки DISABLED
  pack.forEach((pack) => {
    pack.addEventListener('dblclick', () => {
      pack.classList.toggle('disabled');

      pack.firstElementChild.classList.toggle('disabled-txt');
      pack.firstElementChild.lastElementChild.previousElementSibling.classList.toggle('disabled-img');
      pack.firstElementChild.firstElementChild.classList.toggle('disabled-txt');
      pack.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.classList.toggle('disabled-txt');
      pack.firstElementChild.lastElementChild.classList.toggle('disabled');

      if (pack.classList.contains('selected')) {
        pack.nextElementSibling.nextElementSibling.classList.toggle('none');
        pack.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('none');
      } else {
        pack.nextElementSibling.classList.toggle('none');
        pack.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('none');
      }
    });
  });

});

