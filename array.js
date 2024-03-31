/* let's make an array with 3 elements and the modify the array */
const theArray = ['item1','item2','item3']
//now let's create a function that add to this array a 5th element

function addAFifth(item5) {
    item5.push('item5')
}
//now let's add the 5th element to the theArray const by calling the addAfifth function

addAFifth(theArray)
console.log(theArray)
//now press ctrl + alt + N if you have add the Code Runner extention in VS to lot the modify array

