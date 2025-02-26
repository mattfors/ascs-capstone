import './styles.css';
import Alpine from 'alpinejs';

const pizzaRecipes = [
    { category: 'Good Day', entryDate: '2023-10-01', time: '10:45PM', description: 'Today was a good day...' },
    { category: 'Bad Day', entryDate: '2023-10-02', time: '11:22PM', description: 'Today was a bad day...' },
    { category: 'Medium Day', entryDate: '2023-10-03', time: '10:12PM', description: 'Today was in the middle...' }
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
