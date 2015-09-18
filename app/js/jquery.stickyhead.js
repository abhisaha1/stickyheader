/*
 * jQuery StickyHead v1.0 - http://ajaxtown.com/playground/stickyhead/
 *
 * 
 *
 * TERMS OF USE - jQuery StickyHead
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2014 Abhishek Saha
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

(function ( $ ) {
 
    $.fn.stickyhead = function( options ) { 
        
        var settings = $.extend({                      
            parentContainer: $("body"),
			speed: 100,
			easing: "linear"
        }, options );
		
		hw =  $(this).width();
        return this.each(function() {
			
			var header = $(this);
			
			$(window).scroll(function(){
				
				if ($(window).scrollTop() >= header.height()) {
				
				   pl = parseInt(header.css('padding-left'));
				   pr = parseInt(header.css('padding-right'));
				   
				   tp = pl + pr;
				   
				   header.width(settings.parentContainer.width() - tp);	
					
					if(!header.hasClass('stickyhead')) {
					   header.addClass('stickyhead').css({
							'position': 'fixed',
							'top':0,				
							'display': 'none',
							'z-index':999999
							//'-webkit-transition':'all 1s ease-in-out'
					   }).slideDown(settings.speed,settings.easing);
				   
				    }
				}
				else if ($(window).scrollTop() == 0)  {
					header.css({'position':'','top':'auto','display':''}).removeClass('stickyhead');
				}
			});
	 
		});
 
    };
 
}( jQuery ));