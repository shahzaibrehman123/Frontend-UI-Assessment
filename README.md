# Project Name

## Overview

Briefly introduce your project and its purpose. Explain what problem it aims to solve or what functionality it provides.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Vercel Live](#vercel-Live)


## Features

1. **Sidebar Navigation:**
   - Toggle sidebar open/close.
   - Display user avatar and navigation icons.

2. **Right Slider:**
   - Display content in a right sidebar when the sidebar is open.

3. **VideoSection:**
   - Display a list of recent videos.
   - Filter videos by category (All, Ads video, Ai generated video, Marketing video).
   - Display video thumbnails, titles, and creation dates.
   - Collaborators feature:
     - Display a list of collaborators with avatar images.
     - Ability to add new collaborators through a modal.
   - Search functionality to search for videos.
   - Responsive design for various screen sizes.

4. **CollaboratorModal:**
   - Display a modal for adding new collaborators.
   - Search for collaborators by name or email.
   - Add collaborators to the list.

5. **Navbar:**
   - Display user avatar and information.
   - Display a list of collaborators with avatar images.
   - Responsive design for various screen sizes.


## Project Structure

``` your-project/
|-- src/
|   |-- components/
|   |   |-- Drawer
|   |   |-- Navbar
        |-- Sidebar
        |-- VideoSection
|   |-- Assets/
|   |   |-- CardAssets
        |-- NavbarAssets
        |-- SidebarAssets
        |-- VideoSection
|   |-- Utils/
|   |   |-- CurrentDate.js
|-- public/
|   |-- index.html
|-- package.json
|-- README.md
|-- ...
```



## Prerequisites

Specify any prerequisites that users or developers need before they can use or contribute to your project. This could include software, hardware, or accounts. Include links or installation instructions where necessary.

Example:
- Node.js (v14.0 or higher): [Download and Install Node.js](https://nodejs.org/)
- Git: [Download and Install Git](https://git-scm.com/downloads)

## Getting Started

Provide step-by-step instructions on how to set up the project locally. Include code snippets, commands, or configuration files that need to be modified.

Example:

1. Clone the repository:

   ```bash
   git clone https://github.com/shahzaibrehman123/Frontend-UI-Assessment.git

2. Navigate to the directory where you want to create your React project. You can use the cd command to change directories:

   ```bash
   cd path/to/your/project/directory

3. Installation for the project:

   ```bash
   npm install

4. run the project:

   ```bash
   npm run start

## Vercel Live
 Website Link: 
```bash
   https://frontend-ui-assessment.vercel.app/