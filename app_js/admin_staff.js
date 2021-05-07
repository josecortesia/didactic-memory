$( "#admin_staff" ).click(function() {
  event.preventDefault();

$("#main_container").replaceWith(
    '<section class="content">'
      +'<div class="container-fluid">'
        +'<div class="row">'
          +'<div class="col-12">'
            +'<div class="card">'
              +'<div class="card-header">'
                +'<h3 class="card-title col-10">Usuarios Registrados</h3>'
                +'<button type="button" data-toggle="modal" href="#add_user" class="btn btn-primary col-2">Agreagar Usuario <i class="fa fa-users"></i></button>'
              +'</div>'
              +'<!-- /.card-header -->'
              +'<div class="card-body">'
              +'<table id="users_table" class="table table-bordered table-hover">'
                +'<thead>'
                  +'<tr>'
                   + '<th>url</th>'
                   + '<th>username</th>'
                   + '<th>email</th>'
                   + '<th>is_staff</th>'
                  +'</tr>'
                +'</thead>'
               + '<tbody>'
                +'</tbody> '
                +'<tfoot>'
                  +'<tr>'
                   + '<th>url</th>'
                   + '<th>username</th>'
                   + '<th>email</th>'
                   + '<th>is_staff</th>'
                  +'</tr>'
                +'</tfoot>'
                +'</table>'
              +'</div>'
              +'<!-- /.card-body -->'
           +'</div>'
            +'<!-- /.card -->'


);


$('#users_table').dataTable({
  "ajax": "app_server/user.php",     
  "columns": [
    { "data": "url" },
    { "data": "username" },
    { "data": "email" },
    { "data": "is_staff" },
  ],
  "paging": true,
  "lengthChange": false,
  "searching": false,
  "ordering": true,
  "info": true,
  "autoWidth": false,
  "responsive": true,
});



});




