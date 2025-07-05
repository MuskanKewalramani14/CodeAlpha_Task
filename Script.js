function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value) - 1; // 0-based
    let year = parseInt(document.getElementById("year").value);
    let dob = new Date(year, month, day);
    let today = new Date();
    
    // Basic validation
    if (isNaN(dob.getTime())) {
        document.getElementById("result").innerText = "Invalid date!";
        return;
    }

    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() - month;
    let ageDays = today.getDate() - day;

    // Adjust if birthday hasn't occurred this year
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        ageMonths--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += lastMonth;
    }

    document.getElementById("result").innerText = "Age: " + ageYears + " years, " + ageMonths + " months, " + ageDays + " days";
}
