function getTestimonialData(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
  
      xhr.onerror = () => {
        reject("error");
      };
  
      xhr.onload = () => {
        resolve(JSON.parse(xhr.response));
      };
  
      xhr.send();
    });
  }
  
  async function allTestimonials() {
    const testimonials = await getTestimonialData("https://api.npoint.io/08892a856c24a749d976");
  
    console.log(testimonials);
    console.log("tipe data testimonial", typeof testimonials);
  
    const testimonialHTML = testimonials.map((testimonial) => {
      return `<div class="testimonial">
            <img
              src="${testimonial.image}"
              class="profile-testimonial"
            />
            <p class="quote">${testimonial.content}</p>
            <p class="author">- ${testimonial.author}</p>
          </div>`;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
  }
  
  async function filterTestimonials(rating) {
    const testimonials = await getTestimonialData("https://api.npoint.io/08892a856c24a749d976");
    const filteredRating = testimonials.filter((testimonial) => {
      return testimonial.rating === rating;
    });
  
    const testimonialHTML = filteredRating.map((testimonial) => {
      return `<div class="testimonial">
            <img
              src="${testimonial.image}"
              class="profile-testimonial"
            />
            <p class="quote">${testimonial.content}</p>
            <p class="author">- ${testimonial.author}</p>
          </div>`;
    });
    document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
  }
  
  allTestimonials();
  