console.log("Let's get this party started!");


//JS getRandom - just to test API in console
async function getRandomGiphy(){
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(response);
    const giphyPic = document.createElement('img');
    giphyPic.src = response.data.message
    const giphyGallery = document.querySelector('#giphyPhotos');
    giphyGallery.append(giphy)
}

//jQuery attempt

//card attempt
async function getSearchGiphy(q){
    const response = await axios.get(`https://dog.ceo/api/breed/${q}/images/random`);
    //console.log(response);
    const giphyPic = document.createElement('img');
    giphyPic.src = response.data.message;
    giphyPic.class = "card-img-top"
    let cards = $('#giphyPhotos').html()
    $('#giphyPhotos').html(
        `${cards} <div class="col-6 col-md-4 col-lg-3 col-xl-2 my-1">
        <div class="card" ">
            <img src="${response.data.message}" class="card-img" alt="...">
      <div class="card-body">
        <h6 class="card-title bg-light rounded d-flex justify-content-center">${q}</h6>
      </div>
    </div>`)
}
//style="width: 18rem;
$('button').eq(0).on('click',function(e){
    e.preventDefault();
    let search = $('input').eq(0);
    getSearchGiphy(search.val());
    search.val("")
})

$('button').eq(1).on('click',function(e){
    e.preventDefault();
    $('#giphyPhotos').html("")
    //$('#card').remove();
})

//no card
/*async function getSearchGiphy(q){
    const response = await axios.get(`https://dog.ceo/api/breed/${q}/images/random`);
    //console.log(response);
    const giphyPic = document.createElement('img');
    giphyPic.src = response.data.message;
    //console.log(giphyPic)
    $('#giphyPhotos').append(giphyPic)
}*/

//JavaScript Only - no JQuery
/*
let giphySearch = document.getElementById('searchform');
const giphyInput = document.querySelector('#search');

async function getSearchGiphy(q){
    const response = await axios.get(`https://dog.ceo/api/breed/${q}/images/random`);
    //const api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    //const response = await axios.get(`http://api.giphy.com/v1/gifs/search`,{params:{q,api_key}});
    console.log(response);
    //console.log(response.data.data[0].embed_url)
    const giphyPic = document.createElement('img');
    giphyPic.src = response.data.message
    //giphyPic.src = response.data.data[0].embed_url
    const giphyGallery = document.querySelector('#giphyPhotos');
    giphyGallery.append(giphyPic);
}

giphySearch.addEventListener('submit',function(e){
   e.preventDefault();
    getSearchGiphy(giphyInput.value)
    giphyInput.value="";
})
*/