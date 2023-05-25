const photoBank = [
  {id: "woody", url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg?region=0,0,450,450"},
  {id: "buzz", url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-a07syh_9331bd0a.jpeg"},
  {id: "lightning mcqueen", url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1fndzcd_41017374.jpeg?region=0,0,600,600"},
  {id: "mater", url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1aonp2t_931280b6.jpeg?region=0,0,600,600"},
  {id: "remy", url: "https://i.etsystatic.com/5406114/r/il/bf8b0d/2464473646/il_570xN.2464473646_h0ju.jpg"},
  {id: "mike", url: "https://i.pinimg.com/originals/86/e3/82/86e382034ff7f6cf6767451f4b8e6aa4.jpg"},
  {id: "sully", url: "https://static.wikia.nocookie.net/monstersincmovies/images/0/09/Sulley_002.jpg/revision/latest?cb=20130512141939"},
  {id: "mr. incredible", url: "https://static.wikia.nocookie.net/disney/images/d/d2/Profile_-_Bob_Parr.jpeg/revision/latest?cb=20190313155821"},
  {id: "wall e", url: "https://upload.wikimedia.org/wikipedia/en/5/5b/WALL%C2%B7E_%28character%29.jpg"},
  {id: "jessie", url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-y1ys73_7dd5c0b7.jpeg?region=0,0,450,450"},
  {id: "nemo", url: "https://static.wikia.nocookie.net/pixar/images/a/aa/Nemo-FN.png/revision/latest?cb=20160710221104"},
  {id: "flik", url: "https://lumiere-a.akamaihd.net/v1/images/pp_abugslife_herobanner_mobile_19869_a9677d64.jpeg?region=0,0,640,480"},
  {id: "mr. potato head", url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-enmr1e_871e8eac.jpeg"},
  {id: "joy", url: "https://static.wikia.nocookie.net/insideout/images/0/0f/JOY_Fullbody_Render.png/revision/latest?cb=20150720185554"},
  {id: "sadness", url: "https://static.wikia.nocookie.net/insideout/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20150730192430"},
  {id: "anger", url: "https://static.wikia.nocookie.net/insideout/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150730191555"}
]

let numPhotos = 2;
const selecter = document.getElementById('photo-select');
const showButton = document.getElementById('show-button');
selecter.addEventListener("change", (e) => numPhotos = parseInt(e.target.value));

showButton.addEventListener('click', () => {
  let count = 0;
  const randomInd = [];
  while(count < numPhotos){
    const ind = Math.floor(Math.random() * photoBank.length);
    if(!randomInd.includes(ind)){
      randomInd.push(ind);
      count++;
    }
  }

  for(let i = 0; i < randomInd.length; i++){
    console.log('test');
    const ind = randomInd[i];
    const image = document.createElement('img');
    image.src = photoBank[ind].url;
    image.className = 'photo';
    image.style.left = `${300 * i}px`
    document.body.appendChild(image);
  }

  const photos = document.querySelectorAll('img');
  photos.forEach( photo => {
    photo.addEventListener('mousedown', dragStart);
    photo.addEventListener('mousemove', drag);
    photo.addEventListener('mouseup', dragEnd);
  })
})

document.addEventListener('mousemove', getMouseCoordinates);

let mouseX;
let mouseY;
let isDragging = false;

function getMouseCoordinates(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function dragStart(e){
  if(e.target.tagName === 'IMG'){
    isDragging = true;
  }
}

function drag(e){
  if(isDragging){
    e.preventDefault();
    e.target.style.top = `${mouseY - 150}px`;
    e.target.style.left = `${mouseX - 150}px`;
  }
}

function dragEnd(){
  isDragging = false;
  console.log(isDragging)
}
