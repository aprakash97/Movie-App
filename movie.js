const API_LINK = "http://localhost:8008/api/v1/reviews/";

const url = new URL(location.href)
const movieId = url.searchParams.get("id")
const movieTitle = url.searchParams.get("title")

const main = document.getElementById("section");
const title = document.getElementById("title");

title.innerText = movieTitle

returnReviews(API_LINK);

function returnReviews(url){
    fetch(url + "movie/" + movieId).then(res => res.json())
    .then(function(data) {
        console.log(data);
        data.forEach( (review) => {
            console.log(review.review)
            const div_card = document.createElement('div');
            div_card.innerHTML = 
                `<div class="row">
                    <div class="column">
                        <div class="card" id="${review._id}">
                            <p><strong>User: </strong>${review.user}</p>
                            <p><strong>Review: </strong>${review.review}</p>
                            <p><a href="#" onclick="editReview('${review._id}', '${review.review}', '${review.user}')">✏️ </a> 
                            <a href="#" onclick="deleteReview('${review._id}')"> 🗑️ </a></p>
                        </div>
                    </div> 
                </div>`

            main.appendChild(div_card);
        });
    })
}
