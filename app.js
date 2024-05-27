const ueser = [
    {
        userUel: 'img/images (1).jpg',
        name: 'Shakir Khan' ,
        disgn: 'Full Stack ' ,
        discription:'lo Quam laudantium at nam voluptatem consectetur temporibus repudiandae!'  

    },
    {
        userUel: 'img/images (2).jpg',
        name: 'zakir Khan' ,
        disgn: 'Web disgner',
        discription: 'lo Quam laudantium at nam voluptatem consectetur temporibus repudiandae!', 

    },
    {
        userUel: 'img/download (1).jpg',
        name: 'Hameed Khan' ,
        disgn: 'Car Compani Maniger',
        discription: 'lo Quam laudantium at nam voluptatem consectetur temporibus repudiandae!', 

    },
    {
        userUel: 'img/download.jpg',
        name: 'Younus Amshan',
        disgn:'Web Develepment' ,
        discription: 'lo Quam laudantium at nam voluptatem consectetur temporibus repudiandae!', 

    }
]


var uesercounter = 0;


const previosHanderl = () => {

    if(uesercounter  > 0){

        uesercounter--
    document.querySelector('#ueserImg').src = ueser[uesercounter].userUel
    document.querySelector('#userName').textContent = ueser[uesercounter].name
    document.querySelector('#userDisgination').textContent = ueser[uesercounter].disgn
    document.getElementById('#discrip').textContent = ueser[uesercounter].discription
    }else{
        uesercounter = 3

        document.querySelector('#ueserImg').src = ueser[uesercounter].userUel
        document.querySelector('#userName').textContent = ueser[uesercounter].name
        document.querySelector('#userDisgination').textContent = ueser[uesercounter].disgn
        document.getElementById('#discrip').textContent = ueser[uesercounter].discription
    
    }
    
}
const nextHanderl = () => {
    if(uesercounter > ueser.length -1){
      uesercounter = 0
      document.querySelector('#ueserImg').src = ueser[uesercounter].userUel
    document.querySelector('#userName').textContent = ueser[uesercounter].name
    document.querySelector('#userDisgination').textContent = ueser[uesercounter].disgn;
    document.getElementById ('#discrip').textContent = ueser[uesercounter].discription
      
    }else{

        uesercounter++
        document.querySelector('#ueserImg').src = ueser[uesercounter].userUel
        document.querySelector('#userName').textContent = ueser[uesercounter].name
        document.querySelector('#userDisgination').textContent = ueser[uesercounter].disgn;
        document.getElementsByTagName('p').textContent = ueser[uesercounter].discription
    }
 
}