# Assignment 5 - INFO 6150
This assignment focuses on the learnings of SCSS language and better file structuring while building large scale web apps. The website in the repo is a blog website, where a user can view a blog and then upload their own blog too.
___

### File structure
- [`index.html`](https://github.com/atharvaneu/6150-assignment-1/blob/main/assignment-5/index.html): this is the main landing page for the assignment. It lands onto the main blog page.
- [`upload.html`](https://github.com/atharvaneu/6150-assignment-1/blob/main/assignment-5/upload.html): this is the second page where a user can upload their blog.
- [`style.scss`](https://github.com/atharvaneu/6150-assignment-1/tree/main/assignment-5/scss/style.scss): this is the main `style.scss` file which is transpiled to `/css/style.css`.
- [`_button.scss`](https://github.com/atharvaneu/6150-assignment-1/tree/main/assignment-5/scss/_button.scss): contains all styling for buttons.
- [`_config.scss`](https://github.com/atharvaneu/6150-assignment-1/tree/main/assignment-5/scss/_config.scss): contains all variables and is imported everywhere so as to maintain consistency.
- [`_util.scss`](https://github.com/atharvaneu/6150-assignment-1/tree/main/assignment-5/scss/_util.scss): contains `@function` and `@mixin` declarations.
- [`_layout.scss`](https://github.com/atharvaneu/6150-assignment-1/tree/main/assignment-5/scss/_layout.scss): contains all ayout based styling such as grid and flexboxes.

___
All SCSS functions used in the assignment:
**Required**
- [x] Variables
- [x] Custom properties
- [x] Interpolation
- [x] Nesting
- [x] Placeholder selectors
- [x] Mixins
- [x] Functions

**Extra**
- [x] `@debug`
- [x] `map-get`: to retrieve values from a SCSS map
- [x] `@if`, `@else`, `@each`

___

`flexbox`: I used the flexbox in the navbar for justifying content in a `space-between` manner. The second flexbox I have used in order to place the blog area in the main section and also to center it.
`grid`: I have used the grid for the blog's layout along with images and also in `upload.html` for laying out the `<form>`.

___
-- Atharva
