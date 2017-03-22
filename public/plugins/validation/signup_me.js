/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */

const signup_me = function () {

    const inputs = $("#signupForm input");
    if (inputs.length) {
        $("#signupForm input").jqBootstrapValidation({
            preventSubmit: true,
            submitError: function ($form, event, errors) {
                console.log('Submit error!');
                console.log(errors);

                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append("<strong>Sorry! data in the form is not correctly entered.");
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('#signupForm').trigger("reset");
            },
            submitSuccess: function ($form, event) {
                console.log('Submit success!');
            },
            filter: function () {
                return $(this).is(":visible");
            },
        });

        $("a[data-toggle=\"tab\"]").click(function (e) {
            e.preventDefault();
            $(this).tab("show");
        });

        /*When clicking on Full hide fail/success boxes */
        $('#email').focus(function () {
            $('#success').html('');
        });
    }
};

export default signup_me;



