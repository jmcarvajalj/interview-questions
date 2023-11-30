# HTML and CSS

## DOM manipulation with JS

### Understanding the DOM

The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document. The DOM provides a way to interact with and manipulate the HTML and CSS of a web page.

## Accessing Elements

You can access elements in the DOM using various methods. The most common ones are:

### getElementById

Retrieves an element by its ID.

```javascript
let elementById = document.getElementById("myElementId");
```

### getElementsByClassName

Retrieves elements by their class name.

```javascript
let elementsByClass = document.getElementsByClassName("myClassName");
```

### getElementsByTagName

Retrieves elements by their tag name.

```javascript
let elementsByTag = document.getElementsByTagName("div");
```

### querySelector

Retrieves the first element that matches a specific CSS selector.

```javascript
let element = document.querySelector("#myElementId .myClassName");
```

### querySelectorAll

Retrieves all elements that match a specific CSS selector.

```javascript
let elements = document.querySelectorAll(".myClassName");
```

## Modifying Elements:

Once you have a reference to an element, you can modify its content, attributes, or styles.

### innerHTML

Gets or sets the HTML content of an element.

```javascript
element.innerHTML = "New content";
```

### textContent

Gets or sets the text content of an element.

```javascript
element.textContent = "New text";
```

### setAttribute

Sets the value of an attribute on the specified element.

```javascript
element.setAttribute("src", "newimage.jpg");
```

### style

Accesses the inline styles of an element.

```javascript
element.style.color = "blue";
```

## Creating and Appending Elements:

You can create new elements and append them to the DOM.

### createElement

Creates a new HTML element.

```javascript
let newElement = document.createElement("div");
```

### appendChild

Appends a child element to another element.

```javascript
parentElement.appendChild(newElement);
```

## Event Handling:

You can attach event listeners to respond to user interactions.

```javascript
element.addEventListener("click", function () {
  alert("Element clicked!");
});
```

