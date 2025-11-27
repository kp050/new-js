//  To overcome call-back hell we will follow promises

// promise is a javascript object it will either resolve or reject / success or failure.
/* 
let lifeLine = new Promise((resolve, reject) => {
  let haveJob = false;
  if (haveJob) {
    resolve("He/She accepted");
  } else {
    reject("He/She rejected");
  }
});
lifeLine
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise operation completed");
  });
 */

// Example 2:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isTrue = true;
      if (isTrue) {
        resolve("I am fetching the data");
      } else {
        reject("I am not able to fetch data");
      }
    }, 4000);
  });
}

function arrangeData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am arranging the data");
    }, 3000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am displaying the data");
    }, 2000);
  });
}

fetchData()
  .then((message) => {
    console.log(message);
    return arrangeData();
  })
  .then((message) => {
    console.log(message);
    return displayData();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
