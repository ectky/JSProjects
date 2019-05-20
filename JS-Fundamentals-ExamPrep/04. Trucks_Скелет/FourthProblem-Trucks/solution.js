function solve() {
    let btns = document.querySelectorAll('button');

    let trucks = [];
    let backupTires = [];

    btns[3].addEventListener('click', function(){
        let trucksResult = trucks.map(x => `Truck ${x.plate} has traveled ${x.distance}.`).join('\n');
        let tiresReult = `You have ${backupTires.length} sets of tires left.`;

        document.querySelector('textarea[placeholder="REPORT..."]').value = trucksResult + '\n' + tiresReult + '\n';
    });

    btns[2].addEventListener('click', function(){
        let plateNum = document.querySelector('#workPlateNumber').value;
        let distance = Number(document.querySelector('#distance').value);
 
        if (trucks.some(x => x.plate === plateNum)) {
            let decreaseTires = distance / 1000;
            let truck = trucks.find(x => x.plate === plateNum);
            
            if (canTravelDistance(truck.tires, decreaseTires)) {
                travel(truck, truck.tires, decreaseTires, distance);
            } else if (canTravelDistance(backupTires[backupTires.length - 1], decreaseTires)) {
                travel(truck, backupTires[backupTires.length - 1], decreaseTires, distance);
            }
        }
 
        loadTrucks();
        loadTires();
    });

    function travel(truck, tires, n, distance) {
        let tiresArr = tires.split(' ').map(x => Number(x));
        for (let i = 0; i < tiresArr.length; i++) {
            tiresArr[i] -= n.toFixed(0);
        }
        truck.distance += distance;
        truck.tires = tiresArr.join(' ');
    }

    function canTravelDistance(tires, n) {
        if (!tires) {
            return false;
        }

        let tiresArr = tires.split(' ').map(x => Number(x));
        for (const tire of tiresArr) {
            if (tire - n <= 0) {
                return false
            }
        }

        return true;
    }

    btns[1].addEventListener('click', function(){
        let tires = document.querySelector('#newTiresCondition').value;
 
        backupTires.push(tires);
 
         loadTires();
    });

    btns[0].addEventListener('click', function(){
       let plateNum = document.querySelector('#newTruckPlateNumber').value;
       let tires = document.querySelector('#newTruckTiresCondition').value;

        if (!trucks.some(x => x.plate == plateNum && x.tires === tires)) {
            let truck = {
                plate: plateNum,
                tires: tires, 
                distance: 0    
            };

            trucks.push(truck);
        }

        loadTrucks();
    });

    function loadTrucks() {
        let trucksDiv = document.querySelectorAll('div')[9];
        trucksDiv.innerHTML = '';
        
        for (const truck of trucks) {
            let div = document.createElement('div');
            div.setAttribute('class', 'truck');
            div.textContent = truck.plate;
            trucksDiv.appendChild(div);
        }
    }

    function loadTires() {
        let tiresDiv = document.querySelectorAll('div')[8];
        tiresDiv.innerHTML = '';
        
        for (const tires of backupTires) {
            let div = document.createElement('div');
            div.setAttribute('class', 'tireSet');
            div.textContent = tires;
            tiresDiv.appendChild(div);
        }
    }
}