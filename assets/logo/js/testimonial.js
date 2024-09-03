
class Testimonial {
    constructor(image, content, author) {
        this.image = image
        this.content = content
        this.author = author
    }

    html() {
        return `<div class="testimonial">
          <img
            src="${this.image}"
            class="profile-testimonial"
          />
          <p class="quote">${this.content}</p>
          <p class="author">- ${this.author}</p>
        </div>`
    }
}

const testimonial1 = new Testimonial("https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/nezuko-demons-slayer.jpg", "Hmmmmmm Hmmmmm", "Nezuko")

const testimonial2 = new Testimonial("https://cdns.klimg.com/kapanlagi.com/p/kamadotanjirosdfg4501000.jpeg", "Yameeroooooooooooo", "Tanjiro")

const testimonial3 = new Testimonial ("https://www.animeexplained.com/wp-content/uploads/2024/06/Screenshot-1545.jpg", "Sangat Berguna Kawan", "Zenitsu")

const testimonial4 = new Testimonial ("https://awsimages.detik.net.id/community/media/visual/2024/06/26/muzan-kibutsuji.webp?w=1200", "Cosplay Michael jackson", "Muzan")

const testimonial5 = new Testimonial ("https://boo-prod.b-cdn.net/database/profiles/1691800851372ac336ac9d30d6e571f7c1a1de062b982.PNG", "Kamaboko Gonpachiro", "Inosuke")

const testimonials = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5] 

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML