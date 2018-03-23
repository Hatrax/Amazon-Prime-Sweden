$(function () {

    var products = [


        { name: 'Samsung TV', price: 5000, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: "img/Samsungtv.jpg", category: 'Elektronik' },
        
    ];
    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `
            <li class="products">
                <div class="product-content">
                    <img src="${item.picture}" alt="img">
                    <h4>
                        ${item.name} - <span class="catagory">${item.catagory}</span> <small>${item.price}</small>
                    </h4>
                    <p>${item.description}</p>
                </div>
                <button type="button" id="${item.id}">köp nu</button>
            </li>
        `;
        });

        $(location).html(template);
    };
    appendList(products, $('.product-list'));
});