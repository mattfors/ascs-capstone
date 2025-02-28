import './styles.css';
import Alpine from 'alpinejs';
import store from 'storejs';

const journalEntrees = store.get('journal_entry') || [];
const entryViewer = {
    entry: {},
    entryId: 0,

    init() {
        this.loadEntry();
    },

    loadEntry() {
        this.entry = journalEntrees[this.entryId];
    },

    prevEntry() {
        if (this.entryId > 0) {
            this.entryId--;
            this.loadEntry();
        }
    },

    nextEntry() {
        if (this.entryId < journalEntrees.length - 1) {
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
