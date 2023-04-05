// Tạo một mảng ngẫu nhiên gồm 10 số nguyên từ 1 đến 10
const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);

// Tìm các cặp số có tổng là 10 trong mảng
const pairs = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 10) {
      pairs.push([arr[i], arr[j]]);
    }
  }
}

// In ra các cặp số có tổng là 10
console.log(`Các cặp số có tổng là 10 trong mảng là: ${pairs.join(", ")}`);
