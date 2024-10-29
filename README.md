
# Random Password Generator 🔐

This project is a **Random Password Generator** built using HTML, CSS, and JavaScript. It allows users to generate secure, randomized passwords with a mix of uppercase letters, lowercase letters, numbers, and symbols. The password generated is 10 characters long, ensuring a basic level of complexity and security.

## 🌟 Features

- **Randomized Password Generation**: Creates a 10-character password each time the button is clicked.
- **Character Variety**: The password includes uppercase letters, lowercase letters, numbers, and symbols.
- **User-Friendly Interface**: Simple and clean UI to make generating passwords easy and intuitive.
- **Responsive Design**: Works on both desktop and mobile screens.

## 🚀 Getting Started

### Prerequisites

You'll need a modern web browser to view and use this project.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/random-password-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd random-password-generator
   ```

3. Open `index.html` in your preferred web browser to start the application.

### Usage

1. Open the app by launching `index.html`.
2. Click the **"Generate Password"** button to create a new random password.
3. The generated password will be displayed in the input box. You can then copy and use it wherever needed.

## 📂 Project Structure

Here's a quick overview of the files in this project:

```
Random Password Generator
│
├── index.html         # The main HTML file
├── style.css          # CSS file for styling the UI
├── script.js          # JavaScript file containing password generation logic
└── README.md          # Documentation for the project
```

### File Descriptions

- **index.html**: The HTML file that sets up the structure and layout of the page, including the password display box and the generate button.
- **style.css**: This CSS file styles the page, giving it a visually appealing layout with a clean, modern design.
- **script.js**: Contains the JavaScript logic to generate random passwords based on a combination of character sets.

## 🛠️ Code Explanation

### JavaScript Password Generation Logic

The `create()` function in `script.js` is responsible for generating the random password. Here's a breakdown of how it works:

1. **Character Sets**:
   - Uppercase letters: `uppercase = "QWERTYUIOPLKJHGFDSAZXCVBNM"`
   - Lowercase letters: `lowercase = "qwertyuioplkjhgfdsazxcvbnm"`
   - Numbers: `number = "1234567890"`
   - Symbols: `symbols = "!@#$%^&*/-+<>?="`
   - `all`: A combined string of all character sets for more variety.

2. **Password Creation**:
   - The function ensures at least one character from each character set (uppercase, lowercase, number, symbol) is included in the password.
   - Then, it fills the rest of the password with randomly selected characters from `all` until it reaches the specified length (10 characters).


## 🎨 Styles and UI

The styling for this project is simple yet effective, providing an intuitive user interface. The `style.css` file defines styles for the container, buttons, and input box, ensuring the application is easy to use.


## 🤝 Contributing

Feel free to contribute by forking the project, making enhancements, and submitting a pull request. All suggestions and improvements are welcome!
