async function getdetails(){
    const urlParams=new URLSearchParams(window.location.search); //
    const id=urlParams.get('products_detail');


    const response =await axios.get(`https://dummyjson.com/products/${id}`)
    const data=response.data;
     
        document.querySelector('.title').textContent=data.title;
        document.querySelector('.desc').textContent=data.description;
        document.querySelector('img').src=data.thumbnail

 };
getdetails();