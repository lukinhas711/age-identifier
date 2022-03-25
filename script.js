function verify() {
  let date = new Date();
  let year = date.getFullYear();
  let input = document.querySelector("#txtyear");
  let result = document.querySelector("#result");
  let img = document.createElement("img");

  if (input.value.length == 0 || input.value > year) {
    alert("Erro, cheque os dados e tente novamente");
  } else {
    let gender = document.getElementsByName("radsex");
    let age = year - input.value;
    let gen = "";
    let prefix = "";

    if (gender[0].checked) {
      prefix = "um";
      gen = "homem";

      if (age > 0 && age < 12) {
        img.setAttribute("src", "assets/foto-bebe-m.png");
      } else if (age >= 12 && age < 18) {
        img.setAttribute("src", "assets/foto-jovem-m.png");
      } else if (age >= 18 && age < 50) {
        img.setAttribute("src", "assets/foto-adulto-m.png");
      } else if (age >= 50 && age < 104) {
        img.setAttribute("src", "assets/foto-idoso-m.png");
      } else {
        img.setAttribute("src", "assets/morte.jpeg");
        gen = "cadaver?";
      }
    }

    if (gender[1].checked) {
      prefix = "uma";
      gen = "mulher";

      if (age > 0 && age < 12) {
        img.setAttribute("src", "assets/foto-bebe-f.png");
      } else if (age >= 12 && age < 18) {
        img.setAttribute("src", "assets/foto-jovem-f.png");
      } else if (age >= 18 && age < 50) {
        img.setAttribute("src", "assets/foto-adulto-f.png");
      } else if (age >= 50 && age < 104) {
        img.setAttribute("src", "assets/foto-idoso-f.png");
      } else {
        img.setAttribute("src", "assets/morte.jpeg");
        gen = "cadaver?";
      }
    }

    result.style.textAlign = "center";
    result.innerHTML = `Encontramos ${prefix} ${gen} de ${age} anos`;
    result.appendChild(img);
    img.style.padding = "25px";
  }
}
