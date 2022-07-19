let logo = `../Header-footer/images/logo.png`;
let order = `../Header-footer/images/order-bell.png`;
let subscr_email = `../Header-footer/images/icon_email1.png`;
let apple_icon = `../Header-footer/images/icon_apple.png`;
let play_store_icon = `../Header-footer/images/icon_Google Play.png`;

let header = `    <nav class="navbar navbar-expand-md">
<div class="container">
  <!-- logo -->
  <div class="logo">
    <a class="navbar-brand" href="../HomePage/home_page.html">
      <img src="${logo}" alt="restaurant logo" />
    </a>
  </div>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- navlist 1 -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav nav-list1 ms-auto text-uppercase">
      <!-- home -->
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="../HomePage/home_page.html">Home</a>
      </li>
      <!-- menu -->
      <li class="nav-item">
        <a class="nav-link" href="#">menu</a>
      </li>
      <!-- reservation -->
      <li class="nav-item">
        <a class="nav-link" href="#">reservation</a>
      </li>
      <!-- recipe -->
      <li class="nav-item">
        <a class="nav-link" href="#">recipe</a>
      </li>
      <!-- blog -->
      <li class="nav-item">
        <a class="nav-link" href="#">blog</a>
      </li>
      <!-- pages -->
      <li class="nav-item">
        <a class="nav-link" href="#"> pages </a>
      </li>
      <!-- contact -->
      <li class="nav-item">
        <a class="nav-link" href="../Contact/contact.html">contact</a>
      </li>
      <!-- shopping-cart -->
      <li class="nav-item dropdown shopping-cart">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="offcanvasBottom"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-cart-shopping position-relative">
            <span class="position-absolute badges">
              <span class="visually-visible number">3</span>
            </span>
          </i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">checkout</a></li>
          <li><a class="dropdown-item" href="#">add product</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <!-- book table link -->
  <div class="order-table">
    <a href="../BookTable/book_table.html" class="text-decoration-none" aria-disabled="true">
      <img src="${order}" alt="" />
      <span class="text-uppercase">book your table</span>
    </a>
  </div>
</div>
</nav>`;

let foot = `
<div class="container">
<div class="row">
  <!-- navigation -->
  <div class="col-lg-3">
    <div class="navigation">
      <h1>navigation</h1>
      <ul class="footer-nav m-0 p-0">
        <li class="list-group-item"><a href="#navigation">home</a></li>
        <li class="list-group-item">
          <a href="#navigation">about us </a>
        </li>
        <li class="list-group-item"><a href="#navigation">menu</a></li>
        <li class="list-group-item">
          <a href="#navigation">reservation</a>
        </li>
        <li class="list-group-item">
          <a href="#navigation">recipe</a>
        </li>
        <li class="list-group-item"><a href="#navigation">blog</a></li>
        <li class="list-group-item">
          <a href="#navigation">contact us</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- newsletter -->
  <div class="col-lg-6">
    <div class="newsletter">
      <h1>newsletter</h1>
      <h6>enter your email address and subscribe daily newsletter</h6>
      <form action="">
        <div class="input-group subscribe-email">
          <div class="input-group-text icon">
            <img src="${subscr_email}" alt="" />
          </div>
          <input
            type="text"
            class="form-control email"
            id="specificSizeInputGroupUsername"
            placeholder="Email Address"
          />
          <button type="button" class="text-uppercase text-white">
            subscribe
          </button>
        </div>
      </form>
      <div class="col-8">
        <div class="soc-media">
          <div class="facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div class="twitter">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div class="google">
            <i class="fa-brands fa-google-plus-g"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- app -->
  <div class="col-lg-3">
    <div class="app-avilable">
      <h1>our app avilable</h1>
      <div class="apps">
        <a class="hstack gap-2 app-store col-lg-10 col-md-4 col-6">
          <img src="${apple_icon}" alt="" />
          <div class="text">
            <div class="txt1">Avilable on the</div>
            <div class="txt2">app store</div>
          </div>
        </a>
        <a class="hstack gap-2 play-store col-lg-10 col-md-4 col-6">
          <img src="${play_store_icon}" alt="" />
          <div class="text">
            <div class="txt1">Get it on</div>
            <div class="txt2">google play</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
<!-- end -->
<div class="end-div text-uppercase">
  <small
    >2022<sup><i class="fa-regular fa-copyright"></i></sup>
    <span>luxury restaurant, </span>all rights reserved</small
  >
</div>
</div>

`;

document.getElementById('footer').innerHTML = foot;
document.getElementById('header').innerHTML = header;
document.getElementById('home_page').innerHTML = home;
