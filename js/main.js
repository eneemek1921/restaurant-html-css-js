console.log('JS work')

async function loadContent(pageName) {
    const container = document.getElementById('container')
    const response = await fetch(`../data/pages/${pageName}.html`)
    const html = await response.text();
    container.innerHTML = html;
    if (response.ok) {
        container.classList.add('fade-in')
        setTimeout(() => {
            container.classList.remove('fade-in')}, 500);
        if (pageName === 'list') {
            loadDishes();
        }
        console.log('Succes loadContent')
    } else {
        console.log('Failed loadContent');
    }
}
document.getElementById('mainBtn').addEventListener('click', () => loadContent('main'));
document.getElementById('listBtn').addEventListener('click', () => loadContent('list'));
document.getElementById('aboutUsBtn').addEventListener('click', () => loadContent('about'));
loadContent('main')

function loadDishes(){
    const container = document.getElementById('listContent');
    container.innerHTML='';
    dishes.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className ='dishCard';
        dishCard.innerHTML=`
            <span>${dish.title}</span>
            <span class="dishPrice">${dish.price}</span>
        `;
        dishCard.addEventListener('click', function(){
            this.classList.toggle('scaled');
        })
        container.appendChild(dishCard);
    })
};



