// Tạo một mảng ngẫu nhiên gồm 5 chuỗi
const arr = Array.from({ length: 5 }, () => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  });
  
  // Đảo ngược các chuỗi trong mảng
  const reversedArr = arr.map((str) => str.split("").reverse().join(""));
  
  // In ra các chuỗi ban đầu và đảo ngược của chúng
  for (let i = 0; i < arr.length; i++) {
    console.log(`Chuỗi ban đầu: ${arr[i]}, Chuỗi đảo ngược: ${reversedArr[i]}`);
  }
  