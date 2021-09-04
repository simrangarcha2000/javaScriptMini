const color = ['red', 'blue', 'green', 'white', 'pink', 'yellow', 'purple']


changeBackground = ()=>{
    console.log('change Background')
    const randomColor = parseInt(Math.random() * color.length)
    document.body.style.backgroundColor = color[randomColor]
}