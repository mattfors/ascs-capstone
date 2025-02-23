import './styles.css';
import Alpine from 'alpinejs';

const pizzaRecipes = [
    { category: 'Margherita', entryDate: '2023-10-01', toppings: 'Mozzarella, Basil', sauce: 'Tomato', description: 'Classic Margherita pizza' },
    { category: 'Pepperoni', entryDate: '2023-10-02', toppings: 'Mozzarella, Pepperoni', sauce: 'Tomato', description: 'Pepperoni pizza with tomato sauce' },
    { category: 'BBQ Chicken', entryDate: '2023-10-03', toppings: 'Chicken, Red Onions, Cilantro', sauce: 'BBQ', description: 'BBQ Chicken pizza with red onions and cilantro' }
];

const entryViewer = {
    entry: {},
    entryId: 0,

    init() {
        this.loadEntry();
    },

    loadEntry() {
        this.entry = pizzaRecipes[this.entryId];
    },

    prevEntry() {
        if (this.entryId > 0) {
            this.entryId--;
            this.loadEntry();
        }
    },

    nextEntry() {
        if (this.entryId < pizzaRecipes.length - 1) {
            this.entryId++;
            this.loadEntry();
        }
    }
};


document.addEventListener('alpine:init', () => {
    Alpine.data('entryViewer', () => entryViewer);
});

window.Alpine = Alpine;
Alpine.start();
