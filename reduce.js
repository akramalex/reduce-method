  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums =[0, 1, 2, 3, 4]
let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum)

// explain the acc and curr //

const ne = [5, 6, 1, 0];

let sum2 = ne.reduce ((acc, curr) => {
  console.log(
    " Accumulator:", acc,
    "current value:", curr, 
    "total:", acc + curr
  );
  return acc + curr;
});

console.log(sum2);


// another example to add extra  number //

const me = [5, 6, 1, 0];

let sum3 = me.reduce ((acc, curr) => {
  console.log(
    " Accumulator:", acc,
    "current value:", curr, 
    "total:", acc + curr
  );
  return acc + curr;
}, 6);

console.log(sum3);




const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property



let totalExper = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);

console.log(totalExper)


// see without see example 
// this bugs comes out   [object Object]713 //

let totalExpe = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience);

console.log(totalExpe)



// Grouping by a property, and totaling it too

// we want this result //
// developer :12 desinger :4 //

let expbypro =teamMembers.reduce((acc, curr) => {
  let key= curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }

  return acc;

} , {});

console.log(expbypro)


