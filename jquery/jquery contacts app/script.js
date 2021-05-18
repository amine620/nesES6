$(document).ready(function () {
  $("#btn-fetch").click(function () {
    $.ajax({
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET",
      dataType: "json",
    }).done(function (data) {
      console.log(data);
      $.each(data, function (i, user) {
        $(".row").append(
          `<ul id='${user.id}' class="list-group col-md-4 mt-2">
                    <li class="list-group-item active">user number ${user.id}</li>
                    <li class="list-group-item"> ${user.username}</li>
                    <li class="list-group-item"> ${user.email}</li>
                    <li class="list-group-item"> ${user.phone}</li>
                    <li class="list-group-item">
                     <input type='hidden' value='${user.id}' >
                    <button class="btn btn-danger mt-2" onclick='deleteUser(${user.id})'>delete</button>
                    <button class="btn btn-warning mt-2" onclick='displayUserInFormInputs(${user.id})'>update</button>
                    </li>
                  </ul>`
        );
      });
    });
  });
});

$(".btn_add").click(function () {
  add();
});

function add() {
  let username_input = $("#username").val();
  let email_input = $("#email").val();
  let phone_input = $("#phone").val();
  $.ajax({
    url: "http://jsonplaceholder.typicode.com/users",
    method: "POST",
    dataType: "json",
    data: {
      username: username_input,
      email: email_input,
      phone: phone_input,
    },
  }).done(function (user) {
    console.log(user);
    $(".row").prepend(
      `<ul class="list-group col-md-4 mt-2">
                    <li class="list-group-item active">user number ${user.id}</li>
                    <li class="list-group-item">${user.username}/li>
                    <li class="list-group-item">${user.email}</li>
                    <li class="list-group-item">${user.phone}</li>

                    <li class="list-group-item">
                    <input type='hidden' value='${user.id}' >
                   <button class="btn btn-danger mt-2" onclick='deleteUser(${user.id})'>delete</button>
                   </li>

                  </ul>`
    );
  });
}

//click listener in jquery
// $('.row').click(function(e){
//     if(e.target.classList.contains('btn-danger'))
//     {
//         let id=e.target.previousElementSibling.value

//         $.ajax({
//             url:`http://jsonplaceholder.typicode.com/users/${id}`,
//             method:'DELETE',
//             dataType:'json',
//         }).done(function(res){
//             e.target.parentElement.parentElement.remove()
//         })

//     }
// })

function deleteUser(id) {
  $.ajax({
    url: `http://jsonplaceholder.typicode.com/users/${id}`,
    method: "DELETE",
    dataType: "json",
  }).done(function (res) {
    $(".row").click(function (e) {
      if (e.target.classList.contains("btn-danger")) {
        e.target.parentElement.parentElement.remove();
      }
    });
  });
}

let user_id;

function displayUserInFormInputs(id) {

user_id=id

 let username= $(`#${id}`).find("li:nth-child(2)").html();
 let email= $(`#${id}`).find("li:nth-child(3)").html();
 let phone= $(`#${id}`).find("li:nth-child(4)").html();

 $('#username').val(username)
 $('#email').val(email)
 $('#phone').val(phone)


 $(".btn_update").removeClass("desable");
 $(".btn_add").addClass("desable");

}




$(".btn_update").click(function () {
  $.ajax({
    url: `http://jsonplaceholder.typicode.com/users/${user_id}`,
    method: "PUT",
    dataType: "json",
    data: {
      username: $("#username").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
    },
  }).done(function (res) {
    $(`#${user_id}`).find("li:nth-child(2)").html(`${res.username}`);
    $(`#${user_id}`).find("li:nth-child(3)").html(`${res.email}`);
    $(`#${user_id}`).find("li:nth-child(4)").html(`${res.phone}`);

    console.log(res);
    clearInputsAndHideUpdateButton()
  });
});



function clearInputsAndHideUpdateButton() {
  $("#username").val("");
  $("#email").val("");
  $("#phone").val("");

  $(".btn_update").addClass("desable");
    $(".btn_add").removeClass("desable");
}
