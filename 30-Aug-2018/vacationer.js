class Vacationer {
    constructor(names, creditCard){
        this.fullName = names;

        this.idNumber = this.generateIDNumber();

        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };
        if (creditCard !== undefined) {
            this.addCreditCardInfo(creditCard);
        }

        this.wishList = [];
    }

    getVacationerInfo(){
        return "Name: " + this.fullName.firstName + " " + this.fullName.middleName + " " + this.fullName.lastName + "\n" +
        "ID Number: " + this.idNumber + "\n" +
        "Wishlist:\n" + (this.wishList.length === 0 ? "empty" : this.wishList.join(", ")) + "\n" +
        "Credit Card:\n" +
        "Card Number: " + this.creditCard.cardNumber + "\n" +
        "Expiration Date: " + this.creditCard.expirationDate + "\n" +
        "Security Number: " + this.creditCard.securityNumber;
    }

    addDestinationToWishList(destination){
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }

        this.wishList.push(destination);
        this.wishList.sort((a,b) => a.length - b.length);
    }

    addCreditCardInfo(input){
        if (input.length !== 3) {
            throw new Error("Missing credit card information");
        }

        if (typeof input[0] !== "number" || typeof input[2] !== "number") {
            throw new Error("Invalid credit card details");
        }

        this.creditCard = {
            cardNumber: input[0], 
            expirationDate: input[1], 
            securityNumber: input[2]
        }
    }

    set fullName(names){
        if (names.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }

        let pattern = /\b[A-Z]{1}[a-z]+\b/gm;
        names.forEach(element => {
            if (!element.match(pattern)) {
                throw new Error("Invalid full name");
            }
        });
        
        this._fullName = {
            firstName: names[0],
            middleName: names[1],
            lastName: names[2]
        }
    }

    get fullName(){
        return this._fullName;
    }

    generateIDNumber(){
        let id = 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;

        if (["a", "e", "o", "i", "u"].includes(this.fullName.lastName[this.fullName.lastName.length - 1])) {
            id = id.toString() + 8;
        } else {
            id = id.toString() + 7;
        }

        return id;
    }
}
