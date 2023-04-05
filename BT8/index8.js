function tinhTongChuSoNhoNhat(so) {
    let chuSoMin = 9;
    while (so > 0) {
      let chuSo = so % 10;
      if (chuSo < chuSoMin) {
        chuSoMin = chuSo;
      }
      so = Math.floor(so / 10);
    }
    return chuSoMin;
  }
  
  function tinhTongChuSoNhoNhatTrongMang(arr) {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
      tong += tinhTongChuSoNhoNhat(Math.abs(arr[i]));
    }
    return tong;
  }
  
  // Ví dụ sử dụng hàm
  let mang = [123, -456, 789];
  let tong = tinhTongChuSoNhoNhatTrongMang(mang);
  console.log(tong); // Kết quả: 9 (tổng các chữ số nhỏ nhất của 1, 4 và 7)
  