$(document).ready(function() {
    $('.block__title').click(function(event) { //При клике добавляем класс active
        if($('.block').hasClass('one')){ //проверяем что есть такой класс
            $('.block__title').not($(this)).removeClass('active'); //Удаляем класс active
            $('.block__text').not($(this).next()).slideUp(300); // Сворачиваем все элемент без класса active
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
})