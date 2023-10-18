const listGroup = document.querySelector('.hero-list-group');
const createForm = document.querySelector('#create-form');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const toggleSwitch = document.querySelector('#toggle-switch');
const sumButton = document.querySelector('.btn-sum');

const listArray = [];

const createFormHandler = (e) => {
  e.preventDefault();

  if (
    e.target.exampleInputPrice1?.value &&
    e.target.exampleInputDescription1?.value &&
    e.target.exampleInputImage1?.value
  ) {
    const item = document.createElement('div');
    item.className = 'hero-list-group-item';
    const price = document.createElement('p');
    const description = document.createElement('p');
    const image = document.createElement('img');

    price.appendChild(
      document.createTextNode(e.target.exampleInputPrice1?.value)
    );
    description.appendChild(
      document.createTextNode(e.target.exampleInputDescription1?.value)
    );
    image.src = e.target.exampleInputImage1?.value;
    image.classList.add('image-styled');

    item.appendChild(price);
    item.appendChild(description);
    item.appendChild(image);

    listGroup.appendChild(item);
  }

  e.target.exampleInputPrice1.value = '';
  e.target.exampleInputDescription1.value = '';
  e.target.exampleInputImage1.value = '';
};

createForm.addEventListener('submit', createFormHandler);

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




