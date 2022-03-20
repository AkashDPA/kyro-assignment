class Schedule_Class {
    constructor(data = []) {
        this.data = data
        return this
    }

    getPersonNames() {
        var personNames = new Set();
        this.data.forEach(schedule => {
            personNames.add(schedule.person_name);
        })
        return personNames;
    }

    getProjectNames() {
        var projectNames = new Set();
        this.data.forEach(schedule => {
            projectNames.add(schedule.project_name);
        })
        return projectNames;
    }
}