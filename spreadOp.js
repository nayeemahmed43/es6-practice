const ages = [12, 13, 15, 14];
const ages2 = [15, 16, 17];
//const allAges = ages.concat(ages2);
const allAges = [...ages, ...ages2];
console.log(allAges);