// Переключение между разделами
function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach((section) => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

// Динамическая загрузка списка отчетов
document.addEventListener("DOMContentLoaded", () => {
  fetch('reports-data.json')
    .then(response => response.json())
    .then(data => {
      const reportsList = document.getElementById('reports-list');
      data.reports.forEach(report => {
        const li = document.createElement('li');
        li.textContent = `${report.title} — ${report.date}`;
        reportsList.appendChild(li);
      });
    })
    .catch(error => console.error('Ошибка загрузки отчетов:', error));
});
