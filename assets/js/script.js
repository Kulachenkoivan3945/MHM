//about_hidden_part.style.height='0px'
document.querySelector('.about-see-more button').addEventListener('click', ((event) => {

    document.querySelectorAll('.block-down').forEach(elem => elem.classList.toggle('move-block-down'));

    if (about_hidden_part.classList.contains('hidden')) {
        about_hidden_part.classList.remove('hidden');

        about_hidden_part.classList.add('showed');
        about_hidden_part_anchor.scrollIntoView({ behavior: 'smooth' });
        event.target.innerHTML = 'Скрыть';

    }
    else {
        about_hidden_part.classList.remove('showed');
        about_hidden_part.classList.add('hidden');

        about.scrollIntoView({ behavior: 'smooth' });
        event.target.innerHTML = 'Узнать больше';
    }

}));

let currentChampionCardId = 1;
let championCardCount = document.querySelectorAll('.champion-card').length;
slider_btn_right.addEventListener('click', (() => {
    changeChampionCardToRight();
}));
slider_btn_left.addEventListener('click', (() => {
    changeChampionCardToLeft();
}));

setInterval((() => changeChampionCardToRight()), 5000)

function changeChampionCardToRight() {
    if (currentChampionCardId == championCardCount) {
        document.querySelectorAll('.champion-card').forEach(card => {
            card.style.transform = `translateX(0)`;

        });
    }
    else {
        document.querySelectorAll('.champion-card').forEach(card => {
            card.style.transform = `translateX(-${(currentChampionCardId) * 100}%)`;

        });
    }
    if (currentChampionCardId == championCardCount) currentChampionCardId = 1;
    else currentChampionCardId++;
}

function changeChampionCardToLeft() {
    if (currentChampionCardId == 1) document.querySelectorAll('.champion-card').forEach(card => {
        card.style.transform = `translateX(-${(championCardCount - 1) * 100}%)`;
        console.log(`${championCardCount - 1}*100%`);
    });
    else document.querySelectorAll('.champion-card').forEach(card => {
        card.style.transform = `translateX(-${(currentChampionCardId - 2) * 100}%)`;

    });

    if (currentChampionCardId == 1) currentChampionCardId = championCardCount;
    else currentChampionCardId--;
}


document.querySelectorAll('.sign-up-form-rb').forEach(rb => rb.addEventListener('change', ((event) => {

    // document.querySelectorAll('.block-down').forEach(elem=> elem.classList.toggle('move-block-down'));

    if (event.target.id == 'rbVisiter') {
        signUpForMembers.classList.add('hidden-members');
        signUp.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.sign-up-form-container').style.height = '';
    }
    else {
        signUpForMembers.classList.remove('hidden-members');
        setTimeout(() => dogImgInput.scrollIntoView({ behavior: 'smooth' }), 300);
    }

})));

//присвоение выдвигающемосю блоку высоты(для плавного раскрытия и сокрытия)
setTimeout(() => {
    console.log(document.querySelector('.sign-up-form-for-members').clientHeight);
    document.querySelector('.sign-up-form-for-members').style.height = document.querySelector('.sign-up-form-for-members').clientHeight + 'px';
    document.querySelector('.sign-up-form-for-members').classList.add('hidden-members');

    document.querySelectorAll('.prize-description').forEach(div => {
        div.style.height = prize_1st_place.clientHeight + 'px';

    });


}, 500);





document.querySelectorAll('.prize-places div').forEach(place => place.addEventListener('click', (e) => {
    let placeNumber = Array.from(place.parentNode.children).indexOf(place);
    switch (placeNumber) {
        case 0:
            prize_2st_place.classList.toggle('prize-nst-place');
            prize_1st_place.classList.add('prize-nst-place');
            prize_3st_place.classList.add('prize-nst-place');
            break;
        case 1:
            prize_1st_place.classList.toggle('prize-nst-place');
            prize_2st_place.classList.add('prize-nst-place');
            prize_3st_place.classList.add('prize-nst-place');
            break;
        case 2:
            prize_3st_place.classList.toggle('prize-nst-place');
            prize_1st_place.classList.add('prize-nst-place');
            prize_2st_place.classList.add('prize-nst-place');
            break;
    }
}));




dogImgInput.onchange = function (event) {
    let imgHeight = dogImg.clientHeight;
    document.querySelector('.sign-up-form-container').style.height = document.querySelector('.sign-up-form-container').clientHeight+'px';
    console.log(imgHeight);
    var target = event.target;

    if (!FileReader) {
        alert('FileReader не поддерживается — облом');
        return;
    }

    if (!target.files.length) {
        alert('Ничего не загружено');
        return;
    }

    var fileReader = new FileReader();
    fileReader.onload = function () {
        dogImg.src = fileReader.result;
    }

    fileReader.readAsDataURL(target.files[0]);
    /* document.querySelector('.sign-up-form-buttons').style.transform =  */
    
    setTimeout(()=>{
        console.log(dogImg.clientHeight);
        console.log(dogImg.clientHeight - imgHeight);
        //document.querySelector('.sign-up-form-buttons').style.transform = 'translateY('+(dogImg.clientHeight - imgHeight)+'px)';
        //console.log('translateY('+(dogImg.clientHeight - imgHeight)+'px)');
        document.querySelector('.sign-up-form-container').style.height = document.querySelector('.sign-up-form-container').clientHeight + (dogImg.clientHeight - imgHeight) +'px';
        document.querySelector('.sign-up-form-for-members').style.height = document.querySelector('.sign-up-form-for-members').clientHeight + (dogImg.clientHeight - imgHeight) + 'px';
    }, 100);
    
    
}

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        let topOffset;
        if (document.querySelector('.header-big').clientHeight > 10) topOffset = document.querySelector('.header-big').offsetHeight;
        else {
            topOffset = document.querySelector('.header-burger').offsetHeight;
            closeBurger();
        }
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

let burgerOpen = true;
document.querySelector('.header-burger .logo').addEventListener('click', (() => {
   closeBurger();
}));

function closeBurger() {
    let burgerImg = document.querySelector('.header-burger img');
    if (burgerOpen) {
        //burgerImg.src = 'assets/images/burger-close1.png';
        burgerOpen = false;
    }
    else {
        //burgerImg.src = 'assets/images/burger-icon.png';
        burgerOpen = true;
    }
    burgerImg.classList.toggle('header-burger-logo-close');
    document.querySelector('.header-burger nav').classList.toggle('header-burger-nav-hidden');

}