## Putting it all together

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Manipulation Example</title>
    <style>
      .highlight {
        color: red;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h1 id="myHeading">Hello, DOM!</h1>
    <button id="myButton">Click me</button>

    <script>
      // Accessing elements
      let heading = document.getElementById("myHeading");
      let button = document.getElementById("myButton");

      // Modifying elements
      heading.innerHTML = "Changed Heading";
      button.textContent = "Click me, please";

      // Creating and appending elements
      let newElement = document.createElement("p");
      newElement.textContent = "This is a new paragraph";
      document.body.appendChild(newElement);

      // Event handling
      button.addEventListener("click", function () {
        heading.classList.toggle("highlight");
      });
    </script>
  </body>
</html>
```

# HTML5

HTML5 (HyperText Markup Language 5) is the latest version of the standard markup language for creating web pages and web applications. It is a core technology of the World Wide Web and is designed to be used with CSS (Cascading Style Sheets) and JavaScript to create interactive and dynamic websites. Here's a basic overview of HTML5:

## HTML5 Document Structure

### Document Type Declaration (DOCTYPE)

```html
<!DOCTYPE html>
```

### HTML Root Element

```html
<html lang="en"></html>
```

### Head Section

Metadata, character set, viewport settings, and linked stylesheets.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Page Title</title>
</head>
```

### Body Section

The content of the web page.

```html
<body>
  <!-- Your content goes here -->
</body>
```

## HTML5 Elements

### Semantic Elements

HTML5 introduces semantic elements to better define the structure of a page, making it more meaningful for both browsers and developers.

```html
<header>
  ,
  <nav>
    ,
    <article>
      ,
      <section>
        ,
        <aside>
          ,
          <footer>
            ,
            <figure>
              ,
              <figcaption>
                ,
                <main>
                  , <mark>, <time>, etc. </time></mark>
                </main>
              </figcaption>
            </figure>
          </footer>
        </aside>
      </section>
    </article>
  </nav>
</header>
```

### Multimedia Elements

Embed audio and video content directly into your page.

```html
<audio src="audio.mp3" controls></audio>
<video src="video.mp4" controls></video>
```

### Forms:

Enhanced form elements with new input types and attributes.

```html
<form>
  <input type="text" placeholder="Username" required />
  <input type="password" placeholder="Password" required />
  <input type="email" placeholder="Email" required />
  <button type="submit">Submit</button>
</form>
```

### Canvas:

Allows for dynamic, scriptable rendering of 2D shapes and bitmap images.

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

### Local Storage and Session Storage

Provides a way for web applications to store data locally.

```javascript
localStorage.setItem("key", "value");
```

# HTML5 APIs

### Geolocation API

Retrieves geographical information of the user's device.

```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
```

### Web Storage API

Provides a way to store key/value pairs locally.

```javascript
localStorage.setItem("key", "value");
```

### Web Workers

Enables parallel processing by running scripts in the background.

```javascript
let worker = new Worker("worker.js");
```

### WebSockets

Enables bidirectional communication between a web browser and a web server.

```javascript
let socket = new WebSocket("ws://example.com/socket");
```

# CSS

Cascading Style Sheets (CSS) is a style sheet language used to describe the look and formatting of a document written in HTML or XML. CSS defines how elements should be displayed on a webpage, including layout, colors, fonts, and other visual aspects.

### CSS Syntax

CSS uses a rule-based syntax to apply styles to HTML elements. A CSS rule consists of a selector and a declaration block.

```css
selector {
  property: value;
}
```

- Selector: Targets the HTML element(s) you want to style.
- Property: Specifies the style attribute you want to change.
- Value: Defines the value for the specified property.

### Selectors

Selectors are patterns that match one or more elements on a page. They can be based on element names, classes, IDs, attributes, and more.

#### Element Selector

```css
p {
  color: blue;
}
```

#### Class Selector

```css
.my-class {
  font-size: 16px;
}
```

#### ID Selector

```css
#my-id {
  background-color: #f0f0f0;
}
```

#### Combining Selectors

```css
h1,
h2 {
  text-align: center;
}
```

### Box Model

All HTML elements can be considered as boxes. The CSS box model consists of margin, border, padding, and content areas.

```css
.box {
  margin: 10px;
  padding: 20px;
  border: 1px solid #333;
}
```

### Colors

Colors can be specified by name, RGB values, hexadecimal values, or HSL values.

```css
h1 {
  color: red;
}

p {
  background-color: #f0f0f0;
}
```

### Fonts

You can control the font family, size, style, and weight using CSS.

```css
body {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
}
```

### Layout

CSS can be used to control the layout of your page, including positioning, display, and responsiveness.

```css
.container {
  width: 80%;
  margin: 0 auto;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}
```

### Responsive Design

Use media queries to apply styles based on the characteristics of the device or screen.

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

### Transitions and Animations

Add smooth transitions and animations to elements.

```css
.button {
  transition: background-color 0.3s ease-in-out;
}

@keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
```

### Comments

Add comments to your CSS for better code readability.

```css
/* This is a comment */
```

### Linking CSS to HTML

Link your CSS file in the HTML document using the <link> tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Your Webpage</title>
  </head>
  <body>
    <!-- Your HTML content here -->
  </body>
</html>
```

## Flexbox

Flexbox, or the Flexible Box Layout, is a layout model in CSS designed to make it easier to design complex layouts and align items within a container. It provides an efficient way to distribute space and align items in a container, even when their size is unknown or dynamic.

### Container and Items

- Container {display: flex;}: To enable Flexbox on an element, you set its display property to flex. This makes it a flex container, and its direct children become flex items.

```css
.flex-container {
  display: flex;
}
```

- Flex Items: The children of a flex container become flex items, and they are laid out along the main axis of the flex container.

### Main Axis and Cross Axis

- Main Axis: The main axis is the primary axis along which the flex items are laid out. It can be horizontal (row) or vertical (column).

- Cross Axis: The cross axis is perpendicular to the main axis.

```css
.flex-container {
  flex-direction: row; /* or column for vertical */
}
```

### Justify Content

The justify-content property defines how the flex items are distributed along the main axis. Common values include:

- flex-start: Items are packed at the start of the main axis.

- flex-end: Items are packed at the end of the main axis.

- center: Items are centered along the main axis.

- space-between: Items are evenly distributed with the first item at the start and the last item at the end.

- space-around: Items are evenly distributed with equal space around them.

```css
.flex-container {
  justify-content: space-between;
}
```

### Align Items and Align Self

- The align-items property defines how the flex items are aligned on the cross axis.

- The align-self property is used to override align-items on individual flex items.

```css
.flex-container {
  align-items: center;
}

.flex-item {
  align-self: flex-end;
}
```

### Flex Direction

The flex-direction property defines the direction in which the flex container's main axis runs.

- row: Main axis runs horizontally (default).

- column: Main axis runs vertically.

- row-reverse: Main axis runs horizontally in reverse.

- column-reverse: Main axis runs vertically in reverse.

```css
.flex-container {
  flex-direction: column;
}
```

### Flex

The flex property is a shorthand for three individual properties: flex-grow, flex-shrink, and flex-basis.

- flex-grow: Specifies how much a flex item should grow relative to the other items.

- flex-shrink: Specifies how much a flex item should shrink relative to the other items.

- flex-basis: Specifies the initial size of a flex item before it grows or shrinks.

```css
.flex-item {
  flex: 1; /* shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0%; */
}
```

## Grid

In CSS, a grid system is a layout structure that allows you to create complex web page layouts with rows and columns. The CSS Grid Layout Module provides a two-dimensional grid system, making it easier to design web pages in terms of rows and columns. Here's a basic guide to using CSS Grid:

### Setting up the Grid Container

#### Create a Grid Container

To use CSS Grid, you need to define a container element as a grid container. This is typically done using a container element like a "div"

```html
<div class="grid-container">
  <!-- Your grid items go here -->
</div>
```

#### Apply the Grid Property

In your CSS file, select the grid container and apply the display: grid; property.

```css
.grid-container {
  display: grid;
}
```

### Defining Rows and Columns

#### Specify Rows and Columns

You can define rows and columns in the grid container using the grid-template-rows and grid-template-columns properties.

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px 200px; /* Two rows with heights of 100px and 200px */
  grid-template-columns: 1fr 2fr; /* Two columns with a 1:2 ratio */
}
```

You can use different units like pixels, percentages, fr (fractional unit), etc.

### Placing Grid Items

#### Place Items in the Grid

After defining the grid, you need to place items into it. You can do this using the grid-row and grid-column properties or the shorthand grid-area.

```css
.item {
  grid-row: 1 / 2; /* Places the item in the first row */
  grid-column: 1 / 2; /* Places the item in the first column */
}
```

Or using shorthand:

```css
.item {
  grid-area: 1 / 1 / 2 / 2; /* row-start / column-start / row-end / column-end */
}
```

### Responsive Grids

CSS Grid also supports media queries, so you can create responsive grids that adapt to different screen sizes.

```css
@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr; /* Change to a single column layout on small screens */
  }
}
```

### Putting it all together

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px 200px 150px;
  grid-template-columns: 1fr 2fr 1fr;
}

