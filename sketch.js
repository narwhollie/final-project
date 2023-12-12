let skinColorImages = [];
let hairColorImages = [];
let eyeColorImages = [];
let bodyTypeImages = [];
let earShapeImages = [];
let hairStyleImages = [];
let eyeShapeImages = [];
let noseShapeImages = [];
let lipShapeImages = [];
let piercingsImages = [];

let collageImages = [];

// Counters for cycling through images
let skinCounter = 0;
let hairColorCounter = 0;
let eyeColorCounter = 0;
let bodyTypeCounter = 0;
let earShapeCounter = 0;
let hairStyleCounter = 0;
let eyeShapeCounter = 0;
let noseShapeCounter = 0;
let lipShapeCounter = 0;
let piercingsCounter = 0;
// Add other counters as needed

function loadImages(folder, imagesArray, count) {
    for (let i = 1; i <= count; i++) {
        let path = `images/${folder}/${folder}${i}.png`;
        let img = loadImage(path);
        imagesArray.push(img);
    }
}

function loadImagePromisified(path) {
  return new Promise((resolve, reject) => {
      loadImage(path, resolve, reject);
  });
}



function preload() {
    Promise.all([
        // Skin Color
        loadImagePromisified('images/skinColor/skinColor1.png'),
        loadImagePromisified('images/skinColor/skinColor2.png'),
        loadImagePromisified('images/skinColor/skinColor3.png'),
        loadImagePromisified('images/skinColor/skinColor4.png'),
        loadImagePromisified('images/skinColor/skinColor5.png'),     
        loadImagePromisified('images/skinColor/skinColor6.png'),     
        loadImagePromisified('images/skinColor/skinColor7.png'),    
        loadImagePromisified('images/skinColor/skinColor8.png'),   
        loadImagePromisified('images/skinColor/skinColor9.png'),   
        loadImagePromisified('images/skinColor/skinColor10.png'), 
        loadImagePromisified('images/skinColor/skinColor11.png'),  
        loadImagePromisified('images/skinColor/skinColor12.png'),    
        loadImagePromisified('images/skinColor/skinColor13.png'),    
        loadImagePromisified('images/skinColor/skinColor14.png'),      
        loadImagePromisified('images/skinColor/skinColor15.png'),     
        loadImagePromisified('images/skinColor/skinColor16.png'),    
        loadImagePromisified('images/skinColor/skinColor17.png'),
        loadImagePromisified('images/skinColor/skinColor18.png'),
        loadImagePromisified('images/skinColor/skinColor19.png'),
        loadImagePromisified('images/skinColor/skinColor20.png'),
        loadImagePromisified('images/skinColor/skinColor21.png'),
        loadImagePromisified('images/skinColor/skinColor22.png'),
        loadImagePromisified('images/skinColor/skinColor23.png'),

        // Hair Color
        loadImagePromisified('images/hairColor/hairColor1.png'),
        loadImagePromisified('images/hairColor/hairColor2.png'),
        loadImagePromisified('images/hairColor/hairColor3.png'),
        loadImagePromisified('images/hairColor/hairColor4.png'),
        loadImagePromisified('images/hairColor/hairColor5.png'),
        loadImagePromisified('images/hairColor/hairColor6.png'),
        loadImagePromisified('images/hairColor/hairColor7.png'),
        loadImagePromisified('images/hairColor/hairColor8.png'),
        loadImagePromisified('images/hairColor/hairColor9.png'),
        loadImagePromisified('images/hairColor/hairColor10.png'),
        loadImagePromisified('images/hairColor/hairColor11.png'),
        loadImagePromisified('images/hairColor/hairColor12.png'),
        loadImagePromisified('images/hairColor/hairColor13.png'),
        loadImagePromisified('images/hairColor/hairColor14.png'),
        loadImagePromisified('images/hairColor/hairColor15.png'),
        loadImagePromisified('images/hairColor/hairColor16.png'),
        loadImagePromisified('images/hairColor/hairColor17.png'),
        loadImagePromisified('images/hairColor/hairColor18.png'),
        loadImagePromisified('images/hairColor/hairColor19.png'),
        loadImagePromisified('images/hairColor/hairColor20.png'),
        loadImagePromisified('images/hairColor/hairColor21.png'),
        loadImagePromisified('images/hairColor/hairColor22.png'),
        loadImagePromisified('images/hairColor/hairColor23.png'),
        loadImagePromisified('images/hairColor/hairColor24.png'),
        loadImagePromisified('images/hairColor/hairColor25.png'),
        loadImagePromisified('images/hairColor/hairColor26.png'),
        loadImagePromisified('images/hairColor/hairColor27.png'),
        loadImagePromisified('images/hairColor/hairColor28.png'),
        loadImagePromisified('images/hairColor/hairColor29.png'),
        loadImagePromisified('images/hairColor/hairColor30.png'),
        loadImagePromisified('images/hairColor/hairColor31.png'),
        loadImagePromisified('images/hairColor/hairColor32.png'),
        loadImagePromisified('images/hairColor/hairColor33.png'),
        loadImagePromisified('images/hairColor/hairColor34.png'),
        loadImagePromisified('images/hairColor/hairColor35.png'),
        loadImagePromisified('images/hairColor/hairColor36.png'),
        loadImagePromisified('images/hairColor/hairColor37.png'),
        loadImagePromisified('images/hairColor/hairColor38.png'),
        loadImagePromisified('images/hairColor/hairColor39.png'),
        loadImagePromisified('images/hairColor/hairColor40.png'),
        loadImagePromisified('images/hairColor/hairColor41.png'),
        loadImagePromisified('images/hairColor/hairColor42.png'),
        loadImagePromisified('images/hairColor/hairColor43.png'),
        loadImagePromisified('images/hairColor/hairColor44.png'),
        loadImagePromisified('images/hairColor/hairColor45.png'),
        loadImagePromisified('images/hairColor/hairColor46.png'),
        loadImagePromisified('images/hairColor/hairColor47.png'),
        loadImagePromisified('images/hairColor/hairColor48.png'),
        loadImagePromisified('images/hairColor/hairColor49.png'),
        loadImagePromisified('images/hairColor/hairColor50.png'),
        loadImagePromisified('images/hairColor/hairColor51.png'),
        loadImagePromisified('images/hairColor/hairColor52.png'),
        loadImagePromisified('images/hairColor/hairColor53.png'),


 

        // Eye Color
        loadImagePromisified('images/eyeColor/eyeColor1.png'),
        loadImagePromisified('images/eyeColor/eyeColor2.png'),
        loadImagePromisified('images/eyeColor/eyeColor3.png'),
        loadImagePromisified('images/eyeColor/eyeColor4.png'),
        loadImagePromisified('images/eyeColor/eyeColor5.png'),
        loadImagePromisified('images/eyeColor/eyeColor6.png'),
        loadImagePromisified('images/eyeColor/eyeColor7.png'),
        loadImagePromisified('images/eyeColor/eyeColor8.png'),
        loadImagePromisified('images/eyeColor/eyeColor9.png'),
        loadImagePromisified('images/eyeColor/eyeColor10.png'),
        loadImagePromisified('images/eyeColor/eyeColor11.png'),

      
        //body type
        loadImagePromisified('images/bodyType/bodyType1.png'),
        loadImagePromisified('images/bodyType/bodyType2.png'),
        loadImagePromisified('images/bodyType/bodyType3.png'),
        loadImagePromisified('images/bodyType/bodyType4.png'),
        loadImagePromisified('images/bodyType/bodyType5.png'),
        loadImagePromisified('images/bodyType/bodyType6.png'),

      
        //ear shape
        loadImagePromisified('images/earShape/earShape1.png'),
        loadImagePromisified('images/earShape/earShape2.png'),
        loadImagePromisified('images/earShape/earShape3.png'),
        loadImagePromisified('images/earShape/earShape4.png'),
        loadImagePromisified('images/earShape/earShape5.png'),
        loadImagePromisified('images/earShape/earShape6.png'),
        loadImagePromisified('images/earShape/earShape7.png'),

        //hairStyle
        loadImagePromisified('image/hairStyle/hairStyle1.png'),
        loadImagePromisified('image/hairStyle/hairStyle2.png'),
        loadImagePromisified('image/hairStyle/hairStyle3.png'),
        loadImagePromisified('image/hairStyle/hairStyle4.png'),
        loadImagePromisified('image/hairStyle/hairStyle5.png'),
        loadImagePromisified('image/hairStyle/hairStyle6.png'),
        loadImagePromisified('image/hairStyle/hairStyle7.png'),
        loadImagePromisified('image/hairStyle/hairStyle8.png'),
        loadImagePromisified('image/hairStyle/hairStyle9.png'),
        loadImagePromisified('image/hairStyle/hairStyle10.png'),
        loadImagePromisified('image/hairStyle/hairStyle11.png'),
        loadImagePromisified('image/hairStyle/hairStyle12.png'),
        loadImagePromisified('image/hairStyle/hairStyle13.png'),
        loadImagePromisified('image/hairStyle/hairStyle14.png'),
        loadImagePromisified('image/hairStyle/hairStyle15.png'),
        loadImagePromisified('image/hairStyle/hairStyle16.png'),
        loadImagePromisified('image/hairStyle/hairStyle17.png'),
        loadImagePromisified('image/hairStyle/hairStyle18.png'),
        loadImagePromisified('image/hairStyle/hairStyle19.png'),
        loadImagePromisified('image/hairStyle/hairStyle20.png'),
        loadImagePromisified('image/hairStyle/hairStyle21.png'),
        loadImagePromisified('image/hairStyle/hairStyle22.png'),
        loadImagePromisified('image/hairStyle/hairStyle23.png'),
        loadImagePromisified('image/hairStyle/hairStyle24.png'),
        loadImagePromisified('image/hairStyle/hairStyle25.png'),
        loadImagePromisified('image/hairStyle/hairStyle26.png'),
        loadImagePromisified('image/hairStyle/hairStyle27.png'),
        loadImagePromisified('image/hairStyle/hairStyle28.png'),
        loadImagePromisified('image/hairStyle/hairStyle29.png'),
        loadImagePromisified('image/hairStyle/hairStyle30.png'),
        loadImagePromisified('image/hairStyle/hairStyle31.png'),
        loadImagePromisified('image/hairStyle/hairStyle32.png'),
        loadImagePromisified('image/hairStyle/hairStyle33.png'),
        loadImagePromisified('image/hairStyle/hairStyle34.png'),
        loadImagePromisified('image/hairStyle/hairStyle35.png'),
        loadImagePromisified('image/hairStyle/hairStyle36.png'),
        loadImagePromisified('image/hairStyle/hairStyle37.png'),
        loadImagePromisified('image/hairStyle/hairStyle38.png'),
        loadImagePromisified('image/hairStyle/hairStyle39.png'),
        loadImagePromisified('image/hairStyle/hairStyle40.png'),
        loadImagePromisified('image/hairStyle/hairStyle41.png'),
        loadImagePromisified('image/hairStyle/hairStyle42.png'),
        loadImagePromisified('image/hairStyle/hairStyle43.png'),
        loadImagePromisified('image/hairStyle/hairStyle44.png'),
        loadImagePromisified('image/hairStyle/hairStyle45.png'),
        loadImagePromisified('image/hairStyle/hairStyle46.png'),


        //eye shape
        loadImagePromisified('images/eyeShape/eyeShape1.png'),
        loadImagePromisified('images/eyeShape/eyeShape2.png'),
        loadImagePromisified('images/eyeShape/eyeShape3.png'),
        loadImagePromisified('images/eyeShape/eyeShape4.png'),
        loadImagePromisified('images/eyeShape/eyeShape5.png'),


        //nose shape
        loadImagePromisified('images/noseShape/noseShape1.png'),
        loadImagePromisified('images/noseShape/noseShape2.png'),
        loadImagePromisified('images/noseShape/noseShape3.png'),
        loadImagePromisified('images/noseShape/noseShape4.png'),
        loadImagePromisified('images/noseShape/noseShape5.png'),
        loadImagePromisified('images/noseShape/noseShape6.png'),
        loadImagePromisified('images/noseShape/noseShape7.png'),
        loadImagePromisified('images/noseShape/noseShape8.png'),
        loadImagePromisified('images/noseShape/noseShape9.png'),
        loadImagePromisified('images/noseShape/noseShape10.png'),
        loadImagePromisified('images/noseShape/noseShape11.png'),
        loadImagePromisified('images/noseShape/noseShape12.png'),


        //lip shape
        loadImagePromisified('images/lipShape/lipShape1.png'),
        loadImagePromisified('images/lipShape/lipShape2.png'),
        loadImagePromisified('images/lipShape/lipShape3.png'),
        loadImagePromisified('images/lipShape/lipShape4.png'),
        loadImagePromisified('images/lipShape/lipShape5.png'),
        loadImagePromisified('images/lipShape/lipShape6.png'),
        loadImagePromisified('images/lipShape/lipShape7.png'),
        loadImagePromisified('images/lipShape/lipShape8.png'),
        loadImagePromisified('images/lipShape/lipShape9.png'),
        loadImagePromisified('images/lipShape/lipShape10.png'),


        //piercings
        loadImagePromisified('images/piercings/piercings1.png'),
        loadImagePromisified('images/piercings/piercings2.png'),
        loadImagePromisified('images/piercings/piercings3.png'),
        loadImagePromisified('images/piercings/piercings4.png'),
        loadImagePromisified('images/piercings/piercings5.png'),
        loadImagePromisified('images/piercings/piercings6.png'),
        loadImagePromisified('images/piercings/piercings7.png'),
        loadImagePromisified('images/piercings/piercings8.png'),
        loadImagePromisified('images/piercings/piercings9.png'),
        loadImagePromisified('images/piercings/piercings10.png'),
        loadImagePromisified('images/piercings/piercings11.png'),
        loadImagePromisified('images/piercings/piercings12.png'),
        loadImagePromisified('images/piercings/piercings13.png'),




        // Add paths for other categories as needed
      ]).then(images => {
        // Assign images to respective categories
        skinColorImages = images.slice(0, 23);
        hairColorImages = images.slice(23, 76);
        eyeColorImages = images.slice(76, 87);
        bodyTypeImages = images.slice(87, 93); // Assuming there's only one bodyType image
        earShapeImages = images.slice(93, 100); // Assuming there's only one earShape image
        hairStyleImages = images.slice(100, 147); // Assuming there's only one hairStyle image
        eyeShapeImages = images.slice(147, 152); // Assuming there's only one eyeShape image
        noseShapeImages = images.slice(152, 164); // Assuming there's only one noseShape image
        lipShapeImages = images.slice(164, 174); // Assuming there's only one lipShape image
        piercingsImages = images.slice(174, 187); 
        // ... Assign images for other categories
    });
}

