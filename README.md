Overview
The Dashboard application is designed to manage and display various widgets categorized under different sections. The application allows users to search for widgets, add new widgets, and view the widgets in an organized and user-friendly manner. The layout is responsive and leverages Tailwind CSS for styling, ensuring a clean and modern interface.

Features
1-Dashboard View:
1.1-Displays an overview of all categories and their associated widgets.
1.2-Allows users to search for widgets by name across all categories.
1.3-Provides options to add new widgets, refresh the page, and view additional controls.

2-Category Management:
2.1-Each category is displayed with a header and a list of its widgets.
2.2-Widgets within a category are organized in a flexible grid layout, adjusting automatically to screen size.

3-Widget Display:
3.1-Each widget is represented by a Widget component, displaying its name, description, and associated controls (e.g., delete, edit).
3.2-Widgets are filtered based on the search input, allowing users to quickly find relevant items.

4-Drawer for Adding Widgets:
4.1-A drawer component slides in from the right, providing a form for adding new widgets.
4.2-The drawer can be opened and closed with ease, ensuring a smooth user experience.

5-Additional Components
5.1-DoughnutChart Component
5.1.1-Purpose:Provides a visual representation of data using a doughnut chart. This is typically used to give users an overview of their data at a glance.

      5.1.2-Integration:The DoughnutChart component is placed near the top of the Dashboard to provide an immediate visual summary.

5.2-Progress Bar
5.2.1-Purpose:The Progress Bar component is used to visually represent the progress of a task or process. It provides users with a quick and intuitive way to understand how much of a task has been completed and how much is left. In the context of the Dashboard application, progress bars might be used to represent the status of various operations, tasks, or metrics within the widgets or other components.

6-Styling and Responsiveness
The application uses Tailwind CSS for styling, ensuring that all components are responsive and adapt well to different screen sizes.
Flexbox and grid utilities are extensively used to create a flexible and dynamic layout.


Tech Stack Overview
1-React:The application is built using React, a popular JavaScript library for building user interfaces. React’s component-based architecture allows for reusable and maintainable UI components, like the Progress Bar.

2-Ant Design:The Progress Bar component is implemented using Ant Design (AntD), a comprehensive UI framework for React. AntD provides pre-built, highly customizable UI components that integrate seamlessly with React.
Tailwind CSS:

3-Tailwind CSS is used for styling the components. It’s a utility-first CSS framework that allows for rapid styling with predefined classes, ensuring consistency and responsiveness across the application.
JavaScript/JSX:

4-JavaScript/JSX is the scripting language used to create and manage the React components. JSX allows writing HTML-like syntax directly within JavaScript, making it easier to visualize the UI structure.


Steps to Run the Dashboard Application Locally
1-Download the file
2-Navigate to the Project Directory
3-Install Dependencies
4-Start the Development Server
