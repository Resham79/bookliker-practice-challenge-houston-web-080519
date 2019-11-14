document.addEventListener("DOMContentLoaded", function() {});

fetch('http://localhost:3000/books')
    .then (function(response){
        return response.json()
    })
    .then (function(books){
        // console.log(books)

        books.forEach(function(book){
            const li = document.createElement('li')
            document.querySelector("#list-panel").append(li)
            li.append(book.title)
            li.addEventListener('click', function(e){
                const img = document.createElement('img')
                img.setAttribute('src', book.img_url)
                document.querySelector('#show-panel').append(img)
                const description = document.createElement('div')
                description.append(book.description)
                document.querySelector('#show-panel').append(description)
                const btn = document.createElement('button')
                btn.innerText = "Like"
                document.querySelector('#show-panel').append(btn)
                    btn.addEventListener("click",)
            })
        })
    })