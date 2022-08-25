let arr = [];
let inputan = {
  inpuut: "",
};
const input = document.querySelector(".inp");
const add = document.querySelector(".add");
const hit = document.querySelector(".generate");
const teks = document.querySelector(".teksKotak h3");
const hasilInput = document.querySelector(".hasilinput");
let hasil = document.querySelector(".hasil");
const reg = /[a-zA-Z]/gi;
add.addEventListener("click", function () {
  if (input.value == "") {
    alert("tolong isi");
  } else if (reg.test(input.value) == true) {
    alert("tolong Masukkan Angka");
  } else {
    arr.push(parseInt(input.value));
    teks.innerHTML = "Angka Sebelum Di urutkan";
    hit.style.display = "flex";
    let x = `<div class="angka">( ${input.value} )</div>`;
    hasilInput.insertAdjacentHTML("beforeend", x);
    input.value = "";
  }
});
hit.addEventListener("click", function () {
  let muncul = "";
  let hasilSort = arr.sort((a, b) => a - b);
  hasilSort.forEach((a) => {
    muncul += `<div class="angka">( ${a} )</div>`;
  });
  hasil.innerHTML = muncul;
});
