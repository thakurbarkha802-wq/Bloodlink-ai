let donors = JSON.parse(localStorage.getItem("donors")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function addDonor() {
    const name = document.getElementById("name").value;
    const blood = document.getElementById("blood").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;

    if (!name || !blood || !city || !phone) {
        alert("⚠️ Please fill all fields");
        return;
    }

    // Firebase save (agar connected hai)
    if (typeof db !== "undefined") {
        db.collection("donors").add({
            name,
            blood,
            city,
            phone
        });
    }

    document.body.insertAdjacentHTML("beforeend",
    `<div class="popup">✅ Donor Registered</div>`
);

    // Clear fields
    document.getElementById("name").value = "";
    document.getElementById("blood").value = "";
    document.getElementById("city").value = "";
    document.getElementById("phone").value = "";
}

function createOrder() {
    const blood = document.getElementById("reqBlood").value;
    const hospital = document.getElementById("hospital").value;
    const contact = document.getElementById("contact").value;

function addDonor() {
    const name = document.getElementById("name").value.trim();
    const blood = document.getElementById("blood").value.trim();
    const city = document.getElementById("city").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // DEBUG
    console.log(name, blood, city, phone);

    if (name === "" || blood === "" || city === "" || phone === "") {
        alert("⚠️ Please fill all fields");
        return;
    }

    alert("✅ Donor Registered Successfully");

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("blood").value = "";
    document.getElementById("city").value = "";
    document.getElementById("phone").value = "";
}
    // Clear fields
    document.getElementById("reqBlood").value = "";
    document.getElementById("hospital").value = "";
    document.getElementById("contact").value = "";
}
// LOAD OLD DATA
let order= JSON.parse(localStorage.getItem("orders")) || [];

// CREATE ORDER
function createOrder() {
    const blood = document.getElementById("reqBlood").value.trim();
    const hospital = document.getElementById("hospital").value.trim();
    const contact = document.getElementById("contact").value.trim();

    if (blood === "" || hospital === "" || contact === "") {
        alert("⚠️ Please fill all fields");
        return;
    }

    let order = { blood, hospital, contact };

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("✅ Request Sent Successfully");

    // clear
    document.getElementById("reqBlood").value = "";
    document.getElementById("hospital").value = "";
    document.getElementById("contact").value = "";
}

// SHOW ORDERS
function loadOrders() {
    const list = document.getElementById("orderList");

    if (!list) return;

    list.innerHTML = "";

    orders.forEach(o => {
        list.innerHTML += `
        <li>
        🩸 ${o.blood} | ${o.hospital} | ${o.contact}
        </li>`;
    });
}

// AUTO RUN
window.onload = loadOrders;


// RUN ON PAGE LOAD
window.onload = function () {
    loadOrders();
};
function loadOrders(){
if(!orderList) return;
orderList.innerHTML="";
orders.forEach(o=>{
orderList.innerHTML+=`<li>${o.blood} - ${o.hospital}</li>`;
});
}

loadDonors();
loadOrders();
