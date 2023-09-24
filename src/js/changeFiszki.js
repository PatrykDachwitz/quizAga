export function changeFiszki(value) {
    let fiszkiActiveDiv = document.querySelector('div.fiszkiActiveDiv');
    let currentId = fiszkiActiveDiv.dataset.currentId;
    let lastId = fiszkiActiveDiv.dataset.endId;
    let startId = fiszkiActiveDiv.dataset.startId;
    let newId;
    switch (value){
        case "previous":
            newId = currentId - 1;
            if (newId < startId) {
                newId = lastId;
            }
            document.querySelector('div[data-id-fiszki="' + currentId + '"]').classList.add('d-none');
            document.querySelector('div[data-id-fiszki="' + newId + '"]').classList.remove('d-none');
            fiszkiActiveDiv.dataset.currentId = newId;
            break;
        case "next":
            newId = parseInt(currentId) + 1;
            if (newId > lastId) {
                newId = startId;
            }
            document.querySelector('div[data-id-fiszki="' + currentId + '"]').classList.add('d-none');
            document.querySelector('div[data-id-fiszki="' + newId + '"]').classList.remove('d-none');
            fiszkiActiveDiv.dataset.currentId = newId;
            break;
    }
}
