// ========================================
// BursaryBridge - JavaScript File
// Student: ST10453126
// Module: WEDE5030
// Part: 3
// ========================================

// ========== BURSARY DATA ==========
const bursaries = [
    {
        id: 1,
        title: "Engineering Bursary",
        field: "engineering",
        location: "johannesburg",
        description: "Full tuition + allowance",
        provider: "South African Engineering Council",
        closing: "31 Aug 2026"
    },
    {
        id: 2,
        title: "IT & Data Science Bursary",
        field: "it",
        location: "cape-town",
        description: "Includes laptop and mentorship",
        provider: "TechSA Foundation",
        closing: "15 Sep 2026"
    },
    {
        id: 3,
        title: "Medical Bursary",
        field: "medical",
        location: "durban",
        description: "For underprivileged students",
        provider: "Health for All Trust",
        closing: "30 Oct 2026"
    },
    {
        id: 4,
        title: "Business & Finance Bursary",
        field: "business",
        location: "pretoria",
        description: "Work-back opportunity available",
        provider: "Future Leaders Fund",
        closing: "15 Nov 2026"
    },
    {
        id: 5,
        title: "Teaching Bursary",
        field: "teaching",
        location: "all",
        description: "Full tuition for education students",
        provider: "Department of Education",
        closing: "31 Jan 2027"
    },
    {
        id: 6,
        title: "Agriculture Bursary",
        field: "agriculture",
        location: "limpopo",
        description: "Focus on sustainable farming",
        provider: "AgriSA Foundation",
        closing: "28 Feb 2027"
    }
];

// ========== HELPER FUNCTIONS ==========
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[0-9]{10}$/.test(phone);
}

function generateReference() {
    return 'BUR' + Date.now().toString().slice(-6);
}

// ========== DISPLAY BURSARIES ==========
function displayBursaries(filteredBursaries, containerId) {
    const container = document.getElementById(containerId || 'bursaryResults');
    if (!container) return;
    
    if (filteredBursaries.length === 0) {
        container.innerHTML = '<p class="no-results">No bursaries found. Try adjusting your search.</p>';
        return;
    }
    
    let html = '';
    filteredBursaries.forEach(bursary => {
        html += `
            <div class="card bursary-card" data-id="${bursary.id}">
                <h3>${bursary.title}</h3>
                <p><strong>Provider:</strong> ${bursary.provider}</p>
                <p><strong>Location:</strong> ${bursary.location.replace('-', ' ').toUpperCase()}</p>
                <p>${bursary.description}</p>
                <p><strong>Closing:</strong> ${bursary.closing}</p>
                <button class="btn-primary view-bursary" data-id="${bursary.id}" style="margin-top:10px;">View Details</button>
            </div>
        `;
    });
    container.innerHTML = html;
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-bursary').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const bursary = bursaries.find(b => b.id === id);
            if (bursary) {
                openBursaryModal(bursary);
            }
        });
    });
}

// ========== FILTER BURSARIES ==========
function filterBursaries(searchTerm, fieldFilter, locationFilter) {
    return bursaries.filter(bursary => {
        const matchesSearch = bursary.title.toLowerCase().includes(searchTerm) ||
                             bursary.description.toLowerCase().includes(searchTerm) ||
                             bursary.provider.toLowerCase().includes(searchTerm);
        const matchesField = fieldFilter === 'all' || bursary.field === fieldFilter;
        const matchesLocation = locationFilter === 'all' || bursary.location === locationFilter;
        return matchesSearch && matchesField && matchesLocation;
    });
}

// ========== MODAL FUNCTIONS ==========
function openBursaryModal(bursary) {
    const modal = document.getElementById('bursaryModal');
    if (!modal) return;
    
    document.getElementById('modalTitle').textContent = bursary.title;
    document.getElementById('modalProvider').textContent = bursary.provider;
    document.getElementById('modalLocation').textContent = bursary.location.replace('-', ' ').toUpperCase();
    document.getElementById('modalDescription').textContent = bursary.description;
    document.getElementById('modalClosing').textContent = bursary.closing;
    
    modal.style.display = 'block';
}