function setup() {
  createCanvas(800, 800);
  generateCharacter();
}

function draw() {
    // No need to call generateCharacter in draw, as it will be called when needed
}

function generateCharacter() {
  clearCanvas();
  collageImages = [];
   // Randomization
   generateImage('skinColor', skinColorImages, randomIndex(skinColorImages));
   generateImage('hairColor', hairColorImages, randomIndex(hairColorImages));
   generateImage('eyeColor', eyeColorImages, randomIndex(eyeColorImages));
   generateImage('bodyType', bodyTypeImages, randomIndex(bodyTypeImages));
   generateImage('earShape', earShapeImages, randomIndex(earShapeImages));
   generateImage('hairStyle',hairStyleImages , randomIndex(hairStyleImages));
   generateImage('eyeShape', eyeShapeImages, randomIndex(eyeShapeImages));
   generateImage('noseShape', noseShapeImages, randomIndex(noseShapeImages));
   generateImage('lipShape', lipShapeImages, randomIndex(lipShapeImages));
   generateImage('piercings', piercingsImages, randomIndex(piercingsImages));

   // Cycling
   generateImage('skinColor', skinColorImages, skinCounter);
   generateImage('hairColor', hairColorImages, hairColorCounter);
   generateImage('eyeColor', eyeColorImages, eyeColorCounter);
   generateImage('bodyType', bodyTypeImages, bodyTypeCounter);
   generateImage('earShape', earShapeImages, earShapeCounter);
   generateImage('hairStyle', hairStyleImages, hairStyleCounter);
   generateImage('eyeShape', eyeShapeImages, eyeShapeCounter);
   generateImage('noseShape', noseShapeImages, noseShapeCounter);
   generateImage('lipShape', lipShapeImages, lipShapeCounter);
   generateImage('piercings', piercingsImages, piercingsCounter);

  // Generate images for other categories as needed
  displayCollage();
}

