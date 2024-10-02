# Sticky Notes App

A **React-based Sticky Notes Application** where users can create, move, and save sticky notes on the screen. The app uses `localStorage` to persist the notes and their positions, providing a seamless experience when refreshing the page.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- Add, move, and remove sticky notes.
- Save note content and positions using `localStorage`.
- Dynamic and draggable sticky notes.
- Responsive design (can be restricted from mobile view if needed).
- Styled with Tailwind CSS for easy customization and shadcn components (https://ui.shadcn.com/) for faster development.

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shubham03mathur/sticky-notes
   ```

2. Navigate to the project directory:

   ```bash
   cd sticky-notes
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

### Running the App

To start the development server, run:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The app will be available at `http://localhost:5173/`.

### Build for Production

To build the project for production, run:

```bash
npm run build
```

This will output the optimized production-ready build in the `dist` folder.

## Usage

1. Open the app in your browser.
2. Add sticky notes by typing in the input fields.
3. Move notes around by clicking and dragging.
4. The positions and content of the notes are automatically saved in `localStorage`.
5. If you refresh the page, the sticky notes will retain their last state.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Lightning-fast development environment for modern web projects.
- **localStorage**: To persist notes and their positions between page reloads.
- **ESBuild**: Used for efficient and fast JavaScript and JSX bundling.


## Future Improvements

- **Mobile Support**: The app is currently designed for desktop use only. Add full mobile responsiveness or intentionally block it from mobile devices.
- **Handling large text**: Ellipsis (`...`) handling for overflowing text.
- **Note Resizing**: Allow users to resize sticky notes.
- **Customizable Colors**: Let users change the background color of each note.
- **Better Drag and Drop**: Improve the smoothness of drag-and-drop functionality across various screen sizes.
- **Tags/Categories**: Organize notes into categories or use tags for better management.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---