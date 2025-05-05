# JPJuliao Gutenberg Blocks

A WordPress plugin containing custom Gutenberg blocks built with React and TypeScript.

## Description

This plugin provides a collection of custom blocks for the WordPress Gutenberg editor, enhancing content creation capabilities. Currently, it includes a dynamic Dialog block powered by Radix UI.

## Technologies Used

* **WordPress:**
  * `@wordpress/block-editor`
  * `@wordpress/blocks`
  * `@wordpress/i18n`
  * `@wordpress/components`
  * `@wordpress/scripts`
* **React:**
  * `react`
  * `react-dom`
* **TypeScript**
* **Webpack**
* **Radix UI:**
  * `@radix-ui/react-dialog`
  * `@radix-ui/react-icons`
* **TailwindCSS:**
* **CSS:**
	* `postcss`
	* `autoprefixer`


## Blocks Included

* **Dialog Block (`jpjuliao/dialog`)**
  * Allows embedding a trigger button that opens a modal dialog.
  * Content within the editor:
    * Editable trigger button text.
    * Editable dialog title (supports bold, italic).
    * Editable dialog description (supports bold, italic, link).
    * Editable main dialog content (supports bold, italic, link, list).
  * Frontend rendering: Uses Radix UI's Dialog component for an accessible and interactive modal experience. The block saves a placeholder `div` with data attributes and uses a frontend script (`view.js`) to hydrate this placeholder into a fully functional React component.

## Installation

1. **Clone the repository:**

    ```bash
    git clone jpjuliao/wp-gutenberg-blocks.git wp-content/plugins/jpjuliao-gutenberg-blocks
    ```

2. **Navigate to the plugin directory:**

    ```bash
    cd wp-content/plugins/jpjuliao-gutenberg-blocks
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Build the assets:**
    * For development (with file watching):

        ```bash
        npm run start
        ```

    * For production:

        ```bash
        npm run build
        ```

5. **Activate the plugin:**
    * Go to your WordPress Admin dashboard.
    * Navigate to "Plugins".
    * Find "JPJuliao Gutenberg Blocks" and click "Activate".

## Usage

Once activated, the "Dialog" block will be available in the Gutenberg editor block inserter. Add it to your posts or pages and configure the button text, title, description, and content directly within the editor. The frontend script will automatically handle rendering the interactive dialog on the published page.

---

*Note: Build commands (`npm run start`, `npm run build`) assume the use of `@wordpress/scripts`. Adjust if using a different build tool.*
