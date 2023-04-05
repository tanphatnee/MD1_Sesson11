let N = prompt("Nhập vị trí muốn xóa:");
let chuoi = prompt("Nhập chuỗi cần xóa phần tử:");

// Tạo một mảng từ chuỗi đầu vào
let mang = chuoi.split("");

// Sử dụng phương thức splice() để xóa phần tử tại vị trí N trong mảng
mang.splice(N, 1);

// Sử dụng phương thức join() để chuyển đổi mảng mới thành chuỗi
let chuoiMoi = mang.join("");

console.log(chuoiMoi);
