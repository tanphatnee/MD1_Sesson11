function xoaSoTrung(mang, soPhanTuGiuaLai) {
    let mangMoi = [];
    let dem = {};
  
    mang.forEach(function (value) {
      if (dem[value] === undefined) {
        dem[value] = 0;
      }
      if (dem[value] < soPhanTuGiuaLai) {
        mangMoi.push(value);
        dem[value]++;
      }
    });
  
    return mangMoi;
  }
  
  let mang = [1, 2, 2, 3, 4, 4, 5, 5, 5];
  let mangMoi = xoaSoTrung(mang, 2);
  
  console.log(mangMoi); // Kết quả: [1, 2, 2, 3, 4, 4, 5, 5]
  