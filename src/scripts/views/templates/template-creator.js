const createHomeTemplate = () => `
<!-- Jumbotron Start -->
<section class="heading">
  <div class="jumbotron">
    <div class="container-xxl py-4">
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
        <a href="/#/pick-up-request" id="pick-up-request" class="card-body" style="cursor: pointer; text-decoration: none;">
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

const createPickUpRequestTemplate = () => `
<div class="custom-form p-4 shadow rounded p-5" style="width: 580px; min-width: 400px;">
<h1 class="text-center fw-semibold fs-3 mb-4">Ajukan Penjemputan Daur Ulang</h1>
    <div class="form-header my-3 rounded text-center text-light py-2 bg-success">
      Silahkan Isi Form Dibawah Ini
    </div>
    <form>
      <div class="form-floating mb-2 shadow-sm">
        <input type="text" class="form-control rounded border-none" id="floatingInput" placeholder="Nama" required>
        <label for="floatingInput" class="fw-semibold">Nama</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="text" class="form-control rounded border-none" id="floatingInput" placeholder="Alamat lengkap" required>
        <label for="floatingInput" class="fw-semibold">Alamat Lengkap</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <input type="tel" class="form-control rounded border-none" id="floatingInput" placeholder="Nomor HP" required>
        <label for="floatingInput" class="fw-semibold">Nomor HP</label>
      </div>
      <div class="form-floating mb-2 shadow-sm">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2" class="fw-semibold">Titik/Patokan Penjemputan</label>
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
    <form>
      <div class="form-group mb-2">
        <input type="text" class="form-control rounded text-center border-none" placeholder="Nama" required>
      </div>
      <div class="form-group mb-2">
        <input type="email" class="form-control rounded text-center border-none" placeholder="Alamat Email" required>
      </div>
      <div class="form-group mb-2">
        <input type="tel" class="form-control rounded text-center border-none" placeholder="No HP" required>
      </div>
      <div class="form-group mb-2">
        <input type="text" class="form-control rounded text-center border-none" placeholder="E - Wallet" required>
      </div>
      <div class="form-group mb-2">
        <input type="number" class="form-control rounded text-center border-none" placeholder="Nominal Penarikan" required>
      </div>
      <div class="form-footer my-3 text-center">
        <span class="d-block mb-3">Minimal Pengajuan: Rp.50.000</span>
        <button type="submit" class="btn btn-submit rounded text-light py-2 w-100 border-none bg-success">Ajukan Penarikan</button>
      </div>
    </form>
  </div>
`;

const createHistoryTransactionTemplate = () => `
    <div class="transaction py-4 px-3">
      <h1 class="text-center fw-semibold fs-2" style="margin-top: 4rem;">Semua Transaksi</h1>
      <div class="transaction__list p-4 rounded shadow overflow-y-scroll" style="height: 80vh">
        <div class="transaction__card card py-2 mb-3 shadow">
          <div class="card-body">
            <p class="fs-6 fs-md-5 fw-medium my-auto">1. 17 Mei 2024 Sebesar Rp.34000 dengan total 10Kg</p>
          </div>
        </div>
        <div class="transaction__card card py-2 mb-3 shadow">
          <div class="card-body">
            <p class="fs-6 fs-md-5 fw-medium my-auto">1. 17 Mei 2024 Sebesar Rp.34000 dengan total 10Kg</p>
          </div>
        </div>
        <div class="transaction__card card py-2 mb-3 shadow">
          <div class="card-body">
            <p class="fs-6 fs-md-5 fw-medium my-auto">1. 17 Mei 2024 Sebesar Rp.34000 dengan total 10Kg</p>
          </div>
        </div>
        <div class="transaction__card card py-2 mb-3 shadow">
          <div class="card-body">
            <p class="fs-6 fs-md-5 fw-medium my-auto">1. 17 Mei 2024 Sebesar Rp.34000 dengan total 10Kg</p>
          </div>
        </div>
        <div class="transaction__card card py-2 mb-3 shadow">
          <div class="card-body">
            <p class="fs-6 fs-md-5 fw-medium my-auto">1. 17 Mei 2024 Sebesar Rp.34000 dengan total 10Kg</p>
          </div>
        </div>
        <div class="transaction__card card py-2 mb-3 shadow">
          <div class="card-body">
            <p class="fs-6 fs-md-5 fw-medium my-auto">1. 17 Mei 2024 Sebesar Rp.34000 dengan total 10Kg</p>
          </div>
        </div>
        <div class="transaction__card card py-2 mb-3 shadow">
          <div class="card-body">
            <p class="fs-6 fs-md-5 fw-medium my-auto">1. 17 Mei 2024 Sebesar Rp.34000 dengan total 10Kg</p>
          </div>
        </div>
        <div class="transaction__card card py-2 mb-3 shadow">
          <div class="card-body">
            <p class="fs-6 fw-medium my-auto">1. 17 Mei 2024 Sebesar Rp.34000 dengan total 10Kg</p>
          </div>
        </div>
      </div>
    </div>
`;

const createDetailArticleTemplate = () => `
  <div class="bg-success" style="">

  </div>
`;

export {
  createHomeTemplate,
  createPickUpRequestTemplate,
  createSwapPointTemplate,
  createHistoryTransactionTemplate,
  createDetailArticleTemplate,
  createAfterPickUpRequestTemplate,
};
