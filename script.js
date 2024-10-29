const passwordbox = document.getElementById("password");

const length = 10;

const up = "QWERTYUIOPLKJHGFDSAZXCVBNM";

const lo = "qwertyuioplkjhgfdsazxcvbnm";

const num = "1234567890";

const sym = "!@#$%^&*/-+<>?=";

const all = up + lo + num + sym;

function create() {

    let password = "";

    password += up[Math.floor(Math.random() * up.length)];

    password += lo[Math.floor(Math.random() * lo.length)];

    password += num[Math.floor(Math.random() * num.length)];

    password += sym[Math.floor(Math.random() * sym.length)];

    while (password.length < length) {

        password += all[Math.floor(Math.random() * all.length)];

    }

    passwordbox.value = password;

}


function copyp(){

    passwordbox.select();

    document.execCommand("copy");
    
}