const mobileElement = document.getElementById('mobile-links');
const menuBtn = document.querySelector('.nav-bar-mobile');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (mobileElement.style.display === 'block') {
    mobileElement.style.display = 'none';
  } else {
    mobileElement.style.display = 'block';
  }
});

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuBtn.style.marginRight = '25px';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuBtn.style.marginRight = '36px';
    menuOpen = false;
  }
});

mobileElement.addEventListener('click', () => {
  if (mobileElement.style.display === 'block') {
    mobileElement.style.display = 'none';
    menuBtn.classList.remove('open');
    menuOpen = false;
  } else {
    mobileElement.style.display = 'block';
    menuBtn.classList.add('open');
    menuOpen = true;
  }
});

const cards = [
    {
      item: 'firts',
      box: 'card',
      imgHolder: 'image-card-holder',
      cardTitleHolder: 'text-work-title',
      textCardTitle: 'Multi-Post Stories Gain+Glory',
      cardTagsHolder: 'card-tags',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      technologiesTemplate: 'tag-element',
      button: ['see-project-btn', 'btn'],
    },
    {
      box: 'card',
      imgHolder: 'image-card-holder',
      cardTitleHolder: 'text-work-title',
      textCardTitle: 'Multi-Post Stories Gain+Glory',
      cardTagsHolder: 'card-tags',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      technologiesTemplate: 'tag-element',
      button: ['see-project-btn', 'btn'],
    },
    {
      box: 'card',
      imgHolder: 'image-card-holder',
      cardTitleHolder: 'text-work-title',
      textCardTitle: 'Multi-Post Stories Gain+Glory',
      cardTagsHolder: 'card-tags',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      technologiesTemplate: 'tag-element',
      button: ['see-project-btn', 'btn'],
    },
    {
      box: 'card',
      imgHolder: 'image-card-holder',
      cardTitleHolder: 'text-work-title',
      textCardTitle: 'Multi-Post Stories Gain+Glory',
      cardTagsHolder: 'card-tags',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      technologiesTemplate: 'tag-element',
      button: ['see-project-btn', 'btn'],
    },
    {
      box: 'card',
      imgHolder: 'image-card-holder',
      cardTitleHolder: 'text-work-title',
      textCardTitle: 'Multi-Post Stories Gain+Glory',
      cardTagsHolder: 'card-tags',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      technologiesTemplate: 'tag-element',
      button: ['see-project-btn', 'btn'],
    },
    {
      box: 'card',
      imgHolder: 'image-card-holder',
      cardTitleHolder: 'text-work-title',
      textCardTitle: 'Multi-Post Stories Gain+Glory',
      cardTagsHolder: 'card-tags',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      technologiesTemplate: 'tag-element',
      button: ['see-project-btn', 'btn'],
    },
  ];

  const divCardContainer = document.createElement('div');
  const portafolioContainer = document.getElementById('portafolio');
  divCardContainer.className = 'card-work-row';
  portafolioContainer.append(divCardContainer);
  
  for (let i = 0; i <= cards.length - 1; i += 1) {
    const cardContainer = document.querySelector('.card-work-row');
    const divCard = document.createElement('div');
    const imgCard = document.createElement('img');
    const textTitleHolder = document.createElement('div');
    const titleCard = document.createElement('h3');
    const textTitle = document.createTextNode(cards[i].textCardTitle);
    const divCardTags = document.createElement('div');
    const ulList = document.createElement('ul');
    const buttonCard = document.createElement('button');
    const buttonText = document.createTextNode('See Project');
  
    if (cards[i].item === 'firts') {
      divCard.className = cards[i].box;
    } else {
      divCard.className = `${cards[i].box} card-below`;
    }
  
    imgCard.className = cards[i].imgHolder;
    textTitleHolder.className = cards[i].cardTitleHolder;
    divCardTags.className = cards[i].cardTagsHolder;
    buttonCard.className = `${cards[i].button[0]} ${cards[i].button[1]}`;
  
    cardContainer.append(divCard);
    divCard.append(imgCard);
    divCard.append(textTitleHolder);
    textTitleHolder.append(titleCard);
    titleCard.append(textTitle);
    divCard.append(divCardTags);
    divCardTags.append(ulList);
    buttonCard.append(buttonText);
    divCard.append(buttonCard);
  
    for (let i = 0; i <= cards[0].technologies.length - 1; i += 1) {
      const liTechnologie = document.createElement('li');
      liTechnologie.className = cards[i].technologiesTemplate;
      const textLiTechnologie = document.createTextNode(
        cards[i].technologies[i],
      );
      liTechnologie.append(textLiTechnologie);
      ulList.append(liTechnologie);
    }
  }

  const popUp = document.querySelector('.pop-up');
const buttonProject = document.querySelectorAll('.see-project-btn');
for (let i = 0; i <= buttonProject.length - 1; i += 1) {
  buttonProject[i].addEventListener('click', () => {
    if (popUp.style.display === 'block') {
      popUp.style.display = 'none';
    } else {
      popUp.style.display = 'block';
    }
  });
}
const divPopProjectDesktop = document.createElement('div');
const divPopProject = document.createElement('div');















