#Part 2 Improvement

From the feedback I got from my lecturer I was supposed to fix my external css link.

Map Integration: I added a responsive Google Maps iframe element embedded into the enquiries section, specifying the brand’s flagship operational location in Sandton, Johannesburg, South Africa.

Form Structure Standardization: I reconfigured the enquiry form (enquiry.html) to strictly align with institutional layout benchmarks, incorporating explicit field markers (*), constrained text inputs, phone number format validation patterns ([+]?[0-9 ()-]{9,20}), dropdown selector menus, and live status feedback notification paragraphs.

Stylesheet Documentation: I expanded stylesheet.css with dedicated rulesets governing form container shadows, input focus states, map iframe dimensions, and product card padding, with clear block comments outlining each modification.

Product Catalog Expansion: Integrated four brand-new sneaker entries into the product showcase grid: Avalance Crimson Classic, Avalance Black and White Edition, Avalance Grey and White Platform and Avalance Teal, White and Purple Sneaker.

Aspect Ratio & Cropping Resolution: Replaced object-fit: cover with object-fit: contain inside a dedicated .product-img-container CSS wrapper class, resolving clipping issues and ensuring all sneaker product photographs render in full, uncropped proportions.

Dynamic Pricing & Lightbox Parity: Assigned specific retail price points (R1,499.99 and R1,999.99) and mapped click-to-enlarge lightbox handlers to the newly added footwear items.

Slideshow Removal & Grid Structuring: Excluded the automated promotional slideshow from the gallery page in favor of a structured, card-based product grid mimicking the homepage layout.

Lightbox Modal Implementation: Developed an interactive JavaScript modal overlay (openLightbox() and closeLightbox()) enabling users to click any sneaker thumbnail to view an enlarged photograph, detailed description, and price.

Sorting Algorithm Integration: Embedded a JavaScript-driven sorting function (sortProducts()) linked to a dropdown element, allowing customers to dynamically reorder catalog items by price (Low to High, High to Low) or alphabetical naming convention.

Card-Based Service Layout: Converted the traditional linear bulleted list on services.html into four distinct service cards (Service After Purchase, Free Shipping, Thoughtfully Made, and Easy Returns).

Icon Integration: Incorporated visual icons and emoji indicators into each service container to improve readability and visual hierarchy in accordance with brand styling guidelines.

Logo Update: Standardized the brand header across all multi-page templates by integrating the official Avalancé graphic logo asset sized to exact layout specifications (200x130px).

Color Palette & Typography: Established the cohesive Italian-inspired luxury aesthetic utilizing a soft beige background (#f5f5dc), dark charcoal typography, and signature teal-accent buttons (#008080).

Persistent Layout Structure: Established consistent header navigation bars and footer elements across all pages (home.html, about.html, services.html, gallery.html, contact.html, and enquiry.html).

Dynamic JavaScript Footer Clock: Implemented a real-time localization script (updateDateTime()) within script.js to automatically display the live date and time in the South African locale format (en-ZA) inside the footer.

Initial Scaffolding: Created the foundational HTML5 document structures, external stylesheet.css, and script.js architecture for the Avalancé streetwear brand under the IIE information technology course guidelines.

References 

Farrell, J. (2019) Programming Logic and Design, Comprehensive. 9th edn. Boston: Cengage Learning.

International Information Exchange (IIE) (2026) WEDE5020 Module Manual and Portfolio of Evidence Guidelines. Johannesburg: Rosebank College.

Mozilla Developer Network (MDN) (2026) CSS Basic Box Model and Object-Fit Properties. Available at: https://developer.mozilla.org/ (Accessed: November 2026).

https://www.w3schools.com/js/js_validation.asp

https://www.w3schools.com/howto/howto_js_slideshow.asp#gsc.tab=0

https://www.w3schools.com/howto/howto_js_lightbox.asp
