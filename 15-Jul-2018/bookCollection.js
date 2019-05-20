class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        if (room === "livingRoom" || room === "bedRoom" || room === "closet") {
            this.shelfGenre = shelfGenre;
            this.room = room;
            this.shelfCapacity = shelfCapacity;
            this.shelf = [];
        } else {
            throw new Error(`Cannot have book shelf in ${room}`);
        }
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.shift();
        }

        let book = {
            bookName,
            bookAuthor,
            genre
        }
        this.shelf.push(book);
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);
    }

    showBooks(genre) {
        let books = this.shelf.filter(b => b.genre === genre).map(b => `\uD83D\uDCD6 ${b.bookAuthor} – "${b.bookName}"`);
        
        let result = `Results for search "${genre}":\n` +
            books.join('\n');

        return result;
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length;
    }


}
