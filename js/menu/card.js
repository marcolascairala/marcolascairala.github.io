function  Card (heading, description, descriptionShort, image, youtube, price) {
    this.heading = heading
    this.description = description
    this.descriptionShort = descriptionShort
    this.image = image
    this.youtube = youtube
    this.price = price

    
    this.getCardContent = function () {
        var content = 
        `
        <article class="card__article">
        <div class="card__image-container">
        <img class="card__image" src="${this.image}" alt="${this.heading}">
        <div class="card__image-description-normal">
        <p>${this.heading}</p>
        </div>
        <div class="card__image-description-overlay">
        <h2>${this.heading}</h2>
        <p>
        ${this.description}
        </p>
        <div class="card__youtube">
        <a href="${this.youtube}" target="blank">
        <img src="img/icons/icon-yt.png" alt="icono youtube">
        </a>
        </div>
        <div class="card__price">
        <a href="" class="card__price-flex">
        <p>${this.price}</p>
        <img src="img/icons/icon-carro.png" alt="icono carro">
        </a>
        </div>
        </div>
        </div>
        <div class="card__content">
        <h2 class="card__heading">${this.heading}</h2>
        <div class="card__description">
        <p>${this.descriptionShort}</p>
        </div>
        </div>
        </article>
        `
        return content
    }

    this.getCard = function () {
        var nuevaCard = document.createElement('div')
        nuevaCard.classList.add('card')
        nuevaCard.innerHTML = this.getCardContent()
        return nuevaCard
    }
    
    this.appendTo = function (element) {
        element.appendChild(this.getCard())
    }
}
