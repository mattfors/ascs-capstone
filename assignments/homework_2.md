# Task Explanation: Understanding the Pizza Recipe Controller
In this assignment, you're going to learn how the Pizza Recipe Controller works, and you'll adapt it to display your own journal entries instead of pizza recipes.

You’ll also notice some changes in the files, such as the move from plain HTML files to .hbs files. This change is due to the use of Handlebars, which is a template engine. Handlebars makes it easier to create reusable parts of your website (like a navigation bar), which is why you now see a file like navbar.hbs that includes the same navigation across different pages.

### 1. Data Structure: The Pizza Recipes
The controller starts with a list of pizza recipes, each containing details about the pizza:

* `category`: The type of pizza (e.g., "Margherita" or "Pepperoni").
* `entryDate`: The date when the pizza was made.
* `toppings`: What toppings are on the pizza.
* `sauce`: The type of sauce used.
* `description`: A short description of the pizza.

Example of the pizza recipe data:
```javascript
const pizzaRecipes = [
    { category: 'Margherita', entryDate: '2023-10-01', toppings: 'Mozzarella, Basil', sauce: 'Tomato', description: 'Classic Margherita pizza' },
    { category: 'Pepperoni', entryDate: '2023-10-02', toppings: 'Mozzarella, Pepperoni', sauce: 'Tomato', description: 'Pepperoni pizza with tomato sauce' },
    { category: 'BBQ Chicken', entryDate: '2023-10-03', toppings: 'Chicken, Red Onions, Cilantro', sauce: 'BBQ', description: 'BBQ Chicken pizza with red onions and cilantro' }
];
```

### 2. Controller Logic: Showing Entries
The Alpine.js framework is used in the controller to manage the display of journal entries. Let’s look at how it works:

* `entryId`: This keeps track of the current entry you are viewing. It starts at 0, meaning the first journal entry.
* `entry`: This stores the current entry’s data (title, date, etc.) and gets updated whenever you change the entry.

#### Key Functions:
* `init()`: This function sets up the initial state and loads the first entry when the page is loaded.

```javascript
init() {
    this.loadEntry();
}
```

* `loadEntry()`: This loads the current entry based on entryId from the list of entries.
```javascript
loadEntry() {
    this.entry = pizzaRecipes[this.entryId];  // Loads current journal entry
}

```

* `prevEntry()`: This function allows the user to go to the previous journal entry. It won’t change if you're already at the first entry.
```javascript
prevEntry() {
    if (this.entryId > 0) {  // Ensures you don’t go below index 0
        this.entryId--;
        this.loadEntry();
    }
}
```

* `nextEntry()`: This function allows the user to go to the next journal entry. It won’t change if you're at the last entry.
```javascript
nextEntry() {
    if (this.entryId < pizzaRecipes.length - 1) {  // Ensures you don’t go past the last entry
        this.entryId++;
        this.loadEntry();
    }
}
```


## Good Luck!
Now it’s up to you! Take the pizza recipe example and adapt it to your own journal entries. Follow the steps, replace the recipe data with your journal entries, and you’ll have your own journal entry viewer.

In the previous homework, you learned how to use `store.get(this.key)` to retrieve your journal entries.

Good luck, and have fun coding!
