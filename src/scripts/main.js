document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

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

