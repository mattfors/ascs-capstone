import './styles.css';
import Alpine from 'alpinejs';

const entryViewer = {
    journalEntrees: [
        { category: 'Good Day', entryDate: '2025-2-24', time: '1:10AM', description: 'Today was a good day…' },
        { category: 'Bad Day', entryDate: '2025-2-25', time: '1:12AM', description: 'Today was a bad day…' },
        { category: 'Medium Day', entryDate: '2025-2-26', time: '1:15AM', description: 'Today was pretty medium…' },
        { category: 'Dreams', entryDate: '2025-2-27', time: '1:17AM', description: 'Last night I dreamed about…' }
    ],
    entry: {},
    entryId: 0,

    init() {
        this.loadEntry();
    },

    loadEntry() {
        this.entry = this.journalEntrees[this.entryId];
    },

    prevEntry() {
        if (this.entryId > 0) {
            this.entryId--;
            this.loadEntry();
        }
    },

    nextEntry() {
        if (this.entryId < this.journalEntrees.length - 1) {
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
