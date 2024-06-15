const createHomeTemplate = (articles) => `
<!-- Jumbotron Start -->
<section class="heading">
  <div class="jumbotron">
    <div class="profil-user-container container-xxl py-3">
    
    </div>
    <div class="jumbotron__text container-xxl py-4">
      <h1 class="display-4 fw-semibold text-light">Selamat Datang Di Ecoswap</h1>
      <h2 class="display-7 fw-medium text-light">Sebuah Platfrom Daur Ulang Dari Rakyat Untuk Rakyat</h2>
      <a href="./signUp.html" class="signUpLink btn btn-outline-light mt-2 btn-lg rounded-pill">Daftar disini</a>
    </div>
  </div>

  <div class="row justify-content-center w-full mt-2">
    <div class="col-12 col-md-6 col-lg col-xl mb-3">
      <div class="card bg-success text-light w-full p-2" style="min-width: 310px; min-height: 250px;">
        <div class="card-body">
          <h3 class="card-title fw-semibold">Kenapa memilih EcoSwap</h3>
          <p class="card-text my-3">Sebuah platform daur ulang yang berbasis online berguna untuk mempermudah masyarakat dalam menyalurkan limbah rumah tangga</p>
          <a href="#aboutEcoSwap" class="btn btn-outline-light btn-sm">Pelajari selengkapnya</a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg col-xl mb-3 justify-content-center align-self-end">
      <div class="card bg-success text-light text-center shadow rounded-4" style="min-width: 260px; max-height: 250px;">
        <a href="/#/pickups" id="pick-up-request" class="card-body" style="cursor: pointer; text-decoration: none;">
          <img src="./icons/motorbike.png" class="card-img-top mx-auto" alt="Icon penjemputan"
            style="width: 150px;">
          <div class="card-body text-center">
            <p class="card-text text-light fw-semibold fs-4">Penjemputan</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg col-xl mb-3 justify-content-center align-self-end">
      <div class="card bg-success text-light text-center shadow rounded-4" style="min-width: 260px; max-height: 250px;">
        <a href="/#/history-transaction" id="history-transaction" class="card-body" style="cursor: pointer; text-decoration: none;">
          <img src="./icons/clock.png" class="card-img-top mx-auto" alt="Icon Riwayat"
            style="width: 150px;">
          <div class="card-body text-center">
            <p class="card-text text-light fw-semibold fs-4">Riwayat Transaksi</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg col-xl mb-3 justify-content-center align-self-end">
      <div class="card bg-success text-light text-center shadow rounded-4" style="min-width: 260px; max-height: 250px;">
        <a href="/#/swap-point" id="swap-point" class="card-body" style="cursor: pointer; text-decoration: none;">
          <img src="./icons/coin.png" class="card-img-top mx-auto" alt="Icon Tukar Point"
            style="width: 150px;">
          <div class="card-body text-center">
            <p class="card-text text-light fw-semibold fs-4">Tukar Poin</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
<!-- Jumbotron End -->

  <section id="aboutEcoSwap" class="w-full d-flex flex-row justify-content-between align-items-center" style="padding-top: 4rem; margin-top: 2rem;">
    <div class="image d-none d-md-block bg-danger" style="min-width: 230px;">
      <img src="./images/12.jpg" class="image__aboutEcoSwap img-fluid" alt="About EcoSwap">
    </div>

    <div class="description p-4">
      <h3 class="fw-semibold fs-1">Eco Swap</h3>
      <p class="fw-medium fs-4">Sebuah platform daur ulang yang berbasis online berguna untuk mempermudah masyarakat dalam menyalurkan
        limbah rumah tangga.</p>
      <div class="description__aboutEcoSwap">
        <div class="card text-start d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-3 px-2">
          <img class="card-img-top mt-4" src="./icons/Goal.png" alt="Goal" style="max-width: 80px; max-height: 80px;" />
          <div class="card-body">
            <h3 class="card-title fw-semibold fs-5 mb-2">Tujuan Kami</h3>
            <ul>
              <li>
                <p class="card-text mt-2">Mempermudah dalam Penyaluran Sampah: Memfasilitasi pengumpulan dan distribusi
                  sampah daur ulang dari rumah tangga ke bank sampah.</p>
              </li>
              <li>
                <p class="card-text mt-2">Meningkatkan Efisiensi Pengumpulan: Mengoptimalkan rute dan jadwal penjemputan
                  untuk mengurangi waktu dan biaya operasional.</p>
              </li>
              <li>
                <p class="card-text mt-2">Meningkatkan Partisipasi Masyarakat: Memotivasi lebih banyak orang untuk
                  berpartisipasi dalam program daur ulang melalui kemudahan akses
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="card text-start d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-3 px-2">
          <img class="card-img-top mt-4" src="./icons/feature.png" alt="Feature" style="max-width: 80px; max-height: 80px;" />
          <div class="card-body">
            <h3 class="card-title fw-semibold fs-5 mb-2">Fitur</h3>
            <ul>
              <li>
                <p class="card-text mt-2">Fitur Penukaran Poin Menjadi Uang.</p>
              </li>
              <li>
                <p class="card-text mt-2">Deskripsi: Pengguna dapat mengumpulkan poin setiap kali mereka menyerahkan sampah daur ulang melalui aplikasi. Poin ini bisa ditukarkan dengan uang atau hadiah lainnya.</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="card text-start d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-3 px-2">
          <img class="card-img-top mt-4" src="./icons/benefit.png" alt="Benefit" style="max-width: 80px; max-height: 80px;" />
          <div class="card-body">
            <h3 class="card-title fw-semibold fs-5 mb-2">Benefit Yang Didapat</h3>
            <ul>
              <li>
                <p class="card-text mt-2">Penghasilan Tambahan: Masyarakat dapat mendapatkan penghasilan tambahan dari poin yang dikumpulkan dan ditukar dengan uang atau hadiah.</p>
              </li>
              <li>
                <p class="card-text mt-2">Kemudahan Dalam Pengelolaan Sampah: Proses penjemputan sampah dari rumah membuatnya lebih mudah bagi masyarakat untuk berpartisipasi dalam program daur ulang.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section id="article" class="px-2" style="margin-top: 4rem;">
  <article class="article">
    <h2 class="fw-semibold fs-2">Artikel</h2>
    <div class="article__content mt-3">
      ${articles.articles.map((article) => `
        <div class="card mb-3 p-3">
          <div class="row g-0">
            <div class="col-md-4 text-center">
              <img src="${article.picture}" class="img-fluid rounded object-position-center object-fit-cover" alt="..." style="height: 250px; min-height: 200px;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-semibold fs-5">${article.name}</h5>
                <p class="card-text mt-4">${article.content.pendahuluan}<a href="#/detail-article/${article.id}" class="btn btn-outline-success mt-0 btn-sm rounded-pill">Baca selengkapnya</a></p>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </article>
