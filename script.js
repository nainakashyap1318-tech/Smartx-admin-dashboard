const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
const links = document.querySelectorAll(".sidebar nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});
const ctx = document.getElementById("revenueChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Revenue ($)",
      data: [4000, 5200, 4800, 6100, 7200, 8600],
      borderColor: "#0d6efd",
      backgroundColor: "rgba(13,110,253,0.1)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});