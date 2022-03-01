function verificar () {
  let date = new Date()
  let year = date.getFullYear()
  let inputYear = document.querySelector('#txtyear')
  let result = document.querySelector('#result')

  if(inputYear.value.length == 0 || Number(inputYear.value) > year ) {
    alert('ERRO! Verifique os valores e tente novamente')
  } else {
    let radioSex = document.getElementsByName('radsex')
    let age = year - Number(inputYear.value)
    let genre = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'img')

    if (radioSex[0].checked) {
      genre = 'Homem'

      if (age >= 0 && age < 11) {
        img.setAttribute('src', 'assets/foto-bebe-m.png')
      } else if (age < 21) {
        img.setAttribute('src', 'assets/foto-jovem-m.png')
      } else if (age < 60) {
        img.setAttribute('src', 'assets/foto-adulto-m.png')
      } else {
        img.setAttribute('src', 'assets/foto-idoso-m.png')
      }
    } else if (radioSex[1].checked) {
      genre = 'Mulher'

      if (age >= 0 && age < 11) {
        img.setAttribute('src', 'assets/foto-bebe-f.png')
      } else if (age < 21) {
        img.setAttribute('src', 'assets/foto-jovem-f.png')
      } else if (age < 60) {
        img.setAttribute('src', 'assets/foto-adulto-f.png')
      } else {
        img.setAttribute('src', 'assets/foto-idoso-f.png')
      }
    } else {
      alert('Por favor selecione um sexo')
    }
    
    result.style.textAlign = 'center'
    result.innerHTML = `Detectamos ${genre} com ${age}`
    result.appendChild(img)
  }
}