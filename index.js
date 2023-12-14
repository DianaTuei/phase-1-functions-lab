// Code your solution in this file!


function distanceFromHqInBlocks(blocks){

    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks){
    const blockDistance = distanceFromHqInBlocks(blocks);
    return blockDistance * 264;
}

function distanceTravelledInFeet(start, destination){
    let blockDistance = Math.abs(destination - start);
    return blockDistance * 264;
}

function calculatesFarePrice(start, destination) {
    let ride = distanceTravelledInFeet(start, destination) ;
        if (ride <= 400){
            return 0;
        }else if(ride > 400 && ride <= 2000){
            return (ride - 400) * 0.02;
        }else if(ride >2000 && ride < 2500){
            return 25;
        } else{
        return 'cannot travel that far';
        }
    }

