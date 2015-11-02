$('.video-player').click(function() {
    var player = $(this),
        url = player.attr('data-url'),
        img = player.children('img');
    if (url && !player.hasClass('playing')) {
        $('<iframe frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
            .attr('src', url)
            .attr('width', img.width())
            .attr('height', img.height())
            .appendTo(player);
        player.addClass('playing');
    }
});
