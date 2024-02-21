const loginForm = document.querySelector(".login-form")
const registerForm = document.querySelector(".register-form")

const registeredUsers = []

function handleLogin(event) {
  // O comportamento padrão do navegador no envio de um formulário é recarregar
  // então isso aqui remove esse comportamento
  event.preventDefault();

  const formData = new FormData(loginForm);

  const username = formData.get("username")
  const password = formData.get("password")

  const foundUser = registeredUsers.find(user => user.username === username)

  if (!foundUser) {
    alert("Username ou senha incorretos")
    return
  }

  if (username === foundUser.username && password === foundUser.password) {
    alert("Logado")
    return
  }

  alert("Username ou senha incorretos")
}

function handleRegister(event) {
  // O comportamento padrão do navegador no envio de um formulário é recarregar
  // então isso aqui remove esse comportamento
  event.preventDefault();

  const formData = new FormData(registerForm);

  const username = formData.get("username")
  const password = formData.get("password")

  const usernameAlreadyExists = registeredUsers.find(user => user.username === username)

  if (usernameAlreadyExists) {
    alert("Username já está em uso")
    return
  }

  registeredUsers.push({
    username,
    password
  })

  alert("Usuário cadastrado com sucesso!")
}

loginForm.addEventListener("submit", handleLogin)
registerForm.addEventListener("submit", handleRegister)
