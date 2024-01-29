async function getproducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products
    console.log(data)

    const result = products.map(function (ele) {
        return `
    <div class="product">
        <h2>${ele.title}</h2>
        <img src="${ele.thumbnail}"/>

        <div class="prise-brand"> 
        <h3>${ele.brand}<h3/>
        <h3>${ele.price}<h3/>
        </div>
       <a href="details.html?products_detail=${ele.id}"> Detail</a>

       
    </div>

    `;
    }).join('');

    document.querySelector(".products").innerHTML = result;
};

getproducts();