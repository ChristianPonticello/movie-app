/**
 * 
 * @param {Array} dei film
@returns} movies 
 */

        export const createTrendingMoviesList = (movies) => {
            const cardContainer = document.getElementById("movies-cards");
            movies.forEach(element => {
                //Creiamo i nodi
                const card = document.createElement("div");
                const textContainer = document.createElement("div");
                const image = document.createElement("img");
                image.src = `https://image.tmdb.org/t/p/w500${element.poster_path};`
                image.alt = "poster";
                const title = document.createElement("h1");
                title.innerText = element.title;
                const description = document.createElement("p");
                description.innerText = element.overview;
        
        
                //Appendiamo i nodi al DOM
                textContainer.appendChild(title);
                textContainer.appendChild(description);
                card.appendChild(textContainer);
                card.appendChild(image);
                cardContainer.appendChild(card);
            });
        }