const findLoginForm = document.querySelectorAll('.loginForm')[0]
const findLoginTextForm = findLoginForm.querySelectorAll('.loginNameForm')[0]
const findloginAfter = document.querySelectorAll('.loginAfter')[0]
const loginName = window.localStorage.getItem("name")
if (loginName === null){
    function login(event){
        const findTextValue = findLoginTextForm.value
        event.preventDefault()
        window.localStorage.setItem("name", findTextValue)
        findloginAfter.querySelector('span').innerText = findTextValue
        findLoginForm.classList.toggle('hidden')
        findloginAfter.classList.toggle('hidden')
    }
    findLoginForm.addEventListener('submit', login)
}
else{
    findloginAfter.querySelector('span').innerText = loginName
    findLoginForm.classList.toggle('hidden')
    findloginAfter.classList.toggle('hidden')
}
