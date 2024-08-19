# Real Time React HTML/CSS Generator and Render

## Overview

The Real Time React Generator is a web application that allows users to generate website code based on text descriptions. It uses AI to create HTML and CSS code, which is then displayed in real-time in a preview window. This tool is perfect for quickly prototyping website designs or learning about web development.

## Features

- Text-based website generation
- Real-time preview of generated HTML and CSS
- Code editor for HTML and CSS with syntax highlighting
- Responsive design for use on various devices

## Technologies Used

- React.js
- Groq API for AI-powered code generation
- Monaco Editor for code editing
- Custom iframe-based preview component

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- A Groq API key (sign up at [https://www.groq.com](https://www.groq.com))

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/real-time-react-component-generator.git
   ```

2. Navigate to the project directory:
   ```
   cd real-time-react-component-generator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Groq API key:
   ```
   REACT_APP_GROQ_API_KEY=your_api_key_here
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000`

3. In the input field, enter a description of the website you want to generate.

4. Click the "Generate" button or press Enter.

5. The generated HTML and CSS will appear in the code editors, and a preview of the website will be displayed in the preview pane.

6. You can modify the generated code in the editors, and the preview will update in real-time.

## Contributing

Contributions to the Real Time React Component Generator are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or feedback, please open an issue on the GitHub repository.

## Acknowledgements

- [React](https://reactjs.org/)
- [Groq](https://www.groq.com)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Create React App](https://create-react-app.dev/)
