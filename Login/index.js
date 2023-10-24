const input = document.getElementById('input')
const Btn = document.getElementById ('Btn')
const error = document.getElementById('error')
const msg = document.getElementById('msg')
const welcome = document.getElementById('welcome')
const special = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
const confirmation = document.getElementById('Confirm_container')
const success = document.getElementById('success')
const Container = document.getElementById ('Container')


input.addEventListener('input',()=>{
    let inputValue = input.value
    console.log(inputValue)
    if(!special.test(inputValue)){
        error.innerText = 'Vaild Email required ❌❌';
    }   
    else{
        error.innerText = ' '
        msg.innerText = 'Vaild Email ✔✔'
    }
})


Btn.onclick = ()=>{

    let message = ` A confirmation email has been sent to ${input.value} . Please open it and click the button inside to confirm your subscription.`
    
    if(special.test(input.value) && input.value.includes('gmail.com')){
        Container.style.display = 'none'
        success.style.display = 'block'
        confirmation.innerText = message
    }
    else{
        alert('invaild email address')
    }
}
