function groupScript() {
const buttons = document.querySelectorAll('.group div');
const groupAll = document.querySelector('.group .all-plants')
const groupNew = document.querySelector('.group .new-arrivals')
const groupSale = document.querySelector('.group .sale')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const className = button.classList[0];
        console.log(button)
        if (className === 'all-plants') {
            groupAll.classList.add('active')
            groupNew.classList.remove('active')
            groupSale.classList.remove('active')
        }
        if (className === 'new-arrivals') {
            groupAll.classList.remove('active')
            groupNew.classList.add('active')
            groupSale.classList.remove('active')
        }
        if (className === 'sale') {
            groupAll.classList.remove('active')
            groupNew.classList.remove('active')
            groupSale.classList.add('active')
        }
        const plants = document.querySelectorAll('.plants .plant')
        plants.forEach(plant => {
            if (plant.classList.contains(className)) {
                plant.classList.remove('hidden')
            } else {
                plant.classList.add('hidden')
            }
            if (button.classList.contains('all-plants')) {
                plant.classList.remove('hidden')
            }
        })
    })
})
}
groupScript ()