const createForm = document.querySelector('#create-form');
const priceInput = document.querySelector('#exampleInputPrice1');
const descriptionInput = document.querySelector('#exampleInputDescription1');
const imageInput = document.querySelector('#exampleInputImage1');

const savedItems = JSON.parse(localStorage.getItem('items')) || [];

function addNewItem(price, description, image) {
  const newItem = { price, description, image };
  savedItems.push(newItem);
  localStorage.setItem('items', JSON.stringify(savedItems));
}

createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const price = priceInput.value.trim();
  const description = descriptionInput.value.trim();
  const image = imageInput.value.trim();

  if (price && description && image) {
    addNewItem(price, description, image);
    priceInput.value = '';
    descriptionInput.value = '';
    imageInput.value = '';
  }
});
