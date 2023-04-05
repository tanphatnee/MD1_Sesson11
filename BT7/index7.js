function tinhTongChuSo(arr) {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
      let so = Math.abs(arr[i]);
      while (so > 0) {
        tong += so % 10;
        so = Math.floor(so / 10);
      }
    }
    return tong;
  }
  
  // Ví dụ sử dụng hàm
  let mang = [123, -456, 789];
  let tong = tinhTongChuSo(mang);
  console.log(tong); // Kết quả: 33
  