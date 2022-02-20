let daysInMonths=[31,28,31,30,31,30,31,31,30,31,30,31];
let daysNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthNames=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let startDay=6;

function loadInitialCalender(){
    let container  = document.getElementById("daysContainer");

    for(let i=0;i<7; i++){
        let child= document.createElement('div');
        child.innerHTML = daysNames[i];
        child.classList.add('dayLabel');
        container.appendChild(child);
    }
	displayDefaultMonth();
}
function displayDefaultMonth(){
    let date = new Date();
    let month = date.getMonth();
    document.getElementById("month").selectedIndex=month;
	displayMonth(month);
}
function handleArrowClick(type){
	let current = document.getElementById("month").value;
	current= Number(current);
	if(type == 1){
		if(current != 0){
			current = current - 1;
		}
	}
	else{
		if(current < 11)
		current = current + 1;
	}
	document.getElementById("month").selectedIndex=current;
	displaySelectedMonth();
}

function displaySelectedMonth(){
    clearAll();
    let selected_Month = document.getElementById("month").value;
    displayMonth(selected_Month);
}

function displayMonth(selected_Month){
	
	let container  = document.getElementById("datesContainer");
	container.textContent="";
	let sum=0;
    for(let i=0;i<selected_Month;i++){
        sum=sum+daysInMonths[i];
    }
	let index = (sum%7+startDay)%7;

	for(let i=0;i<daysInMonths[selected_Month]+index;i++){
        let child= document.createElement('div');
        child.classList.add('dates');
        container.appendChild(child);
    }

    let classes = document.getElementsByClassName("dates");
    
    let date= 1;

    for(let i=index;i<daysInMonths[selected_Month]+index;i++){
        classes[i].innerHTML = date;
        date++;
    }
	document.getElementById("monthHeading").innerHTML =monthNames[selected_Month] + " 2022";
}
function clearAll(){
    let classes = document.getElementsByClassName("dates");

    for(let i=0;i<classes.length;i++){
        classes[i].innerHTML = "";
    }
}



