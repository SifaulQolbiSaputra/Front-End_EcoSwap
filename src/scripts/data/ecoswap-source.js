/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import API_ENDPOINT from '../globals/api-endpoint';

class EcoSwapSource {
  static async registerUser() {
    document.getElementById('registrationForm').addEventListener('submit', async (event) => {
      event.preventDefault();

      const firstName = document.getElementById('firstName').value.toString();
      const lastName = document.getElementById('lastName').value.toString();
      const email = document.getElementById('email').value.toString();
      const password = document.getElementById('password').value.toString();
      const passwordConfirmation = document.getElementById('passwordConfirmation').value.toString();

      if (password !== passwordConfirmation) {
        alert('Password dan Konfirmasi Password tidak cocok.');
        return;
      }

      const data = {
        username: `${firstName} ${lastName}`,
        email,
        password,
      };

      console.log('Data yang dikirim:', data);

      try {
        const response = await fetch(API_ENDPOINT.REGISTER, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error dari server:', errorData);
          throw new Error('Gagal registrasi, silakan coba lagi.');
        }

        const responseData = await response.json();
        alert('Registrasi berhasil! Silakan login.');
        window.location.href = './login.html';
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat registrasi. Silakan coba lagi nanti.');
      }
    });
  }

  static async loginUser() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById('email').value.toString();
      const password = document.getElementById('password').value.toString();

      const data = {
        email,
        password,
      };

      try {
        const response = await fetch(API_ENDPOINT.LOGIN_USER, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          // throw new Error(errorData.message || 'Gagal melakukan login. Silakan coba lagi.');
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${errorData.message}`,
            text: 'Please try again later.',
            timer: 1500,
          });
        }

        const responseData = await response.json();
        const { token } = responseData.data;

        // Simpan token di local storage atau sebagai cookie
        localStorage.setItem('token', token);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil login',
          text: 'Please try again later.',
          timer: 1500,
        });

        // Redirect ke halaman selanjutnya (misalnya dashboard)
        setTimeout(() => {
          window.location.href = './index.html';
        }, 1500);
      } catch (error) {
        console.error('Error:', error);
        alert(error.message);
      }
    });
  }

  static async loginAdmin() {
    const loginForm = document.getElementById('loginFormAdmin');

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById('email').value.toString();
      const password = document.getElementById('password').value.toString();

      const data = {
        email,
        password,
      };

      try {
        const response = await fetch(API_ENDPOINT.LOGIN_ADMIN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message || 'Gagal login');
        }

        // Simpan token ke local storage
        localStorage.setItem('token', responseData.data.token);

        // Redirect ke halaman admin setelah login berhasil
        window.location.href = './index.html';
      } catch (error) {
        console.error('Error:', error);
        alert(error.message);
      }
    });
  }

  static async logout() {
    const token = localStorage.getItem('token');
    const pickUpRequestLink = document.getElementById('pick-up-request');
    const swapPointLink = document.getElementById('swap-point');
    const historyTransactionLink = document.getElementById('history-transaction');

    // Function to redirect to login page if token is not available

    const loginLink = document.querySelector('.login-link');
    const logoutLink = document.querySelector('.logout-link');
    // const signUpLink = document.querySelector('.signUpLink');

    // Cek apakah token tersimpan
    // const token = localStorage.getItem('token');
    if (token) {
      // Jika ada token, tampilkan link logout dan sembunyikan link login
      loginLink.style.display = 'none';
      logoutLink.style.display = 'block';
    //   signUpLink.style.display = 'none';
    //   signUpLink.style.display = 'block';
    pickUpRequestLink.href = '/#/pick-up-request';
      historyTransactionLink.href = '/#/history-transaction';
      swapPointLink.href = '/#/swap-point';
    } else {
      // Jika tidak ada token, tampilkan link login dan sembunyikan link logout
      loginLink.style.display = 'block';
      logoutLink.style.display = 'none';
      pickUpRequestLink.href = './login.html';
      historyTransactionLink.href = './login.html';
      swapPointLink.href = './login.html';
    }

    // Event listener untuk logout
    logoutLink.addEventListener('click', async () => {
      try {
        // Lakukan request logout
        console.log('keluar');
        const response = await fetch(API_ENDPOINT.LOGOUT, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Gagal logout');
        }

        // Hapus token dari local storage
        localStorage.removeItem('token');

        // Redirect ke halaman login atau halaman lain
        window.location.href = './login.html'; // Misalnya halaman login
      } catch (error) {
        console.error('Error:', error);
        alert(error.message);
      }
    });
  }
}

export default EcoSwapSource;
