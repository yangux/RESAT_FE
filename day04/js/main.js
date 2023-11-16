const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;

const displayDate = document.querySelector("#displayDate");
const displayDateSpan = displayDate.querySelector("span");
const calendar = document.querySelector("#calendar");

displayDateSpan.innerHTML = `${year}년 ${month}월`;

function generateCalendar(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0).getDate();

  let dayCount = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if ((i === 0 && j < firstDay.getDay()) || dayCount > lastDay) {
        cell.innerHTML = "";
      } else {
        cell.innerHTML = dayCount;
        dayCount++;
      }

      row.append(cell);
    }
    calendar.append(row);
  }
}

generateCalendar(year, month);
