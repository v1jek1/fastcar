document.addEventListener('DOMContentLoaded', function() {
    // Полный массив автомобилей (10 шт)
  // В файле js/catalog.js
const cars = [
    {
        id: 'toyota-camry',
        brand: 'toyota',
        model: 'Camry',
        year: 2023,
        price: 2450000,
        body: 'sedan',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '2.5 л',
        transmission: 'Автомат',
        available: 2
    },
    {
        id: 'honda-crv',
        brand: 'honda',
        model: 'CR-V',
        year: 2022,
        price: 2890000,
        body: 'suv',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '1.5 л',
        transmission: 'Автомат',
        available: 1
    },
    {
        id: 'nissan-qashqai',
        brand: 'nissan',
        model: 'Qashqai',
        year: 2023,
        price: 2210000,
        body: 'crossover',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '1.3 л',
        transmission: 'Автомат',
        available: 3
    },
    {
        id: 'mazda-cx5',
        brand: 'mazda',
        model: 'CX-5',
        year: 2022,
        price: 2650000,
        body: 'suv',
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '2.5 л',
        transmission: 'Автомат',
        available: 1
    },
    {
        id: 'subaru-forester',
        brand: 'subaru',
        model: 'Forester',
        year: 2023,
        price: 2990000,
        body: 'suv',
        image: 'https://images.unsplash.com/photo-1617814076231-2c2fabd66ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '2.5 л',
        transmission: 'Автомат',
        available: 2
    },
    {
        id: 'toyota-rav4',
        brand: 'toyota',
        model: 'RAV4',
        year: 2023,
        price: 2850000,
        body: 'suv',
        image: 'https://images.unsplash.com/photo-1626668893658-1952059c09b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '2.0 л',
        transmission: 'Автомат',
        available: 4
    },
    {
        id: 'honda-civic',
        brand: 'honda',
        model: 'Civic',
        year: 2023,
        price: 2150000,
        body: 'sedan',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '1.5 л',
        transmission: 'Автомат',
        available: 3
    },
    {
        id: 'mitsubishi-outlander',
        brand: 'mitsubishi',
        model: 'Outlander',
        year: 2022,
        price: 2490000,
        body: 'suv',
        image: 'https://images.unsplash.com/photo-1606011334315-025e4baab810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '2.4 л',
        transmission: 'Автомат',
        available: 2
    },
    {
        id: 'lexus-rx',
        brand: 'lexus',
        model: 'RX',
        year: 2023,
        price: 4890000,
        body: 'suv',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '3.5 л',
        transmission: 'Автомат',
        available: 1
    },
    {
        id: 'toyota-corolla',
        brand: 'toyota',
        model: 'Corolla',
        year: 2023,
        price: 1990000,
        body: 'hatchback',
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24ef206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        engine: '1.8 л',
        transmission: 'Автомат',
        available: 5
    }
];
    // Элементы DOM
    const carGrid = document.getElementById('carGrid');
    const applyBtn = document.getElementById('applyFilters');
    const resetBtn = document.getElementById('resetFilters');
    const sortSelect = document.getElementById('sortSelect');
    const minPriceValue = document.getElementById('minPriceValue');
    const maxPriceValue = document.getElementById('maxPriceValue');
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    
    // Инициализация цен
    if (priceMin && priceMax && minPriceValue && maxPriceValue) {
        minPriceValue.textContent = formatPrice(priceMin.value);
        maxPriceValue.textContent = formatPrice(priceMax.value);
        
        priceMin.addEventListener('input', function() {
            minPriceValue.textContent = formatPrice(this.value);
            if (parseInt(this.value) > parseInt(priceMax.value)) {
                priceMax.value = this.value;
                maxPriceValue.textContent = formatPrice(this.value);
            }
        });
        
        priceMax.addEventListener('input', function() {
            maxPriceValue.textContent = formatPrice(this.value);
            if (parseInt(this.value) < parseInt(priceMin.value)) {
                priceMin.value = this.value;
                minPriceValue.textContent = formatPrice(this.value);
            }
        });
    }
    
    // Инициализация каталога
    renderCars(cars);
    
    // Обработчики событий
    if (applyBtn) applyBtn.addEventListener('click', applyFilters);
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    
    function applyFilters() {
        const selectedBrands = getSelectedBrands();
        const priceRange = getPriceRange();
        const selectedBodies = getSelectedBodies();
        const selectedYears = getSelectedYears();
        const sortOption = sortSelect.value;
        
        let filteredCars = cars.filter(car => {
            return selectedBrands.includes(car.brand) &&
                   car.price >= priceRange.min &&
                   car.price <= priceRange.max &&
                   selectedBodies.includes(car.body) &&
                   selectedYears.includes(car.year.toString());
        });
        
        // Сортировка
        filteredCars = sortCars(filteredCars, sortOption);
        
        renderCars(filteredCars);
    }
    
    function resetFilters() {
        // Сбросить все чекбоксы
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = true;
        });
        
        // Сбросить ценовой диапазон
        if (priceMin && priceMax) {
            priceMin.value = 1000000;
            priceMax.value = 5000000;
            minPriceValue.textContent = formatPrice(priceMin.value);
            maxPriceValue.textContent = formatPrice(priceMax.value);
        }
        
        // Сбросить сортировку
        sortSelect.value = 'price-asc';
        
        // Применить фильтры
        applyFilters();
    }
    
    function renderCars(carsToRender) {
        if (!carGrid) return;
        
        carGrid.innerHTML = '';
        
        if (carsToRender.length === 0) {
            carGrid.innerHTML = '<div class="no-results">По вашему запросу автомобилей не найдено</div>';
            return;
        }
        
        carsToRender.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.innerHTML = `
                <div class="car-card__image">
                    <img src="${car.image}" alt="${car.brand} ${car.model}">
                    <div class="car-card__badges">
                        <span class="badge badge--country">🇯🇵 Япония</span>
                        <span class="badge badge--no-russian">Без пробега по РФ</span>
                    </div>
                </div>
                <div class="car-card__content">
                    <h3 class="car-card__title">${car.brand} ${car.model} ${car.year}</h3>
                    <div class="car-card__price">${formatPrice(car.price)} ₽</div>
                    <div class="car-card__specs">
                        <div class="car-card__spec">
                            <span class="car-card__spec-label">Год</span>
                            <span class="car-card__spec-value">${car.year}</span>
                        </div>
                        <div class="car-card__spec">
                            <span class="car-card__spec-label">Двигатель</span>
                            <span class="car-card__spec-value">${car.engine}</span>
                        </div>
                        <div class="car-card__spec">
                            <span class="car-card__spec-label">КПП</span>
                            <span class="car-card__spec-value">${car.transmission}</span>
                        </div>
                    </div>
                    <div class="car-card__actions">
                        <a href="cars/${car.id}.html" class="btn btn--primary car-card__btn">Подробнее</a>
                        <button class="btn btn--outline car-card__btn request-car" data-car="${car.brand} ${car.model} ${car.year}">Купить</button>
                    </div>
                </div>
            `;
            carGrid.appendChild(carCard);
        });
        
        // Инициализация обработчиков для кнопок "Купить"
        document.querySelectorAll('.request-car').forEach(btn => {
            btn.addEventListener('click', function() {
                const carModel = this.getAttribute('data-car');
                openModal(carModel);
            });
        });
    }
    
    // Вспомогательные функции
    function getSelectedBrands() {
        const brands = [];
        document.querySelectorAll('input[name="brand"]:checked').forEach(checkbox => {
            brands.push(checkbox.value);
        });
        return brands;
    }
    
    function getSelectedBodies() {
        const bodies = [];
        document.querySelectorAll('input[name="body"]:checked').forEach(checkbox => {
            bodies.push(checkbox.value);
        });
        return bodies;
    }
    
    function getSelectedYears() {
        const years = [];
        document.querySelectorAll('input[name="year"]:checked').forEach(checkbox => {
            years.push(checkbox.value);
        });
        return years;
    }
    
    function getPriceRange() {
        return {
            min: parseInt(priceMin.value),
            max: parseInt(priceMax.value)
        };
    }
    
    function sortCars(cars, option) {
        return [...cars].sort((a, b) => {
            switch(option) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'year-desc':
                    return b.year - a.year;
                case 'year-asc':
                    return a.year - b.year;
                default:
                    return 0;
            }
        });
    }
    
    function formatPrice(price) {
        return new Intl.NumberFormat('ru-RU').format(price);
    }
    
    // Функция для открытия модального окна
    function openModal(carModel = '') {
        const modal = document.getElementById('requestModal');
        const carModelInput = document.getElementById('carModel');
        if (carModelInput) carModelInput.value = carModel;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});