</section>

  <section id="ourContact" class="px-2" style="margin-top: 4rem;">
    <div class="contact">
      <h2 class="contact__heading text-center fw-semibold fs-2">Kontak Kami</h2>

      <div class="contact__content text-center mt-3">
        <p>Jika anda punya kepentingan atau pertanyaan silahkan hubungi kontak dibawah atau bisa datang langsung ke lokasi dibawah ini.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.5015023127694!2d101.4012913187542!3d-2.055346288828187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2da1a7892d0461%3A0xc3ab5fb4ee8e8ba9!2sTPS3R%20BUMI%20BERKAH%20SUMUR%20ANYIR!5e0!3m2!1sid!2sid!4v1717676673060!5m2!1sid!2sid" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="row text-center py-4">
          <div class="col-12 col-sm-6 col-xxl py-2">
            <a href="https://maps.app.goo.gl/5CrEjDcywABp1q3o7" target="_blank" class="text-black text-decoration-none fs-5 fw-medium p-3 mx-2">
            <img src="./icons/location.png" width="40px" height="40px" alt="Location">
            Jl.Sumur Anyir
            </a>
          </div>
          <div class="col-12 col-sm-6 col-xxl py-2">
            <a href="https://instagram.com/EcoSwap" target="_blank" class="text-black text-decoration-none fs-5 fw-medium p-3 mx-2">
            <img src="./icons/instagram.png" width="40px" height="40px" alt="Instagram">
            @EcoSwap
            </a>
          </div>
          <div class="col-12 col-sm-6 col-xxl py-2">
            <a href="https://whatsapp.com/6281231232412" target="_blank" class="text-black text-decoration-none fs-5 fw-medium p-3 mx-2">
            <img src="./icons/telephone.png" width="40px" height="40px" alt="Phone">
            081231232412
            </a>
          </div>
          <div class="col-12 col-sm-6 col-xxl py-2">
            <a href="https://gmail.com" target="_blank" class="text-black text-decoration-none fs-5 fw-medium p-3 mx-2">
            <img src="./icons/gmail.png" width="40px" height="40px" alt="Email">
            EcoSwap@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
