

class CountTime {
    constructor(selector, endDate) {
        this.container = document.querySelector(selector)
        this.endDate = endDate
        this.init()
    }


    counter(duration) {
         if (duration>0) {
            return  this.container.innerHTML = `
            <div class="time-sec">
                <h3 class="main-time" id="months">${duration.months()}</h3> <span>Months</span>
            </div>
            <div class="time-sec">
                <h3 class="main-time" id="days">${duration.days()}</h3> <span>Days</span>
            </div>
            <div class="time-sec">
                <h3 class="main-time id="hours">${duration.hours()}</h3> <span>Hours</span>
            </div>
            <div class="time-sec">
                <h3 class="main-time" id="minutes">${duration.minutes()}</h3> <span>Mins</span>
            </div>
            <div class="time-sec">
                <h3 class="main-time" id="seconds">${duration.seconds()}</h3> <span>Sec</span>
            </div>
        `
        }else{
            alert("Your event has already come")
        }
       
    }


   

    init() {
        const now = moment()
        let duration = moment.duration(this.endDate.diff(now))
        return this.counter(duration)
    }
}


function runCounter() {

    let year = document.getElementById("year").value
    let month = document.getElementById("monthSelect").value
    let day = document.getElementById("day").value
    let hour = document.getElementById("hour").value
    let minute = document.getElementById("minute").value

    let inpTopic = document.getElementById("topic").value
    let inpDesc = document.getElementById("desc").value
    let outTopic = document.getElementById("outputTopic")
    let outDesc = document.getElementById("outputDesc")

    let newDate = moment().set({
        'year': year,
        'month': month,
        'date': day,
        'hour': hour,
        'minute': minute,
        'second': 0
    })

    if (newDate < moment()) {
        alert("your event can't be in the past")
    }else{
        return document.getElementById("head").style.display = "none",
        document.getElementById("inputArea").style.display = "none",
        document.getElementById("main").style.display = "block",
        outTopic.innerHTML = inpTopic,
        outDesc.innerHTML = inpDesc,
        setInterval(() => {
            event = new CountTime("#normal-countdown", newDate)
        }, 1000);
    }
}


function showInpArea() {
    document.getElementById("head").style.display = "none"
    return setTimeout(document.getElementById("inputArea").style.display = "block", 1000);
}
