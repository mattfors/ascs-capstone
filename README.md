# ASCS Capstone

This is the ASCS Capstone project. It is a simple web application built with JavaScript and Webpack.

- **Demo Page**: [https://mattfors.github.io/ascs-capstone](https://mattfors.github.io/ascs-capstone)
- **Presentation Page**: [https://mattfors.github.io/ascs-capstone/presentation/](https://mattfors.github.io/ascs-capstone/presentation/)


## Prerequisites

- Node.js (version 20 or later)
- npm (Node Package Manager)

## Getting Started

### Installation

1. Install the dependencies:
   ```sh
   npm install
    ```

### Development
1. To start the development server:
   ```sh
   npm start
   ```
    This will start the server at http://localhost:8080/.  

## Opening in GitHub Codespaces

To open this project in GitHub Codespaces, follow these steps:

1. **Navigate to the Repository**: Go to the GitHub repository for this project.

2. **Open in Codespaces**:
   - Click the green `Code` button.
   - Select the `Codespaces` tab.
   - Click `New codespace` to create a new Codespace for this repository.

3. **Wait for Setup**: GitHub Codespaces will automatically set up the development environment based on the configuration in the `.devcontainer` directory.


## Starting VS Code Live Share

To start a Live Share session in VS Code, follow these steps:

1. **Open the Project**: Open the project in VS Code.

2. **Start Live Share Session**:
   - Click on the Live Share icon in the status bar or use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and type `Live Share: Start Collaboration Session`.
   - A link will be generated. Share this link with your collaborators.

3. **Join Live Share Session**:
   - Collaborators can join the session by clicking on the link you shared. They will be able to edit and debug the code in real-time.

You can now collaborate with others in real-time using VS Code Live Share.


## Generating a QR Code
To generate a QR code for a URL, use the scripts/generate-qr.js script. You need to provide both the URL and the output file path as parameters.  

1. Install Dependencies:  
   ```sh
   npm install
    ```
   
2. Generate QR Code:  
`node scripts/generate-qr.js <URL> <output-file-path>`
Example:  
   ```sh
   node scripts/generate-qr.js https://mattfors.github.io/ascs-capstone/ src/presentation/qr-code.png
    ```
