function login() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;

    // ทดสอบก่อน
    if (user === 'TAOXLMB5' && pass === '1234') {
        localStorage.setItem('username', user);

        // 🔥 จุดสำคัญ
        window.location.href = 'home.html';
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
}

function showPage(page) {
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}

function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;
    let pass2 = document.getElementById("regPass2").value;

    if (user === "" || pass === "" || pass2 === "") {
        alert("กรอกข้อมูลให้ครบ");
        return;
    }

    if (pass !== pass2) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("สมัครสมาชิกสำเร็จ");
    showPage("login");
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if (user === savedUser && pass === savedPass) {
        alert("เข้าสู่ระบบสำเร็จ");
        document.body.innerHTML = `<h1 style="text-align:center;margin-top:100px;">
        ยินดีต้อนรับ ${user}</h1>`;
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
}

function showPage(page) {
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}

function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;
    let pass2 = document.getElementById("regPass2").value;

    if (user === "" || pass === "" || pass2 === "") {
        alert("กรอกข้อมูลให้ครบ");
        return;
    }

    if (pass !== pass2) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("สมัครสมาชิกสำเร็จ");
    showPage("login");
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if (user === savedUser && pass === savedPass) {
        alert("เข้าสู่ระบบสำเร็จ");
        document.body.innerHTML = `<h1 style="text-align:center;margin-top:100px;">
        ยินดีต้อนรับ ${user}</h1>`;
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
}


