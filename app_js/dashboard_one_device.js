$( "#dashboard" ).click(function() {
  event.preventDefault();

    $.ajax({
        url: '/app_server/server.php?resp=2',
        dataType: 'json',
        success: function(resp) {
            console.log(resp);
            if (resp.count == 1) {
                var today = new Date();
                var birthdate = new Date(resp.birthdate);
                age = today.getFullYear()- birthdate.getFullYear();
                console.log(age);
                $("#main-container").replaceWith(
                    '<div id="main-container">'
                    +'<section class="content">'
                    +'  <div class="container-fluid">'
                    +'    <!-- Main row -->'
                    +'    <div class="row">'
                    +'      <!-- Left col -->'
                    +'      <section class="col-lg-12 connectedSortable" >'
                    +'        <!-- Custom tabs (Charts with tabs)-->'
                    +'        <div class="card card-default">'
                    +'            <div class="card-header">'
                    +'              <h3 class="card-title">'
                    +'                <i class="fas fa-mobile mr-1"></i>'
                    +'                Información del Dispositivo.'
                    +'              </h3>'
                    +'            <div class="card-tools">'

                    +'              <button type="button" class="btn btn-tool" data-card-widget="collapse">'
                    +'                <i class="fas fa-minus"></i>'
                    +'              </button>'
                    +'              <button type="button" class="btn btn-tool">'
                    +'                <i class="fas fa-sync"></i>'
                    +'              </button>'
                    +'            </div>'
                    +'            </div>'

                    +'          <!-- /.card-header -->'
                    +'          <div class="card-body"> '
                    +'            '
                    +'            <div class="row">'
                    +'              <div class="col-md-6">'
                    +'                <strong><i class="fas fa-user mr-1"></i> Nombre y Apellido</strong>'
                    +'                <p class="text-muted" id="name-child">'+ resp.name +'</p>'
                    +'                <hr>'
                    +'                <strong><i class="fas fa-calendar"></i> Edad</strong>'
                    +'                <p class="text-muted" id="age-child">'+ age +'</p>'
                    +'                <hr>'
                    +'                <strong><i class="fas fa-child"></i> Vinculo</strong>'
                    +'                <p class="text-muted" id="vin-child">'+ resp.relation +'</p>'
                    +'                <hr>'
                    +'                <strong><i class="far fa-file-alt mr-1"></i> Notas adicionales</strong>'
                    +'                <p class="text-muted" id="note-child">'+ resp.description_dependant +'</p>'
                    +'              </div>'
                    +'              <div class="col-md-6">'
                    +'                  <strong><i class="fas fa-book mr-1"></i> ID</strong>'
                    +'                  <p class="text-muted">'+ resp.results[0].user_id +'</p>'
                    +'                  <hr>'
                    +'                  <strong><i class="fas fa-mobile"></i> Modelo</strong>'
                    +'                  <p class="text-muted">'+ resp.results[0].model +'</p>'
                    +'                  <hr>'
                    +'                  <strong><i class="fas fa-battery-full"></i> Bateria</strong>'
                    +'                  <p class="text-muted">'+ resp.results[0].battery +'%</p>'
                    +'                  <hr>'
                    +'                  <strong><i class="fas fa-bell"></i> Ultima Actividad</strong>'
                    +'                  <p class="text-muted">'+ resp.results[0].last_activity +'</p>'
                    +'              </div>'
                    +'            </div>'

                    +'          </div>'
                    +'          <!-- /.card-body -->'

                    +'          </div>'
                    +'        <!-- /.card -->'
                    +'      </section>'
                    +'      <!-- /.Left col -->'
                    +'    </div>'
                    +'    <!-- /.row (main row) -->'
                    +'    <div class="row">'
                    +'      <!-- Left col -->'
                    +'      <section class="col-lg-6 connectedSortable" >'
                    +'        <!-- Custom tabs (Charts with tabs)-->'

                    +'        <!-- DIRECT CHAT -->'
                    +'        <div class="card direct-chat direct-chat-primary">'
                    +'          <div class="card-header">'
                    +'            <h3 class="card-title">Notificaciones</h3>'
                    +'            <div class="card-tools">'
                    +'              <span title="3 New Messages" class="badge badge-primary">3</span>'
                    +'              <button type="button" class="btn btn-tool" data-card-widget="collapse">'
                    +'                <i class="fas fa-minus"></i>'
                    +'              </button>'
                    +'              <button type="button" class="btn btn-tool">'
                    +'                <i class="fas fa-sync"></i>'
                    +'              </button>'

                    +'            </div>'
                    +'          </div>'
                    +'          <!-- /.card-header -->'
                    +'          <div class="card-body">'
                    +'            <!-- Conversations are loaded here -->'
                    +'            <div class="direct-chat-messages" style="height:450px">'
                    +'              <!-- Message. Default to the left -->'
                    +'              <div class="direct-chat-msg">'
                    +'                <div class="direct-chat-infos clearfix">'
                    +'                  <span class="direct-chat-name float-left">Alexander Pierce</span>'
                    +'                  <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>'
                    +'                </div>'
                    +'                <!-- /.direct-chat-infos -->'
                    +'                <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image">'
                    +'                <!-- /.direct-chat-img -->'
                    +'                <div class="direct-chat-text">'
                    +'                  Is this template really for free? Thats unbelievable!'
                    +'                </div>'
                    +'                <!-- /.direct-chat-text -->'
                    +'              </div>'
                    +'              <!-- /.direct-chat-msg -->'

                    +'              <!-- Message to the right -->'
                    +'              <div class="direct-chat-msg right">'
                    +'                <div class="direct-chat-infos clearfix">'
                    +'                  <span class="direct-chat-name float-right">Sarah Bullock</span>'
                    +'                  <span class="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>'
                    +'                </div>'
                    +'                <!-- /.direct-chat-infos -->'
                    +'                <img class="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image">'
                    +'                <!-- /.direct-chat-img -->'
                    +'                <div class="direct-chat-text">'
                    +'                  You better believe it!'
                    +'                </div>'
                    +'                <!-- /.direct-chat-text -->'
                    +'              </div>'
                    +'              <!-- /.direct-chat-msg -->'

                    +'              <!-- Message. Default to the left -->'
                    +'              <div class="direct-chat-msg">'
                    +'                <div class="direct-chat-infos clearfix">'
                    +'                  <span class="direct-chat-name float-left">Alexander Pierce</span>'
                    +'                  <span class="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>'
                    +'                </div>'
                    +'                <!-- /.direct-chat-infos -->'
                    +'                <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image">'
                    +'                <!-- /.direct-chat-img -->'
                    +'                <div class="direct-chat-text">'
                    +'                  Working with AdminLTE on a great new app! Wanna join?'
                    +'                </div>'
                    +'                <!-- /.direct-chat-text -->'
                    +'              </div>'
                    +'              <!-- /.direct-chat-msg -->'

                    +'              <!-- Message to the right -->'
                    +'              <div class="direct-chat-msg right">'
                    +'                <div class="direct-chat-infos clearfix">'
                    +'                  <span class="direct-chat-name float-right">Sarah Bullock</span>'
                    +'                  <span class="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>'
                    +'                </div>'
                    +'                <!-- /.direct-chat-infos -->'
                    +'                <img class="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image">'
                    +'                <!-- /.direct-chat-img -->'
                    +'                <div class="direct-chat-text">'
                    +'                  I would love to.'
                    +'                </div>'
                    +'                <!-- /.direct-chat-text -->'
                    +'              </div>'
                    +'              <!-- /.direct-chat-msg -->'

                    +'            </div>'
                    +'            <!--/.direct-chat-messages-->'

                    +'            <!-- Contacts are loaded here -->'
                    +'            <div class="direct-chat-contacts">'
                    +'              <ul class="contacts-list">'
                    +'                <li>'
                    +'                  <a href="#">'
                    +'                    <img class="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Avatar">'

                    +'                    <div class="contacts-list-info">'
                    +'                      <span class="contacts-list-name">'
                    +'                        Count Dracula'
                    +'                        <small class="contacts-list-date float-right">2/28/2015</small>'
                    +'                      </span>'
                    +'                      <span class="contacts-list-msg">How have you been? I was...</span>'
                    +'                    </div>'
                    +'                    <!-- /.contacts-list-info -->'
                    +'                  </a>'
                    +'                </li>'
                    +'                <!-- End Contact Item -->'
                    +'                <li>'
                    +'                  <a href="#">'
                    +'                    <img class="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Avatar">'

                    +'                    <div class="contacts-list-info">'
                    +'                      <span class="contacts-list-name">'
                    +'                        Sarah Doe'
                    +'                        <small class="contacts-list-date float-right">2/23/2015</small>'
                    +'                      </span>'
                    +'                      <span class="contacts-list-msg">I will be waiting for...</span>'
                    +'                    </div>'
                    +'                    <!-- /.contacts-list-info -->'
                    +'                  </a>'
                    +'                </li>'
                    +'                <!-- End Contact Item -->'
                    +'                <li>'
                    +'                  <a href="#">'
                    +'                    <img class="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Avatar">'

                    +'                    <div class="contacts-list-info">'
                    +'                      <span class="contacts-list-name">'
                    +'                        Nadia Jolie'
                    +'                        <small class="contacts-list-date float-right">2/20/2015</small>'
                    +'                      </span>'
                    +'                      <span class="contacts-list-msg">Ill call you back at...</span>'
                    +'                    </div>'
                    +'                    <!-- /.contacts-list-info -->'
                    +'                  </a>'
                    +'                </li>'
                    +'                <!-- End Contact Item -->'
                    +'                <li>'
                    +'                  <a href="#">'
                    +'                    <img class="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Avatar">'

                    +'                    <div class="contacts-list-info">'
                    +'                      <span class="contacts-list-name">'
                    +'                        Nora S. Vans'
                    +'                        <small class="contacts-list-date float-right">2/10/2015</small>'
                    +'                      </span>'
                    +'                      <span class="contacts-list-msg">Where is your new...</span>'
                    +'                    </div>'
                    +'                    <!-- /.contacts-list-info -->'
                    +'                  </a>'
                    +'                </li>'
                    +'                <!-- End Contact Item -->'
                    +'                <li>'
                    +'                  <a href="#">'
                    +'                    <img class="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Avatar">'

                    +'                    <div class="contacts-list-info">'
                    +'                      <span class="contacts-list-name">'
                    +'                        John K.'
                    +'                        <small class="contacts-list-date float-right">1/27/2015</small>'
                    +'                      </span>'
                    +'                      <span class="contacts-list-msg">Can I take a look at...</span>'
                    +'                    </div>'
                    +'                    <!-- /.contacts-list-info -->'
                    +'                  </a>'
                    +'                </li>'
                    +'                <!-- End Contact Item -->'
                    +'                <li>'
                    +'                  <a href="#">'
                    +'                    <img class="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Avatar">'

                    +'                    <div class="contacts-list-info">'
                    +'                      <span class="contacts-list-name">'
                    +'                        Kenneth M.'
                    +'                        <small class="contacts-list-date float-right">1/4/2015</small>'
                    +'                      </span>'
                    +'                      <span class="contacts-list-msg">Never mind I found...</span>'
                    +'                    </div>'
                    +'                    <!-- /.contacts-list-info -->'
                    +'                  </a>'
                    +'                </li>'
                    +'                <!-- End Contact Item -->'
                    +'              </ul>'
                    +'              <!-- /.contacts-list -->'
                    +'            </div>'
                    +'            <!-- /.direct-chat-pane -->'
                    +'          </div>'
                    +'          <!-- /.card-body -->'
                    +'        </div>'
                    +'        <!--/.direct-chat -->'

                    +'      </section>'
                    +'      <!-- /.Left col -->'
                    +'      <!-- right col (We are only adding the ID to make the widgets sortable)-->'
                    +'      <section class="col-lg-6 connectedSortable">'

                    +'        <!-- Custom tabs (Charts with tabs)-->'
                    +'        <div class="card card-default" >'
                    +'            <div class="card-header">'
                    +'              <h3 class="card-title">'
                    +'                <i class="fas fa-map-marker-alt mr-1"></i>'
                    +'                Última ubicación.'
                    +'              </h3>'
                    +'            <div class="card-tools">'

                    +'              <button type="button" class="btn btn-tool" data-card-widget="collapse">'
                    +'                <i class="fas fa-minus"></i>'
                    +'              </button>'
                    +'              <button type="button" class="btn btn-tool">'
                    +'                <i class="fas fa-sync"></i>'
                    +'              </button>'
                    +'            </div>'
                    +'            </div>'
                    +'            <!-- /.card-header -->'
                    +'            <div class="card-body">'
                    +'            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.3849060947628!2d-70.60772578426332!3d-33.51737690833752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0644a4f08a1%3A0xfe55c9da95c82fe1!2sVicu%C3%B1a%20Mackenna%206839%2C%20La%20Florida%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1620675922221!5m2!1ses!2scl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
                    +'            </div>'
                    +'            <!-- /.card-body -->'
                    +'          </div>'
                    +'        <!-- /.card -->'
                    +'      </section>'
                    +'      <!-- right col -->'
                    +'    </div>'
                    +'    <!-- /.row (main row) -->'
                    +'  </div><!-- /.container-fluid -->'
                    +'</section>'
                );
            }else{

                $("#main-container").replaceWith(
                '<div id="main-container">'
                +'<section class="content">'
                +'      <div class="container-fluid">'
                +'        <!-- Main row -->'
                +'        <div class="row">'
                +'          <!-- Left col -->'
                +'          <section class="col-lg-12 connectedSortable" >'
                +'            <!-- Custom tabs (Charts with tabs)-->'
                +'            <div class="card card-default">'
                +'                <div class="card-header">'
                +'                  <h3 class="card-title">'
                +'                    <i class="fas fa-mobile mr-1"></i>'
                +'                    Información del Dispositivo.'
                +'                  </h3>'
                +'                <div class="card-tools">'
                +'                  <button type="button" class="btn btn-tool" data-card-widget="collapse">'
                +'                    <i class="fas fa-minus"></i>'
                +'                  </button>'
                +'                  <button type="button" class="btn btn-tool">'
                +'                    <i class="fas fa-sync"></i>'
                +'                  </button>'
                +'                </div>'
                +'                </div>'
                +'              <!-- /.card-header -->'
                +'              <div class="card-body"> '
                +'                '
                +'                <div class="row">'
                +'                  <div class="col-md-12 qr-download">'
                +'                      <h2 class="page-header">Aun no cuentas con apoderados asociados a tu cuenta, por favor descarga la aplicación y sigue las instrucciones.</h2>'
                +'                    <img class="img-responsive img-circle cod-qr" src="../../dist/img/flowcode.png" alt="User profile picture">'
                +'                    <h3 class="profile-username text-center">Scanea el Código</h3>'
                +'                    <h4 class="profile-username text-center">ó</h4>'
                +'                    <a href="https://thirdeye.cl/monitor-now/" target="_blank" class="btn btn-primary btn-block"><b>Descargar</b></a>'
                +'                  </div>'
                +'                </div>'
                +'              </div>'
                +'              <!-- /.card-body -->'
                +'            </div>'
                +'            <!-- /.card -->'
                +'          </section>'
                +'          <!-- /.Left col -->'
                +'        </div>'
                +'        <!-- /.row (main row) -->'
                +'      </div><!-- /.container-fluid -->'
                +'    </section>'
                +'</div>'
                );
            }
        }
    });

$('#name-child').editable({
    mode: 'inline',
});

$('#age-child').editable({
    mode: 'inline',
    type: 'number',
});

$('#vin-child').editable({
    mode: 'inline',
    type: 'select',
    source: [
        {value: 1, text: 'Familia'},
        {value: 2, text: 'Conocido'},
        {value: 3, text: 'Otros'},


    ],
});

$('#note-child').editable({
    mode: 'inline',
    type: 'textarea'
});
});


