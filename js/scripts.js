// Randomize Header

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = 'http://picsum.photos/300/300';
var img1 = 'http://picsum.photos/290/300';
var img2 = 'http://picsum.photos/300/290';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a', 
    thumbnail: true,
    share: false
});