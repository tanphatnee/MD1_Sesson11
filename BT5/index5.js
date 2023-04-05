// Tạo một mảng ngẫu nhiên gồm 5 chuỗi
const arr = Array.from({ length: 5 }, () => {
    let len = Math.floor(Math.random() * 10) + 1; // độ dài ngẫu nhiên từ 1 đến 10
    let str = "";
    for (let i = 0; i < len; i++) {
      str += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // kí tự ngẫu nhiên từ a đến z
    }
    return str;
  });
  
  // Tìm chuỗi có độ dài lớn nhất và nhỏ nhất
  let shortest = arr[0];
  let longest = arr[0];
  arr.forEach((str) => {
    if (str.length < shortest.length) {
      shortest = str;
    }
    if (str.length > longest.length) {
      longest = str;
    }
  });
  
  // In ra kết quả
  console.log(`Mảng chuỗi: ${arr.join(", ")}`);
  console.log(`Chuỗi có độ dài nhỏ nhất: ${shortest}`);
  console.log(`Chuỗi có độ dài lớn nhất: ${longest}`);
  