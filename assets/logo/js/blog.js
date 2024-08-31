const blogs = [];

function addBlog(e) {
  e.preventDefault();

  const title = document.getElementById("input-blog-project").value; 
  const description = document.getElementById("input-blog-description").value;
  const startDate = document.getElementById("startDate").value
  const technologies= document.getElementById("technologies").value
  const endDate = document.getElementById("endDate").value
  let image = document.getElementById("input-blog-image").files; 

  image = URL.createObjectURL(image[0]);

  const createdAt = new Date();

  const blog = {
    title,
    description,
    technologies,
    startDate,
    endDate,
    image,
    createdAt,
  };

  console.log("blog");
  blogs.unshift(blog);
  

  console.log("blogs", blogs);
}

function renderBlog() {
  let html = "";

  for (let index = 0; index < blogs.length; index++) {

     html += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">${blogs[index].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${getFullTime(blogs[index].createdAt)} | Mahdi Hidayah
                </div>
                <p style="width: 100%;">
                  ${blogs[index].description}
                </p>
                <p style="width: 100%;"> ${blogs[index].technologies}</p>

                <div> 
                    <p style="width:100%">${getDistanceTime(blogs[index].createdAt)}</p>
                </div>
                <div>
                <p style="width: 100%">Waktu Postingan Dibuat : ${blogs[index].startDate}</p>
                <p style="width: 100%">Waktu Habis Postingan : ${blogs[index].endDate} </p>
                <div/>
            </div>
        </div>
`;
  }

  document.getElementById("contents").innerHTML = html;
}

function getFullTime(dates) {

  let minutes = dates.getMinutes();
  let hours = dates.getHours();
  const date = dates.getDate();
  const month = dates.getMonth();
  const year = dates.getFullYear();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${date} ${months[month]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(timePost) {
  
  let timeNow = new Date();

  let distance = timeNow - timePost; 

  const seconds = Math.floor(distance / 1000);
  const minutes = Math.floor(distance / 1000 / 60);
  const hours = Math.floor(distance / 1000 / 60 / 60);
  const day = Math.floor(distance / 1000 / 60 / 60 / 24);

  if (seconds < 60) {
    return seconds + " seconds ago";
  } else if (minutes < 60) {
    return minutes + " minutes ago";
  } else if (hours < 60) {
    return hours + " hours ago";
  } else if (day < 24) {
    return day + " day ago";
  }
}

renderBlog();

setInterval(() => {
  renderBlog();
}, 1000);

// document.addEventListener("DOMContentLoaded", function() {
//   // Ambil elemen Start Date dan End Date
//   const startDateInput = document.getElementById("startDate");
//   const endDateInput = document.getElementById("endDate");

//   // Dapatkan tanggal hari ini
//   const today = new Date();

//   // Format tanggal hari ini menjadi yyyy-mm-dd
//   const formattedStartDate = today.toISOString().split('T')[0];

//   // Set nilai Start Date dengan tanggal hari ini
//   startDateInput.value = formattedStartDate;

//   // Tambahkan 30 hari ke tanggal hari ini untuk End Date
//   const futureDate = new Date(today);
//   futureDate.setDate(futureDate.getDate() + 30);

//   // Format tanggal End Date
//   const formattedEndDate = futureDate.toISOString().split('T')[0];

//   // Set nilai End Date dengan tanggal 30 hari setelah Start Date
//   endDateInput.value = formattedEndDate;
// });