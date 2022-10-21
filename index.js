const cats = [
    "Milo",
    "Otis",
    "Garfield"
];



function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop(-1);
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);
}

function appendCat(name) {
    const appendCatArray = [...cats, name];
    return appendCatArray;
}

function prependCat(name) {
    const prependCatArray = [name, ...cats];
    return prependCatArray;
}

function removeLastCat() {
    const removeLastCatArray = [...cats];
    removeLastCatArray.pop();
    return removeLastCatArray;
}

function removeFirstCat() {
    const removeFirstCatArray = [...cats];
    removeFirstCatArray.shift();
    return removeFirstCatArray;
}