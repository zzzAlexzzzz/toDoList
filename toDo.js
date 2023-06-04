let inp = document.querySelector('.form__field')
let btn = document.querySelector('.btn ')
let one = document.querySelector('.list5a')
let tot = document.querySelector('.total')
let i = 0

btn.onclick = function () {
    if (inp.value === '') {
        alert('Поле пустое')
        // Swal.fire('Поле пустое')     НЕ работает почему то
    }
    if (inp.value === '') return
    elements(inp.value)
    inp.value = ''
}

function elements (value) {
    i++
    let li = document.createElement('li')
    li.className = 'li'
    li.textContent = value
    one.appendChild(li)

    let btn = document.createElement('button')
    btn.className = 'btn2'
    btn.textContent = 'delete'
    li.appendChild(btn)

    btn.addEventListener('click', (e) => {
        one.removeChild(li)
        i--
        tot.textContent = i        
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })
    tot.textContent = i
}