// Show error message, summary, add error class to form-group
function showErrors(groupID, errorMessage) {
    $(groupID).addClass('error');
    $(errorMessage).css('display', 'block');
    $('.error-summary').show().focus();
    $(document).scrollTop(0);
    validInput = false;
}

function hideErrors() {
    var validInput = '';
    $('.error-message').css('display', 'none');
    $('.error-summary').css('display', 'none');
    $('.error').removeClass('error');
}