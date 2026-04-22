function sum(a, b) {
    return a + b;
}

function testSum() {
    let result = sum(4, 4)
    if (result == 8) {
        console.log(true)
    } else {
        console.log(false)
    }
}

function ceklogin(username, password) {
    let userData = {
        "pob": "abcde",
        "syadam": "abcde",
    }

    if (userData[username] != "" && userData[username] === password) {
        console.log("login berhasil")
        return
    }
    console.log("login error")
}

ceklogin("pob", "abcde");
