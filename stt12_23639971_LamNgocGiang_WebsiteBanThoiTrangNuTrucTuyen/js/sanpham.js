function taoDanhSachSanPham(option = 'Áo') {
  const shirtList = [
    {
      id: 1,
      name: 'ÁO THUN FORM RỘNG IN KÍ TỰ',
      imgUrl: '../img/img-shirt-1.png',
      sale: 123,
      price: 340.0,
    },
    {
      id: 2,
      name: 'ÁO THUN TAY NGẮN IN CHỮ “SPACE STATION”',
      imgUrl: '../img/img-shirt-3.jpg',
      sale: 125,
      price: 300.0,
    },
    {
      id: 3,
      name: 'ÁO SƠ MI OVERSIZE VẠT LỆT',
      imgUrl: '../img/img-shirt-2.png',
      sale: 50,
      price: 450.0,
    },
    {
      id: 4,
      name: 'ÁO SƠ MI LỤA FORM ÔM',
      imgUrl: '../img/img-shirt-4.jpg',
      sale: 100,
      price: 440.0,
    },
    {
      id: 5,
      name: 'ÁO CROPTOP TAY BÈO BUỘC NƠ',
      imgUrl: '../img/img-shirt-5.jpg',
      sale: 95,
      price: 299.0,
    },
    {
      id: 6,
      name: 'ÁO KIỂU CROPTOP TAY PHỒNG CỘT NƠ ',
      imgUrl: '../img/img-shirt-6.jpg',
      sale: 45,
      price: 299.0,
    },
  ];

  const dressList = [
    {
      id: 1,
      name: 'ĐẦM LỬNG PHỐI VẢI KIỂU YẾM',
      imgUrl: '../img/img-dress-1.jpg',
      sale: 20,
      price: 499.0,
    },
    {
      id: 2,
      name: 'ĐẦM LỬNG SÁT NÁCH CỔ V NHÚN EO',
      imgUrl: '../img/img-dress-2.jpg',
      sale: 15,
      price: 550.0,
    },
    {
      id: 3,
      name: 'ĐẦM XOÈ SÁT NÁCH DÁNG NGẮN RÚT EO',
      imgUrl: '../img/img-dress-3.jpg',
      sale: 60,
      price: 500.0,
    },
    {
      id: 4,
      name: 'ĐẦM 2 DÂY KHOÉT EO ĐÍNH ĐÁ',
      imgUrl: '../img/img-dress-4.jpg',
      sale: 90,
      price: 530.0,
    },
    {
      id: 5,
      name: 'ĐẦM HAI DÂY LUỒN DÂY SƯỜN',
      imgUrl: '../img/img-dress-5.png',
      sale: 72,
      price: 650.0,
    },
    {
      id: 6,
      name: 'ĐẦM TAY NGẮN XẾP THÂN TRƯỚC',
      imgUrl: '../img/img-dress-6.png',
      sale: 80,
      price: 539.0,
    },
  ];

  const skirtList = [
    {
      id: 1,
      name: 'CHÂN VÁY REN DÁNG BÚT CHÌ',
      imgUrl: '../img/img-skirt-1.png',
      sale: 50,
      price: 399.0,
    },
    {
      id: 2,
      name: 'CHÂN VÁY CHỮ A MINI GẮN NƠ',
      imgUrl: '../img/img-skirt-2.png',
      sale: 75,
      price: 399.0,
    },
    {
      id: 3,
      name: 'CHÂN VÁY A MINI VẢI GẤM',
      imgUrl: '../img/img-skirt-3.png',
      sale: 150,
      price: 299.0,
    },
    {
      id: 4,
      name: 'CHÂN VÁY CHỮ A MINI TRANG TRÍ NÚT',
      imgUrl: '../img/img-skirt-4.png',
      sale: 60,
      price: 400.0,
    },
    {
      id: 5,
      name: 'CHÂN VÁY MINI CHẠY VIỀN',
      imgUrl: '../img/img-skirt-5.jpeg',
      sale: 125,
      price: 199.0,
    },
    {
      id: 6,
      name: 'CHÂN VÁY QUẦN KIỂU ĐẮP PHỐI VIỀN',
      imgUrl: '../img/img-skirt-6.jpeg',
      sale: 110,
      price: 499.0,
    },
  ];

  const pantList = [
    {
      id: 1,
      name: 'QUẦN DÀI ỐNG LOE XẺ SƯỜN',
      imgUrl: '../img/img-pant-1.jpg',
      sale: 87,
      price: 489.0,
    },
    {
      id: 2,
      name: 'QUẦN TÂY ỐNG SUÔNG',
      imgUrl: '../img/img-pant-2.jpg',
      price: 600.0,
    },
    {
      id: 3,
      name: 'QUẦN SHORT DIỄU CHỈ TRẮNG',
      imgUrl: '../img/img-pant-3.jpg',
      sale: 100,
      price: 399.0,
    },
    {
      id: 4,
      name: 'QUẦN TÂY ỐNG ĐỨNG',
      imgUrl: '../img/img-pant-4.jpg',
      sale: 56,
      price: 299.0,
    },
    {
      id: 5,
      name: 'QUẦN TÂY ỐNG RỘNG NẮP TÚI GIẢ',
      imgUrl: '../img/img-pant-5.png',
      sale: 200,
      price: 499.0,
    },
    {
      id: 6,
      name: 'QUẦN SHORT JEANS LAI TUA RUA',
      imgUrl: '../img/img-pant-6.png',
      sale: 110,
      price: 599.0,
    },
  ];

  if (option === 'Áo') {
    shirtList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4 product">
            <div class="card" style="width: 18rem; height: 480px">
              <img src=${item.imgUrl} class="card-img-top" alt="Áo ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-shirt-${
                    idx + 1
                  }.html"
                    >${item.name}</a
                  >
                </div>
                <div class="row mt-1 d-flex ">
                      <div class="col-10">
                          <p class="card-text d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <span>(${item.sale})</span>
                          </p>
                      </div>
                      <div class="col-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart fs-2" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                          </svg>
                      </div>
                    </div>
                <div class="d-flex justify-content-between align-items-center card-price mt-2">
                  <a href="../html/chitietsanpham-shirt-${
                    idx + 1
                  }.html" class="btn btn-primary">Xem Chi Tiết</a>
                  <span class="card-link text-secondary">${item.price},000đ</span>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'Đầm') {
    dressList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4 product">
            <div class="card" style="width: 18rem; height: 480px">
              <img src=${item.imgUrl} class="card-img-top" alt="Áo ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-dress-${
                    idx + 1
                  }.html"
                    >${item.name}</a
                  >
                </div>
                <div class="row mt-2 d-flex ">
                      <div class="col-10">
                          <p class="card-text d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <span>(${item.sale})</span>
                          </p>
                      </div>
                      <div class="col-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart fs-2" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                          </svg>
                      </div>
                    </div>
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <a href="../html/chitietsanpham-dress-${
                    idx + 1
                  }.html" class="btn btn-primary">Xem Chi Tiết</a>
                  <span class="card-link text-secondary">${item.price},000đ</span>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'Váy') {
    skirtList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4 product">
            <div class="card" style="width: 18rem; height: 480px">
              <img src=${item.imgUrl} class="card-img-top" alt="Áo ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-skirt-${
                    idx + 1
                  }.html"
                    >${item.name}</a
                  >
                </div>
                <div class="row mt-2 d-flex ">
                      <div class="col-10">
                          <p class="card-text d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <span>(${item.sale})</span>
                          </p>
                      </div>
                      <div class="col-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart fs-2" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                          </svg>
                      </div>
                    </div>
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <a href="../html/chitietsanpham-skirt-${
                    idx + 1
                  }.html" class="btn btn-primary">Xem Chi Tiết</a>
                  <span class="card-link text-secondary">${item.price},000đ</span>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'Quần') {
    pantList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4 product">
            <div class="card" style="width: 18rem; height: 480px">
              <img src=${item.imgUrl} class="card-img-top" alt="Áo ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-pant-${
                    idx + 1
                  }.html"
                    >${item.name}</a
                  >
                </div>
                <div class="row mt-2 d-flex ">
                      <div class="col-10">
                          <p class="card-text d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16" >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <span>(${item.sale})</span>
                          </p>
                      </div>
                      <div class="col-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart fs-2" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                          </svg>
                      </div>
                    </div>
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <a href="../html/chitietsanpham-pant-${
                    idx + 1
                  }.html" class="btn btn-primary">Xem Chi Tiết</a>
                  <span class="card-link text-secondary">${item.price},000đ</span>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
}

function taoBanner(option = 'Áo') {
  if (option === 'Áo') {
    return '../img/img-banner-shirt.jpg';
  }

  if (option === 'Đầm') {
    return '../img/img-banner-dress.jpg';
  }

  if (option === 'Váy') {
    return '../img/img-banner-skirt.jpg';
  }

  if (option === 'Quần') {
    return '../img/img-banner-pant.jpg';
  }
}

$(document).ready(function () {
  let tenloai = $('.selected').children('.active').text();

  $('.img-banner').attr('src', taoBanner(tenloai));
  $('.product__list').append(taoDanhSachSanPham(tenloai));

  $('.selected').click(function () {
    $('.selected').children().removeClass('active');
    $(this).children().addClass('active');
    $('.product__list').children().remove();

    let tenloai = $('.selected').children('.active').text();
    $('.breadcrumb .breadcrumb-item.active').text(tenloai);
    $('.img-banner').attr('src', taoBanner(tenloai));
    taoDanhSachSanPham(tenloai);
  });
});