const createHomeAdminTemplate = () => `
<!-- Jumbotron Start -->
<section class="heading">
  <div class="jumbotron">
    <div class="jumbotron__text container-xxl py-4">
      <h1 class="display-4 fw-semibold text-light">Selamat Datang Di Ecoswap</h1>
      <h2 class="display-7 fw-medium text-light">Sebuah Platfrom Daur Ulang Dari Rakyat Untuk Rakyat</h2>
    </div>
  </div>

  <div class="row justify-content-center w-full mt-2">
    <div class="col-12 col-md-6 col-lg col-xl mb-3">
      <div class="card bg-success text-light w-full p-2" style="min-width: 310px; min-height: 250px;">
        <div class="card-body">
          <h3 class="card-title fw-semibold">Kenapa memilih EcoSwap</h3>
          <p class="card-text my-3">Sebuah platform daur ulang yang berbasis online berguna untuk mempermudah masyarakat dalam menyalurkan limbah rumah tangga</p>
          <a href="#aboutEcoSwap" id="aboutLink2" class=" btn btn-outline-light btn-sm">Pelajari selengkapnya</a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg col-xl mb-3 justify-content-center align-self-end">
      <div class="card bg-success text-light text-center shadow rounded-4" style="min-width: 260px; max-height: 250px;">
        <a href="/#/list-pickup" id="pick-up-request" class="card-body" style="cursor: pointer; text-decoration: none;">
          <img src="./icons/motorbike.png" class="card-img-top mx-auto" alt="Icon penjemputan"
            style="width: 150px;">
          <div class="card-body text-center">
            <p class="card-text text-light fw-semibold fs-4">Daftar Penjemputan</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg col-xl mb-3 justify-content-center align-self-end">
      <div class="card bg-success text-light text-center shadow rounded-4" style="min-width: 260px; max-height: 250px;">
        <a href="/#/list-withdrawal" id="swap-point" class="card-body" style="cursor: pointer; text-decoration: none;">
          <img src="./icons/coin.png" class="card-img-top mx-auto" alt="Icon Tukar Point"
            style="width: 150px;">
          <div class="card-body text-center">
            <p class="card-text text-light fw-semibold fs-4">Daftar Penarikan</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
<!-- Jumbotron End -->

  <section id="aboutEcoSwap__admin" class="w-full d-flex flex-row justify-content-between align-items-center" style="padding-top: 4rem; margin-top: 2rem;">
    <div class="image d-none d-md-block bg-danger" style="min-width: 230px;">
      <img src="./images/12.jpg" class="image__aboutEcoSwap img-fluid" alt="About EcoSwap">
    </div>

    <div class="description p-4">
      <h3 class="fw-semibold fs-1">Eco Swap</h3>
      <p class="fw-medium fs-4">Sebuah platform daur ulang yang berbasis online berguna untuk mempermudah masyarakat dalam menyalurkan
        limbah rumah tangga.</p>
      <div class="description__aboutEcoSwap">
        <div class="card text-start d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-3 px-2">
          <img class="card-img-top mt-4" src="./icons/Goal.png" alt="Goal" style="max-width: 80px; max-height: 80px;" />
          <div class="card-body">
            <h3 class="card-title fw-semibold fs-5 mb-2">Tujuan Kami</h3>
            <ul>
              <li>
                <p class="card-text mt-2">Mempermudah dalam Penyaluran Sampah: Memfasilitasi pengumpulan dan distribusi
                  sampah daur ulang dari rumah tangga ke bank sampah.</p>
              </li>
              <li>
                <p class="card-text mt-2">Meningkatkan Efisiensi Pengumpulan: Mengoptimalkan rute dan jadwal penjemputan
                  untuk mengurangi waktu dan biaya operasional.</p>
              </li>
              <li>
                <p class="card-text mt-2">Meningkatkan Partisipasi Masyarakat: Memotivasi lebih banyak orang untuk
                  berpartisipasi dalam program daur ulang melalui kemudahan akses
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="card text-start d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-3 px-2">
          <img class="card-img-top mt-4" src="./icons/feature.png" alt="Feature" style="max-width: 80px; max-height: 80px;" />
          <div class="card-body">
            <h3 class="card-title fw-semibold fs-5 mb-2">Fitur</h3>
            <ul>
              <li>
                <p class="card-text mt-2">Fitur Penukaran Poin Menjadi Uang.</p>
              </li>
              <li>
                <p class="card-text mt-2">Deskripsi: Pengguna dapat mengumpulkan poin setiap kali mereka menyerahkan sampah daur ulang melalui aplikasi. Poin ini bisa ditukarkan dengan uang atau hadiah lainnya.</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="card text-start d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-3 px-2">
          <img class="card-img-top mt-4" src="./icons/benefit.png" alt="Benefit" style="max-width: 80px; max-height: 80px;" />
          <div class="card-body">
            <h3 class="card-title fw-semibold fs-5 mb-2">Benefit Yang Didapat</h3>
            <ul>
              <li>
                <p class="card-text mt-2">Penghasilan Tambahan: Masyarakat dapat mendapatkan penghasilan tambahan dari poin yang dikumpulkan dan ditukar dengan uang atau hadiah.</p>
              </li>
              <li>
                <p class="card-text mt-2">Kemudahan Dalam Pengelolaan Sampah: Proses penjemputan sampah dari rumah membuatnya lebih mudah bagi masyarakat untuk berpartisipasi dalam program daur ulang.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section id="article__admin" class="px-2" style="margin-top: 4rem;">
    <article class="article">
      <h2 class="fw-semibold fs-2">Artikel</h2>
      <div class="article__content mt-3">
        <div class="card mb-3 p-3">
          <div class="row g-0">
            <div class="col-md-4 text-center">
              <img src="./images/18.jpg" class="img-fluid rounded object-position-center object-fit-cover" alt="..." style="height: 250px; min-height: 200px;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-semibold fs-5">Memahami Konsep Bank Sampah: Mengelola Sampah Menuju Lingkungan yang Bersih dan Sehat</h5>
                <p class="card-text mt-4">Bank sampah adalah salah satu inovasi yang telah membawa perubahan positif dalam pengelolaan sampah di banyak komunitas. Konsep bank sampah tidak hanya sekadar tempat pengumpulan sampah, tetapi juga merupakan langkah nyata menuju keberlanjutan lingkungan dan ekonomi.<a href="#" class="btn btn-outline-success mt-0 btn-sm rounded-pill">Baca selengkapnya</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 p-3">
          <div class="row g-0">
            <div class="col-md-4 text-center">
              <img src="./images/18.jpg" class="img-fluid rounded object-position-center object-fit-cover" alt="..." style="height: 250px; min-height: 200px;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-semibold fs-5">Memahami Konsep Bank Sampah: Mengelola Sampah Menuju Lingkungan yang Bersih dan Sehat</h5>
                <p class="card-text mt-4">Bank sampah adalah salah satu inovasi yang telah membawa perubahan positif dalam pengelolaan sampah di banyak komunitas. Konsep bank sampah tidak hanya sekadar tempat pengumpulan sampah, tetapi juga merupakan langkah nyata menuju keberlanjutan lingkungan dan ekonomi.<a href="#" class="btn btn-outline-success mt-0 btn-sm rounded-pill">Baca selengkapnya</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 p-3">
          <div class="row g-0">
            <div class="col-md-4 text-center">
              <img src="./images/18.jpg" class="img-fluid rounded object-position-center object-fit-cover" alt="..." style="height: 250px; min-height: 200px;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-semibold fs-5">Memahami Konsep Bank Sampah: Mengelola Sampah Menuju Lingkungan yang Bersih dan Sehat</h5>
                <p class="card-text mt-4">Bank sampah adalah salah satu inovasi yang telah membawa perubahan positif dalam pengelolaan sampah di banyak komunitas. Konsep bank sampah tidak hanya sekadar tempat pengumpulan sampah, tetapi juga merupakan langkah nyata menuju keberlanjutan lingkungan dan ekonomi.<a href="#" class="btn btn-outline-success mt-0 btn-sm rounded-pill">Baca selengkapnya</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>

  <section id="ourContact__admin" class="px-2" style="margin-top: 4rem;">
    <div class="contact">
      <h2 class="contact__heading text-center fw-semibold fs-2">Kontak Kami</h2>

      <div class="contact__content text-center mt-3">
        <p>Jika anda punya kepentingan atau pertanyaan silahkan hubungi kontak dibawah atau bisa datang langsung ke lokasi dibawah ini.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.5015023127694!2d101.4012913187542!3d-2.055346288828187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2da1a7892d0461%3A0xc3ab5fb4ee8e8ba9!2sTPS3R%20BUMI%20BERKAH%20SUMUR%20ANYIR!5e0!3m2!1sid!2sid!4v1717676673060!5m2!1sid!2sid" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="row text-center py-4">
          <div class="col-12 col-sm-6 col-xxl py-2">
            <a href="https://maps.app.goo.gl/5CrEjDcywABp1q3o7" target="_blank" class="text-black text-decoration-none fs-5 fw-medium p-3 mx-2">
            <img src="./icons/location.png" width="40px" height="40px" alt="Location">
            Jl.Sumur Anyir
            </a>
          </div>
          <div class="col-12 col-sm-6 col-xxl py-2">
            <a href="https://instagram.com/EcoSwap" target="_blank" class="text-black text-decoration-none fs-5 fw-medium p-3 mx-2">
            <img src="./icons/instagram.png" width="40px" height="40px" alt="Instagram">
            @EcoSwap
            </a>
          </div>
          <div class="col-12 col-sm-6 col-xxl py-2">
            <a href="https://whatsapp.com/6281231232412" target="_blank" class="text-black text-decoration-none fs-5 fw-medium p-3 mx-2">
            <img src="./icons/telephone.png" width="40px" height="40px" alt="Phone">
            081231232412
            </a>
          </div>
          <div class="col-12 col-sm-6 col-xxl py-2">
            <a href="https://gmail.com" target="_blank" class="text-black text-decoration-none fs-5 fw-medium p-3 mx-2">
            <img src="./icons/gmail.png" width="40px" height="40px" alt="Email">
            EcoSwap@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const createPickUpRequestTemplate = () => `
