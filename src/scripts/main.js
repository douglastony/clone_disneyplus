document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    //alterando a visibility do icone e botao assine agora
    const heroSection = document.querySelector('.hero');  
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoScroll = window.scrollY;
        
        
        if (posicaoScroll < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }

    })

    //seções de atraçõees
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const tabTarget = botao.currentTarget.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAll();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            botao.currentTarget.classList.add('shows__tabs__button--is-active');
        })
    }

    //seção fac, acoordeon
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function abreOuFechaResposta(question) {
    const classe = 'faq__list__item--is-active';
    const elementoPai = question.target.parentNode;

    elementoPai.classList.toggle(classe); 

}       

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideAll (){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i=0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
} 

function ocultaElementosDoHeader (){
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader (){
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}