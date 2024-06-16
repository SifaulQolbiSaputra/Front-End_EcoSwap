/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import API_ENDPOINT from '../globals/api-endpoint';

class EcoSwapSource {
  static async registerUser() {
    const registerButton = $('.btn-register');
    const statusButton = $('.btn-status');
    statusButton.css('display', 'none');

    document.getElementById('registrationForm').addEventListener('submit', async (event) => {
      event.preventDefault();

      registerButton.css('display', 'none');
      statusButton.css('display', 'block');

      const firstName = document.getElementById('firstName').value.toString();
      const lastName = document.getElementById('lastName').value.toString();
      const email = document.getElementById('email').value.toString();
      const password = document.getElementById('password').value.toString();
      const passwordConfirmation = document.getElementById('passwordConfirmation').value.toString();

      if (password !== passwordConfirmation) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Password tidak cocok!',
          text: 'Harap cek kembali!',
        });
        // Revert button display states on error
        statusButton.css('display', 'none');
        registerButton.css('display', 'block');
        return;
      }

      const data = {
        username: `${firstName} ${lastName}`,
        email,
        password,
      };

      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(API_ENDPOINT.REGISTER, options);

        if (!response.ok) {
          const errorData = await response.json();
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${errorData.message}`,
            text: 'Gagal mengirim data! Coba lagi nanti.',
          });
          // Revert button display states on error
          statusButton.css('display', 'none');
          registerButton.css('display', 'block');
          return;
        }

        const responseData = await response.json();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil Daftar!',
          text: 'Silahkan login pada halaman login',
        });
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `${error.message}`,
          text: 'Terjadi kesalahan saat registrasi! coba lagi nanti',
        });
        // Revert button display states on error
        statusButton.css('display', 'none');
        registerButton.css('display', 'block');
      }
    });
  }

  static async loginUser() {
    const loginForm = document.getElementById('loginForm');
    const loginButton = $('.btn-login');
    const statusButton = $('.btn-status');

    $('.toggle-password').on('click', () => {
      const passwordInput = $('#password');
      const icon = $('.fa-eye-slash'); // Select the clicked icon element

      const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
      passwordInput.attr('type', type);
      icon.toggleClass('fa-eye'); // Change icon based on password visibility
    });

    statusButton.css('display', 'none');

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      loginButton.css('display', 'none');
      statusButton.css('display', 'block');

      const email = document.getElementById('email').value.toString();
      const password = document.getElementById('password').value.toString();

      const data = {
        email,
        password,
      };

      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(API_ENDPOINT.LOGIN_USER, options);

        if (!response.ok) {
          const errorData = await response.json();
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${errorData.message}`,
            text: 'Email atau Password salah!',
          });

          // Revert button display states on error
          statusButton.css('display', 'none');
          loginButton.css('display', 'block');
          return;
        }

        const responseData = await response.json();
        const { token } = responseData.data;
        const { userId } = responseData.data;

        // Simpan token di local storage atau sebagai cookie
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', 'user');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil login!',
          text: 'Selamat datang kembali di EcoSwap',
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirect ke halaman selanjutnya (misalnya dashboard)
        setTimeout(() => {
          window.location.href = './index.html';
        }, 1500);
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `${error.message}`,
          text: 'Email atau Password salah!',
        });
        // Revert button display states on error
        statusButton.css('display', 'none');
        loginButton.css('display', 'block');
      }
    });
  }

  static async loginAdmin() {
    const loginForm = document.getElementById('loginFormAdmin');
    const loginButton = $('.btn-login-admin');
    const statusButton = $('.btn-status');

    $('.toggle-password').on('click', () => {
      const passwordInput = $('#password');
      const icon = $('.fa-eye-slash'); // Select the clicked icon element

      const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
      passwordInput.attr('type', type);
      icon.toggleClass('fa-eye'); // Change icon based on password visibility
    });

    statusButton.css('display', 'none');
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      loginButton.css('display', 'none');
      statusButton.css('display', 'block');

      const email = document.getElementById('email').value.toString();
      const password = document.getElementById('password').value.toString();

      const data = {
        email,
        password,
      };

      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(API_ENDPOINT.LOGIN_ADMIN, options);

        const responseData = await response.json();

        if (!response.ok) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${responseData.message}`,
            text: 'Email atau Password salah!',
          });

          // Revert button display states on error
          statusButton.css('display', 'none');
          loginButton.css('display', 'block');
          return;
        }

        // Simpan token ke local storage
        localStorage.setItem('token', responseData.data.token);
        localStorage.setItem('role', 'admin');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil login!',
          text: 'Selamat datang kembali di EcoSwap',
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirect ke halaman admin setelah login berhasil
        setTimeout(() => {
          window.location.href = '/#/home-admin';
        }, 1500);
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `${error.message}`,
          text: 'Email atau Password salah!',
        });
        // Revert button display states on error
        statusButton.css('display', 'none');
        loginButton.css('display', 'block');
      }
    });
  }

  static async logout() {
    const loginLink = $('.login-link');
    const logoutLink = $('.logout-link');
    const statusButton = $('.btn-status');
    statusButton.css('display', 'none');
    loginLink.css('display', 'none');

    // Cek apakah token tersimpan
    const token = localStorage.getItem('token');
    if (token) {
      // Jika ada token, tampilkan link logout dan sembunyikan link login
      loginLink.css('display', 'none');
      logoutLink.css('display', 'block');
    } else {
      loginLink.css('display', 'block');
      logoutLink.css('display', 'none');
    }

    // Event listener untuk logout
    logoutLink.on('click', async () => {
      logoutLink.css('display', 'none');
      statusButton.css('display', 'block');
      try {
        // Lakukan request logout
        const options = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await fetch(API_ENDPOINT.LOGOUT, options);

        if (!response.ok) {
          const errorData = await response.json();
          logoutLink.css('display', 'block');
          statusButton.css('display', 'none');
          return;
        }

        // Hapus token dari local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');

        // Redirect ke halaman login atau halaman lain
        window.location.href = './';
      } catch (error) {
        console.error('Error:', error);
        logoutLink.css('display', 'block');
        statusButton.css('display', 'none');
      }
    });
  }

  static async pickUpRequest(data) {
    try {
      const token = localStorage.getItem('token'); // Asumsikan token disimpan di local storage
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(API_ENDPOINT.PICKUP_REQUEST, options);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error dari server:', errorData);
        throw new Error('Gagal mengajukan permintaan penjemputan. Silakan coba lagi.');
      }

      const responseData = await response.json();
      alert('Permintaan penjemputan berhasil diajukan!');

      // Opsional, alihkan halaman atau kosongkan form
      // window.location.href = './somepage.html';
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengajukan permintaan penjemputan. Silakan coba lagi nanti.');
    }
  }

  static async getPickupsByUserId(userId) {
    try {
      const token = localStorage.getItem('token'); // Asumsikan token disimpan di local storage
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(`${API_ENDPOINT.HISTORY_TRANSACTION}/${userId}`, options);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengambil data penjemputan.');
      }

      const responseData = await response.json();
      return responseData.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async getUserInfo(userId) {
    try {
      const response = await fetch(`${API_ENDPOINT.USER_INFORMATION}/${userId}`);
      if (!response.ok) {
        throw new Error('Gagal mengambil informasi pengguna');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getUserPoints(userId) {
    try {
      const response = await fetch(`${API_ENDPOINT.USER_POINT}/${userId}`);
      if (!response.ok) {
        // throw new Error('Gagal mengambil poin pengguna');
      }
      const data = await response.json();
      return data.data.total_points;
    } catch (error) {
      return null;
    }
  }
}

export default EcoSwapSource;
