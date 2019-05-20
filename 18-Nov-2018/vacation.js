class Vacation{
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget){
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids[grade]) {
            this.kids[grade] = [];
        }

        if (this.kids[grade].some(x => x.split('-')[0] === name)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }


        this.kids[grade].push(`${name}-${budget}`);
    }

    removeChild(name, grade){
        if (!this.kids[grade] || !this.kids[grade].some(x => x.split('-')[0] === name)) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        let indexOfKid = this.kids[grade].findIndex(x => x.split('-')[0] === name);
        this.kids[grade].splice(indexOfKid, 1);

        return this.kids[grade];
    }

    toString(){
        if (Object.keys(this.kids).length === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }


    }

    get numberOfChildren(){
        var summed = 0;

        for (var key in this.kids) {
            summed += this.kids[key].length;
        };

        return summed;
    }
}