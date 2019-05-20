function grade(examPoints, homeworkCompl, totalHw) {
    let maxExamP = 400;    
    let six = 6;
    if (examPoints === maxExamP) {
        console.log(six.toFixed(2));
    } else {
        let maxPoints = 100;
        let examPs = ((examPoints / maxExamP) * 100) * 0.9;
        let hwPs = ((homeworkCompl / totalHw) * 100) * 0.1;
        let totalPoints = examPs + hwPs;
        let grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);

        if (grade < 3) {
            let two = 2;
            console.log(two.toFixed(2));
        } else if(grade > 6){
            console.log(six.toFixed(2));
        } else{
            console.log(grade.toFixed(2));
        }
    }
    
}

function table(matrix, inputCommand) {
    let inputArr = inputCommand.split(' ');
    let command = inputArr[0];
    let header = inputArr[1];
    let headerIndex = matrix[0].indexOf(header);
    let result;

    if (command === 'hide') {
        result = matrix.map((x) => x.filter((y, index) => index !== headerIndex));
    } else if (command === 'sort') {
        let headers = matrix.shift();
        result = matrix.sort(function(a,b){
            if (a[headerIndex].toLowerCase() > b[headerIndex].toLowerCase()) {
                return 1;
            } else if (a[headerIndex].toLowerCase() < b[headerIndex].toLowerCase()){
                return -1;
            }

            return 0;
        });
        result.unshift(headers);
    } else if (command === 'filter') {
        let value = inputArr[2];
        let headers = matrix.shift();
        result = matrix.filter((x) => x[headerIndex] === value);
        result.unshift(headers);
    }

    let resultString = result.map(x => x.join(' | ')).join('\n');
    
    console.log(resultString);
}

function strictmode(array) {
    let result = [];

    for (let line of array) {
        let indexOf1 = line.indexOf('>');
        let openTag = line.substring(0, indexOf1 + 1);
        let closeTag = `</${openTag.substring(1)}`;
        if (openTag.split('').some(c => c.toLowerCase() != c.toUpperCase()) && line.endsWith(closeTag)) {
            line = line.substring(openTag.length, line.length - closeTag.length);
            if (isLineCorrect(line)) {
                line = extractLine(line);
                result.push(line);
            }
        }
    }

    console.log(result.join(' '));

    function extractLine(str) {
        let matches = [];
        const regex = /<[^>]+>/gm;
        let m;

        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            m.forEach((match, groupIndex) => {
                matches.push(match);
            });
        }

        for (const x of matches) {
            str = str.replace(x, '');
        }

        return str;
    }

    function isLineCorrect(str) {
        let matches = [];
        const regex = /<[^>]+>/gm;
        let m;

        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            m.forEach((match, groupIndex) => {
                matches.push(match);
            });
        }

        for (let i = 0; i < matches.length - 1; i++) {
            if (`</${matches[i].substring(1)}` !== matches[i+1]) {
                return false;
            }
        }
        return true;
    }
}

strictmode(['<h1><span>Hello World!</span></h1>',
'<p>I am Peter.',
'<div><p>This</p> is</div>',
'<div><a>perfectly</a></div>',
'<divs><p>valid</p></divs>',
'<div><p>This</div></p>',
'<div><p>is </div><p>not</div></div>']);

function venetka(array) {
    let townsArr = [];
    for (const element of array) {
        if (!townsArr.some(x => x.name === element.town)) {
            let town = {
                name: element.town,
                profit: element.price,
                vignettes: 1
            };
            townsArr.push(town);
        } else {
            let town = townsArr.find(x => x.name === element.town);
            town.profit += element.price;
            town.vignettes += 1;
        }
    }

    let sortedTowns = townsArr.sort(function(a,b){
        if (a.profit > b.profit) {
            return -1;
        } else if(a.profit < b.profit){
            return 1;
        } else {
            if (a.vignettes > b.vignettes) {
                return -1;
            } else if(a.vignettes < b.vignettes){
                return 1;
            } else {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                } else if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                } else {
                    return 0;
                }
            }
        }

        return 0;
    });

    let mostProfitableTown = sortedTowns[0];

    let modelsArr = [];
    for (const element of array.filter(x => x.town === mostProfitableTown.name)) {
        if (!modelsArr.some(x => x.name === element.model)) {
            let model = {
                name: element.model,
                driven: 1,
                vignettePrice: element.price
            };
            modelsArr.push(model);
        } else {
            let model = modelsArr.find(x => x.name === element.model);
            model.vignettePrice = model.vignettePrice < element.price? element.price : model.vignettePrice;
            model.driven += 1;
        }
    }

    let sortedModels = modelsArr.sort(function(a,b){
        if (a.driven > b.driven) {
            return -1;
        } else if(a.driven < b.driven){
            return 1;
        } else {
            if (a.vignettePrice > b.vignettePrice) {
                return -1;
            } else if(a.vignettePrice < b.vignettePrice){
                return 1;
            } else {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                } else if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                } else {
                    return 0;
                }
            }
        }

        return 0;
    });

    let mostDrivenModel = sortedModels[0];

    let towsWithModel = array.filter(x => x.model === mostDrivenModel.name);
    let townsModelsArr = [];

    for (const element of towsWithModel) {
        if (!townsModelsArr.some(x => x.name === element.town)) {
            let town = {
                name: element.town,
                regNumbers: [element.regNumber]
            };
            townsModelsArr.push(town);
        } else {
            let town = townsModelsArr.find(x => x.name === element.town);
            town.regNumbers.push(element.regNumber);
        }
    }

    townsModelsArr = townsModelsArr.sort(function(a,b){
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } else if(a.name.toLowerCase() > b.name.toLowerCase()){
            return 1;
        }
        return 0;
    });

    console.log(`${mostProfitableTown.name} is most profitable - ${mostProfitableTown.profit} BGN`);
    console.log(`Most driven model: ${mostDrivenModel.name}`);
    console.log(townsModelsArr.map(x => `${x.name}: ${x.regNumbers.sort().join(', ')}`).join('\n'));
}

// venetka([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
// { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
// { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
// { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
// { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]
// );