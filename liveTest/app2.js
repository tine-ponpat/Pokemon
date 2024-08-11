//document.addEventListener('DOMContentLoaded', function () {
//    var color = 'red'; // คุณสามารถเปลี่ยนค่านี้เป็นค่าสีที่ต้องการได้
//    document.body.style.backgroundColor = color;
//});

//https://api.tvmaze.com/search/shows?q=girls

// const formEle = document.querySelector('#searchForm')
// formEle.addEventListener('submit', function (e)  {
//     e.preventDefault()
//     const search = formEle.elements.query.value
//     getMoviesDetail(search)
// })

// const getMoviesDetail = async (search) => {
//     try {
//         const config = {params: { q: search}}
//         const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
//         randomImg(res.data)
//     } catch (err) {
//         console.log(err)
//     } 
// }

// const randomImg = (data) => {
//     for (let item of data) {
//         if (item.show.image?.medium) {
//             const imgEle = document.createElement('img')
//             imgEle.src = item.show.image.medium
//             document.body.append(imgEle)
//         }   
//     }
// }

const formEle = document.querySelector('#searchForm')
formEle.addEventListener('submit', function (e) {
    e.preventDefault()
    const search = formEle.elements.query.value
    getMoviesDetail(search)
    
})
const getMoviesDetail = async (search) => {   
    try {
        const config = {params:{q: search}}
        const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
        randomImg(res.data) 
    } catch (err) {
        console.log(err);
    }
}

const randomImg = (data) => {
    for(let item of data) {
        if (item.show.image?.medium) {
            const imgEle = document.createElement('img')
        imgEle.src = item.show.image.medium
        document.body.append(imgEle)
        }
    }
}