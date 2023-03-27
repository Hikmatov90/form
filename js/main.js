let doc = document;

let img = doc.querySelector('.css-1j8o68f')
let popur = doc.querySelector('.popur')
let reset = doc.querySelector('.reset')
let btn = doc.querySelector('button')
let form = doc.forms.form

// let inp1 = form.elements.inp1
// let inp2 = form.elements.inp2
// let inp3 = form.elements.inp3
// let inp4 = form.elements.inp4
// let inp5 = form.elements.inp5
// let inp6 = form.elements.inp6
// let inp7 = form.elements.inp7
// let inp8 = form.elements.inp8
// let inp9 = form.elements.inp9
// let inp10 = form.elements.inp10
// let inp11 = form.elements.inp11

img.addEventListener('click', () => {
    popur.classList.add('on')
    img.classList.add('off')
})
reset.addEventListener('click', () => {
    alert('Данные успещно удалены')
})




form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = {}
    let inputs = doc.querySelectorAll('input')

    let input_select = doc.querySelector('select')
    let input_comment = doc.querySelector('textarea')

    for (let item of inputs) {
        let { name, value } = item
        formData[name] = value
 
        formData.select = input_select.value
        formData.comment = input_comment.value
        item.value = ''

    }

    input_select.value = ''
    input_comment.value = ''
    console.log(formData)
    let formDataJson = JSON.stringify(formData)
    console.log(formDataJson);
})