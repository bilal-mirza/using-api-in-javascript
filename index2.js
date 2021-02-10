
//get request
function getData(){
    url = 'https://jsonplaceholder.typicode.com/photos';         //getting data from api
    fetch(url).then((response) => {
        return response.json();
    }).then((data)=> {                                           

        const html = data.slice(0,9).map(photos =>{
            return `
            
            
            <div class="container">
             <div class="row">
                <div class="col-lg">
                    <div class="card" style="width: 18rem;">

                        <div class="card-body">    
                            <p><img class="card-img-top" src="${photos.url}" alt="Card image cap" id="image"></p>
                            <p class="card-text">Id: ${photos.id}</p>
                            <p class="card-text">albumId: ${photos.albumId}</p>
                            <h5 class="card-title">Title: <br>${photos.title}</h5>
                        </div>

                    </div>
                </div>
              </div>
            </div>
            `
        })

        document.querySelector('#app').insertAdjacentHTML("afterbegin",html);     //injecting our data into HTML 


    }).catch(error => {
        console.log(error);
    })
}

getData();

console.log("Yeah, It's working !!!")
console.log("Developed By Bilal Mirza")