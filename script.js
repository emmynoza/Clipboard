let beoTemplate = document.getElementById('beoTemplates');
const input = document.getElementById('input')
const submitBtn = document.getElementById('submit-btn')
function copyToClipboard(item) {
    navigator.clipboard.writeText(item.innerText)
}
const data = ['Drr 3 6ft']

const beoItem = Array.from(data)

// function addItem() {


//     const item = document.createElement('a')

//     item.classList.add('list-group-item', 'list-group-item-action')
//     item.href = "#"
//     item.setAttribute("aria", true)
//     item.innerHTML = `${input.value}<button>X</button>`

//     beoItem.push(item)

//     render(beoItem)

// }

start(beoItem)

function start(items) {
    items.forEach(item => {
        console.log(item);

        const template = `<a class= "list-group-item list-group-item-action">${item}</a><button>x</button>`

        const listItem = document.createElement('div')

        listItem.innerHTML = template;

        beoTemplate.appendChild(listItem)

        listItem.addEventListener('click', e => {
            e.preventDefault()
            listItem.toggleAttribute('active')
            copyToClipboard(listItem)

        })
    })
}

submitBtn.addEventListener('click', e => {
    e.preventDefault()
    // addItem()
})

