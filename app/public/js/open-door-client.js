'use strict';

$(document).ready(function(){
    $('a.btn-door').click(function(){

        var alertClass;
        var alertText;
        var url = $(this).data('href');
        $.ajax(url).done(function() {
            alertClass = 'success';
            alertText = 'The door has been successfully toggled!';
            raiseAlert(alertClass, alertText);
        }).fail(function() {
            alertClass = 'alert';
            alertText = 'Error toggling door!';
        }).complete(function(){
            raiseAlert(alertClass, alertText);
        });

    });
    $('#alert-row').on("click",'a.close',function(){
        $('#alert-row').html('');
    });

    var raiseAlert = function(alertClass, alertText) {
        var alertHtml;
        alertHtml =  '<div data-alert class="alert-box ' + alertClass + ' radius">' ;
        alertHtml += alertText;
        alertHtml += '<a href="#" class="close">&times;</a>'
        alertHtml += '</div>'
        $("#alert-row").html(alertHtml);
    };
});