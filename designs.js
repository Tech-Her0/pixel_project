// Select color input
// Select size input
var tall, wide, paint;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    tall= $('#inputHeight').val();
    wide= $('#inputWidth').val();
    makeGrid (tall, wide);

});

function makeGrid(l,h) {
    $('tr').remove();
// Your code goes here!
    for (var i=1; i<=l; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j =1; j <=h; j++) {
            $('#table' + i).append('<td></td>');
    }
}

//add color to cells
$('td').click (function cellColor(){
    paint = $('#colorPicker').val();

    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
        $(this).attr('style', 'background-color:' + paint);
    }

})

}
