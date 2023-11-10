$(document).ready(function() {
    $('.header__burger').click(function(event) { //При клике добавляем класс active
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock') //Блокирует передвижение контента при открытом мению в режие мобильного устройства
    })
})