function toggleMode() {
  const html = document.documentElement
  
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // faz a mesma coisa que o código acima
  html.classList.toggle('light')

  // acha a imagem no documento pela tag profile e objeto img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute("alt", "sameko saba art from the artist: @The0neulost")
    // se tem class 'light' troca pro avatar light
  } else {
    img.setAttribute("src", "./assets/Avatar.jpg")
    img.setAttribute("alt", "hakos baelz art from the artist: xxx")
    // caso contrário troca para avatar normal
  }
}