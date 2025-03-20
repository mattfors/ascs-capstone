import './styles.css';
import Alpine from 'alpinejs';
import store from 'storejs';

export function hello() {
    return 'hi';
}

const entryController = {
    message: 'Hello, Data Entry!',
    data: '',
    category: '',
    mood: '',
    key: 'journal_entry',

    addData() {
        const currentValues = store.get(this.key) || [];
        store.set(this.key, [...currentValues, {
            data: this.data,
            entryDate: new Date(),
            category: this.category,
            mood: this.mood
        }]);
    },

    clearData() {
        store.remove(this.key);
    },

    getDataAsJson() {
        const data = store.get(this.key);
        return JSON.stringify(data, null, 2);
    }
};

// Registering the Alpine component
document.addEventListener('alpine:init', () => {
    Alpine.data('entryController', () => entryController);
});

window.Alpine = Alpine;
Alpine.start();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
