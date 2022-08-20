function clearOutput() {
    document.getElementById('output').value = ''

}

function del() {
    console.log('del button clicked')
}

function numbers(event) {
    
    document.getElementById('output').value += event

}

function output() {
    
    document.getElementById('output').value =  eval(document.getElementById('output').value)

    
    
}
function del() {
    
    let output = document.getElementById('output').value


    const splitted = output.split('')
    const popped = splitted.pop()
    const afterPopped = splitted.join('')
    

    document.getElementById('output').value = afterPopped

}

