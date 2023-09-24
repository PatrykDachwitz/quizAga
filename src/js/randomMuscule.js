import {getRandomArbitrary} from "@/js/getRandomArbitrary";
import {ref} from "vue";

export function randomMuscule(currentID, muscles) {
    let start = 0;
    let end = muscles.length;
    let issetCorrectName= false;
    const randomQuery = ref([]);
    for(let i = 0; i < 4; i++) {
        let randomNumber = getRandomArbitrary(start, end);
        if (muscles[randomNumber].id == currentID ) {
            issetCorrectName = true;
            randomQuery.value.push(muscles[randomNumber].name)
        } else {
            randomQuery.value.push(muscles[randomNumber].name)
        }
    }

    if (issetCorrectName == false) {
        let randomPosition = getRandomArbitrary(1, 4);
        muscles.forEach(item => {
            if(item.id == currentID) {
                randomQuery.value[randomPosition] = item.name;
            }
        })
    }

    return randomQuery.value;
}