<div class="custom-form p-4 shadow rounded p-5" style="width: 580px; min-width: 400px;">
  <h1 class="text-center fw-semibold fs-3 mb-4">Ajukan Penjemputan Daur Ulang</h1>
  <div class="form-header my-3 rounded text-center text-light py-2 bg-success">
    Silahkan Isi Form Dibawah Ini
  </div>
  <form id="pickupRequestForm">
    <div class="form-floating mb-2 shadow-sm">
      <input type="text" class="form-control rounded border-none" id="name" placeholder="Nama" required>
      <label for="name" class="fw-semibold">Nama</label>
    </div>
    <div class="form-floating mb-2 shadow-sm">
      <input type="text" class="form-control rounded border-none" id="address" placeholder="Alamat lengkap" required>
      <label for="address" class="fw-semibold">Alamat Lengkap</label>
    </div>
    <div class="form-floating mb-2 shadow-sm">
      <input type="tel" class="form-control rounded border-none" id="phone" placeholder="Nomor HP" required>
      <label for="phone" class="fw-semibold">Nomor HP</label>
    </div>
    <div class="form-floating mb-2 shadow-sm">
      <textarea class="form-control" placeholder="Leave a comment here" id="description" style="height: 100px"></textarea>
      <label for="description" class="fw-semibold">Deskripsi Alamat Penjemputan</label>
    </div>
    <div class="form-footer my-3 text-center">
      <button type="submit" class="btn btn-submit rounded text-light py-2 w-100 border-none bg-success">Ajukan Penjemputan</button>
    </div>
  </form>
