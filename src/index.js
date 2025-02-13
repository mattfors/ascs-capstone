import './styles.css';
import Alpine from 'alpinejs';
import store from 'storejs';

export function hello() {
    return 'hi';
}

const entryController = {
    message: 'Hello, Data Entry!',
    data: '',
    key: 'journal_entry',

    addData() {
        const currentValues = store.get(this.key) || [];
        store.set(this.key, [...currentValues, this.data]);
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
    console.log('alpine init');
    Alpine.data('entryController', () => entryController);
});

window.Alpine = Alpine;
Alpine.start();

