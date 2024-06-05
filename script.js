const email = document.getElementById('email')
const password = document.getElementById('password')
const messageError = document?.getElementById('error')
const button = document?.getElementById('button')

console.log(email, password, messageError)

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

button.addEventListener('click', function (e) {
  e.preventDefault()
  if (validateEmail(email.value)) {
    messageError.textContent = ''
    messageError.style.display = 'none'
    alert('Email validado com sucesso!')
  } else {
    messageError.textContent = 'Email inválido.'
    messageError.style.display = 'block'
    email.value = ''
    password.value = ''
  }
})