</div>
`;

const createAfterPickUpRequestTemplate = () => `

`;

const createSwapPointTemplate = () => `
<div class="custom-form p-4 shadow rounded p-5" style="width: 550px; min-width: 400px;">
  <h1 class="text-center fw-semibold fs-3 mb-4">Pengajuan Penarikan</h1>
  <div class="form-header my-3 rounded text-center text-light py-2 bg-success">
    Silahkan Isi Form Dibawah Ini
  </div>
  <form id="withdrawalRequestForm">
    <div class="form-group mb-2">
      <input type="text" class="form-control rounded text-center border-none" id="name" placeholder="Nama" required>
    </div>
    <div class="form-group mb-2">
      <input type="email" class="form-control rounded text-center border-none" id="email" placeholder="Alamat Email" required>
    </div>
    <div class="form-group mb-2">
      <input type="tel" class="form-control rounded text-center border-none" id="phone" placeholder="No HP" required>
    </div>
    <div class="form-group mb-2">
      <input type="text" class="form-control rounded text-center border-none" id="ewallet" placeholder="E - Wallet" required>
    </div>
    <div class="form-group mb-2">
      <input type="number" class="form-control rounded text-center border-none" id="amount" placeholder="Nominal Penarikan" required>
    </div>
    <div class="form-footer my-3 text-center">
      <span class="d-block mb-3">Minimal Penarikan: Rp.25.000</span>
      <button type="submit" class="btn btn-submit rounded text-light py-2 w-100 border-none bg-success">Ajukan Penarikan</button>
    </div>
  </form>
