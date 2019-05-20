class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

let assert = require('chai').assert;
describe("SoftUniFy", function() {
    it("on initailization allSongs should be empty obj", function() {
        let softUniFy = new SoftUniFy();

        assert.deepEqual(softUniFy.allSongs, {});
    });

    describe("downloadSong", function() {
        it("adding a song of nonremembered artist should create a new propert in allsongs obj", function() {
            let softUniFy = new SoftUniFy();
            let artist = 'Taylor Swift';
            let song = 'Baaaa';
            let lyrics = 'Baa baa baaa';

            softUniFy.downloadSong(artist, song, lyrics);
            let artistObj = softUniFy.allSongs[artist];
            let expectedObj = {rate: 0, votes: 0, songs: [`${song} - ${lyrics}`]};
            
            assert.deepEqual(artistObj, expectedObj);
        });
        
        it("adding a song of remembered artist should add the song to the current prop of allsongs obj", function() {
            let softUniFy = new SoftUniFy();
            let artist = 'Taylor Swift';
            let song = 'Baaaa';
            let song2 = 'Tupotiq';
            let lyrics = 'Baa baa baaa';
            let lyrics2 = 'Baa mnlnckinekfc baaa';

            softUniFy.downloadSong(artist, song, lyrics);
            softUniFy.downloadSong(artist, song2, lyrics2);
            let artistObj = softUniFy.allSongs[artist];
            let expectedObj = {rate: 0, votes: 0, songs: [`${song} - ${lyrics}`,`${song2} - ${lyrics2}`]};
            
            assert.deepEqual(artistObj, expectedObj);
        });
        
        it("adding a song of remembered artist should return entire class", function() {
            let softUniFy = new SoftUniFy();
            let artist = 'Taylor Swift';
            let song = 'Baaaa';
            let song2 = 'Tupotiq';
            let lyrics = 'Baa baa baaa';
            let lyrics2 = 'Baa mnlnckinekfc baaa';

            softUniFy.downloadSong(artist, song, lyrics);
            let givenClass = softUniFy.downloadSong(artist, song2, lyrics2);
            

            assert.deepEqual(givenClass, softUniFy);
        });
    });

    describe("playSong", function() {
        it("If we do not have at least one downloaded song should return eror string", function() {
            let softUniFy = new SoftUniFy();
            let song = 'nonexisting song';

            let result = softUniFy.playSong(song);

            assert.equal(result, `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`)
        });

        it("adding a song of nonremembered artist should create a new propert in allsongs obj", function() {
            let softUniFy = new SoftUniFy();
            let artist = 'Taylor Swift';
            let song = 'Baaaa';
            let lyrics = 'Baa baa baaa';
            let song2 = 'nonexisting song';

            softUniFy.downloadSong(artist, song, lyrics);
            let result = softUniFy.playSong(song2);
            
            assert.equal(result, `You have not downloaded a ${song2} song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
     });

     describe("songsList", function() {
        it("if there are no songs return error string", function() {
            let softUniFy = new SoftUniFy();

            let result = softUniFy.songsList;

            assert.equal(result, 'Your song list is empty');
        });
        
        it("should return string with all songs", function() {
            let softUniFy = new SoftUniFy();
            let artist = 'Taylor Swift';
            let song = 'Baaaa';
            let song2 = 'Tupotiq';
            let lyrics = 'Baa baa baaa';
            let lyrics2 = 'Baa mnlnckinekfc baaa';
            let expectedResult = `${song} - ${lyrics}\n${song2} - ${lyrics2}`

            softUniFy.downloadSong(artist, song, lyrics);
            softUniFy.downloadSong(artist, song2, lyrics2);
            let result = softUniFy.songsList;

            assert.equal(result, expectedResult);
        });
     });

     describe("rateArtist", function() {
        it("if artist does not exist should return error string", function() {
            let softUniFy = new SoftUniFy();
            let artist = 'hunednfkrf';

            let result = softUniFy.rateArtist(artist);

            assert.equal(result, `The ${artist} is not on your artist list.`)
        });
     });
 }); 