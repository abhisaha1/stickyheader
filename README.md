# Stickyheader

You might have noticed that many websites prefer to keep the headers of their website visible while scrolling, so that the navigation menu is always accessible. This can be achieved by making the position of the header, fixed. But this doesn't look elegant and trendy. jQuery Animated Sticky Header solves this problem with ease. It also adds animation to give a nice effect when you scroll, maintaining the rich effect of your website.

## Demo
http://ajaxtown.github.io/stickyheader/dist/

## Basic HTML Markup:
```html
<html>  

    <head>
    
        <style type="text/css">
            
            #header {
                padding: 30px;              
            }
            #container {                
                width: 1200px;
                margin: auto;           
            }
            
        </style>
        
    </head>
    
    <body>
        
        <div id="container">
            
            <!--The below header element can be outside of the container as well. 
                In that case, comment the paramer parentContainer
                in the javascript section-->
            <div id="header">
                <!-- Header Elements here. 
                        Like Logo, Menu, Contact, 
                            basically branding stuff.. -->
            </div>
            
            <div id="content">
                <!-- content goes here -->
            </div>
            
            
        </div>
    	
    </body>
    
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="jquery.stickyhead.min.js"></script>
<script type="text/javascript" src="jquery.easing.js"></script>

</html>
```

## Using the Plugin

```javascript
<script language="javascript">
		
	$(document).ready(function() {
		
		$("#header").stickyhead({
			parentContainer: $("#container"),
			speed: 600,
			easing: "easeOutElastic"				
		});
	
	});
	
</script>
```
A new class stickyhead gets added automatically in the header element. So you can customize your Sticky Header using CSS. A list of easing effects can be found here: http://jqueryui.com/resources/demos/effect/easing.html