function generateImage(feature, images, index) {
  let selectedImage = images[index];
  collageImages.push(selectedImage);
}

function displayCollage() {
  let x = 0;
  let y = 0;
  let maxImageSize = min(width / 3, height / 3);

  for (let i = 0; i < collageImages.length; i++) {
      let img = collageImages[i];
      let aspectRatio = img.width / img.height;
      let imgWidth, imgHeight;

      if (aspectRatio > 1) {
          imgWidth = maxImageSize;
          imgHeight = maxImageSize / aspectRatio;
      } else {
          imgWidth = maxImageSize * aspectRatio;
          imgHeight = maxImageSize;
      }

      image(img, x, y, imgWidth, imgHeight);

      x += width / 3;
      if (x >= width) {
          x = 0;
          y += height / 3;
      }
  }
}

function clearCanvas() {
  clear();
}

function saveCollage() {
  saveCanvas('collage', 'png');
}

// Functions to cycle through images
function cycleSkin() {
  skinCounter = (skinCounter + 1) % skinColorImages.length;
  generateCharacter();
}

function cycleHairColor() {
  hairColorCounter = (hairColorCounter + 1) % hairColorImages.length;
  generateCharacter();
}

function cycleEyeColor() {
  eyeColorCounter = (eyeColorCounter + 1) % eyeColorImages.length;
  generateCharacter();
}

function cycleBodyType() {
  bodyTypeCounter = (bodyTypeCounter + 1) % bodyTypeImages.length;
  generateCharacter();
} 

function cycleEarShape() {
  earShapeCounter = (earShapeCounter + 1) % earShapeImages.length;
  generateCharacter();
} 

function cycleHairStyle() {
  hairStyleCounter = (hairStyleCounter + 1) % hairStyleImages.length;
  generateCharacter();
}

function cycleEyeShape() {
  eyeShapeCounter = (eyeShapeCounter + 1) % eyeShapeImages.length;
  generateCharacter();
}  

function cycleNoseShape() {
  noseShapeCounter = (noseShapeCounter + 1) % noseShapeImages.length;
  generateCharacter();
} 

function cycleLipShape() {
  lipShapeCounter = (lipShapeCounter + 1) % lipShapeImages.length;
  generateCharacter();
} 

function cyclePiercings() {
  piercingsCounter = (piercingsCounter + 1) % piercingsImages.length;
  generateCharacter();
} 
// Add similar functions for other categories if needed

// Helper function to get a random index
function randomIndex(images) {
  return Math.floor(random(images.length));
}