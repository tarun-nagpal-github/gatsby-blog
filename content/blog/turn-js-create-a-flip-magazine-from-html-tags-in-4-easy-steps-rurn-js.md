---
title: Create a flip Magazine from HTML Tags in 4 easy Steps — Turn.js
description: >-
  We often come to a situation where we need to give awesome flip/book page
  effect to our HTML pages and make them look like real magazines…
date: '2018-07-11T15:50:38.730Z'
categories: []
keywords: []
slug: >-
  /@tarunnagpal78/create-a-flip-magazine-from-html-tags-in-4-easy-steps-turn-js-f8b32759dbab
---

![Turn JS](img\1__Q__yh__b9ns__t0PTd6C4CJkA.jpeg)
Turn JS

We often come to a situation where we need to give awesome flip/book page effect to our HTML pages and make them look like real magazines and books.

Recently, I have studied a library named Turn.js ([http://www.turnjs.com/](http://www.turnjs.com/)). This can make beautiful flip effects on the pages based on simple HTML.

It will make your content look like a real book or magazine using all the advantages of HTML5. It is a light weighted library (10Kb) with simple and clean API.

All you need to do is to provide a container and pass an ID to an HTML tag and you are good to go. All the elements (div, span, h1) in the container will become pages and your magazine/book is ready.

You can find the working Code [here](http://jsfiddle.net/A9a7E/14984/).

[http://jsfiddle.net/A9a7E/14984/](http://jsfiddle.net/A9a7E/14984/)

### **Below are the steps to achieve**

**Step 1 :-** Install the dependencies — We have to include the jQuery.
```
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="http://www.turnjs.com/lib/turn.min.js"></script>
```

**Step 2 :-** Add the HTML
```
<div id="flipbook">
    <div class="hard"> Turn.js </div>
    <div class="hard"></div>
    <div> Page 1 </div>
    <div> Page 2 </div>
    <div> Page 3 </div>
    <div> Page 4 </div>
    <div class="hard"></div>
    <div class="hard"></div>
</div>
```
**Step 3:-** Add the JavaScript
```
<script type="text/javascript">
    $("#flipbook").turn({
            width: 400,
            height: 300,
            autoCenter: true
   );
</script>
```

**Step 4** — Add the CSS

```
<style type="text/css">
		body{
		    overflow:hidden;
		}

		#flipbook{
		    width:400px;
		    height:300px;
		}

		#flipbook .page{
		    width:400px;
		    height:300px;
		    background-color:white;
		    line-height:300px;
		    font-size:20px;
		    text-align:center;
		}

		#flipbook .page-wrapper{
		    -webkit-perspective:2000px;
		    -moz-perspective:2000px;
		    -ms-perspective:2000px;
		    -o-perspective:2000px;
		    perspective:2000px;
		}

		#flipbook .hard{
		    background:#ccc !important;
		    color:#333;
		    -webkit-box-shadow:inset 0 0 5px #666;
		    -moz-box-shadow:inset 0 0 5px #666;
		    -o-box-shadow:inset 0 0 5px #666;
		    -ms-box-shadow:inset 0 0 5px #666;
		    box-shadow:inset 0 0 5px #666;
		    font-weight:bold;
		}

		#flipbook .odd{
		    background:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));
		    background-image:-webkit-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
		    background-image:-moz-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
		    background-image:-ms-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
		    background-image:-o-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
		    background-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);
		    -webkit-box-shadow:inset 0 0 5px #666;
		    -moz-box-shadow:inset 0 0 5px #666;
		    -o-box-shadow:inset 0 0 5px #666;
		    -ms-box-shadow:inset 0 0 5px #666;
		    box-shadow:inset 0 0 5px #666;
		    
		}

		#flipbook .even{
		    background:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));
		    background-image:-webkit-linear-gradient(left, #fff 95%, #dadada 100%);
		    background-image:-moz-linear-gradient(left, #fff 95%, #dadada 100%);
		    background-image:-ms-linear-gradient(left, #fff 95%, #dadada 100%);
		    background-image:-o-linear-gradient(left, #fff 95%, #dadada 100%);
		    background-image:linear-gradient(left, #fff 95%, #dadada 100%);
		    -webkit-box-shadow:inset 0 0 5px #666;
		    -moz-box-shadow:inset 0 0 5px #666;
		    -o-box-shadow:inset 0 0 5px #666;
		    -ms-box-shadow:inset 0 0 5px #666;
		    box-shadow:inset 0 0 5px #666;
		}
	</style> 
```
**Conclusion **— Turn.js is a fantastic library to create the flip effect using HTML sections. Although it provide the various features that may be hard to implement but it comes with a dependency of jQuery.

Apart from this, it is must try library for various use cases like news, magazines and other publication portals.
