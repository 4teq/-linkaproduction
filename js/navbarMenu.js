let $toggler = $('button.toggle_button');
        let drawer = $('div.menu_drawer')[0];
        let height = drawer.scrollHeight;
        
        let $nav = $('nav.nav_menu');
        let originalHeight = [];
        let breakPoint = 576;

        $toggler.on('click', () => {
            $nav.toggleClass('is-open');
            if (originalHeight.length === 0) {
                originalHeight.push(height);
            }
            if ($nav.hasClass('is-open')) {
                drawer.style.setProperty('height', `340px`);
            }
            else {
                drawer.style.setProperty('height', '0');
            }
            console.log(height);

        });


        $(window).on('resize', ()=>{
            let width = document.documentElement.scrollWidth;
            if(width >= breakPoint){
                drawer.style.setProperty('height', 'auto');
                if($nav.hasClass('is-open')){
                    $nav.removeClass('is-open');
                }
            }            
            
            if(width < breakPoint){
                drawer.style.setProperty('height', '0');
            }
            
        } );