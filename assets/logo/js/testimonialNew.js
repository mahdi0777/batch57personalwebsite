const testimonials = [
    {
        image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/nezuko-demons-slayer.jpg",
        content: "Hmmmmmm Hmmmmm",
        author: "Nezuko",
        rating: 4,

    },

    {
        image:"https://cdns.klimg.com/kapanlagi.com/p/kamadotanjirosdfg4501000.jpeg",
        content: "Yameeroooooooooooo",
        author: "Tanjiro",
        rating: 5,

    },

    {
        image: "https://www.animeexplained.com/wp-content/uploads/2024/06/Screenshot-1545.jpg",  
        content: "Sangat Berguna Kawan",
        author: "Zenitsu",
        rating:3,

    },

    {
        image:"https://boo-prod.b-cdn.net/database/profiles/1691800851372ac336ac9d30d6e571f7c1a1de062b982.PNG",  
        content: "Kamaboko Gonpachiro",
        author: "Inosuke",
        rating: 2,

    },

    {
        image:"https://awsimages.detik.net.id/community/media/visual/2024/06/26/muzan-kibutsuji.webp?w=1200",  
        content: "Cosplay Michael jackson",
        author: "Muzan",
        rating: 1,
    }
];

function allTestimonials() {

    const testimonialHTML = testimonials.map((testimonial) => {
        return `<div class="testimonial">
          <img
            src="${testimonial.image}"
            class="profile-testimonial"
          />
          <p class="quote">${testimonial.content}</p>
          <p class="author">- ${testimonial.author}</p>
        </div>`
    });

document.getElementById("testimonials").innerHTML = testimonialHTML.join(""); 
}

function filterTestimonials(rating) {
    const filteredRating = testimonials.filter ((testimonial) =>{
        return testimonial.rating === rating
    });

    const testimonialHTML = filteredRating.map ((testimonial) => {
        return `<div class="testimonial">
          <img
            src="${testimonial.image}"
            class="profile-testimonial"
          />
          <p class="quote">${testimonial.content}</p>
          <p class="author">- ${testimonial.author}</p>
        </div>`
    });
    document.getElementById("testimonials").innerHTML = testimonialHTML.join("")
}

allTestimonials()