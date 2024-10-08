const menuData = {
    "costos": [
        {"name": "RON", "items": [
            {"name": "Cuba Libre", "price": "$4,00"},
            {"name": "Pasion Daiquiri", "price": "$4,00"},
            {"name": "Mojito Cubano", "price": "$4,00"},
            {"name": "Mojito Maracuyá", "price": "$4,00"},
            {"name": "Mai-Tai", "price": "$4,00"},
            {"name": "Apple de Liria", "price": "$4,00"},
            {"name": "Piña Colada", "price": "$5,00"}
        ]},
        {"name": "VODKA", "items": [
            {"name": "Caipiroska", "price": "$4,00"},
            {"name": "Destornillador", "price": "$4,00"},
            {"name": "Sex on the beach", "price": "$4,00"},
            {"name": "Vodka Tonic Blue", "price": "$4,00"},
            {"name": "Ruso Blanco", "price": "$4,00"},
            {"name": "Ruso Negro", "price": "$4,00"},
            {"name": "Martini Chocolate", "price": "$4,00"},
            {"name": "Apple Martini", "price": "$4,00"}
        ]},
        {"name": "WHISKY", "items": [
            {"name": "BeeGee", "price": "$5,00"},
            {"name": "Café Irlandés", "price": "$5,00"},
            {"name": "Daysi", "price": "$5,00"},
            {"name": "Whisky Sour", "price": "$5,00"},
            {"name": "Padrino", "price": "$5,00"}
        ]},
        {"name": "TEQUILA", "items": [
            {"name": "Tequila sunrice", "price": "$4,00"},
            {"name": "Nieblas del Caribe", "price": "$4,00"},
            {"name": "Paloma", "price": "$4,00"},
            {"name": "Margarita", "price": "$4,00"},
            {"name": "Pasión Margarita", "price": "$4,00"}
        ]},
        {"name": "GIN", "items": [
            {"name": "Melissa", "price": "$4,00"},
            {"name": "Alexander", "price": "$4,00"},
            {"name": "Gimlet", "price": "$4,00"},
            {"name": "Pink Lady", "price": "$4,00"},
            {"name": "Tom Collins", "price": "$4,00"}
        ]},
        {"name": "DE LA CASA", "items": [
            {"name": "Wisky doble A", "price": "$6,00"},
            {"name": "Orgasmo AA", "price": "$7,00"},
            {"name": "Saltamontes AA", "price": "$7,00"},
            {"name": "Long Iceland Iced Tea", "price": "$7,00"},
            {"name": "Doble A", "price": "$7,00"},
            {"name": "Satanas", "price": "$7,00"},
            {"name": "Michelada limón", "price": "$3,50"},
            {"name": "Michelada maracuyá", "price": "$4,00"}
        ]},
        {"name": "CERVEZAS", "items": [
            {"name": "Coronita 210ml", "price": "$1,50"},
            {"name": "Club 330ml", "price": "$2,00"},
            {"name": "Club 550ml", "price": "$2,75"},
            {"name": "Corona 355ml", "price": "$4,00"},
            {"name": "Stella Artois 330ml", "price": "$4,00"},
            {"name": "Modelo 355ml", "price": "$4,50"}
        ]},
        {"name": "SHOTS", "items": [
            {"name": "Cucaracha 1 oz", "price": "$1,00"},
            {"name": "Cucaracha 1.5 oz", "price": "$1,50"},
            {"name": "6 Shots 1 oz", "price": "$5,00"}
        ]},
        {"name": "PICADITAS", "items": [
            {"name": "Nachos con queso", "price": "$4,00"},
            {"name": "Nachos con guacamole", "price": "$4,00"},
            {"name": "Papitas AA", "price": "$4,00"},
            {"name": "Volquetero", "price": "$5,00"}
        ]}
    ]
};

function renderMenu() {
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';

    menuData.costos.forEach(category => {
        const categoryItem = document.createElement('li');
        
        // Título de la categoría
        const categoryTitle = document.createElement('div');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category.name;
        categoryItem.appendChild(categoryTitle);
        
        // Contenedor de los ítems de la categoría
        const categoryItems = document.createElement('div');
        categoryItems.classList.add('category-items');
        category.items.forEach(item => {
            const menuItem = document.createElement('li');
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');

            const itemName = document.createElement('div');
            itemName.classList.add('item-name');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('div');
            itemPrice.classList.add('item-price');
            itemPrice.textContent = item.price;

            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemPrice);
            menuItem.appendChild(itemContainer);
            categoryItems.appendChild(menuItem);
        });
        categoryItem.appendChild(categoryItems);

        // Añadir el evento click para expandir o contraer
        categoryTitle.addEventListener('click', () => {
            categoryItem.classList.toggle('active');
        });
        
        menuItems.appendChild(categoryItem);
    });
}

// Asegúrate de que el DOM esté completamente cargado antes de ejecutar la función
document.addEventListener('DOMContentLoaded', renderMenu);