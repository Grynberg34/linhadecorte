# Linha de Corte

This project is a **timeline-based visualization tool** that allows users to explore data about brazilian football coaches and their tenure. The app provides an interactive interface to navigate through different time periods, view categorized data, and analyze the tenure of coaches in a visually appealing way.

The app is built using **React**, **TypeScript**, **Redux**, and **Material-UI**, with **SCSS** for styling.

## Demo
https://linha-de-corte-zwz82.ondigitalocean.app/

## Features

- **Interactive Timeline Slider**:
  - Navigate through different years and months using a slider.

- **Categorized Coaches**:
  - Coaches are grouped into categories based on their tenure:
    - Less than 90 days
    - 3 months
    - 6 months
    - 1 year
    - 2 years or more

- **Zoom Functionality**:
  - Zoom in and out to adjust the scale of the coaches' list.
  - Hover effects to highlight individual coaches when zoomed out.

- **Responsive Design**:
  - Optimized for both desktop and mobile devices.
  - Mobile-specific adjustments, such as simplified labels and default zoom.

- **Dynamic Hover Previews**:
  - When zoomed out, hovering over a coach displays a larger preview of the coach's details.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type-safe development.
- **Redux**: For state management (e.g., selected date, active coaches).
- **Material-UI**: For prebuilt components like sliders and grids.
- **SCSS**: For styling and responsive design.
- **Custom Utility Functions**: For generating timeline marks and categorizing coaches by tenure.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Grynberg34/linhadecorte
   cd linhadecorte