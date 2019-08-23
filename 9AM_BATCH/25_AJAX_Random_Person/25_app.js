let getUser = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let user = data.results[0];
            generateUserCard(user);
        }
    });
};
// call getUser for every second
setInterval(getUser,1000);

// generate User Card
let generateUserCard = (user) => {
    let userName = `${user.name.first} ${user.name.last}`;
    let userImage = `${user.picture.large}`;
    let userAge = `${user.dob.age} yrs`;
    let userAddress = `${user.location.city} ${user.location.state}`;

    let userCard = `<div class="col-md-8 m-auto">
                        <div class="card mt-3 animated flipInX">
                            <div class="card-body bg-primary">
                                <div class="row align-items-center">
                                    <div class="col-md-4 animated slideInDown">
                                        <img src="${userImage}" class="img-fluid img-thumbnail">
                                    </div>
                                    <div class="col-md-8 animated slideInUp">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                NAME : ${userName.toUpperCase()}
                                            </li>
                                            <li class="list-group-item">
                                                AGE : ${userAge}
                                            </li>
                                            <li class="list-group-item">
                                                ADDRESS : ${userAddress.toUpperCase()}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    $('#user-row').append(userCard);
};

