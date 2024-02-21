
function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}

export const createRandomArray = (size: number): Array<number> => {
    let array=[getRandomInt(size)];

    while (array.length<size)
    {
        let flag=true;
        let random=getRandomInt(size);

        for(let j=0; j<array.length; j++){
            if(array[j]===random) flag=false;
        }

        if(flag) array.push(random)
    }

    return array;
}