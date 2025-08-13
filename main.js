// main.js - Общие функции для всех страниц

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
            mobileMenuToggle.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                    mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });
    
    // News Slider
    const slides = document.querySelectorAll('.news-slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    
    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            currentSlide = index;
        }
        
        function nextSlide() {
            let nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }
        
        function prevSlide() {
            let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }
        
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
    }
    
    // Request buttons
    const requestBtns = document.querySelectorAll('.request-car, #requestBtn, #heroRequestBtn');
    requestBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const carModel = btn.dataset.car || '';
            openModal(carModel);
        });
    });
});

// Modal functions
function openModal(carModel = '') {
    const modal = document.getElementById('requestModal');
    const carModelInput = document.getElementById('carModel');
    if (carModelInput) carModelInput.value = carModel;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('requestModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal
const closeModalBtn = document.getElementById('closeModal');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Close modal when clicking outside
const modal = document.getElementById('requestModal');
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Form Submission
const requestForm = document.getElementById('requestForm');
if (requestForm) {
    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form data
        const formData = {
            carModel: document.getElementById('carModel').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        
        // Close modal and reset form
        closeModal();
        requestForm.reset();
    });
}