const fetchMenu = async() =>{

    // Api istek at
    const res = await fetch("../db.json");

  // Api'dan gelen verileri js nesnesine çevir
    const data= await res.json();

    // Data içerisindeki menu dizisini return et
    return data.menu;
}

export default fetchMenu;