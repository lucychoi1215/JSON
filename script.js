let flowerGridElement = document.getElementById('flowerGrid');
let popularGridElement = document.getElementById('popularGrid');

let flowercontainer = document.getElementsByClassName("flower");

// for (var k = 0 ; k < flowercontainer.length; k++) {
//    flowercontainer[k].addEventListener('click' , selectFunction) ;
// }

// flowercontainer.addEventListener("click", selectFunction);
//
// function selectFunction () {
//   for (var l = 0 ; l < flowercontainer.length; l++) {
//     flowercontainer[l].style.border = "3px solid black";
//   }
//
// }

let popularFlowers= [
  {
    "des" : "Sweet Peas top the list as the April birth month flower. Sweet peas are associated with bliss, pleasure and delicacy. They make for a lovely addition to spring bouquets, adding movement and color.",
    "backCol" : "#2f5f41",
    "img" : "https://res.cloudinary.com/hardtofind/image/upload/c_pad,h_600,w_600/cs_srgb,f_auto,fl_lossy/v1/product_image/vb7uekfafi9t3b2tnbp9"
  },
  {
    "des" : "It’s difficult to think of flowers that are more quintessential examples of spring than Tulips. These beautiful blooms are available starting in March and come in a veritable rainbow of colors.",
    "backCol" : "#2f5f41",
    "img" : "https://farmflorist.com/wp-content/uploads/2019/07/Silvia-carnation-bouquet-by-farm-florist.jpg",
  },
  {
    "des" : "If you’re looking for stunning hues from your spring flowers, take a look at Gerberas. These merry blooms are available in red, orange, white, pink and yellow, as well as some pastel shades. As a whole, these flowers signify happiness, purity and innocence.",
    "backCol" : "#376b44",
    "img" : "https://www.ftdimg.com/pics/products/FG27NV_330x370.jpg",
  },
  {
    "des" : "Carnations are all-occasion flowers that add texture and color to bouquets. Each shade represents a specific type of love: White carnations are a symbol for pure love and good luck. Pink carnations are a symbol of a mother’s love. Red carnations are a symbol of profound love and connection.",
    "backCol" : "#337d3d",
    "img" : "https://cdn11.bigcommerce.com/s-j5bw4sasgt/images/stencil/1280x1280/products/1153/2884/12_Stem_L_Pink_carnation_bqt_1__65508.1553803505.jpg?c=2&imbypass=on",
  }
]

let jsonDatabase= [
  {
    "name" : "Alstroemeria",
    "image" : "https://i.etsystatic.com/10592317/r/il/a44607/1227991945/il_570xN.1227991945_qllf.jpg",
    "occasion": "New Years",
    "message": "Wealth, prosperity and fortune",
  },
  {
    "name" : "Amaryllis",
    "image" : "https://s7e5a.scene7.com/is/image/waitrose/474522_is_1?id=_prRr0&fmt=jpg&fit=constrain,1&wid=890&hei=890",
    "occasion": "New Years",
    "message": "worth beyond beauty",
  },
  {
    "name" : "Anemone",
    "image" : "https://www.deerpearlflowers.com/wp-content/uploads/2015/05/pastel-cream-and-pink-anemone-wedding-bouquet.jpg",
    "occasion": "New Years",
    "message": "anticipation",
  },
  {
    "name" : "Anthurium",
    "image" : "https://www.giftsforeurope.com/images/gene/prod/norm/cado001259_01_anthurium-festival-bouquet.jpg",
    "occasion": "New Years",
    "message": "hospitality, abundance and happiness",
  },
  {
    "name" : "Aster",
    "image" : "https://img.floweradvisor.com/p/bouquet-of-aster-fa105792-014",
    "occasion": "New Years",
    "message": "patience, elegance and daintiness",
  },
  {
    "name" : "Bird of Paradise",
    "image" : "https://www.tornado-studios.com/sites/default/files/styles/slider_full/public/products/822/gallery/bird_of_paradise_04_001_bouquet_thumbnail_square0000.jpg?itok=0NYku3eE",
    "occasion": "New Years",
    "message": "joyfulness, magnificence",
  },
  {
    "name" : "Carnation",
    "image" : "https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2019/04/pinkcarnation_thum2.jpg",
    "occasion": "New Years",
    "message": "pride and beauty",
  },
  {
    "name" : "Daisy",
    "image" : "https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1583648657/vendor/6123/catalog/product/2/0/20190814012827_file_5d5363bb38cb5_5d536eb68e50e.jpeg",
    "occasion": "New Years",
    "message": "innocence and purity",
  },
  {
    "name" : "Lavender",
    "image" : "https://www.dhresource.com/600x600/f2/albu/g9/M01/C0/3F/rBVaVV4HGkiAGfepAAWT6sl7v9U625.jpg",
    "occasion": "New Years",
    "message": "admiration, solitude and beauty",
  },
  {
    "name" : "Hydrangea",
    "image" : "https://www.juneflowers.ae/pub/media/catalog/product/cache/cf3f2243ef4940fd5c66f2ff035145ac/b/e/beautiful-hydrangea-bouquet.jpg",
    "occasion": "New Years",
    "message": "frigidity and heartlessness",
  },
  {
    "name" : "Iris",
    "image" : "https://i.pinimg.com/originals/c7/e6/6a/c7e66a1d07c3df8871162c2e0113af83.jpg",
    "occasion": "New Years",
    "message": "wisdom and compliments",
  },
  {
    "name" : "Peony",
    "image" : "https://imcut.jollychic.com//uploads/jollyimg/imageLibrary/201806/2QU/10/IL201806101821522232.jpg",
    "occasion": "New Years",
    "message": "happy life and happy marriage",
  }
]

for (var j=0; j < popularFlowers.length; j++) {
  popularInfoGrid(popularFlowers[j]);
}

for (var i=0; i < jsonDatabase.length; i++) {
  flowerInfoGrid(jsonDatabase[i]);
}

function popularInfoGrid(incomingJSON2){
  let newPopularElement = document.createElement("DIV");
  newPopularElement.style.backgroundColor = incomingJSON2['backCol'];
  newPopularElement.classList.add('popularContent');

  let newDescriptions = document.createElement("DIV");
  newDescriptions.classList.add('descriptions');
  newDescriptions.style.margin = "3vmin 3vmin 3vmin 3vmin";
  newDescriptions.innerText = incomingJSON2['des'];
  newPopularElement.appendChild(newDescriptions);

  let newPopularImg = document.createElement("IMG");
  newPopularImg.classList.add('popularImg');
  newPopularImg.src = incomingJSON2['img'];
  newPopularElement.appendChild(newPopularImg);

  popularGridElement.appendChild(newPopularElement);

}

function flowerInfoGrid(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('flower');


  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('title');
  newContentHeading.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentHeading);

  let newImage= document.createElement("IMG");
  newImage.classList.add("flowerImage");
  newImage.src = incomingJSON['image'];
  newContentElement.appendChild(newImage);

  let newContentHeading2 = document.createElement("H6");
  newContentHeading2.classList.add('occasion');
  newContentHeading2.innerText = incomingJSON['occasion'];
  newContentElement.appendChild(newContentHeading2);

  let newContentHeading3 = document.createElement("H5");
  newContentHeading3.classList.add('message');
  newContentHeading3.innerText = incomingJSON['message'];
  newContentElement.appendChild(newContentHeading3);

  flowerGridElement.appendChild(newContentElement);

  newContentElement.addEventListener('click' , function(myEvent) {
    myEvent.currentTarget.style.border = "0.5vmin solid #2f5f41";
  });

}

//
