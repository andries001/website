BursaryBridge Website Project

## Student Information
Name: Molebale Malosi Andries  
Student Number: ST10453126  
Module: WEDE5020 
Institution: The IIE  

## Project Overview
BursaryBridge is a website developed by Molebale Malosi Andries (ST10453126) as part of the WEDE5030 module at The IIE. The purpose of this project is to create a platform that helps South African students easily find and access bursary opportunities.

Many students struggle to find accurate and up-to-date information about funding for their studies. This website aims to solve this problem by providing a centralised platform where users can view available bursaries and get guidance on how to apply.

The website is designed to be simple, user-friendly, and accessible to a wide range of users, including high school learners, university students, and unemployed youth. The focus is on improving usability and ensuring that users can navigate the website easily without confusion.

Website Goals and Objectives

Goals
- To provide easy access to bursary information  
- To help students apply for funding opportunities  
- To improve awareness of available bursaries  

Objectives
- Achieve at least 500 monthly users  
- Keep bursary listings updated regularly  
- Improve user engagement and usability  

Key Features and Functionality
- Homepage with introduction and navigation  
- About Us section explaining the purpose of the website  
- Bursary listings section with available opportunities  
- Services page explaining what the platform offers  
- Enquiry page for users to ask questions  
- Contact page with office details and message form  
- Search bar (basic functionality)  
- Contact and enquiry forms with basic JavaScript validation  
- Simple and clean user interface  
- Working navigation between all 5 pages  

Website Pages
The website now consists of 5 separate pages:

| Page | File Name | Description |
|------|-----------|-------------|
| Home | index.html | Introduction and featured bursaries |
| About Us | about.html | Mission, vision, and target audience |
| Services | services.html | List of services offered |
| Enquiry | enquiry.html | Form for users to send enquiries |
| Contact | contact.html | Office details and contact form |

Timeline and Milestones
- Week 1: Planning and research  
- Week 2: Website design (layout and structure)  
- Week 3–4: Website development (HTML implementation)  
- Week 5: Testing and improvements  
- Week 6: Final submission  

Part 1 Details
This submission includes:
- Website proposal  
- Website structure (5 separate HTML pages)  
- Basic CSS styling (internal styles)  
- Basic JavaScript form validation  
- Working navigation between all pages  
- Initial README.md documentation  

Part 2 Details (CSS Styling & Responsive Design)
2.1 External Stylesheet
- Created `style.css` external stylesheet
- Linked to all 5 HTML pages
- Removed internal CSS from HTML files

2.2 Base Styles & CSS Reset
- Used CSS reset for consistent cross-browser styling
- Default font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Default font size: 16px, line-height: 1.6
- Consistent colour scheme: blue (#0a4b7a), white, light grey

2.3 Typography Styles
- Font hierarchy using rem units
- Headings: h1 (2rem), h2 (1.8rem), h3 (1.3rem)
- Added letter-spacing and line-height improvements

2.4 Layout Structure (CSS Grid & Flexbox)
- Card grid: CSS Grid with `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`
- Navigation: Flexbox with wrap
- Two-column layout: Flexbox
- Sticky header positioning

2.5 Visual Styles & Interactive Elements
- Card hover effects: transform and box-shadow
- Button hover: scale transform and colour change
- Form input focus: ring effect with box-shadow
- Smooth transitions on all interactive elements

3. Responsive Design
3.1 Breakpoints
| Breakpoint | Screen Size | Layout Changes |
|------------|-------------|----------------|
| Desktop | 1025px+ | Full multi-column layout |
| Tablet | 768px - 1024px | Reduced padding, smaller fonts |
| Mobile | 480px - 767px | Single column, stacked navigation |
| Small Mobile | <480px | Extra small fonts, full-width buttons |

3.2 Relative Units
- Used `rem` for font sizes
- Used `%` for widths
- Container max-width: 1300px with auto margins

3.3 Media Queries Implemented
```css
@media screen and (max-width: 1024px)  /* Tablet */
@media screen and (max-width: 767px)   /* Mobile */
@media screen and (max-width: 480px)   /* Small Mobile */


Sitemap
Home (index.html)
About (about.html)
Services (services.html)
Enquiry (enquiry.html)
Contact (contact.html)

Structure:
Home → About
Home → Services
Home → Enquiry
Home → Contact
(All pages link to each other via navigation menu)

file structure
bursarybridge-project/
│
├── index.html          (Home page)
├── about.html          (About Us page)
├── services.html       (Services page)
├── enquiry.html        (Enquiry page)
├── contact.html        (Contact page)
├── style.css           (External stylesheet - Part 2)
├── README.md           (This file)
└── screenshots/        (Screenshot images - to be added)

Changelog
Version 1.0 (Initial Submission - Part 1)
Created basic HTML website (1 page with sections)

Added homepage, about, bursaries, contact sections

Implemented simple inline CSS

Added README.md file

Version 1.1 (Feedback Changes - Part 1)
Expanded to 5 separate HTML pages

Added Services and Enquiry pages

Fixed navigation links between all pages

Added basic JavaScript form validation

Added student number in footer

fixed the website proposal

Version 2.0 (Part 2 - CSS Styling & Responsive Design)
CSS External Stylesheet:

Created style.css external file

Removed all inline CSS and internal styles from HTML pages

Added CSS reset for consistent cross-browser styling

Layout Structure:

Implemented CSS Grid for card layouts

Implemented Flexbox for navigation and two-column layouts

Added sticky header positioning

Typography:

Established font hierarchy using rem units

Added letter-spacing and line-height improvements

Interactive Elements:

Added :hover effects on cards

Added :focus rings on form inputs

Added :active scale effect on buttons

Responsive Design:

Added 3 media query breakpoints (1024px, 767px, 480px)

Navigation stacks vertically on mobile

Grid changes from 4 columns → 2 columns → 1 column

Font sizes scale down on smaller screens

Buttons become full-width on mobile

Form Improvements:

Consistent form styling across Enquiry and Contact pages

Improved focus states for accessibility

Visual Polish:

Added gradient background to hero section

Added border-left accent on bursary items

Added hover effects on list items

Improved card shadows and transitions

                            References
Chaffey, D. (2022) Digital Business and E-Commerce Management. Pearson.

Laudon, K.C. and Laudon, J.P. (2021) Management Information Systems. Pearson.

Nielsen, J. (2020) Usability Engineering. Morgan Kaufmann.

MDN Web Docs (2025) CSS Grid Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout (Accessed: 29 May 2026)

MDN Web Docs (2025) CSS Flexbox. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout (Accessed: 29 May 2026)

MDN Web Docs (2025) Responsive Design. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design (Accessed: 29 May 2026)
