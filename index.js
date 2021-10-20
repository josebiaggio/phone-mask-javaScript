const createPhoneMask = () => {
    $('#phone').on('keyup', () => {
        const phone = $('#phone').val()

        const formattedPhone = phone
            // Digits only
            .replace(/\D/g, "")
            // Inserts parentheses in the first two digits
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            // Inserts a hyphen between the fourth and fifth digits
            .replace(/(\d)(\d{4})$/, "$1-$2")

        $('#phone').val(formattedPhone)
        // Sets maximum characters
        // 15 is equal to the number of characters: (99) 99999-9999
        $('#phone').attr('maxlength', '15')

        if($('#phone').val().length < 14) {
            $('p').text('Invalid phone number')
            $('p').css('color', 'red')
        } else {
            $('p').text('Valid phone number')
            $('p').css('color', 'green')
        }
    })
}

createPhoneMask()