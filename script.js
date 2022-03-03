function verify () {
  //Criar uma data
  let date = new Date()
  //extrair o ano da data
  let year = date.getFullYear()
  //Selecionar o local onde a data sera inserida
  let textYear = document.querySelector('#txtyear')
  // selecionar o local onde a imagem aparecerá
  let result = document.querySelector('#result')

  // Fazer um teste se o campo foi preenchidos ou se o ano apontado é maior que o ano atual
  if (textYear.value.length == 0 || textYear.value > year) {
    // Se não foi, emitir um erro para preencher o campo
    alert('ERRO, por favor verifique os ano e tente novamente!')
  } else {
  // Se for
  // sinalizar os radios do html
  let gender = document.getElementsByName('radsex')
  // calcular a idade (ano atual - ano inserido)
  let age = year - textYear.value
  // criar a variavel genero
  let genre = ''
  let prefix = ''
  // criar uma tag img pelo js
  let img = document.createElement('img')
  // adicionar o atributo id a essa tag img
  img.setAttribute('id', 'img')

  // verificar qual radio foi selecionado
  if (gender[0].checked) {
    // se for o radio 0 é um homem
    genre = 'homem'
    prefix = 'um'
    
    // adicionar um atributo src e sinalizar a imagem certa
    if (age >= 0 && age < 10) {
      img.setAttribute('src','assets/foto-bebe-m.png')
    } else if (age >= 10 && age < 25) {
      img.setAttribute('src','assets/foto-jovem-m.png')
    } else if (age >= 25 && age < 60) {
      img.setAttribute('src','assets/foto-adulto-m.png')
    } else if (age >= 60) {
      img.setAttribute('src','assets/foto-idoso-m.png')
    }
  }  else if (gender[1].checked) {
    // se o radio selecionado for 1 é uma mulher
    genre = 'mulher'
    prefix = 'uma'

    // adicionar um atributo src e sinalizar a imagem certa
    if (age >= 0 && age < 10) {
      img.setAttribute('src','assets/foto-bebe-f.png')
    } else if (age >= 10 && age < 25) {
      img.setAttribute('src','assets/foto-jovem-f.png')
    } else if (age >= 25 && age < 60) {
      img.setAttribute('src','assets/foto-adulto-f.png')
    } else if (age >= 60) {
      img.setAttribute('src','assets/foto-idoso-f.png')
    }
  }

  // alinha tudo ao centro
  result.style.textAlign = 'center'
  // imprime o texto de resultado
  result.innerHTML = `Encontramos ${prefix} ${genre} de ${age} anos`
  // adiciona a imagem como elemento filho de resultados
  result.appendChild(img)
  }
}