/**
 * 
 * @param {Array} dei film
@returns} movies 
 */

//crea una lista dei film di tendenza
export const createTrendingMoviesList = (movies) => {
    const cardContainer = document.getElementById("trendingMovies");
    movies.forEach(element => {
        const card = document.createElement("div");
        card.className = "col-12 col-md-6 col-1g-4 bg-transparent mb20";

        const cardInner = document.createElement("div");
        cardInner.className = "card flex-column h-100";

        const cardImage = document.createElement("img");
        cardImage.alt = "backdrop";
        cardImage.className = "card-img-top";
        
        const textContainer = document.createElement("div");
        textContainer.className = "card-body";
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        const cardDescription = document.createElement("p");
        cardDescription.className = "card-text";

        cardImage.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
        cardTitle.textContent = element.title;
        cardDescription.textContent = element.overview;

        // Aggiungo gli elementi al contenitore principale
        textContainer.appendChild(cardTitle); 
        textContainer.appendChild(cardDescription); 
        cardInner.appendChild(cardImage); 
        cardInner.appendChild(textContainer) 
        card.appendChild(cardInner);
        cardContainer.appendChild(card);

    });
}
export const createTrendingTvList = (tv) => {
    const cardContainer = document.getElementById("trendingTv");
    tv.forEach(element => {
        const card = document.createElement("div");
        card.className = "col-12 col-md-6 col-1g-4 bg-transparent mb20";

        const cardInner = document.createElement("div");
        cardInner.className = "card flex-column h-100";

        const cardImage = document.createElement("img");
        cardImage.alt = "backdrop";
        cardImage.className = "card-img-top";
        
        const textContainer = document.createElement("div");
        textContainer.className = "card-body";
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        const cardDescription = document.createElement("p");
        cardDescription.className = "card-text";

        cardImage.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
        cardTitle.textContent = element.title;
        cardDescription.textContent = element.overview;

        // Aggiungo gli elementi al contenitore principale
        textContainer.appendChild(cardTitle); 
        textContainer.appendChild(cardDescription); 
        cardInner.appendChild(cardImage); 
        cardInner.appendChild(textContainer) 
        card.appendChild(cardInner);
        cardContainer.appendChild(card);

    });
}