

const submit = document.getElementById('button')

const answerMobile = document.querySelector('.mobile')
const answerDesktop = document.querySelector('.desktop')



submit.addEventListener('click', () => {
    const input = document.getElementById('input')
    let mail = input.value
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    const reg=regexExp
    if (reg.test(mail)) {
        answerMobile.classList.remove('output_corect')
        answerDesktop.classList.remove('output_incorect')
        answerMobile.textContent = 'This is real email'
        answerDesktop.textContent = 'This is real email'
        answerMobile.classList.add('output_corect')
        answerDesktop.classList.add('output_corect')
        
        setTimeout(function(){
            location.reload()
        },2000)
        

    } else {
        answerMobile.classList.remove('output_corect')
        answerDesktop.classList.remove('output_incorect')
        answerMobile.textContent = 'Opps! Please check your email'
        answerDesktop.textContent = 'Opps! Please check your email'
        answerMobile.classList.add('output_incorect')
        answerDesktop.classList.add('output_incorect')
    }
})