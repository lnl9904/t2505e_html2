// Tạo số may mắn từ 0 đến 99
var r = Math.random();
r = r * 100;
r = parseInt(r);  // Số ngẫu nhiên từ 0 đến 99

// Nhập số dự đoán
var guess = parseInt(prompt("Nhập số bạn dự đoán (0–99):"));

// Nhập số tiền đầu tư
var investment = parseFloat(prompt("Nhập số tiền bạn muốn đầu tư (VNĐ):"));

// Kiểm tra kết quả
if (guess === r) {
    var reward = investment * 70;
    alert("🎉 Bạn đoán đúng! Số may mắn là " + r + 
          "\nBạn nhận được: " + reward.toLocaleString() + " VNĐ");
} else {
    alert("😢 Bạn đoán sai. Số may mắn là " + r + 
          "\nBạn mất: " + investment.toLocaleString() + " VNĐ");
}