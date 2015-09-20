//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.

var snacks = [];
snacks.push('apples');
snacks.unshift('bananas');
snacks.splice(2, 0, 'oranges', 'pears');
console.log(snacks);

console.log("Question 1");
console.log('yourAnswer');


// 2. Add an additional item to the beginning of your Array.

snacks.splice(0, 0, 'chips');
console.log(snacks);

// 3. Remove the second and third items.

snacks.splice(1, 2);
console.log(snacks);

// 4. Add two new items after the second item.

snacks.splice(1, 0 , 'granola', 'bagel');
console.log(snacks);

// 5. Write 'The current length of the array is....' using the .length method

console.log(snacks.length);

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

things[2] = 'keyboard';
console.log(things);

// 7. Combine all of the elements of the array into a string.

console.log(things.toString());

console.log(things[0] + ' ' + things[1] + ' ' + things[2] + ' ' + things[3] + ' ' + things[4]);

// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, one at the beginning and one at the end.
things.pop();
var lastItem = things;
lastItem.splice(0, 0, 'shirt');
lastItem.push('pants');
console.log(lastItem);

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.

var itemLast = lastItem.reverse();
console.log(itemLast);

// 10. Remove the first item of itemLast.

itemLast.shift();
console.log(itemLast);

// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)

itemLast.length = 0;
console.log(itemLast);

var itemLast = [];
console.log(itemLast);

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

var more = firstArray.concat(secondArray);
console.log(more);

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'

people.splice(5, 0, 'Tom', 'Fred');
console.log(people);

// 14. Remove everybody except 'Andrea' and 'Ted'

people.splice(4, 3);
people.shift();
people.splice(1, 1);
console.log(people);

// 15. Add a new person to the beginning of the Array
people.unshift('Ryan');
console.log(people);

// 16. Arrange the items alphabetically. Store this Array as orderedPeople

var orderedPeople = people.sort();
console.log(orderedPeople);

// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

var array4 = [array1, array2, array3];
console.log(array4);

// 18. Remove "Sparky" and "White" from the above array of arrays.
array4[0].pop();
array4[2].shift();
console.log(array4);

// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// Explain why it doesn't sort as expected.
sortingNumbers.sort(function(a, b){return a-b});
console.log(sortingNumbers);

// if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce an incorrect result when sorting numbers.
// You can fix this by providing a "compare function"

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];

array1.sort();
array1.splice(5, 2);
array1.splice(2, 1);
array1.unshift('plant');
console.log(array1);
