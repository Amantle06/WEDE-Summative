// AVALANCÉ - EXTERNAL JAVASCRIPT (script.js)


// 1. Live Footer Date and Time Clock
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('en-ZA', options);
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = formattedDateTime;
    }
}

// LIGHTBOX MODAL FUNCTIONS (Gallery)

function openLightbox(imgSrc, title, price, desc) {
    const modal = document.getElementById("lightboxModal");
    if (modal) {
        document.getElementById("lightboxImg").src = imgSrc;
        document.getElementById("lightboxTitle").textContent = title;
        document.getElementById("lightboxPrice").textContent = price;
        document.getElementById("lightboxDesc").textContent = desc;
        modal.style.display = "flex";
    }
}

function closeLightbox() {
    const modal = document.getElementById("lightboxModal");
    if (modal) {
        modal.style.display = "none";
    }
}


// JAVASCRIPT PRODUCT SORTING FUNCTION

function sortProducts() {
    const sortSelect = document.getElementById("sortSelect").value;
    const grid = document.getElementById("productGrid");
    if (!grid) return;
    const cards = Array.from(grid.getElementsByClassName("product-card"));

    cards.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute("data-price"));
        const priceB = parseFloat(b.getAttribute("data-price"));
        const nameA = a.getAttribute("data-name");
        const nameB = b.getAttribute("data-name");

        if (sortSelect === "low-high") {
            return priceA - priceB;
        } else if (sortSelect === "high-low") {
            return priceB - priceA;
        } else if (sortSelect === "name-asc") {
            return nameA.localeCompare(nameB);
        } else {
            return 0; // Default order
        }
    });

    cards.forEach(card => grid.appendChild(card));
}


//  Enquiry Page

function handleEnquirySubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value;
    const statusBox = document.getElementById("formStatus");


    let responseMessage = "";
    if (subject === "Product Pricing") {
        responseMessage = 'Thank you ${name}! Sneaker stock is currently available. Prices range from R1,499.99 to R1,899.99 with 3-5 day delivery.';
    } else if (subject === "Custom Services") {
        responseMessage = 'Thank you ${name}. Our custom service consultation slots are available next week. We will email your quotation details.';
    } else if (subject === "Volunteer Opportunity") {
        responseMessage = 'Thank you ${name} for your willingness to volunteer! Our community program has open availability for the upcoming season.';
    } else if (subject === "Sponsorship Program") {
        responseMessage = 'Thank you ${name}. Our sponsorship packages and investment tiers have been dispatched to your email address.';
    } else {
        responseMessage = 'Thank you ${name}. Your enquiry has been successfully received and processed.';
    }

    // Display status feedback
    if (statusBox) {
        statusBox.style.color = "#008080";
        statusBox.textContent = responseMessage;
    }

    document.getElementById("contactForm").reset();
}


//  GENERAL CONTACT FORM EMAIL COMPILATION

function handleContactSubmit(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const msgType = document.getElementById("messageType").value;
    const fullMsg = document.getElementById("fullMessage").value.trim();
    const responseBox = document.getElementById("contactResponseBox");
    const responseText = document.getElementById("contactResponseText");
    const mailToBtn = document.getElementById("mailToBtn");

    if (!name || !email || !msgType || !fullMsg) {
        alert("Please complete all fields in the contact form.");
        return;
    }

    // Compile information into an email link (recipient stated in code: support@avalance.co.za)
    const recipient = "support@avalance.co.za";
    const subject = encodeURIComponent('[${msgType}] Message from ${name}');
    const body = encodeURIComponent('Name: ${name}\nEmail: ${email}\nMessage Type: ${msgType}\n\nMessage:\n${fullMsg}');

    if (mailToBtn) {
        mailToBtn.href = 'mailto:${recipient}?subject=${subject}&body=${body}';
    }

    if (responseText && responseBox) {
        responseText.innerHTML = 'Your message regarding <strong>${msgType}</strong> has been successfully compiled and validated. Click the button below to dispatch it to <strong>${recipient}</strong>.';
        responseBox.style.display = "block";
    }

    document.getElementById("contactForm").reset();
}

document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});