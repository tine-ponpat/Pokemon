const formEle = document.querySelector('#search')

formEle.addEventListener('submit', function (e) {
    e.preventDefault()
    const  id = formEle.elements.query.value
    axios.get(`https://narutodb.xyz/api/character/${id}`)
    .then(res => {
        console.log(res);
        const imgEle = document.createElement('img')
        imgEle.src = res.data.images[0]
        document.body.append(imgEle);
        const nameEle = document.createElement('div')
        nameEle.textContent = res.data.name
        nameEle.style.fontSize ='60px'
        document.body.appendChild(nameEle)
        const typeEle = document.createElement('div')
        typeEle.textContent = res.data.natureType
        typeEle.style.fontSize ='24px'
        typeEle.style.backgroundColor='rgba(0,0,0,0.3)'
        typeEle.style.width='600px'
        typeEle.style.textAlign='center'
        typeEle.style.color='white'
        document.body.appendChild(typeEle)
    })
    .catch (e =>{
        console.log('Error',e);
    }) 
    
})
  