function closeBursaryModal() {
    const modal = document.getElementById('bursaryModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ========== LIGHTBOX FUNCTIONS ==========
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    lightbox.style.display = 'block';
    document.getElementById('lightboxImg').src = img.src;
    document.getElementById('lightboxCaption').textContent = img.alt;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

// ========== ENQUIRY FORM FUNCTIONS ==========
function submitEnquiry(event) {
    event.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    // Get form values
    const name = document.getElementById('enqName').value.trim();
    const email = document.getElementById('enqEmail').value.trim();
    const phone = document.getElementById('enqPhone').value.trim();
    const topic = document.getElementById('enqTopic').value;
    const message = document.getElementById('enqMessage').value.trim();
    
    let isValid = true;
    
    if (name.length < 3 || name.length > 50) {
        showError('nameError', 'Name must be between 3 and 50 characters');
        isValid = false;
    }
    
    if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!isValidPhone(phone)) {
        showError('phoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    if (!topic) {
        alert('Please select a topic');
        isValid = false;
    }
    
    if (message.length < 10 || message.length > 1000) {
        showError('messageError', 'Message must be between 10 and 1000 characters');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Show loading
    const submitBtn = document.getElementById('enqSubmitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    document.getElementById('loadingSpinner').style.display = 'block';
    
    // Simulate AJAX submission
    setTimeout(function() {
        const ref = generateReference();
        document.getElementById('refNumber').textContent = ref;
        
        document.getElementById('enquiryForm').style.display = 'none';
        document.getElementById('enquirySuccess').style.display = 'block';
        
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Enquiry';
        document.getElementById('loadingSpinner').style.display = 'none';
        
        console.log('Enquiry submitted:', { name, email, phone, topic, message });
    }, 1500);
}

// ========== CONTACT FORM FUNCTIONS ==========
function submitContact(event) {
    event.preventDefault();
    
    // Clear previous errors
    clearContactErrors();
    
    // Get form values
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const type = document.getElementById('contactType').value;
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMsg').value.trim();
    
    let isValid = true;
    
    if (name.length < 3 || name.length > 50) {
        showError('cNameError', 'Name must be between 3 and 50 characters');
        isValid = false;
    }
    
    if (!isValidEmail(email)) {
        showError('cEmailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (phone && !isValidPhone(phone)) {
        showError('cPhoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    if (!type) {
        alert('Please select a message type');
        isValid = false;
    }
    
    if (message.length < 10 || message.length > 1000) {
        showError('cMsgError', 'Message must be between 10 and 1000 characters');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Show loading
    const submitBtn = document.getElementById('contactSubmitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    document.getElementById('contactLoadingSpinner').style.display = 'block';
    
    // Simulate AJAX submission
    setTimeout(function() {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('contactSuccess').style.display = 'block';
        
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        document.getElementById('contactLoadingSpinner').style.display = 'none';
        
        console.log('Contact message sent:', { name, email, phone, type, subject, message });
    }, 1500);
}

// ========== ERROR HANDLING FUNCTIONS ==========
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
}

function clearContactErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
}

// ========== CHARACTER COUNTERS ==========
function setupCharacterCounter(textareaId, counterId, maxLength) {
    const textarea = document.getElementById(textareaId);
    const counter = document.getElementById(counterId);
    if (textarea && counter) {
        textarea.addEventListener('input', function() {
            const count = this.value.length;
            counter.textContent = count + ' / ' + maxLength + ' characters';
        });
    }
}

// ========== INITIALIZE ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', function() {
    // Setup character counters
    setupCharacterCounter('enqMessage', 'charCount', 1000);
    setupCharacterCounter('contactMsg', 'contactCharCount', 1000);
    
    // Setup accordion (if on home page)
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', function() {
            const body = this.nextElementSibling;
            const isOpen = body.classList.contains('open');
            
            // Close all accordion bodies
            document.querySelectorAll('.accordion-body').forEach(b => {
                b.classList.remove('open');
                b.style.maxHeight = '0';
            });
            
            // Toggle the clicked one
            if (!isOpen) {
                body.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });
    
    // Setup modal close
    const modal = document.getElementById('bursaryModal');
    if (modal) {
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeBursaryModal);
        }
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeBursaryModal();
            }
        });
    }
    
    // Setup lightbox close
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }
    
    // Initialize search on services page
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const fieldFilter = document.getElementById('filterField').value;
            const locationFilter = document.getElementById('filterLocation').value;
            const filtered = filterBursaries(searchTerm, fieldFilter, locationFilter);
            displayBursaries(filtered);
        });
        
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
        
        document.getElementById('filterField').addEventListener('change', function() {
            searchBtn.click();
        });
        
        document.getElementById('filterLocation').addEventListener('change', function() {
            searchBtn.click();
        });
    }
})