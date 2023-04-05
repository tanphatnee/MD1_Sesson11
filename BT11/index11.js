function themSoVaoMang(mang, soCanThem) {
    let left = 0;
    let right = mang.length - 1;
    let middle;
  
    while (left <= right) {
      middle = Math.floor((left + right) / 2);
  
      if (soCanThem > mang[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  
    mang.splice(left, 0, soCanThem);
  
    return mang;
  }
  
  let mang = [1, 3, 5, 7, 9];
  let soCanThem = 4;
  
  let mangMoi = themSoVaoMang(mang, soCanThem);
  
  console.log(mangMoi); // Kết quả: [1, 3, 4, 5, 7, 9]
  