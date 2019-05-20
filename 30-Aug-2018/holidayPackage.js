class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

let assert = require('chai').assert;
describe("HolidayPackage", function() {
    it("Must be instantiated with two parameters – a string destination and a string season", function() {
        let destination = 'nenejrfnjfr';
        let season = 'einfnrfnf';

        let holidayPackage = new HolidayPackage(destination, season);

        assert.equal(holidayPackage.destination, destination);
        assert.equal(holidayPackage.season, season);
        assert.deepEqual(holidayPackage.vacationers, []);
        assert.equal(holidayPackage.insuranceIncluded, false);
    });

    describe("insuranceIncluded", function() {
        it("should throw error if not boolean", function() {
            let destination = 'nenejrfnjfr';
            let season = 'einfnrfnf';
            let holidayPackage = new HolidayPackage(destination, season);

            assert.throws(() => {holidayPackage.insuranceIncluded = 'uhuefref'}, "Insurance status must be a boolean");
        });

        it("should get and set boolean", function() {
            let destination = 'nenejrfnjfr';
            let season = 'einfnrfnf';
            let holidayPackage = new HolidayPackage(destination, season);
            let insInc = true;
            
            holidayPackage.insuranceIncluded = true;

            assert.equal(holidayPackage.insuranceIncluded, insInc);
        });        
    });

    describe("showVacationers", function() {
        it("should return error string if no vacationers", function() {
            let destination = 'nenejrfnjfr';
            let season = 'einfnrfnf';
            let holidayPackage = new HolidayPackage(destination, season);

            let result = holidayPackage.showVacationers();

            assert.equal(result, "No vacationers are added yet");
        });

        it("should return string with all vacationers", function() {
            let destination = 'nenejrfnjfr';
            let season = 'einfnrfnf';
            let holidayPackage = new HolidayPackage(destination, season);
            let vacationers = ['vac 2', 'vac 3', 'ije uid'];
            for (let vac of vacationers) {
                holidayPackage.addVacationer(vac);
            }

            let result = holidayPackage.showVacationers();

            assert.equal(result, `Vacationers:\n${vacationers.join('\n')}`);
        });
    });
    
    describe("addVacationer", function() {
        it("should throw error if given empty vac name", function() {
            let destination = 'nenejrfnjfr';
            let season = 'einfnrfnf';
            let holidayPackage = new HolidayPackage(destination, season);

            assert.throws(() => {holidayPackage.addVacationer(5)}, 'Vacationer name must be a non-empty string');
            assert.throws(() => {holidayPackage.addVacationer(' ')}, 'Vacationer name must be a non-empty string');
        });
        
        it("should throw error if not given first and last name", function() {
            let destination = 'nenejrfnjfr';
            let season = 'einfnrfnf';
            let holidayPackage = new HolidayPackage(destination, season);

            assert.throws(() => {holidayPackage.addVacationer('dhjifuerhf')}, 'Name must consist of first name and last name');
            assert.throws(() => {holidayPackage.addVacationer('dhji f ue rhf')}, 'Name must consist of first name and last name');
        });

        it("should add a vactioner with proper name", function() {
            let destination = 'nenejrfnjfr';
            let season = 'einfnrfnf';
            let holidayPackage = new HolidayPackage(destination, season);
            let vactioner1 = 'f l';
            let vactioner2 = 'fkjnkf hnjrnfrl';

            holidayPackage.addVacationer(vactioner1);
            holidayPackage.addVacationer(vactioner2);

            assert.deepEqual(holidayPackage.vacationers, [vactioner1, vactioner2]);
        });
    });
    
    describe("generateHolidayPackage", function() {
        it("should throw error if no vacationers were added", function() {
            let destination = 'nenejrfnjfr';
            let season = 'einfnrfnf';
            let holidayPackage = new HolidayPackage(destination, season);

            assert.throws(() => {holidayPackage.generateHolidayPackage();}, "There must be at least 1 vacationer added");
        });

        it("should return correct sum", function() {
            let destination = 'nenejrfnjfr';
            let season = 'Summer';
            let holidayPackage = new HolidayPackage(destination, season);
            let vacationers = ['vac 2', 'vac 3', 'ije uid'];
            for (let vac of vacationers) {
                holidayPackage.addVacationer(vac);
            }
            let totalPrice = 1400;
            let expectedResult = "Holiday Package Generated\n" +
            "Destination: " + destination + "\n" +
            holidayPackage.showVacationers() + "\n" +
            "Price: " + totalPrice;

            let result = holidayPackage.generateHolidayPackage();

            assert.equal(result, expectedResult);
        });

        it("should return correct sum", function() {
            let destination = 'nenejrfnjfr';
            let season = 'hjduhf';
            let holidayPackage = new HolidayPackage(destination, season);
            holidayPackage.insuranceIncluded = true;
            let vacationers = ['vac 2', 'vac 3'];
            for (let vac of vacationers) {
                holidayPackage.addVacationer(vac);
            }
            let totalPrice = 900;
            let expectedResult = "Holiday Package Generated\n" +
            "Destination: " + destination + "\n" +
            holidayPackage.showVacationers() + "\n" +
            "Price: " + totalPrice;

            let result = holidayPackage.generateHolidayPackage();

            assert.equal(result, expectedResult);
        });
    });
    
});
