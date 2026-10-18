
# Day 29 Internship Project: Animated Skills Progress Bars

## Project Overview

The Animated Skills Progress Bars project is a responsive web page built using HTML5, CSS3, and JavaScript. It displays technical skills with percentage labels and animated progress bars.

The progress bars fill to their target percentages when the skills section scrolls into view. The project demonstrates CSS transitions and JavaScript scroll detection using the IntersectionObserver API.

## Objectives

- Practice CSS animations and transitions.
- Create animated progress bars.
- Use HTML data attributes to store percentage values.
- Detect when a section enters the viewport.
- Update UI elements dynamically using JavaScript.
- Create a responsive layout.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- IntersectionObserver API

## Features

- Five skill bars with labels and percentages.
- Animated progress bars.
- Animation triggered when the skills section enters the viewport.
- Different colors for each skill.
- Responsive design for desktop and mobile devices.
- Hover effects on skill cards.
- No external API or database required.

## Skills Included

1. HTML5 - 90%
2. CSS3 - 85%
3. JavaScript - 75%
4. Python - 70%
5. Responsive Design - 80%

Note: The percentages are sample display values and can be adjusted to match the intended demonstration.

## Project Structure

Day_29_Animated_Skills_Bars/
- index.html
- style.css
- script.js
- README.md

## How to Run

1. Create a folder named Day_29_Animated_Skills_Bars.
2. Create the four files listed in the project structure.
3. Paste the relevant code into each file.
4. Save all files.
5. Open index.html in a modern web browser.
6. Scroll to the Technical Skills section and observe the animated progress bars.

You can also open the project in Visual Studio Code and use the Live Server extension.

## Working Procedure

Each skill has a progress bar with a data-level attribute containing its target percentage. JavaScript selects the progress bars and reads their target values.

The IntersectionObserver API detects when the skills section becomes visible in the browser viewport. When the section enters view, JavaScript sets each progress bar's width to its target percentage. CSS transitions animate the change smoothly.

When the section leaves the viewport, the bars reset so the animation can play again when the user scrolls back.

## Hardware Requirements

- Computer or laptop
- Keyboard and mouse or touchpad
- Sufficient memory to run a modern browser

## Software Requirements

- Windows, macOS, or Linux
- Visual Studio Code or another text editor
- Google Chrome, Microsoft Edge, Firefox, or another modern browser

## Testing

- Checked that all five skill bars are displayed.
- Verified that percentage labels match the configured values.
- Tested the animation when scrolling to the skills section.
- Checked that bars reset when the section leaves view.
- Tested the responsive layout on smaller screens.
- Checked that the page works without a backend or database.

## Limitations

- Skill percentages are predefined.
- The page does not calculate skills from actual assessments.
- Skill information is not stored in a database.
- The Google Fonts import requires internet access for the chosen font; fallback fonts are provided.

## Future Scope

- Add more skills and categories.
- Allow users to customize skill names and percentages.
- Load skills dynamically from a database.
- Add interactive filters for technical and soft skills.
- Create a complete portfolio page with projects and certifications.

## Conclusion

The Animated Skills Progress Bars project demonstrates how HTML, CSS, and JavaScript can work together to create an engaging and responsive user interface. It provides practical experience with CSS transitions, data attributes, DOM manipulation, and scroll detection using IntersectionObserver.
