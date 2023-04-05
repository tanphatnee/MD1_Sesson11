let N = prompt("Nhập vị trí muốn chèn:");
let chuoi = prompt("Nhập chuỗi cần chèn:");

// Tạo một mảng từ chuỗi đầu vào
let mang = chuoi.split("");

// Sử dụng phương thức splice() để chèn phần tử vào vị trí N trong mảng
mang.splice(N, 0, "new_element");

// Sử dụng phương thức join() để chuyển đổi mảng mới thành chuỗi
let chuoiMoi = mang.join("");

console.log(chuoiMoi);
