let output = document.querySelector('.output')
let buttons = document.querySelectorAll('.calc-btn')

let num = ''
let expression = ''
let checkNum = false
let operation = ['+', '-', '*', '/',]


buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let currentValue = btn.textContent
        if (currentValue === 'C') {
            clear()
        } else if (currentValue === "=") {
            result()
        } else if (operation.includes(currentValue)) {
            if (operation.includes(expression[expression.length - 1])) {
                expression = expression.slice(0, expression.length - 1) + currentValue
            } else {
                if (checkNum === false) {
                    expression = expression + currentValue
                    checkNum = true
                } else {
                    output.textContent = eval(expression)
                    expression = eval(expression) + currentValue
                    console.log(expression)
                }
            }
            num = ''
        } else {
            num = num + currentValue
            expression = expression + currentValue
            output.textContent = num
        }
    })
})


function clear() {
    output.textContent = '0'
    num = ''
    expression = ''
}

function result() {
    output.textContent = eval(expression) || 0
    num = ''
}
