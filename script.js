function calculateAge() {
    const birthdateValue = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if (birthdateValue === "") {
        result.textContent = "Please select your birth date!";
        return;
    }

    const birthdate = new Date(birthdateValue);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        <h3>🎉 Your Age</h3>
        <p>${years} Years</p>
        <p>${months} Months</p>
        <p>${days} Days</p>
    `;
}