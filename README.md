
---

# Personal Portfolio Website

A responsive, modern portfolio website built with HTML, CSS, and JavaScript. Features include a stunning animated background, a functional contact form using EmailJS, project cards with background images, and a sleek navigation bar.

## Features
- **Responsive Design**: Adapts to all screen sizes (mobile, tablet, desktop).
- **Animated Background**: Particle animations for a dynamic visual experience.
- **Navbar**: Fixed navigation with smooth scrolling and mobile toggle.
- **Projects Section**: Cards with project images as backgrounds, hover effects, and links.
- **Contact Form**: Sends emails to the owner using EmailJS with validation.
- **Live Date/Time**: Displays the current date and time, updated every second.

## Prerequisites
- A web browser (e.g., Chrome, Firefox, Edge).
- An internet connection (for EmailJS functionality).
- Basic knowledge of HTML, CSS, and JavaScript.
- An EmailJS account for the contact form (optional if you skip email functionality).

## Setup Instructions

### 1. Clone or Download the Project
- **Clone**: If using Git, run:
  ```bash
  git clone <repository-url>
  ```
- **Download**: Alternatively, download the ZIP file and extract it to a folder.

### 2. Project Structure
Ensure your project folder contains:
```
portfolio/
├── index.html
├── styles.css
├── script.js
├── profile.jpg       (Your profile picture)
├── project1.jpg      (Project 1 screenshot)
├── project2.jpg      (Project 2 screenshot)
├── project3.jpg      (Project 3 screenshot)
└── README.md
```

### 3. Customize Content
- **Profile Picture**: Replace `profile.jpg` with your own image.
- **Project Images**: Replace `project1.jpg`, `project2.jpg`, and `project3.jpg` with screenshots of your projects. Update the paths in `index.html` if stored in a subfolder (e.g., `images/project1.jpg`).
- **Personal Info**: In `index.html`:
  - Update `<h1>Your Name</h1>` with your name.
  - Modify the tagline `<p class="tagline">...</p>`.
  - Replace social media links in the `.social-links` section with your actual URLs.
  - Update project titles, descriptions, and links in the `#projects` section.
- **EmailJS**: For the contact form to work:
  1. Sign up at [EmailJS](https://www.emailjs.com/).
  2. Create an email service (e.g., Gmail) and note the **Service ID**.
  3. Create an email template (e.g., `Name: {{from_name}}, Email: {{from_email}}, Message: {{message}}`) and note the **Template ID**.
  4. Get your **Public Key** from the EmailJS dashboard.
  5. In `index.html`, replace `"YOUR_PUBLIC_KEY"` in the EmailJS script with your Public Key.
  6. In `script.js`, replace:
     - `'YOUR_SERVICE_ID'` with your Service ID.
     - `'YOUR_TEMPLATE_ID'` with your Template ID.
     - `'YOUR_EMAIL_ADDRESS'` with the email where you want to receive messages.

### 4. Run the Project Locally
- **Simple Method**: Double-click `index.html` to open it in your default browser.
- **Local Server (Recommended)**: For a better development experience (e.g., to test EmailJS):
  1. Install a local server tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code, or use Python:
     ```bash
     python -m http.server 8000
     ```
  2. Open your browser and navigate to `http://localhost:8000`.

### 5. Test the Project
- Verify that:
  - The page loads with your profile picture and project images.
  - Navigation links scroll smoothly to sections.
  - The date/time updates every second.
  - Project cards display background images with readable text.
  - The contact form validates input and sends an email (if EmailJS is configured).
- Check the console (F12 > Console) for any errors.

## Deployment (Optional)
To make your portfolio accessible online:
1. **GitHub Pages**:
   - Push the project to a GitHub repository.
   - Enable GitHub Pages in the repository settings (use the `main` branch and root directory).
   - Access it at `https://<username>.github.io/<repository-name>`.
2. **Other Hosting**: Use platforms like Netlify, Vercel, or Firebase Hosting by following their deployment guides.

## Troubleshooting
- **Images Not Loading**: Check file paths and names in `index.html`.
- **Email Not Sending**: Ensure EmailJS credentials are correct and your email service is active.
- **Layout Issues**: Verify CSS is linked correctly (`<link rel="stylesheet" href="styles.css">`).
- **JavaScript Errors**: Check the browser console for errors and ensure `script.js` is loaded.

## Customization
- **Colors**: Modify colors in `styles.css` (e.g., `#4b6cb7` for buttons/links).
- **Animations**: Adjust particle sizes or animation durations in `.particle` and `@keyframes particleAnimation`.
- **Fonts**: Change the Google Fonts import in `index.html` or font-family in `styles.css`.

## License
This project is for personal use. Feel free to modify and distribute as needed.

## Contact
For questions, reach out via the contact form on the deployed site or [your email/social media].

---

