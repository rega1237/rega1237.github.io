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
    const textLiTechnologie = document.createTextNode(cards[i].technologies[i]);
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

function popupwindow() {
  const divCloseBtnDesktop = document.createElement('div');
  const closeBtnDesktop = document.createElement('img');
  divPopProjectDesktop.className = 'project-container-desktop';
  divCloseBtnDesktop.className = 'close-button-cont';
  closeBtnDesktop.classList = 'close-btn';
  closeBtnDesktop.src = 'images/disablebutton.png';
  popUp.append(divPopProjectDesktop);
  divCloseBtnDesktop.append(closeBtnDesktop);
  divPopProjectDesktop.append(divCloseBtnDesktop);

  closeBtnDesktop.addEventListener('click', () => {
    if (popUp.style.display === 'block') {
      popUp.style.display = 'none';
    }
  });

  // Project Content DESKTOP

  const projectsDesktop = {
    img: ['images/project-desktop.png', 'image-project-holder'],
    titleProject: 'Keeping track of hundreds of components',
    technologies: [
      'Codekit',
      'Github',
      'Bootstrap',
      'JavaScript',
      'Terminal',
      'Codepen',
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem 
        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it 1960s with the relea`,
    buttonProject: [
      {
        text: ['See Live', 'See Source'],
      },
      { icon: ['images/see-live.png', 'images/see-source.png'] },
    ],
  };

  const { img } = projectsDesktop;
  const [imgOne, imgTwo] = img;

  const imgProjectHolderDesktop = document.createElement('div');
  const imgProjectDesktop = document.createElement('img');
  const divTitleBtnDesktop = document.createElement('div');
  const titleProjectDesktop = document.createElement('h3');
  const titleProjectTextDesktop = document.createTextNode(
    projectsDesktop.titleProject,
  );
  const divProjectTagsDesktop = document.createElement('div');
  const ulListDesktop = document.createElement('ul');
  const projectDescriptionDesktop = document.createElement('p');
  const projectDescriptionTextDesktop = document.createTextNode(
    projectsDesktop.description,
  );
  const divProjectBtnDesktop = document.createElement('div');
  imgProjectHolderDesktop.className = imgTwo;
  imgProjectDesktop.src = imgOne;
  divTitleBtnDesktop.className = 'title-btns';
  divProjectTagsDesktop.className = 'project-tags';
  divProjectBtnDesktop.className = 'project-buttons-container';

  divPopProjectDesktop.append(imgProjectHolderDesktop);
  imgProjectHolderDesktop.append(imgProjectDesktop);
  titleProjectDesktop.append(titleProjectTextDesktop);
  divTitleBtnDesktop.append(titleProjectDesktop);
  divTitleBtnDesktop.append(divProjectBtnDesktop);
  divPopProjectDesktop.append(divTitleBtnDesktop);
  divPopProjectDesktop.append(divProjectTagsDesktop);
  divProjectTagsDesktop.append(ulListDesktop);
  projectDescriptionDesktop.append(projectDescriptionTextDesktop);
  divPopProjectDesktop.append(projectDescriptionDesktop);

  for (let i = 0; i <= projectsDesktop.technologies.length - 1; i += 1) {
    const projectTech = document.createElement('li');
    const projectTechText = document.createTextNode(
      projectsDesktop.technologies[i],
    );
    projectTech.className = 'tag-element';
    projectTech.append(projectTechText);
    ulListDesktop.append(projectTech);
  }

  for (let i = 0; i <= projectsDesktop.buttonProject.length - 1; i += 1) {
    const btnProject = document.createElement('button');
    const textBtnCont = document.createElement('span');
    const iconBtnCont = document.createElement('span');
    const iconImg = document.createElement('img');
    const textBtn = document.createTextNode(
      projectsDesktop.buttonProject[0].text[i],
    );
    const redirectBtn = document.createElement('form');

    if (
      `${projectsDesktop.buttonProject[1].icon[i]}` === 'images/see-live.png'
    ) {
      iconImg.className = 'liveIcon';
      btnProject.className = 'project-btn';
    } else {
      iconImg.className = 'sourceIcon';
      btnProject.className = 'project-btn source-btn';
    }

    iconImg.src = `${projectsDesktop.buttonProject[1].icon[i]}`;

    if (btnProject.classList.contains('source-btn')) {
      redirectBtn.setAttribute(
        'action',
        'https://github.com/rega1237/rega1237.github.io',
      );
      redirectBtn.setAttribute('method', 'get');
      redirectBtn.setAttribute('target', '_blank');
      redirectBtn.append(btnProject);
    } else {
      redirectBtn.setAttribute('action', 'https://rega1237.github.io/');
      redirectBtn.setAttribute('method', 'get');
      redirectBtn.setAttribute('target', '_blank');
      redirectBtn.append(btnProject);
    }
    divProjectBtnDesktop.append(redirectBtn);
    textBtnCont.append(textBtn);
    iconBtnCont.append(iconImg);
    btnProject.append(textBtnCont);
    btnProject.append(iconBtnCont);
  }

  const divCloseBtn = document.createElement('div');
  const closeBtn = document.createElement('img');
  divPopProject.className = 'project-container';
  divCloseBtn.className = 'close-button-cont';
  closeBtn.classList = 'close-btn';
  closeBtn.src = 'images/disablebutton.png';
  popUp.append(divPopProject);
  divCloseBtn.append(closeBtn);
  divPopProject.append(divCloseBtn);

  closeBtn.addEventListener('click', () => {
    if (popUp.style.display === 'block') {
      popUp.style.display = 'none';
    }
  });
  // Project Content Mobile
  const projectsMobile = {
    imgM: ['images/mobile-popup.png', 'image-project-holder'],
    titleProject: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem
        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it 1960s with the relea`,
    buttonProject: [
      {
        text: ['See Live', 'See Source'],
      },
      { icon: ['images/see-live.png', 'images/see-source.png'] },
    ],
  };
  const imgProjectHolder = document.createElement('div');
  const imgProject = document.createElement('img');
  const titleProject = document.createElement('h3');
  const titleProjectText = document.createTextNode(projectsMobile.titleProject);
  const divProjectTags = document.createElement('div');
  const ulList = document.createElement('ul');
  const projectDescription = document.createElement('p');
  const projectDescriptionText = document.createTextNode(
    projectsMobile.description,
  );
  const divProjectBtn = document.createElement('div');
  const { imgM } = projectsMobile;
  const [imgOneM, imgTwoM] = imgM;
  imgProjectHolder.className = imgTwoM;
  imgProject.src = imgOneM;
  divProjectTags.className = 'project-tags';
  divProjectBtn.className = 'project-buttons-container';
  divPopProject.append(imgProjectHolder);
  imgProjectHolder.append(imgProject);
  divPopProject.append(titleProject);
  titleProject.append(titleProjectText);
  divPopProject.append(divProjectTags);
  divProjectTags.append(ulList);
  projectDescription.append(projectDescriptionText);
  divPopProject.append(projectDescription);
  divPopProject.append(divProjectBtn);
  for (let i = 0; i <= projectsMobile.technologies.length - 1; i += 1) {
    const projectTech = document.createElement('li');
    const projectTechText = document.createTextNode(
      projectsMobile.technologies[i],
    );
    projectTech.className = 'tag-element';
    projectTech.append(projectTechText);
    ulList.append(projectTech);
  }
  for (let i = 0; i <= projectsMobile.buttonProject.length - 1; i += 1) {
    const btnProject = document.createElement('button');
    const textBtnCont = document.createElement('span');
    const iconBtnCont = document.createElement('span');
    const iconImg = document.createElement('img');
    const textBtn = document.createTextNode(
      projectsMobile.buttonProject[0].text[i],
    );
    const redirectBtn = document.createElement('form');
    if (
      `${projectsMobile.buttonProject[1].icon[i]}` === 'images/see-live.png'
    ) {
      iconImg.className = 'liveIcon';
      btnProject.className = 'project-btn';
    } else {
      iconImg.className = 'sourceIcon';
      btnProject.className = 'project-btn source-btn';
    }
    iconImg.src = `${projectsMobile.buttonProject[1].icon[i]}`;
    if (btnProject.classList.contains('source-btn')) {
      redirectBtn.setAttribute(
        'action',
        'https://github.com/rega1237/rega1237.github.io',
      );
      redirectBtn.setAttribute('method', 'get');
      redirectBtn.setAttribute('target', '_blank');
      redirectBtn.append(btnProject);
    } else {
      redirectBtn.setAttribute('action', 'https://rega1237.github.io/');
      redirectBtn.setAttribute('method', 'get');
      redirectBtn.setAttribute('target', '_blank');
      redirectBtn.append(btnProject);
    }
    divProjectBtn.append(redirectBtn);
    textBtnCont.append(textBtn);
    iconBtnCont.append(iconImg);
    btnProject.append(textBtnCont);
    btnProject.append(iconBtnCont);
  }
}

window.addEventListener('load', popupwindow);

// Email Validation.
const form = document.getElementById('template-form');
const email = document.getElementById('email');
const emailLabel = document.getElementById('label-email');
const underCase = /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (underCase.test(email.value)) {
    form.submit();
    form.reset();
    emailLabel.style.display = 'none';
  } else {
    emailLabel.style.display = 'block';
  }
});

// Local Storage

const fullName = document.getElementById('full-name');
const textArea = document.getElementById('textarea');
document.addEventListener('input', () => {
  const formInputs = {
    name: fullName.value,
    email: email.value,
    textArea: textArea.value,
  };
  localStorage.setItem('form', JSON.stringify(formInputs));
});

function setValues() {
  if (localStorage.getItem('form')) {
    const formInputs = JSON.parse(localStorage.getItem('form'));

    const currentName = formInputs.name;
    const currentEmail = formInputs.email;
    const currentTextarea = formInputs.textArea;

    fullName.value = currentName;
    email.value = currentEmail;
    textArea.value = currentTextarea;
  } else {
    fullName.value = '';
    email.value = '';
    textArea.value = '';
  }
}
window.addEventListener('load', setValues);