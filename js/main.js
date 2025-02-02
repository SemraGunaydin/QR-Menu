import fetchMenu  from "./api.js";
import { elemments, renderCards } from "./ui.js";

document.addEventListener("DOMContentLoaded", async() => {
    // Sayfa yüklendiğinde api isteği at ve gelen veriyi data'ya aktar
  const data = await fetchMenu();

  // Card elemanlarini render et
  renderCards(data);


  elemments.input.forEach((input) => {
    input.addEventListener("change",()=>{

        // Input id'sine eris
        const selected =input.id;

        // Eğer seçili kategori all ise tüm ürünleri render et ama başka bir kategori seçiliyse bu kategorideki ürünleri render et
        if (selected === "all") {
            renderCards(data);
          } else {
            const filtered = data.filter((item) => item.category == selected);
            renderCards(filtered);
          }
    });
  });

});
