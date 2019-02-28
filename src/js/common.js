
// jQuery(document).ready(function($) {
//     $(function() {
//         $('#add').on('click', function() {
//             let val = $('input').val();
//             if(val !== "") {
//                 let elem = $('<li></li>').text(val);
//                 $(elem).append("<button class='rem'>x</button>");
//                 $('#mylist').append(elem);
//                 $('input').val('');
//                 $(".rem").on("click", function() {
//                     $(this).parent().remove();
//                 });
//             }
//         });
//     });
    
// });

$(function() {
    $('#add').on('click', function() {
        let val = $('input').val();
        if(val !== "") {
            let elem = $('<li></li>').text(val);
            $(elem).append("<button class='rem'>x</button>");
            $('#mylist').append(elem);
            $('input').val('');
            $('.rem').on('click', function(){
                $(this).parent().remove();
            })
        }
    })
})