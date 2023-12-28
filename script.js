data = [{
    'img1':'Asset/PP.jpg',
    'img':'Aseet/PH.jpg',
    'title': 'Poster E Commerse',
    'subtitle' : 'Rapaa',
    'desc': "orem ipsum dolor sit amet consectetur adipisicing elit. Qui vitae odit nihil. In, inventore veniam."
    
},{
    'img1':'Asset/PP.jpg',
    'img':'Aseet/PH.jpg',
    'title': 'Poster E Commerse',
    'subtitle' : 'Rapaa',
    'desc': "orem ipsum dolor sit amet consectetur adipisicing elit. Qui vitae odit nihil. In, inventore veniam."
}];

var container = document.querySelector(".container-project");

data.forEach(element => {
    container.innerHTML += 
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img1}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <h2>${element.desc}</h2>
    </div>
    <button class="read-more">read-more</button>
</div>`    
    
});

