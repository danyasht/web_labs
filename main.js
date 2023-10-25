const listGroup = document.querySelector('.hero-list-group');
const createForm = document.querySelector('#create-form');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const toggleSwitch = document.querySelector('#toggle-switch');
const sumButton = document.querySelector('.btn-sum');

const listArray = [];


searchButton.addEventListener('click', () => {
  const inputDescription = searchInput.value.trim().toLowerCase();

  const listItems = document.querySelectorAll('.hero-list-group-item');

  listItems.forEach((item) => {
    const descriptionElement = item.querySelector('p:nth-child(2)');

    if (descriptionElement) {
      const itemDescription = descriptionElement.textContent.trim().toLowerCase();

      if (itemDescription === inputDescription) {
        item.classList.add('highlighted-item');
        setTimeout(() => {
          item.classList.remove('highlighted-item');
        }, 3000);
      } 
    }
  });

  searchInput.value = '';
});

const listItems = document.querySelectorAll('.hero-list-group-item');

sumButton.addEventListener('click', () => {
  const listItems = document.querySelectorAll('.hero-list-group-item');
  let totalPrice = 0;

  listItems.forEach((item) => {
    const priceElement = item.querySelector('p:first-child');

    if (priceElement) {
      const itemPrice = parseFloat(priceElement.textContent);

      if (!isNaN(itemPrice)) {
        totalPrice += itemPrice;
      }
    }
  });

  const totalElement = document.getElementById('totalPrice');
  totalElement.textContent = `Total Price: ${totalPrice}`;
});

let isSortingEnabled = false;
let cashedArray = [];

toggleSwitch.addEventListener('change', () => {
  isSortingEnabled = toggleSwitch.checked;

  if (isSortingEnabled) {
    const listItems = Array.from(listGroup.children);
    cashedArray = [...listItems];
    listItems.sort((a, b) => {
      const priceA = parseFloat(a.querySelector('p:first-child').textContent);
      const priceB = parseFloat(b.querySelector('p:first-child').textContent);
      return priceB - priceA;
    });
    listItems.forEach((item) => {
      listGroup.appendChild(item);
    });
  } else if (cashedArray.length) {
    cashedArray.forEach(item => {
      listGroup.appendChild(item);
    })
  }
});

const storedItems = JSON.parse(localStorage.getItem('items')) || [];

function createAndDisplayItem(item, index) {
  const listItem = document.createElement('div');
  listItem.className = 'hero-list-group-item';

  const price = document.createElement('p');
  price.textContent = item.price;
  listItem.appendChild(price);

  const description = document.createElement('p');
  description.textContent = item.description;
  listItem.appendChild(description);

  const image = document.createElement('img');
  image.src = item.image;
  image.classList.add('image-styled');
  image.style.height = '300px'; 
  listItem.appendChild(image);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    storedItems.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(storedItems));

    listGroup.removeChild(listItem);
  });
  deleteButton.classList.add('delete-button');
  listItem.appendChild(deleteButton);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    editItem(index);
  });
  editButton.classList.add('edit-button');
  listItem.appendChild(editButton);

  listGroup.appendChild(listItem);
}

storedItems.forEach(createAndDisplayItem);

function editItem(index) {
  const item = storedItems[index];

  const newPrice = prompt('Enter a new price:', item.price);
  const newDescription = prompt('Enter a new description:', item.description);
  const newImage = prompt('Enter a new image URL:', item.image);

  if (newPrice !== null && newDescription !== null && newImage !== null) {
    item.price = newPrice;
    item.description = newDescription;
    item.image = newImage;

    updateDisplayedItem(index, item);
  }
}

function updateDisplayedItem(index, item) {
  const listItem = listGroup.children[index];

  if (listItem) {
    const price = listItem.querySelector('p:first-child');
    price.textContent = item.price;

    const description = listItem.querySelector('p:nth-child(2)');
    description.textContent = item.description;

    const image = listItem.querySelector('img');
    image.src = item.image;
  }
}












