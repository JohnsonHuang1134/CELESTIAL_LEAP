const form = document.querySelector('#myForm');
form.addEventListener("submit", async function (e) {
    e.preventDefault(); // 阻止跳轉
    
    const formData = new FormData(form);
    fetch('send.php', {method: 'POST',body: formData});
    form.reset();
    alert("Thank you for your letter.");
});