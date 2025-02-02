const elemments = {
  menuList: document.querySelector("#menu-list"),
  input: document.querySelectorAll("#buttons input"),
  detailContainer: document.querySelector("#outlet"),
};

// Menü elemanlarını render eden fonksiyon
const renderCards = (data) => {
  // Data dizisini dön ve herbir eleman için bir html oluştur
  const cardsHtml = data
    .map(
      (item) => `
   
         <a href='/detail.html?id=${
           item.id
         }' class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"id="card">
          <img
            class="rounded img-fluid shadow"
            src="${item.img}"
          />
          <div>
            <div class="d-flex justify-content-between">
              <h5>${item.title}</h5>
              <p class="text-success fw-bold"> ${(item.price * 10).toFixed(
                2
              )}zł</p>
            </div>
            <p class="lead">
              ${item.desc}.
            </p>
            </div>
           </a>`
    )
    .join("");

  // Oluşturulan htmli menuList içerisine ata
  elemments.menuList.innerHTML = cardsHtml;
};

// Detay sayfasını render eden fonksiyon
const renderDetailPage = (product, outlet) => {
  console.log(product);

  // Bu fonksiyona verilen outlet parametresinin içeriğini belirle
  outlet.innerHTML = `<div class="d-flex justify-content-between fs-6">
          <a href="/">
            <img width="35px" src="./images/home.png" alt="" />
          </a>
  
          <p>Home Page / ${product.category} / ${product.title}</p>
        </div>
  
        <h1 class="text-center my-4">${product.title}</h1>
  
        <img
          style="max-height: 400px"
          class="rounded object-fit-cover shadow"
          src="${product.img}"
          alt=""
        />
  
        <h4 class="mt-4">
          Product Category: <span class="text-success">${product.category}</span>
        </h4>
  
        <h4 class="mt-4">
          Product Price:<span class="text-success"> ${(product.price * 10).toFixed(
            2
          )} zł</span>
        </h4>
  
        <p class="lead">
             ${product.desc}
        </p>  `;
};

// Urun bulunamadiginda render yapacak fonksiyon
const renderNotFound=(outlet) => {
  outlet.innerHTML=`
<div class="main_wrapper">
  <div class="main">
    <div class="antenna">
      <div class="antenna_shadow"></div>
      <div class="a1"></div>
      <div class="a1d"></div>
      <div class="a2"></div>
      <div class="a2d"></div>
      <div class="a_base"></div>
    </div>
    <div class="tv">
      <div class="cruve">
        <svg
          class="curve_svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 189.929 189.929"
          xml:space="preserve"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div class="display_div">
        <div class="screen_out">
          <div class="screen_out1">
            <div class="screen">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
            <div class="screenM">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="buttons_div">
        <div class="b1"><div></div></div>
        <div class="b2"></div>
        <div class="speakers">
          <div class="g1">
            <div class="g11"></div>
            <div class="g12"></div>
            <div class="g13"></div>
          </div>
          <div class="g"></div>
          <div class="g"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="base1"></div>
      <div class="base2"></div>
      <div class="base3"></div>
    </div>
     <a href='/' class='not-founded-link'>Back to Homepage</a>
  </div>
  <div class="text_404">
    <div class="text_4041">4</div>
    <div class="text_4042">0</div>
    <div class="text_4043">4</div>
  </div>
</div>
`
}

export { renderCards, elemments, renderDetailPage, renderNotFound };
