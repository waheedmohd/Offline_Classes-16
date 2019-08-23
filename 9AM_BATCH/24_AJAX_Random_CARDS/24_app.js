let getUser = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let user = data.results[0];
            displayUser(user);
        }
    });
};
// call getUser for every second
setInterval(getUser,1000);

// display User
let displayUser = (user) => {
    let username = `${user.name.first} ${user.name.last}`;
    let userImage = `${user.picture.large}`;
    let userAge = `${user.dob.age} yrs`;

    $('#user-img').attr('src' , userImage);
    $('#user-name').text(username);
    $('#user-age').text(userAge);
};