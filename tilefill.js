(function($) {

  $.fn.tilefill = function(options) {

  // set default settings
  var settings = $.extend({
    'tile_class' : '.tile'
  }, options);

  var container = this;
  var tile_class = settings.tile_class;
  var tiles = container.children(tile_class);

  var container_width = container.innerWidth();
  var container_height = container.innerHeight()

  var items_count = container.children().length;

  // set items per row to 3 by default
  var items_per_row = 3;

  // child_count of 3, 4, 5, 6 has 2 items per row
  if (items_count < 7) {
    items_per_row = 2;
  }

  // child count of 1, 2 has 1 item per row
  if (items_count < 3) {
    items_per_row = 1;
  }

  var row_count = Math.ceil(items_count / items_per_row);

  var item_width = Math.floor(container_width / items_per_row);
  var item_height = Math.floor(container_height / row_count);

  // apply height/width to children
  tiles.each(function() {
    $(this).css({
      'width': item_width+'px',
      'height': item_height+'px'
    })
  });

  // fix small gap problem by bumping the width of each row's last item
  // first check if normal rows fill the width of their container
  if ((item_width * items_per_row) < container_width) {
    // bump the width of the last item of each normal row by a few pixels
    tiles.each(function(e) {
      // start index at 1
      e++;
      // figure out amount to bump last square
      var bump = container_width - (item_width * items_per_row);
      if (!(e % items_per_row)) {
        $(this).css('width', item_width + bump);
      }
    });
  }

  // calculate number of items in last row
  var items_in_last_row = items_count % items_per_row;
  // items_in_last_row will return 0 if same as items_per_row
  if (items_in_last_row) {
    // loop through items in last row and have them fill the space, each
    // being of equal width
    var i;
    for (i = 0; i < items_in_last_row; i++) {
      // subtract 1 from length since eq starts at 0
      // bump height of last row to the height of the parent container
      tiles.eq($(tile_class).length - 1 - i).css({
        'width': container_width / items_in_last_row,
        'height': item_height + 
                  (container_height - item_height * row_count)+'px'
      });
    }

    // bump width of last item in last row to fill parent
    var last_row_item_width = Math.floor(container_width / items_in_last_row);
    var bump = container_width - last_row_item_width * items_in_last_row;
    $(tile_class).last().css('width', last_row_item_width + bump);
  }

  // maintain chainability
  return this;

  }

})(jQuery);
