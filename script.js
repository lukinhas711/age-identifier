function verify() {
  let date = new Date();
  let year = date.getFullYear();
  let inputAddYear = document.querySelector("#txtyear");
  let result = document.querySelector("#result");
  let img = document.createElement("img");

  if (inputAddYear.value.length == 0 || inputAddYear.value > year) {
    alert("ERRO, Verifique os dados e tente novamente!");
  } else {
    let gender = document.getElementsByName("radsex");
    let age = year - inputAddYear.value;
    let prefix = "";
    let gen = "";

    if (gender[0].checked) {
      prefix = "um";
      gen = "homem";

      if (age >= 0 && age < 10) {
        img.setAttribute("src", "assets/foto-bebe-m.png");
      } else if (age <= 30) {
        img.setAttribute("src", "assets/foto-jovem-m.png");
      } else if (age <= 60) {
        img.setAttribute("src", "assets/foto-adulto-m.png");
      } else if (age > 60) {
        img.setAttribute("src", "assets/foto-idoso-m.png");
      }
    } else if (gender[1].checked) {
      prefix = "uma";
      gen = "mulher";

      if (age >= 0 && age < 10) {
        img.setAttribute("src", "assets/foto-bebe-f.png");
      } else if (age <= 30) {
        img.setAttribute("src", "assets/foto-jovem-f.png");
      } else if (age <= 60) {
        img.setAttribute("src", "assets/foto-adulto-f.png");
      } else if (age > 60) {
        img.setAttribute("src", "assets/foto-idoso-f.png");
      }
    }

    result.style.textAlign = 'center'
    result.innerHTML = `Encontramos ${prefix} ${gen} de ${age}`
    result.appendChild(img)
  }
}
