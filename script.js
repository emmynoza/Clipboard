let beoTemplate = document.getElementById('beoTemplates');

const item = document.querySelectorAll('.list-group-item')


const beoItem = Array.from(item)

const input = document.getElementById('input')

function copyToClipboard(item) {

    console.log('i was clicked');
    console.log(item.innerText);
    navigator.clipboard.writeText(item.innerText)
}

function addItem() {
    beoItem.push(input.value)
    console.log(input.value);
    console.log(beoItem);
}


beoItem.forEach(item => {
    console.log(item.outerHTML);
    item.addEventListener('click', e => {
        e.preventDefault()
        item.toggleAttribute('active')
        copyToClipboard(item)
    })


})

