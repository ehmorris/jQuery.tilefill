# jQuery.tilefill

### About

jQuery.tilefill will tile the children of a container so that they fill the height and width of their parent. The parent can have a static width / height or a fluid width / height.

### To Use

* copy tilefill.js and tilefill.css somewhere into your project
* link to jquery and tilefill.js in that order in your &lt;head&gt;
* link to tilefill.css somewhere in your &lt;head&gt;
* on page load, call the tilefill function on the element whose children you want tiled

```javascript
$(function() {
  $('.container').tilefill();
});
```

### Options

You can currently set the child element which tilefill targets. It currently defaults to .tile

Here's an example of overriding the default value:

```javascript
$(function() {
  $('.container').tilefill({
    'tile_class' : '.class'
  });
});
```

Note: tilefill.css applies default styles to the a container with a class .tilefill and children with a class .tile. If you change the tile_class when calling tilefill, be sure to change the css as well.

Check back or "watch" for updates!

