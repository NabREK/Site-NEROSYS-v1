// Toggle sidebar mobile
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-toggle");
const main = document.querySelector("main");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  main.classList.toggle("full");
});

/* --- Graphiques Chart.js (inchangés) --- */
// Exemple CA total
new Chart(document.getElementById("chartCA"), {
  type: "doughnut",
  data: {
    labels: ["CA (M€)", "Reste"],
    datasets: [{
      data: [1.965, 0.035],
      backgroundColor: ["#4CAF50", "#e0e0e0"]
    }]
  },
  options: { plugins: { legend: { display: false } } }
});

// ... autres graphiques comme déjà codés ...