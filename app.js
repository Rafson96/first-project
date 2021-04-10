const searchInput = document.querySelector("#search")
const ul = document.querySelector(".menu-list")
const mealsList = [...document.querySelectorAll(".menu-list li")]




const searchMeals = function (e) {
    const searchText = this.value.toLowerCase()
    let meal = mealsList.filter(li => li.textContent.toLocaleLowerCase().includes   (searchText));
    ul.textContent = ''
    meal.forEach(li => ul.appendChild(li));
}


searchInput.addEventListener('input', searchMeals)


