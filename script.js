import data from './data.json' assert{ type: "json" };

window.onload = () => {
    let chartSection = document.querySelector('.chart-section');
    // console.log(chartSection);
    let max = 0;
    let indexOfData = 0;


    data.forEach(function (item, index) {
        if(item.amount > max){
            max = item.amount;
            indexOfData = index;
        }

        let chart = document.createElement('div');
        let titleDiv = document.createElement('div');
        let chartStick = document.createElement('div');
        let daysBar = document.createElement('div');
        chart.classList = 'chart';
        titleDiv.classList = 'title-div';
        chartStick.classList = 'chart-stick';
        daysBar.classList = 'days-bar';
    

        titleDiv.innerHTML = "$" + item.amount;

        chartStick.style.height = `${item.amount}` *3 + 'px'; 
        daysBar.innerHTML = item.day;
        chart.append(titleDiv, chartStick, daysBar);
        chartSection.appendChild(chart);


    });


    let activeChat = document.querySelectorAll('.chart')[indexOfData];
    activeChat.classList.add('active');




}