.item {
  background-color: lightblue;
  padding: 20px;
  border: 1px solid #ccc;
}

.item-1 {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}

.item-2 {
  grid-row: 1 / 3;
  grid-column: 2 / 3;
}

.item-3 {
  grid-row: 2 / 4;
  grid-column: 3 / 4;
}
```

In this example, item-1, item-2, and item-3 are placed in different areas of the grid.

## Pseudo-classes

In CSS (Cascading Style Sheets), a pseudo-class is a keyword that is added to a selector to style a specific state or condition of an element. Pseudo-classes allow you to select and style elements based on criteria that cannot be determined solely from the document tree. They are used to style elements in certain situations or in response to user interactions.

### :hover

Applies styles when the user hovers over the element.

```css
a:hover {
  color: red;
}
```

### :active

Applies styles when the element is being activated by the user (e.g., when a button is being clicked).

```css
button:active {
  background-color: yellow;
}
```

### :focus

Applies styles when the element has focus (e.g., when a form input is selected).

```css
input:focus {
  border: 2px solid blue;
}
```

### :nth-child() and :nth-of-type()

Selects elements based on their position within a parent.

```css
li:nth-child(even) {
  background-color: lightgray;
}

p:nth-of-type(even) {
  border: 2px solid orange;
}
```

### :not()

Selects elements that do not match a certain selector.

```css
p:not(.special) {
  color: black;
}
```

Pseudo-classes provide a way to style elements based on their state or position without the need for additional classes or JavaScript. They enhance the flexibility and responsiveness of your stylesheets.

## Pseudo-elements

In CSS, pseudo-elements are used to style a specific part of an element. They allow you to style certain parts of an element without having to add extra HTML markup. Pseudo-elements are denoted by double colons (::) followed by the name of the pseudo-element.

### ::before and ::after

These pseudo-elements are used to insert content before and after the actual content of an element, respectively.

```css
.example::before {
  content: "Before ";
}

