document.addEventListener('DOMContentLoaded', function() {
    // Инициализация модального окна
    const modal = document.getElementById('requestModal');
    const closeModalBtn = document.getElementById('closeModal');
    const requestForm = document.getElementById('requestForm');
    
    // Функция открытия модального окна
    window.openModal = function(carModel = '') {
        const carModelInput = document.getElementById('carModel');
        if (carModelInput) carModelInput.value = carModel;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Закрытие модального окна
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Обработчики закрытия
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Закрытие по клавише Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Обработка отправки формы
    if (requestForm) {
        requestForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Сбор данных формы
            const formData = {
                car: this.carModel.value,
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                message: this.message.value
            };
            
            // В реальном приложении здесь была бы отправка на сервер
            console.log('Заявка отправлена:', formData);
            
            // Уведомление пользователя
            alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
            
            // Закрытие модального окна
            closeModal();
            
            // Очистка формы
            this.reset();
        });
    }
    
    // Инициализация кнопок заказа по всему сайту
    document.querySelectorAll('.request-car, #requestBtn, #heroRequestBtn').forEach(button => {
        button.addEventListener('click', function() {
            const carModel = this.getAttribute('data-car') || '';
            openModal(carModel);
        });
    });
});