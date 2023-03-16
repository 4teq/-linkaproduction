
//  This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

let kigorogoro;
let wendo_wa_ngia;
let gitekomba;
let ngia_2;

let ritho;
let mwizi_miwa;
let wiyumiririe;
let murega;
let wanjiku;

let vid_id = {
    kigorogoro: 'tndaseODuic',
    wendo_wa_ngia: 'huofVQr6fXI',
    gitekomba: 'IKIedi2Lxmc',
    wendo_wa_ngia_pt_2: 'PpdhBK1wBOc',
};

let shortF_id = {
    ritho_pt_1: 'RMSNj4UWsEc',
    mwizi_miwa: '5yjMxYFAc90',
    wiyumiririe: 'OH7RTyPTD7U',
    murega: '05FcLNLGqso',
    wanjiku: 'hWXDGgh5hPw',
};

function onYouTubeIframeAPIReady() {
    // kigorogoro
    kigorogoro = new YT.Player('kigorogoro', {
        videoId: 'tndaseODuic',
        playerVars: {
            'playsinline': 1
        },
        events: {

        }
    });

    // wendo wa ngia
    wendo_wa_ngia = new YT.Player('wendo_wa_ngia', {
        videoId: 'huofVQr6fXI',
        playerVars: {
            'playsinline': 1
        },
        events: {

            'onStateChange': pauseScroll,
        }
    });
    // gitekomba
    gitekomba = new YT.Player('gitekomba', {
        videoId: 'IKIedi2Lxmc',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onStateChange': pauseScroll,

        }
    });


    // ngia_pt_2
    ngia_2 = new YT.Player('ngia_2', {
        videoId: 'PpdhBK1wBOc',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onStateChange': pauseScroll,
        }
    });
    //********* carousels short films ********* */
    //Ritho rimenaga njamba
    ritho = new YT.Player('ritho', {
        videoId: `${shortF_id.ritho_pt_1}`,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onStateChange': carouselOnPlayPause,
        }
    });

    // mwizimiwa
    mwizi_miwa = new YT.Player('mwizimiwa', {
        videoId: `${shortF_id.mwizi_miwa}`,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onStateChange': carouselOnPlayPause,
        }
    });

    //wanjiku
    wiyumiririe = new YT.Player('wanjiku', {
        videoId: `${shortF_id.wanjiku}`,
        playerVars: {
            'playsinline': 1
        },
        events: {

            'onStateChange': carouselOnPlayPause,
        }
    });

    // murega akirwo
    murega = new YT.Player('murega', {
        videoId: `${shortF_id.murega}`,
        playerVars: {
            'playsinline': 1
        },
        events: {

            'onStateChange': carouselOnPlayPause,
        }

    });


    /* End carousels short films */



}
// function addResponsiveClass(event) {
//     $(event.target).addClass('embed-responsive-item');
// }

//  controlling modal videos : kigorogoro trailer
$('#kigorogoro-trailer').on('hide.bs.modal', () => {
    stopModalVideo(kigorogoro)
});



function carouselOnPlayPause(event) {
    let carousel = $(event.target.getIframe()).closest('div.carousel');
    let caption = $(event.target.getIframe()).closest('div.embed-responsive').next('div.carousel-caption');
   

    //if player is playing, pause carousel sliding
    if (event.data === 1) {
        carousel.carousel('pause');
        caption.addClass('display-none');
    
    }
    //if player is not playing, resume carousel sliding
    if (event.data !== 1) {
        carousel.carousel('cycle');
        caption.removeClass('display-none');
    }
    //if carousel slide (e.g. by pressing slide controls), pause player
    carousel.on('slid.bs.carousel', () => {
        event.target.pauseVideo();
    });

    //if player scrolls up and down and is almost to leave viewport and it is playing,
    // then pause the player
    let viewPortHeight = window.innerHeight;
    $(window).on('scroll', () => {
        if (event.data === 1) {
            let playerCoords = $(event.target.getIframe()).closest('div')[0].getBoundingClientRect();
            if (playerCoords.top > viewPortHeight * 0.9 || playerCoords.bottom < viewPortHeight * 0.1) {
                event.target.pauseVideo();
            }
        }
    });
}

function stopModalVideo(player) {
    let playerState = player.getPlayerState();
    if (playerState === 1 || playerState === 2) {
        player.stopVideo();
    }
}

function pauseScroll(event) {
    let viewPortHeight = window.innerHeight;
    $(window).on('scroll', () => {
        if (event.data === 1) {
            let playerCoords = $(event.target.getIframe()).closest('div')[0].getBoundingClientRect();
            if (playerCoords.top > viewPortHeight * 0.9 || playerCoords.bottom < viewPortHeight * 0.1) {
                event.target.pauseVideo();
            }
        }
    });
}


function addBorder(event) {
    $parentDiv = $(event.target.getIframe()).closest('div');
    if (event.data === 1) {
        $parentDiv.css({
            border: '2px dashed red'
        });
    }
}
