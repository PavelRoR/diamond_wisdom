$(document).ready(function() {
    $("a.text-center, .to-table").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
    });
    $(".js-video").click(function() {
        var dataYoutube = $(this).attr('data-youtube');
        $(this).html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?showinfo=0&autoplay=1" frameborder="0" class="img-thumbnail" allowfullscreen></iframe>')
    });
});