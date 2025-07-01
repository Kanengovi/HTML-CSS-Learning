function hello() {
    alert("Hello World")
}

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 ==0) {
            resolve(`Số ${num} là số chẵn!`)   
        }else{
            reject(new Error (`Số ${num} là số Lẻ!`))
        }
    })
}
checkNumber(6)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Kiểm tra hoàn tất.");
  });
