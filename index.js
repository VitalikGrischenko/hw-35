gameBtn
document.addEventListener('DOMContentLoaded', () => {
    const keys = ['H', 'S', 'O', 'Z', 'G', 'E', 'B', 'P', 'M', 'R'];
    let currentKeyIndex = 0;
  
    const statusElement = document.getElementById('status');
    const keyElement = document.getElementById('key');
    const gameBtn = document.getElementById('gameBtn');
  
    function updateKey() {
      keyElement.textContent = keys[currentKeyIndex];
    }
  
    function handleKeyDown(event) {
      if (event.key.toUpperCase() === keys[currentKeyIndex]) {
        currentKeyIndex += 1;
        updateKey();
        if (currentKeyIndex === keys.length) {
          showSuccessNotification();
          resetGame();
        }
      } else {
        showErrorNotification();
      }
    }
  
    function handleNewGameClick() {
      resetGame();
      updateKey();
    }
  
    function resetGame() {
      currentKeyIndex = 0;
    }
  
    function showSuccessNotification() {
      PNotify.success({
        title: 'Congratulations!',
        text: 'You pressed all the correct keys!',
      });
    }
  
    function showErrorNotification() {
      PNotify.error({
        title: 'Oops!',
        text: 'Wrong key pressed. Try again!',
      });
    }
  

    document.addEventListener('keydown', handleKeyDown);
    gameBtn.addEventListener('click', handleNewGameClick);
  

    updateKey();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const chartData = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
      datasets: [
        {
          label: "Sales for the Last Month",
          data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
          backgroundColor: "#2196f3",
          borderColor: "#2196f3",
          borderWidth: 1,
        },
      ],
    };
  
    const salesChartCanvas = document.getElementById('sales-chart').getContext('2d');
  
    const salesChart = new Chart(salesChartCanvas, {
      type: 'line',
      data: chartData,
    });
  });