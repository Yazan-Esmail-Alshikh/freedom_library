let selected_book_content = ''

$(document).ready(function() {
    $('.shapes.square').click(function() {
        $(this).parent().parent().next().find('td').toggleClass('hide');
        $(this).toggleClass('shapes_active');
    })

    $('.shapes.circle').click(function() {
        $('.shapes.circle').removeClass('shapes_active');
        $(this).toggleClass('shapes_active');
        selected_book_content = $(this).parent().parent().next().find('td').html();
        var selected_circle_count = $('.shapes.circle.shapes_active').length;
        if(selected_circle_count)
            $('#show_form_btn').show();
    })

    $('#show_form_btn').click(function() {
        $('.form_sec').toggleClass('hide');
    })

    $('#send_form').submit(function(e) {
            e.preventDefault();
        $('.select_sec').hide();
        $('.selected_book').show();
        let selected_book_html = $('.selected_book').html();
        $('.selected_book').html(selected_book_html + selected_book_content);
        
    })


})