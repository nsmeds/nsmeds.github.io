// Not currently used in project. May try to get it working later but I think it's incompatible with my layout.

function scrollToTop(scrollDuration) {
    var   scrollHeight = window.scrollY,
            scrollStep = Math.PI / ( scrollDuration / 15 ),
            cosParameter = scrollHeight / 2,
            scrollCount = 0,
            scrollMargin;
    requestAnimationFrame(step);        
    function step () {
        setTimeout(function() {
            if ( window.scrollY != 0 ) {
                    requestAnimationFrame(step);
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            }
        }, 15 );
    }
}