$(document).ready(function () {
  $('.selected__link').click(function () {
    $('.selected__link').removeClass('active');
    $(this).addClass('active');

    $('.selected__link').parent('li').removeClass('border-dark border-bottom');
    $(this).parent('li').addClass('border-dark border-bottom');
    let productName = $('.product__name').val;

    $('.content').html('');
    if ($(this).text() === 'Thông Tin Sản Phẩm') {
      $('.content').append(`<p>Miêu tả: ${productName}.</p>
            <p>Đặc tính: Trẻ trung - Năng động.</p>
            <p>Thể loại: Trang phục dạo phố, thường ngày.</p>
            <p>Size: S/M/L/XL.</p>
            <p>Chất liệu: Thun cotton.</p>
            <p>Màu sắc: Trắng/Đen.</p>
            <p>Chiều dài : S : 64 cm - M: 65 cm - L :66 cm</p>
            <p>Số đo mẫu nữ: Chiều cao: 168 cm. Số đo 3 vòng: 83 - 59 - 86 (Mặc size S).</p>`);
    }

    if ($(this).text() === 'Hướng Dẫn Khách Hàng') {
      $('.content').append(`
        <h5 class="fw-bold mt-4">1. Hướng dẫn bảo quản sản phẩm</h5>
            <p>Giặt tay bằng nước lạnh</p>
            <p>Không ngâm, không tẩy</p>
            <p>Giặt riêng các sản phẩm khác màu</p>
            <p> Không vắt.</p>
            <p>Ủi ở nhiệt độ thấp. Khuyến khích giặt khô.</p>
        <h5 class="fw-bold mt-4">2. Hướng dẫn mua hàng</h5>
            <p>
              Người mua có thể thanh toán 1 trong 3 cách sau đây:
            </p>
            <p>
              <span class="fst-italic">Cách 1:</span> Thanh toán trực tiếp (người mua nhận hàng tại
              địa chỉ người bán)
            </p>
            <p>
              <span class="fst-italic">Cách 2:</span> Thanh toán sau (COD - giao hàng và thu tiền
              tận nơi)
            </p>
            <p>
              <span class="fst-italic">Cách 3:</span> Thanh toán online qua thẻ tín dụng, chuyển
              khoản
            </p>`);
    }
  });
  $('.img-secondary').click(function () {
    let imgUrl = $(this).attr('src');
    $('.img-primary').attr('src', imgUrl);
  });
});
