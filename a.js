const text = `1.2.3.4.5.6.7.8.9.10.11.`;

console.log(text.split(".").length);

for (let token = 0; token < text.split(".").length; token = token + 5) {
  console.log(
    text
      .split(".")
      .slice(token, token + 5)
      .join(".") 
  );
}
