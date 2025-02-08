# Homework Assignment: Interactive Form with Alpine.js and Store.js
### Learning Objectives:
By completing this assignment, you will:

1. Learn how to make an interactive webpage with Alpine.js.
2. Understand how to use Store.js to save data in a browser's storage.
3. Practice creating dynamic forms that can save, load, and clear data.

### Required Files:
You will need the following files for this assignment:

1. **src/index.html** – This is the HTML file where you will structure the webpage and bind the Alpine.js behavior.
2. **src/index.js** – This is the JavaScript file where you will define the Alpine.js controller and use Store.js to store and retrieve data.

### Assignment Overview:
In this assignment, you will:

1. **Understand the Example Code:** You will learn how to use Alpine.js to create an interactive input field with buttons that can save, load, and clear data.
2. **Apply it to Your Journal Entry:** Using the example, you will modify your journal input form to save, load, and clear the journal entry using Store.js.

### Setup Instructions:
* **Step 1:** Before starting, make sure to follow the instructions in the SETUP.md file to set up your GitHub Codespace.

* **Step 2:** Once your Codespace is set up, open the terminal and run the following command to start the development server:

```bash
npm start
```
This will start a local development server and you can see your changes live on your browser.


## Alpine.js
**Alpine.js** is a tool that helps make websites interactive without needing to write a lot of complicated code. It’s like giving your website some magic powers so that it can react to things, like button clicks or typing, without much effort.

### Old Way:
Using `document.addEventListener`

In regular JavaScript, when you want to do something after a button is clicked, you usually do this:

```html
<button id="myBtn">Click Me</button>
<script>
  const button = document.getElementById('myBtn');
  button.addEventListener('click', () => {
    alert('Button clicked!');
  });
</script>
```
Here:
+ You need to grab the button using JavaScript and tell it to listen for a click.
+ After the button is clicked, you show an alert or do something.

### New Way:

Using Alpine.js

With Alpine.js, you can make the same thing happen in a simpler way, right in the HTML:

```html
<div x-data="{ message: 'Hello!' }">
    <button @click="message = 'Button clicked!'">Click Me</button>
    <p x-text="message"></p>
</div>
```
Here:
+ `x-data` holds the information (like the message).
+ `@click` is an easy way to say "when the button is clicked, change the message".
+ `x-text` automatically updates the <p> tag to show the message.

For more details, check out the [official Alpine.js documentation](https://alpinejs.dev/start-here).


## What is Store.js?

[Store.js](https://github.com/jaywcjlove/store.js) is a small JavaScript tool that helps you save information on your computer's web browser. It works like a storage box where you can put things (like your name, settings, or game progress) and take them back later, even if you close the webpage and come back.

### Why Use Store.js?
- **Simple**: It’s really easy to save and get information.
- **Automatic**: You don't need to worry about saving the data properly — Store.js does it for you.
- **Works Everywhere**: It works on all major browsers like Chrome, Firefox, and Safari.

### Example:

```javascript
// Save data
store.set('username', 'JohnDoe');

// Get data
const username = store.get('username');
console.log(username); // Outputs: JohnDoe
```

# Understanding the Code: Alpine.js and Storing Data

This example shows how to use **Alpine.js** and **store.js** to make a simple form that can save, load, and clear data. Let’s break it down step by step!

## What is Happening in the Code?

The code is a small program that lets you:
1. Save the data you type into a text box.
2. Load the saved data.
3. Clear the saved data.

This is done using **Alpine.js** to make it interactive and **store.js** to save the data in the browser.

### The `entryController` Object

The `entryController` is like a toolbox where you store your data and the instructions (or **methods**) to interact with it. Here's the code for it:

```javascript
const entryController = {
    message: 'Hello, Data Entry!',  // The message displayed on the page
    data: '',  // Where the text you type is stored
    key: 'testing',  // The name used to save and get the data

    addData() {
        const currentValues = store.get(this.key) || [];  // Get saved data, or an empty list
        store.set(this.key, [...currentValues, this.data]);  // Save the new data
    },

    clearData() {
        store.remove(this.key);  // Remove the saved data
    },

    getDataAsJson() {
        const data = store.get(this.key);  // Get the saved data
        return JSON.stringify(data, null, 2);  // Convert it to a readable JSON format
    }
};
```
+ `message:` This is the message that will be shown on the webpage (e.g., "Data saved!").
+ `data:` This is where the text you type into the form will be stored.
+ `key:` This is the name used to store and retrieve the data in the browser.

+ **Methods:**
  + `addData():` Saves the text you typed into data to the browser.
  + `clearData():` Clears the saved data from the browser.
  + `getDataAsJson():` Returns the saved data in a readable JSON format.

### The HTML Part
This part connects your entryController object to the webpage using **Alpine.js**:

```html
<div x-data="entryController">
    <p x-text="message"></p>  <!-- Shows the message -->
    <input type="text" x-model="data" placeholder="Enter text here">  <!-- Binds the input field to 'data' -->

    <button class="primary" @click="addData(); message = 'Data saved!'">Save</button>  <!-- Saves the data and updates the message -->

    <button class="primary" @click="message = getDataAsJson()">Load</button>  <!-- Loads the saved data and shows it as JSON -->

    <button class="primary" @click="clearData(); message = getDataAsJson(key)">Clear</button>  <!-- Clears the data and shows empty JSON -->
</div>

```

+ `x-data="entryController"`: Connects the entryController object to the webpage. This lets you use the data and methods from entryController in the HTML.
+ `x-text="message"`: This updates the message on the page, showing whatever is in message.
+ `x-model="data"`: This links the text input field to the data variable. When you type something, it gets saved in data.
+ `@click="addData()`; message = 'Data saved!'": When you click "Save," it saves the data to the browser and changes the message to say "Data saved!".
+ `@click="message = getDataAsJson()"`: When you click "Load," it shows the saved data as a readable JSON string.
+ `@click="clearData(); message = getDataAsJson(key)"`: When you click "Clear," it deletes the saved data and shows the empty saved data as JSON.


### What’s Happening?
1. **Typing:** You type something into the text box.
2. **Save:** When you click Save, the text gets stored in the browser, and the message changes to "Data saved!".
3. **Load:** When you click Load, the saved data is displayed as JSON.
4. **Clear:** When you click Clear, all the saved data is deleted, and the page shows the empty data in JSON format.


# Good Luck!
You're all set to modify the journal input form and make it interactive. If you run into any issues or have questions, don’t hesitate to **contact your mentor** for help.
