changeBackground = ()=>{
    const hexgenerator =   ('#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6,'0'))
    console.log('change Background');

    document.body.style.backgroundColor = hexgenerator;
    document.getElementById('hex').innerHTML  = hexgenerator;
    console.log(hexgenerator)

}