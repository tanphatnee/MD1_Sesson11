function xoaSoTrung(mang) {
    let mangMoi = [];
  
    mang.forEach(function (value) {
      if (mangMoi.indexOf(value) === -1) {
        mangMoi.push(value);
      }
    });
  
    return mangMoi;
  }
  
  let mang = [1, 2, 2, 3, 4, 4, 5, 5, 5];
  let mangMoi = xoaSoTrung(mang);
  
  console.log(mangMoi); // Kết quả: [1, 2, 3, 4, 5]
  