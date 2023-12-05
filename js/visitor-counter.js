let counterContainer = document.querySelector("#counterfull");
let counterContainerDaily = document.querySelector("#counterdaily");
let counterContainerMonthly = document.querySelector("#countermonth");

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

let visitCount = localStorage.getItem("page_view");
let dailyVisitCount = localStorage.getItem(`page_view_daily_${currentDay}`);
let monthlyVisitCount = localStorage.getItem(`page_view_monthly_${currentMonth}`);

const updateVisitCount = (counterContainer, storageKey, count) => {
  counterContainer.innerHTML = count;
  localStorage.setItem(storageKey, count);
};

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  updateVisitCount(counterContainer, "page_view", visitCount);
} else {
  visitCount = 1;
  updateVisitCount(counterContainer, "page_view", 1);
}

if (dailyVisitCount) {
  dailyVisitCount = Number(dailyVisitCount) + 1;
  updateVisitCount(counterContainerDaily, `page_view_daily_${currentDay}`, dailyVisitCount);
} else {
  dailyVisitCount = 1;
  updateVisitCount(counterContainerDaily, `page_view_daily_${currentDay}`, dailyVisitCount);
}

if (monthlyVisitCount) {
  monthlyVisitCount = Number(monthlyVisitCount) + 1;
  updateVisitCount(counterContainerMonthly, `page_view_monthly_${currentMonth}`, monthlyVisitCount);
} else {
  monthlyVisitCount = 1;
  updateVisitCount(counterContainerMonthly, `page_view_monthly_${currentMonth}`, monthlyVisitCount);
}

visitCount = 1
dailyVisitCount = 1
monthlyVisitCount = 1