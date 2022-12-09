let url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded', () => {

    const FilmRow = document.getElementById('random-film')




    const createFilm = (poster, title, runtime, showtime) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'px-0', 'mb-5')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-2')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-2', 'card-body')

        const filmImg = document.createElement('img')
        filmImg.classList.add('card-img', 'h-100')
        filmImg.src = poster
        filmImg.objectFit = 'cover'

        const filmTitle = document.createElement('h3')
        filmTitle.classList.add('card-title')
        filmTitle.textContent = title

        const filmRuntime = document.createElement('p')
        filmRuntime.classList.add('card-text')
        filmRuntime.textContent = runtime

        const filmShowtime = document.createElement('p')
        filmShowtime.classList.add('card-text')
        filmShowtime.textContent = showtime

        // const ticketsSold = document.createElement('p')
        // ticketsSold.classList.add('card-text')
        // ticketsSold.textContent = tickets_sold

        // const filmCapacity = document.createElement('p')
        // filmCapacity.classList.add('card-text')
        // filmCapacity.textContent = capacity

        // const remTickets = document.createElement('p')
        // remTickets.classList.add('card-text')
        // remTickets.textContent = (filmCapacity - ticketsSold)

        // append body elements
        bodyDiv.appendChild(filmTitle)
        bodyDiv.appendChild(filmRuntime)
        bodyDiv.appendChild(filmShowtime)
        // bodyDiv.appendChild(ticketsSold)
        // bodyDiv.appendChild(filmCapacity)
        // bodyDiv.appendChild(remTickets)

        // append image elements
        imgDiv.appendChild(filmImg)

        // append divs to row
        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        // append row to card
        cardDiv.appendChild(rowDiv)

        // return the cardDiv
        return cardDiv
    }

    let loadFilm = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let filmData = data[0]
            console.log(filmData);
            let title = "Film Title : " + filmData.title
            let poster = filmData.poster
            let runtime = "Runtime : " + filmData.runtime + " Minutes"
            let showtime = "Showtime : " + filmData.showtime
            // let soldTicks = "Tickets Sold : " + filmData.tickets_sold
            // let capacity = "Capacity : " + filmData.capacity
            // let remTicks = "Remaining Tickets : " + filmData.remTickets

            let filmElement = createFilm(poster, title, runtime, showtime)
            FilmRow.appendChild(filmElement)

        })
    }
        function getFilm() {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                data.forEach(film => {
                    console.log(film);
                    displayAllFilms(film)
                });
            });
            
        
        }
        
        function displayAllFilms(title){

            const rootDiv = document.createElement('div')
            rootDiv.classList.add('col-4', 'p-1')
        
            const cardDiv = document.createElement('div')
            cardDiv.classList.add('card', 'col-12', 'p-2')
        
            const filmTitle = document.createElement('h6')
                filmTitle.classList.add('card-title')
                filmTitle.innerText = title
            // console.log(film.title);
            // let title = document.createElement('p')
            // title.textContent = film.title
            // let main = document.getElementById("random-meal")
            // main.append(title)
            cardDiv.appendChild(filmTitle)
        
                rootDiv.appendChild(cardDiv)
        
               
            filmTitle.addEventListener('click', () =>{
                createFilm()
            })
        
            return rootDiv
        }
        
        const loadTitles = () => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const titleNames = data
                    const titleElems = titleNames.map(
                        cat => displayAllFilms(cat.title)
                    )
                    FilmRow.append(...titleElems)
                })
        
    }


   loadFilm()
  getFilm()
  loadTitles()

})



