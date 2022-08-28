

models = [
    {
        "name": "Exhibition 1",
        "model-link": [
            "https://sketchfab.com/models/2443c85540974064b66c6078f848cd1e/embed",
            "https://sketchfab.com/models/986b4e4dd8064885af60489aaf7e6d13/embed",
            "https://sketchfab.com/models/8e63482deef44d2b920af87b3a81433e/embed",
            "https://sketchfab.com/models/384565b1779c450b90397232163e4e6d/embed"
        ],
        "images": [
            "images/Ex1/weapon-slide image.jpg",
            "images/Ex1/weapon-slide image2.jpg",
            "images/Ex1/weapon-slide image3.jpg"
        ]
    },

    {
        "name": "Exhibition 2",
        "model-link": [
            "https://sketchfab.com/models/f8626a5278724cae8f173480288dbfe4/embed",
            "https://sketchfab.com/models/1da8b85c808c4f1aa05c1b5eb7c46bcc/embed"
        ],
        "images": [
            "images/Ex2/exhibition2-slide image.jpg",
            "images/Ex2/exhibition2-slide image2.png",
            "images/Ex2/exhibition2-slide image3.jpg",
            "images/Ex2/exhibition2-slide image4.jpg"
        ]
    },

    {
        "name": "Exhibition 3",
        "model-link": [
            "https://sketchfab.com/models/5b8fb622d3cc49d2839d0b69d4fc27ba/embed",
            "https://sketchfab.com/models/a6189ea7d7ff48d9b1ddec8541e67a33/embed"
        ],
        "images": [
            "images/Ex3/exhibition3-slide image.jpg",
            "images/Ex3/exhibition3-slide image2.jpg",
            "images/Ex3/exhibition3-slide image3.jpg"
        ]
    },
]





dropDownItem = document.querySelectorAll(".dropdown-item");
for (var i = 0; i < 3; i++) {
    dropDownItem[i].addEventListener("click", myFunction)
}

function myFunction(e) {
    exhibitionName = document.getElementById("exhibition-name");
    sliderItem = document.getElementsByClassName("carousel-inner")[0];
    modelItem = document.getElementsByClassName("models")[0];
    const value = e.target.innerText;
    if (value == "Exhibition 1") {
        exhibitionName.innerText = "Exhibition 1 (Weapon)";
        const image = models[0]["images"];
        const modelLinks = models[0]["model-link"];

        sliderItem.innerHTML = `<div class="carousel-item active">
        <img src="${image[0]}" class="d-block w-100" alt="...">
    </div>`
        for (var j = 1; j < image.length; j++) {
            sliderItem.innerHTML += `
        <div class="carousel-item">
            <img src="${image[j]}" class="d-block w-100" alt="...">
        </div>`
        }

        let count = 0;
        let check = modelLinks.length/2;
        modelItem.innerHTML = '';
        while(check){
            modelItem.innerHTML += `<div class="row">
            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="M40 Sniper Rifle" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">M7 Bayonet Game Ready</h5>
                    <p class="card-text">The M7 bayonet is a bayonet that was used by the U.S. military for the M16 rifle, it can also be used with the M4 carbine as well as many other assault rifles, carbines and combat shotguns. It can be used as a fighting knife and utility tool. It was introduced in 1964, when the M16 rifle entered service during the Vietnam War..</p>
                </div>
            </div>

            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="M40 Sniper Rifle" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count+1]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">M7 Bayonet Game Ready</h5>
                    <p class="card-text">The M7 bayonet is a bayonet that was used by the U.S. military for the M16 rifle, it can also be used with the M4 carbine as well as many other assault rifles, carbines and combat shotguns. It can be used as a fighting knife and utility tool. It was introduced in 1964, when the M16 rifle entered service during the Vietnam War..</p>
                </div>
            </div>
        </div>`
            count+=2;
            check--;
        }
    }
    else if (value == "Exhibition 2") {
        exhibitionName.innerText = "Exhibition 2 (Vehicle)";
        const image = models[1]["images"];
        const modelLinks = models[1]["model-link"];
        sliderItem.innerHTML = `<div class="carousel-item active">
        <img src="${image[0]}" class="d-block w-100" alt="...">
    </div>`
        for (var j = 1; j < image.length; j++) {
            sliderItem.innerHTML += `
        <div class="carousel-item">
            <img src="${image[j]}" class="d-block w-100" alt="...">
        </div>`
        }

        let count = 0;
        let check = modelLinks.length/2;
        modelItem.innerHTML = '';
        while(check){
            modelItem.innerHTML += `<div class="row">
            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="M40 Sniper Rifle" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">M7 Bayonet Game Ready</h5>
                    <p class="card-text">The M7 bayonet is a bayonet that was used by the U.S. military for the M16 rifle, it can also be used with the M4 carbine as well as many other assault rifles, carbines and combat shotguns. It can be used as a fighting knife and utility tool. It was introduced in 1964, when the M16 rifle entered service during the Vietnam War..</p>
                </div>
            </div>

            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="M40 Sniper Rifle" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count+1]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">M7 Bayonet Game Ready</h5>
                    <p class="card-text">The M7 bayonet is a bayonet that was used by the U.S. military for the M16 rifle, it can also be used with the M4 carbine as well as many other assault rifles, carbines and combat shotguns. It can be used as a fighting knife and utility tool. It was introduced in 1964, when the M16 rifle entered service during the Vietnam War..</p>
                </div>
            </div>
        </div>`
            count+=2;
            check--;
        }
    }
    else {
        exhibitionName.innerText = "Exhibition 3 (Equiptment)";
        const image = models[2]["images"];
        const modelLinks = models[2]["model-link"];
        sliderItem.innerHTML = `<div class="carousel-item active">
        <img src="${image[0]}" class="d-block w-100" alt="...">
    </div>`
        for (var j = 1; j < image.length; j++) {
            sliderItem.innerHTML += `
        <div class="carousel-item">
            <img src="${image[j]}" class="d-block w-100" alt="...">
        </div>`
        }

        let count = 0;
        let check = modelLinks.length/2;
        modelItem.innerHTML = '';
        while(check){
            modelItem.innerHTML += `<div class="row">
            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="M40 Sniper Rifle" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">M7 Bayonet Game Ready</h5>
                    <p class="card-text">The M7 bayonet is a bayonet that was used by the U.S. military for the M16 rifle, it can also be used with the M4 carbine as well as many other assault rifles, carbines and combat shotguns. It can be used as a fighting knife and utility tool. It was introduced in 1964, when the M16 rifle entered service during the Vietnam War..</p>
                </div>
            </div>

            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="M40 Sniper Rifle" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count+1]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">M7 Bayonet Game Ready</h5>
                    <p class="card-text">The M7 bayonet is a bayonet that was used by the U.S. military for the M16 rifle, it can also be used with the M4 carbine as well as many other assault rifles, carbines and combat shotguns. It can be used as a fighting knife and utility tool. It was introduced in 1964, when the M16 rifle entered service during the Vietnam War..</p>
                </div>
            </div>
        </div>`
            count+=2;
            check--;
        }
    }
}
