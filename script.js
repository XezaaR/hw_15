// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];


function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function arrayCopy(src,srcPos,dst,dstPos,length){

    const elements = src.slice(srcPos, srcPos + length);

    dst.splice(dstPos, 0, ...elements);
}
//====================================
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function count(array, str){
    return array.reduce( function (acc, curr) {
        if (curr === str) {
            return acc + 1;
        }
        return acc;
    },
        0);
}
//====================================
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function displayOccurrences(array){
    const counts = array.reduce(function (acc, curr) {
        if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    },
        {});

    for (const element in counts) {
        console.log(`${element} -> ${counts[element]}`);
    }
}
//====================================
function test4(){

    const ulSurrounded = ulSurround(strArray1);

    console.log(ulSurrounded);
}
function ulSurround(strings){

    strings.splice(0, 0, "<ul>");
    strings.splice(strings.length, 0, "</ul>");

    const ulSurrounded = strings.map(function (string) {
        if (string.includes('ul')){
            return string;
        } else {
            return `<li>${string}</li>`;
        }
    });

    return ulSurrounded;
}
//====================================
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}

function lengthSort(array){

     return array.sort(function (a, b) {
        return a.length - b.length;
    });

}
