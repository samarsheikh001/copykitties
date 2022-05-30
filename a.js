const text = `A promise is an object that represents the result of an asynchronous operation. Promises are used to handle asynchronous operations in a more synchronous way. When an asynchronous operation is started, a promise is created. The promise is then waiting for the asynchronous operation to finish. Once the asynchronous operation finishes, the promise is either resolved ( fulfilled) or rejected. A promise is an object that represents the result of an asynchronous operation. Promises are used to handle asynchronous operations in a more synchronous way. When an asynchronous operation is started, a promise is created. The promise is then waiting for the asynchronous operation to finish. Once the asynchronous operation finishes, the promise is either resolved ( fulfilled) or rejected. Water is good.`;

console.log(text.split(".").length);
for (let token = 0; token < text.split(".").length - 1; token = token + 5) {
  const splittedText = text
    .split(".")
    .slice(token, token + 5)
    .join(".");
  console.log("text: ", splittedText);
}
