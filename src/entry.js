import './styles.css';
import Alpine from 'alpinejs';
import store from 'storejs';

const journalEntrees = store.get('journal_entry') || [];
const entryViewer = {
    entry: {},
    entryId: 0,
    isPrevDisabled: true,
    isNextDisabled: journalEntrees.length <= 1,

    init() {
        this.loadEntry();
        this.updateButtonStates();
    },

    loadEntry() {
        this.entry = journalEntrees[this.entryId] || {
            data: 'It’s quiet in here... Let’s make some memories with your first entry!',
            entryDate: new Date()
        };
    },

    prevEntry() {
        if (this.entryId > 0) {
            this.entryId--;
            this.loadEntry();
            this.updateButtonStates();
        }
    },

    nextEntry() {
        if (this.entryId < journalEntrees.length - 1) {
            this.entryId++;
            this.loadEntry();
            this.updateButtonStates();
        }
    },

    updateButtonStates() {
        this.isPrevDisabled = this.entryId === 0;
        this.isNextDisabled = this.entryId === journalEntrees.length - 1 || journalEntrees.length === 0;
    }
};


document.addEventListener('alpine:init', () => {
    Alpine.data('entryViewer', () => entryViewer);
});

window.Alpine = Alpine;
Alpine.start();