</div>

`;

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', options); // menggunakan locale 'id-ID' untuk format Indonesia
};

const createHistoryTransactionTemplate = () => `
    <div class="transaction py-4 px-3">
      <h1 class="text-center fw-semibold fs-2" style="margin-top: 4rem;">Semua Transaksi</h1>
      <div class="transaction__list p-4 rounded shadow overflow-y-scroll" style="height: 80vh"></div>
    </div>
`;

const createTransactionCardTemplate = (transaction, index) => {
  const formattedDate = formatDate(transaction.created_at);
  return `
    <div class="transaction__card card py-2 mb-3 shadow">
      <div class="card-body">
        <p class="fs-6 fs-md-5 fw-medium my-auto">${index}. ${formattedDate} mengumpulkan sampah dengan berat ${transaction.weight || 0} Kg memperoleh point sebesar ${transaction.points || 0} point <span class="ms-5 bg-warning px-3 py-1">${transaction.status}</span></p>
      </div>
    </div>
`;
};

const createListPickupTemplate = (pickups) => `
  <div class="listPickup py-4 px-3">
    <h1 class="text-center fw-semibold fs-2" style="margin-top: 4rem;">Daftar Penjemputan</h1>
    <div class="listPickup__list p-4 rounded shadow overflow-y-scroll" style="height: 80vh">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Nama</th>
            <th scope="col">Alamat</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          ${pickups.map((pickup, index) => `
            <tr class="table-active" onclick="window.location='#/pickups/${pickup.id}';">
              <th scope="row">${index + 1}</th>
              <td>${formatDate(pickup.created_at)}</td>
              <td>${pickup.name}</td>
              <td>${pickup.address}</td>
              <td>${pickup.status}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>
`;

const createDetailPickupTemplate = (pickup) => `
<div class="custom-form p-4 shadow rounded p-5" style="width: 580px; min-width: 400px;">
  <h1 class="text-center fw-semibold fs-3 mb-4">Detail Penjemputan</h1>
  <div class="form-header my-3 rounded text-center text-light py-2 bg-success">
    Data Penjemputan Pelanggan
  </div>
  <div id="pickup-details">
    <form id="approve-pickup-form">
      <div class="form-floating mb-2 shadow-sm">
        <input type="text" class="form-control rounded border-none" id="name" placeholder="Nama" value="${pickup.name}" readonly>
        <label for="name" class="fw-semibold">Nama</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="text" class="form-control rounded border-none" id="address" placeholder="Alamat lengkap" value="${pickup.address}" readonly>
        <label for="address" class="fw-semibold">Alamat Lengkap</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="tel" class="form-control rounded border-none" id="phone" placeholder="Nomor HP" value="${pickup.phone}" readonly>
        <label for="phone" class="fw-semibold">Nomor HP</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <textarea class="form-control" placeholder="Leave a comment here" id="description" style="height: 100px" readonly>${pickup.description}</textarea>
        <label for="description" class="fw-semibold">Deskripsi Alamat Penjemputan</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="text" class="form-control rounded border-none" id="typeTrash" placeholder="Jenis Sampah">
        <label for="typeTrash" class="fw-semibold">Jenis Sampah</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="number" class="form-control rounded border-none" id="weightOfTrash" placeholder="Berat Sampah">
        <label for="weightOfTrash" class="fw-semibold">Berat Sampah</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="number" class="form-control rounded border-none" id="point" placeholder="Point">
        <label for="point" class="fw-semibold">Point</label>
      </div>
      <div class="form-footer my-3 text-center">
        <button type="submit" class="btn btn-submit rounded text-light py-2 w-100 border-none bg-success">Konfirmasi Penjemputan</button>
      </div>
    </form>
  </div>
</div>
`;
const createListWithdrawalTemplate = (withdrawals) => `
  <div class="listPickup py-4 px-3">
    <h1 class="text-center fw-semibold fs-2" style="margin-top: 4rem;">Daftar Penarikan</h1>
    <div class="listPickup__list p-4 rounded shadow overflow-y-scroll" style="height: 80vh">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Nama</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        ${withdrawals.map((withdrawal, index) => `
            <tr class="table-active" onclick="window.location='#/withdrawals/${withdrawal.id}';">
              <th scope="row">${index + 1}</th>
              <td>${formatDate(withdrawal.created_at)}</td>
              <td>${withdrawal.name}</td>
              <td>${withdrawal.email}</td>
              <td>${withdrawal.status}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>
`;

const createDetailWithdrawalTemplate = (withdrawal) => `
<div class="custom-form p-4 shadow rounded p-5" style="width: 580px; min-width: 400px;">
  <h1 class="text-center fw-semibold fs-3 mb-4">Detail Penarikan</h1>
  <div class="form-header my-3 rounded text-center text-light py-2 bg-success">
    Data Penarikan Pelanggan
  </div>
  <div id="withdrawal-details">
    <form id="approve-withdrawal-form">
      <div class="form-floating mb-2 shadow-sm">
        <input type="text" class="form-control rounded border-none" id="name" placeholder="Nama" value="${withdrawal.name}" readonly>
        <label for="name" class="fw-semibold">Nama</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="text" class="form-control rounded border-none" id="email" placeholder="Email" value="${withdrawal.email}" readonly>
        <label for="email" class="fw-semibold">Email</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="tel" class="form-control rounded border-none" id="phone" placeholder="Nomor HP" value="${withdrawal.phone}" readonly>
        <label for="phone" class="fw-semibold">Nomor HP</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="text" class="form-control rounded border-none" id="eWallet" placeholder="E Wallet" value="${withdrawal.ewallet}" readonly>
        <label for="eWallet" class="fw-semibold">E Wallet</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="number" class="form-control rounded border-none" id="amount" placeholder="Penarikan" value="${withdrawal.amount}" readonly>
        <label for="amount" class="fw-semibold">Penarikan</label>
      </div>
      <div class="form-footer my-3 text-center">
        <button type="submit" class="btn btn-submit rounded text-light py-2 w-100 border-none bg-success">Konfirmasi Penarikan</button>
      </div>
    </form>
  </div>
</div>
`;

const createDetailArticleTemplate = (article) => `
  <div class="article-container">
    <article>
      <h1>${article.name}</h1>
      <img src="${article.picture}" alt="${article.name}" class="img-fluid rounded">
      ${Object.keys(article.content).map((key) => `
        <h2>${key}</h2>
        <p>${article.content[key]}</p>
      `).join('')}
    </article>
  </div>
`;

const createProfilUserTemplate = (username, totalPoint) => `
    <div class="text-light pt-2">
      <p class="fw-semibold fs-3 mt-4">${username}</p>
      <p class="fw-semibold fs-4 mt-0">Total Point : ${totalPoint}</p>
    </div>
`;

export {
  createHomeTemplate,
  createPickUpRequestTemplate,
  createSwapPointTemplate,
  createHistoryTransactionTemplate,
  createDetailArticleTemplate,
  createAfterPickUpRequestTemplate,
  createTransactionCardTemplate,
  createHomeAdminTemplate,
  createListPickupTemplate,
  createDetailPickupTemplate,
  createListWithdrawalTemplate,
  createDetailWithdrawalTemplate,
  createProfilUserTemplate,
};
