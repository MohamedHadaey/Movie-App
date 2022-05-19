let slidBarWidth = $(".links-box").innerWidth();
$(document).ready(function () {
  $("#optionBox").animate({ left: `-${slidBarWidth}` }, 0);
});
/********************************/
$("#toggleBtn").click(function () {
  let slidBarWidth = $(".links-box").innerWidth();
  if ($("#optionBox").css("left") == "0px") {
    $("#navbarSupportedContent").slideUp(1000, function () {
      $("#optionBox").animate({ left: `-${slidBarWidth}` }, 1000);
      $("#toggleBtn").removeClass("fa-times");
      $("#toggleBtn").addClass("fa-bars");
    });
  } else {
    $("#optionBox").animate({ left: "0px" }, 1000, function () {
      $("#navbarSupportedContent").slideDown(1000);
      $("#toggleBtn").addClass("fa-times");
    });
  }
});
/********************************/
var links = document.querySelectorAll(".nav-link");
for (var i = 0; i < links.length - 1; i++) {
  links[i].addEventListener("click", function (e) {
    var currentMovie = $(e.target).attr("id");
    getMovies(currentMovie);
  });
}

/* The APIS I used */
// https://api.themoviedb.org/3/movie/now_playing?api_key=7546991bb005f372f33fbdd86b806857&language=en-US&page=1      now playing
// https://api.themoviedb.org/3/trending/movie/week?api_key=7546991bb005f372f33fbdd86b806857&language=en-US&page=1    trending
// https://api.themoviedb.org/3/movie/popular?api_key=7546991bb005f372f33fbdd86b806857&language=en-US&page=1          popular
// https://api.themoviedb.org/3/movie/top_rated?api_key=7546991bb005f372f33fbdd86b806857&language=en-US&page=1        top rated
// https://api.themoviedb.org/3/movie/upcoming?api_key=7546991bb005f372f33fbdd86b806857&language=en-US&page=1         up coming

var movies = [];
getMovies("movie/now_playing");
async function getMovies(movie) {
  let response = await fetch(
    `https://api.themoviedb.org/3/${movie}?api_key=6561cb2930d16b56c3b86696d0405426`
  );
  let moviesDetails = await response.json();
  movies = moviesDetails.results;
  displayMovies();
}

function displayMovies() {
  var cartona = "";
  for (var i = 0; i < movies.length; i++) {
    cartona += `
                <div class="col-md-6 col-lg-4 my-3 px-3">
                    <div class="movie position-relative overflow-hidden">
                        <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="img-fluid" alt="${movies[i].title}">
                        <div class="layer p-3 text-center d-flex justify-content-center align-items-center flex-column ">
                            <h2 class="my-2">${movies[i].title}</h2>
                            <p class="my-2">${movies[i].overview}</p>
                            <p>${movies[i].vote_average}</p>
                            <p>${movies[i].release_date}</p>
                        </div>
                    </div>
                </div>
                `;
  }
  document.getElementById("moviesRow").innerHTML = cartona;
}

/* search function */
let search = document.getElementById("search");
$("#search").keyup(function () {
  getMoviesBySearch();
});

async function getMoviesBySearch() {
  movieName = search.value;
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6561cb2930d16b56c3b86696d0405426&query=${movieName}`
  );
  let moviesDetails = await response.json();
  movies = moviesDetails.results;
  displayMovies();
}

const contactLink = document.getElementById("contactLink");
contactLink.addEventListener("click", function () {
  let contactOffSet = $("#contactUs").offset().top;
  $("html , body").animate({ scrollTop: contactOffSet }, 3000);
});

/* loading screen */
$(document).ready(function () {
  $(".loading-screen").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});

/*form validation*/
var formName = document.getElementById("formName");
var formEmail = document.getElementById("formEmail");
var formPhone = document.getElementById("formPhone");
var formAge = document.getElementById("formAge");
var formPass = document.getElementById("formPass");
var formRePass = document.getElementById("formRePass");
var submitBtn = document.getElementById("submitBtn");
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var phoneAlert = document.getElementById("phoneAlert");
var ageAlert = document.getElementById("ageAlert");
var passAlert = document.getElementById("passAlert");
const inputs = document.getElementsByClassName("form-control");
const rePassAlert = document.getElementById("rePassAlert");

/* name validation */
formName.onkeyup = function () {
  var rejexName = /^[a-z]{2,10}$/;
  if (!rejexName.test(formName.value)) {
    submitBtn.disabled = "true";
    formName.classList.add("is-invalid");
    formName.classList.remove("is-valid");
    nameAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    formName.classList.add("is-valid");
    formName.classList.remove("is-invalid");
    nameAlert.classList.add("d-none");
  }
};

/* email validation */
formEmail.onkeyup = function () {
  var rejexEmail = /^[a-z]{2,10}.{1}(gmail|yahoo|hotmail|outlook).{1}com$/;
  if (!rejexEmail.test(formEmail.value)) {
    submitBtn.disabled = "true";
    formEmail.classList.add("is-invalid");
    formEmail.classList.remove("is-valid");
    emailAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    formEmail.classList.add("is-valid");
    formEmail.classList.remove("is-invalid");
    emailAlert.classList.add("d-none");
  }
};

/* phone validation */
formPhone.onkeyup = function () {
  var rejexPhone = /^01[0125][0-9]{8}$/;
  if (!rejexPhone.test(formPhone.value)) {
    submitBtn.disabled = "true";
    formPhone.classList.add("is-invalid");
    formPhone.classList.remove("is-valid");
    phoneAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    formPhone.classList.add("is-valid");
    formPhone.classList.remove("is-invalid");
    phoneAlert.classList.add("d-none");
  }
};

/* age validation */
formAge.onkeyup = function () {
  var rejexAge = /^([2-7][0-9]|80$)/;
  if (!rejexAge.test(formAge.value)) {
    submitBtn.disabled = "true";
    formAge.classList.add("is-invalid");
    formAge.classList.remove("is-valid");
    ageAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    formAge.classList.add("is-valid");
    formAge.classList.remove("is-invalid");
    ageAlert.classList.add("d-none");
  }
};

/* password validation */
formPass.onkeyup = function () {
  var rejexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!rejexPass.test(formPass.value)) {
    submitBtn.disabled = "true";
    formPass.classList.add("is-invalid");
    formPass.classList.remove("is-valid");
    passAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    formPass.classList.add("is-valid");
    formPass.classList.remove("is-invalid");
    passAlert.classList.add("d-none");
  }
};

/* repassword validation */
formRePass.onkeyup = function () {
  if (formRePass.value == formPass.value) {
    submitBtn.removeAttribute("disabled");
    formRePass.classList.add("is-valid");
    formRePass.classList.remove("is-invalid");
    rePassAlert.classList.add("d-none");
  } else {
    submitBtn.disabled = "true";
    formRePass.classList.add("is-invalid");
    formRePass.classList.remove("is-valid");
    rePassAlert.classList.remove("d-none");
  }
};

/* inputs clear function */
function clearInputs() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
/********************   Best wishes   *******************/
