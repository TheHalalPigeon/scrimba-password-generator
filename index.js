let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",                     "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6",                     "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`",                     "@"]
let textEl = document.getElementById("num")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")

function generatePassword() {
    let repeat = 0
    let password = ""
    if (Number(textEl) === 0) {
        repeat = 10
    } else {
        repeat = Number(textEl.value)
    }
    for (i = 0; i < repeat; i++) {
        let char = characters[Math.floor(Math.random() * characters.length)]
        password += char
    }
    return password
}

function assignPasswords() {
    password1.textContent = generatePassword()
    password2.textContent = generatePassword()
    password3.textContent = generatePassword()
    password4.textContent = generatePassword()
}