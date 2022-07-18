function attachEventsListeners() {
    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');
    
    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);
    
    let hours = 0;
    function convert(event) {
        if (event.target.id == 'daysBtn') {
            hours = Number(daysInputElement.value) * 24;
        } else if (event.target.id == 'hoursBtn') {
            hours = Number(hoursInputElement.value);
        } else if (event.target.id == 'minutesBtn') {
            hours = Number(minutesInputElement.value) / 60;
        } else if (event.target.id == 'secondsBtn') {
            hours = Number(secondsInputElement.value) / 3600;
        }
        daysInputElement.value = hours / 24;
        hoursInputElement.value = hours;
        minutesInputElement.value = hours * 60;
        secondsInputElement.value = hours * 3600;
    }
}