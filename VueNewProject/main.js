const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})
const cars = [
    car ('Ford', 'Focus', 'Max', 2016, '+7 934 432 43 65', 'image/ford-focus-3-web-1920x1080.jpg'),
    car ('Ford', 'Mondeo', 'Vladimir', 2018, '+7 544 742 63 45', 'image/mondeo-jan-2020.png'),
    car ('Porsche', 'Panamera', 'Irina', 2017, '+7 900 856 23 87', 'image/porsche-clip-art-18.png')
]
new Vue ({
    el: '#app', 
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        
        
    },
    methods: {
        selectCar (index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push (
                log (`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        canselOrder() {
            this.modalVisibility = false
        },
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter (car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    }
})