.example::after {
  content: " After";
}
```

### ::first-line and ::first-letter

- ::first-line allows you to style the first line of text within an element.
- ::first-letter allows you to style the first letter of the first line of text within an element.

```css
p::first-line {
  color: blue;
}

p::first-letter {
  font-size: 150%;
}
```

### ::selection

This pseudo-element is used to style the portion of text that is selected by the user.

```css
::selection {
  background-color: yellow;
  color: black;
}
```

### ::placeholder

This pseudo-element is used to style the placeholder text in form elements.

```css
input::placeholder {
  color: #999;
  font-style: italic;
}
```

Pseudo-elements provide a powerful way to apply styles to specific parts of your HTML elements, enhancing your ability to create sophisticated and detailed designs without modifying the HTML structure.

## Pseudo-classes vs Pseudo-elements

- In CSS, pseudo-classes and pseudo-elements serve distinct purposes. Pseudo-classes are used for element states, while pseudo-elements are employed for fine-grained styling of element parts, providing flexibility in CSS styling.

- Pseudo-classes, identified by a single colon, target elements based on state or position in the document tree, like :hover or :first-child.

- Pseudo-elements, distinguished by a double colon, style specific parts of elements, such as ::before for adding content or ::first-line for styling the initial line of a block.

## Mobile first design

### Start with Mobile

Smallest Screen First: Begin the design process with the smallest screen size in mind, usually that of a mobile phone. This ensures that the most critical content and functionality are prioritized for users on smaller screens.

### Progressive Enhancement

Enhance for Larger Screens: Once the mobile design is solid, progressively enhance the layout and features for larger screens such as tablets, laptops, and desktops. This approach ensures that the user experience remains functional and aesthetically pleasing across different devices.

### Performance Optimization

Optimize for Speed: Mobile devices often have slower internet connections than desktops. Prioritize performance optimization by compressing images, minimizing HTTP requests, and using efficient coding practices to ensure faster load times.

### Content Prioritization

Focus on Essential Content: Identify and prioritize the most critical content and features for users on the go. This helps create a streamlined and focused experience, preventing information overload on smaller screens.

### Responsive Design

Use Media Queries: Implement responsive design techniques using CSS media queries to adapt the layout and styles based on the characteristics of the device, such as screen width and resolution.

### Touch-Friendly Design

Optimize for Touch Interactions: Design with touch-based navigation and interactions in mind. Buttons and interactive elements should be appropriately sized and spaced to accommodate touch gestures.

### Fluid Grids

Grid-Based Layouts: Use fluid grids that adapt to different screen sizes. This ensures that the design is flexible and can scale seamlessly across various devices.

### Mobile-First Frameworks

Utilize Frameworks: Consider using mobile-first front-end frameworks like Bootstrap or Foundation. These frameworks are designed with responsiveness in mind and provide a solid foundation for building mobile-friendly websites.

### Testing Across Devices

Cross-Browser and Cross-Device Testing: Regularly test your design across various browsers and devices to ensure a consistent and optimal user experience.

### Analytics and Iteration

Monitor User Behavior: Use analytics tools to track user behavior across different devices. Analyze the data to identify areas for improvement and iterate on your design accordingly.

## Responsive design vs Adaptative design

Responsive design and adaptive design are both approaches to creating websites that provide an optimal user experience across various devices and screen sizes, but they differ in their methods of achieving this goal.

The main difference lies in the approach to handling different screen sizes. Responsive design uses a flexible, fluid grid system and adjusts styles dynamically using CSS media queries, while adaptive design involves creating multiple layouts and serving the most appropriate one based on the characteristics of the user's device, often with the assistance of server-side components. Both approaches aim to provide a user-friendly experience across a variety of devices, but they implement this adaptability in different ways.

### Responsive Design:

- Fluid Grids: Responsive design uses a fluid grid system. The layout of the website is based on relative units like percentages rather than fixed units like pixels. This allows the content to adapt proportionally to the screen size.

- Flexible Images: Images are also sized using relative units, ensuring that they can scale appropriately to fit different screen sizes.

- Media Queries: Responsive design relies heavily on CSS media queries. These queries allow the website to apply different styles based on the characteristics of the device, such as its screen width, height, or orientation.

- Single Codebase: Responsive design typically uses a single codebase that adjusts itself dynamically to different devices.

### Adaptive Design:

- Multiple Layouts: Adaptive design involves creating multiple layouts for different screen sizes or devices. Instead of using a single, fluid layout, designers create specific layouts for specific breakpoints.

- Server-Side Components: Adaptive design often involves server-side components that detect the characteristics of the user's device and then serve the appropriate layout or template. This means that the server plays a role in determining how the content is presented.

- Tailored Experience: Each layout is tailored to a specific range of screen sizes or devices, providing a more customized experience for users on those devices.

## Preprocessors

Preprocessors are scripting languages that extend the capabilities of regular CSS. They allow for the use of variables, functions, nesting, and other features that aren't part of standard CSS. The most popular CSS preprocessors are Sass (Syntactically Awesome Stylesheets) and Less.

Here are some key concepts of CSS preprocessors:

### Variables

Preprocessors allow you to define variables to store values that you can reuse throughout your stylesheets. This makes it easier to maintain and update styles.

```scss
$primary-color: #3498db;

body {
  background-color: $primary-color;
}
```

### Nesting

Preprocessors enable the nesting of CSS rules, which can help improve the readability of your code by representing the hierarchy of your HTML structure.

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
```

### Mixins

Mixins are reusable blocks of styles that can be included in other selectors. This promotes code reusability.

```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
  background-color: #ddd;
}
```

### Functions

Preprocessors often come with built-in or custom functions that allow you to perform calculations or manipulate values.

```scss
$base-font-size: 16px;

body {
  font-size: $base-font-size * 1.2;
}
```

### Importing

You can split your styles into multiple files and import them into a main stylesheet, which helps in organizing and maintaining your code.

```scss
// _variables.scss
$primary-color: #3498db;

// styles.scss
@import "variables";

body {
  background-color: $primary-color;
}
```

### Conditional Statements

Some preprocessors provide conditional statements, allowing you to write styles based on conditions.

```scss
$theme: light;

body {
  @if $theme == light {
    background-color: #fff;
    color: #333;
  } @else {
    background-color: #333;
    color: #fff;
  }
}
```

After writing your styles with a preprocessor, you need to compile it into regular CSS before including it in your HTML file. This compilation process translates your preprocessor code into standard CSS that browsers can understand.
