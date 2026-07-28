const akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
};

const form = document.getElementById("akan-form");
const resultSection = document.getElementById("result");
const resultText = document.getElementById("result-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const birthdateValue = document.getElementById("birthdate").value; // "YYYY-MM-DD"
  const gender = document.getElementById("gender").value;

  if (!birthdateValue || gender === "") {
    alert("Please enter your birthdate and select your gender.");
    return;
  }

  const [year, month, day] = birthdateValue.split("-").map(Number);

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Please enter a valid date.");
    return;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  let d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7;
  d = ((d % 7) + 7) % 7;

  const akanName = akanNames[gender][d];

  resultText.textContent = akanName;
  resultSection.classList.add("show");
});

