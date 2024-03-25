class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, action) {
        if (!time || !action) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        for (let index in this.alarmCollection) {
            if (time == this.alarmCollection[index][time]) {
                console.warn('Уже присутствует звонок на это же время');
            }
        }
        this.alarmCollection.push({'callback': action, 'time': time, 'canCall': true});
    }

    removeClock(time) {
        let filteredAlarmCollection = this.alarmCollection.filter((element) => element.time !== time);
        this.alarmCollection = filteredAlarmCollection;
    }

    getCurrentFormattedTime() {
        let currentTime = new Date()
        return currentTime.getHours() + ':' + currentTime.getMinutes()
    }

    start() {
        if (this.intervalId) {
            return null
        }
        this.intervalId = setInterval(() => {
        this.alarmCollection.forEach(element => {
            if (element.time == this.getCurrentFormattedTime() && element.canCall == true) {
                element.canCall = false;
                element.callback();
            }
        })}, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => {
            element.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}