import { getAllSolar, postSolar, updateSolar, Delete } from "./api.js";

class Solar {
    constructor(name, price, power, image) {
        this.name = name;
        this.price = price;
        this.power = power;
        this.image = image;
    }

    async Delete() {
        await deleteSolar(this.id);
    }
}

let solarsData = [];

const fetchData = async () => {
    solarsData = await getAllSolar();
    renderSolars(solarsData);
};

fetchData();

let filteredSolars = solarsData;

function renderSolars(solars) {
    const solarList = document.getElementById('solar-list');
    solarList.innerHTML = '';

    solars.forEach((solar, index) => {
        const solarItem = document.createElement('div');
        solarItem.classList.add('solar-item');
        solarItem.innerHTML = `
            <img src="${solar.image}" alt="${solar.name}" width="200">
            <p>Name: ${solar.name}</p>
            <p>Price: ${solar.price}₴</p>
            <p>Power: ${solar.power}</p>
            <button class="edit-button" data-index="${index}">Edit</button>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        solarList.appendChild(solarItem);

        const editButton = solarItem.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            openEditModal(solars[index]);
        });

        const deleteButton = solarItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            deleteSolar(solars[index]);
        });
    });
}
const cancelSearchButton = document.getElementById("cancel-search-button");

cancelSearchButton.addEventListener("click", () => {
    document.getElementById('search-input').value = "";
    filteredSolars = solarsData;
    renderSolars(filteredSolars);
    calculateTotalPrice();
});

document.getElementById('sort-by-price').addEventListener('click', () => {
    const sortedSolars = [...filteredSolars].sort((a, b) => a.price - b.price);
    renderSolars(sortedSolars);
});

document.getElementById('sort-by-name').addEventListener('click', () => {
    const sortedSolars = [...filteredSolars].sort((a, b) => a.name.localeCompare(b.name));
    renderSolars(sortedSolars);
});

function calculateTotalPrice() {
    const totalAmount = filteredSolars.reduce((total, solar) => total + solar.price, 0);
    document.getElementById('total-amount').textContent = totalAmount;
}

calculateTotalPrice();

// відкриття модального вікна для додавання товару
function openCreateModal() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "block";
}

// додати слухача події для кнопки "Додати товар"
document.getElementById("open-create-modal-button").addEventListener("click", openCreateModal);

// додавання нового товару
async function createSolar() {
    const name = document.getElementById("create-name").value;
    const price = parseFloat(document.getElementById("create-price").value);
    const image = document.getElementById("create-image").value;
    const power = parseFloat(document.getElementById("create-power").value);


    const newSolar = new Solar(name, price, power, image);
    await postSolar(newSolar);
    solarsData.push(newSolar);

    closeModalCreate();

    renderSolars(solarsData);
    calculateTotalPrice();
}

// Додавання слухача події для кнопки "зберегти" в модальному вікні для додавання товару
document.getElementById("create-modal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    createSolar();
});

//закриття модального вікна для додавання товару
function closeModalCreate() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "none";
}

//функцію для закриття модального вікна для редагування товару
function closeModalEdit() {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "none";
}

//додавання слухачі подій для закриття модальних вікон
document.getElementById("close-create-modal").addEventListener("click", closeModalCreate);
document.getElementById("close-edit-modal").addEventListener("click", closeModalEdit);

// відкриття модального вікна для редагування товару
async function openEditModal(solar) {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "block";

    // редагування
    document.getElementById("edit-name").value = solar.name;
    document.getElementById("edit-price").value = solar.price;
    document.getElementById("edit-power").value = solar.power
    document.getElementById("edit-image").value = solar.image;

    // обробник події для збереження редагованого товару
    async function saveEditedSolar(solar) {
        // оновлення редагування
        solar.name = document.getElementById("edit-name").value;
        solar.price = parseFloat(document.getElementById("edit-price").value);
        solar.power = parseFloat(document.getElementById("edit-power").value)
        solar.image = document.getElementById("edit-image").value;
    
        await updateSolar(solar.id, solar);
    
        closeModalEdit();
    
        const updated = await getAllSolar();
        renderSolars(updated);
        calculateTotalPrice();
    }
    

    // обробник події для збереження редагованого товару
    document.getElementById("edit-modal-form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        saveEditedSolar(solar);
    });
}

async function deleteSolar(solar) {
    await Delete(solar.id); // Змінено ім'я функції на deleteSolar, але може бути плутаними
    solarsData = solarsData.filter(item => item !== solar);

    const updated = await getAllSolar();
    renderSolars(updated);

    calculateTotalPrice();
}
