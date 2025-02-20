setTimeout(() => {
  document.querySelector(".js-loading").style.display = "none";
}, 5000);

const level = Number(localStorage.getItem("level"));
const randomNumber = Math.floor(Math.random() * level) + 1;

let health = 10;

if (level === 50) {
  health = 5;
} else if (level === 100) {
  health = 10;
} else if (level === 200) {
  health = 20;
}

document.querySelector(".js-title").innerHTML = `Tebak Angka 1 - ${level}`;

function playGame(randomNumber) {
  const inputElement = document.querySelector(".js-input-number");
  const value = Number(inputElement.value);

  if (!value) {
    return alert("Harus memasukkan angka!");
  } else {
    let result = "";

    if (value < randomNumber) {
      result = "Angka terlalu kecil!";
      health--;
    } else if (value > randomNumber) {
      result = "Angka terlalu besar!";
      health--;
    } else if (value === randomNumber) {
      result = "Selamat Anda berhasil menebak angka dengan benar!";
      userWinner();
    }

    score(health);

    inputElement.value = "";

    return result;
  }
}

function score(health) {
  document.querySelector(".js-health").innerHTML = `Nyawa: ${health}`;

  if (health === 0) {
    document.querySelector(".js-true-number").innerHTML = `
        <p>Maaf nyawa anda habis!</p>
        <p>Angka yang benar adalah ${randomNumber}</p>
        <p>
          Mau coba lagi?
          <div class="confirmation-button">
            <button onclick=" location.reload();">Yes</button>
            <button onclick="
              alert('Terimakasih sudah bermain!');
              location.href = 'index.html';
            ">No</button>
          </div>
        </p>  
      `;

    document.querySelector(".js-input-number").disabled = true;
    document.querySelector(".js-button").style.display = "none";
  }
}
score(health);

function userWinner() {
  document.querySelector(".js-confirmation-button").innerHTML = `
      <p>
        Mau coba lagi?

        <div class="confirmation-button">
          <button onclick=" location.reload();">Yes</button>
          <button onclick="
            alert('Terimakasih sudah bermain!');
            location.href = 'index.html';
          ">No</button>
        </div>
      </p>  
    `;

  document.querySelector(".js-input-number").disabled = true;
  document.querySelector(".js-button").style.display = "none";
}

document.querySelector(".js-button").addEventListener("click", () => {
  const result = playGame(randomNumber);

  if (result) {
    document.querySelector(".js-result").innerHTML = result;
  }
});

document.querySelector(".js-back-button").addEventListener("click", () => {
  location.href = "index.html";
});
