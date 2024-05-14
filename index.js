const passwordLength = document.getElementById('passwordLength');
const password = document.getElementById('password');
const saveButton = document.getElementById('saveBtn');

function generatePassword(params) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numeric = '1234567890';
  let symbol = "!~@#$%^&*()[]{}/';<>/?";

  const result = alphabet + alphabetUppercase + numeric + symbol;

  let generate = '';

  for (let index = 0; index < params; index++) {
    generate += result[~~(Math.random() * result.length)];
  }
  return generate;
}

const getPassword = () => {
  const resultPassword = generatePassword(passwordLength.value);
  if (passwordLength.value === 0 || passwordLength.value === '') {
    alert('gagal generate, panjang password belum di isi');
  } else {
    setTimeout(() => {
      alert('password berhasil di generate');
    }, 1000);
    password.value = resultPassword;
  }
};

function savePassword() {
  const codePassword = encodeURIComponent(password.value);
  saveButton.setAttribute('href', `data:text/plain;charset=utf-8,${codePassword}`);
  saveButton.setAttribute('download', 'MyPasswordGenerate.txt');
  setTimeout(() => {
    alert('SAVE SUKSES');
  }, 1000);
}
