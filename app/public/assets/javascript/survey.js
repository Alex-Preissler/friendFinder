var name;
var photo;
var answers = [];

$('#sendAnswers').on('click', function(event) {
    
    event.preventDefault();

    name = $('#name').val().trim();
    photo = $('#photo').val().trim();

    for(var i=0; i<10; i++) {

        var id = '#' + i.toString();

        answers[i] = $(id).val().trim();
        answers[i] = parseInt(answers[i]);
    }

    var newUser = new userConstructor(name, photo, answers);

    $.post("/api/friends", newUser,
        function(data) {

            console.log(data);
            $('match-photo').attr('src', data.photo);
            $('match-name').text(data.name);

            $('#myModal').modal('show');

          
        });
    });
 
    

function userConstructor(name, photo, answers) {

    this.name = name;
    this.photo = photo;
    this.scores = answers;

};

