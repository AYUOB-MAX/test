$(document).ready(function() {
    $('.circle').each(function() {
        var percentage = $(this).data('percentage');
        var deg = percentage * 3.6;
        var blueColor = getComputedStyle(document.documentElement).getPropertyValue('--circle-blue-color');
        var secondBgColor = getComputedStyle(document.documentElement).getPropertyValue('--second-bg-color');
        
        if (percentage > 50) {
            $(this).css('background-image', `linear-gradient(90deg, ${blueColor} 50%, transparent 50%), linear-gradient(${deg - 90}deg, ${blueColor} 50%, ${secondBgColor} 50%)`);
        } else {
            $(this).css('background-image', `linear-gradient(${deg + 90}deg, ${secondBgColor} 50%, transparent 50%), linear-gradient(90deg, ${blueColor} 50%, ${secondBgColor} 50%)`);
        }
    });
} );
