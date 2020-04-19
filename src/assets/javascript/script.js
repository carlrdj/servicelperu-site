$("#goToHome").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top}, 'slow');
});
AOS.init();
particlesJS.load('bannerParticles', './src/assets/library/particles/config/banner.json');
particlesJS.load('litleParticles1', './src/assets/library/particles/config/litle.json');
particlesJS.load('litleParticles2', './src/assets/library/particles/config/litle.json');
particlesJS.load('litleParticles3', './src/assets/library/particles/config/litle.json');


/**
 * Temporal
 */
document.getElementById('mainNav').innerHTML = `
<div class="container">
    <a class="navbar-brand" href="./">SERVICEL PERÚ</a>
    <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="./">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./us.html">Nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./service-ti.html">Servicios de TI</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Soluciones de TI</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./product-ti.html">Productos de TI</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./contact.html">Contacto</a>
            </li>
        </ul>
        <span class="navbar-text">
        </span>
    </div>
</div>
`


document.getElementById('mainFooter').innerHTML = `
<div class="container">
    <div class="row pb-3 pt-4 text-white" data-aos="zoom-out">
        <div class="col-xs-12 col-md-8">
            <label for="suscription">Inscritebe y recibe las mejores promociones y ofertas que tenemos para
                ti.</label>
            <div class="input-group mb-3">
                <input id="suscription" type="text" class="form-control"
                    placeholder="Ingresa tu correo y enterate de nuestras promociones y ofertas!"
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-warning" type="button" id="button-addon2">Enviar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row py-3 text-white">
        <div class="col-xs-12 col-md-6 col-lg-3" data-aos="zoom-out">
            <p class="h5">Empresa</p>
            <div class="blockquote-footer"></div>
            <ul>
                <li>Timeline</li>
                <li>Modelo Flexible</li>
                <li>Bolsa de Trabajo</li>
                <li>Casos de Éxito</li>
            </ul>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3" data-aos="zoom-out">
            <p class="h5">Outsourcing de TI</p>
            <div class="blockquote-footer"></div>
            <ul>
                <li>Service Desk</li>
                <li>Soporte en Sitio</li>
                <li>Soporte en Campo</li>
                <li>Admin. de Infraestructura</li>
            </ul>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3" data-aos="zoom-out">
            <p class="h5">Soluciones de TI</p>
            <div class="blockquote-footer"></div>
            <ul>
                <li>ManageEngine</li>
                <li>Virtualización</li>
                <li>Seguridad</li>
                <li>Almacenamiento</li>
                <li>Plataformas de TI</li>
                <li>Respaldo & Recuperación</li>
            </ul>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3" data-aos="zoom-out">
            <p class="h5">Productos de TI</p>
            <div class="blockquote-footer"></div>
            <ul>
                <li>Hardware</li>
                <li>Consumibles</li>
                <li>Software</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col text-white pb-3 text-right">
            © SERVICEL PERU S.A.C. 2020
        </div>
    </div>
</div>
`


document.getElementById('strategicAllies').innerHTML = `
<div class="container my-5">
                <div class="row">
                    <div class="col-12 text-center" data-aos="zoom-out">
                        <p class="h3">Nuestros aliados estratégicos</p>
                    </div>
                    <div class="col-12 text-center" data-aos="zoom-out">
                        <div class="container mt-3 pt-5 pr-5 pl-5">
                            <div class="row">                                
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - APC" class="img-fluid" src="./src/assets/image/png/apc.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Asus" class="img-fluid" src="./src/assets/image/png/asus.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Cannon" class="img-fluid" src="./src/assets/image/png/cannon.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Cisco" class="img-fluid" src="./src/assets/image/png/cisco.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Dell" class="img-fluid" src="./src/assets/image/png/dell.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Epson" class="img-fluid" src="./src/assets/image/png/epson.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Eset" class="img-fluid" src="./src/assets/image/png/eset.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Fortinet" class="img-fluid" src="./src/assets/image/png/fortinet.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - HP" class="img-fluid" src="./src/assets/image/png/hp.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - HP" class="img-fluid" src="./src/assets/image/png/hpl.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Intel" class="img-fluid" src="./src/assets/image/png/intel.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Kingston" class="img-fluid" src="./src/assets/image/png/kingston.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Kyosera" class="img-fluid" src="./src/assets/image/png/kyosera.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Lenovo" class="img-fluid" src="./src/assets/image/png/lenovo.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Lg" class="img-fluid" src="./src/assets/image/png/lg.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Microsoft" class="img-fluid" src="./src/assets/image/png/microsoft.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Qnap" class="img-fluid" src="./src/assets/image/png/qnap.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Samsung" class="img-fluid" src="./src/assets/image/png/samsung.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Seagate" class="img-fluid" src="./src/assets/image/png/seagate.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Toshiba" class="img-fluid" src="./src/assets/image/png/toshiba.png">
                                </div>
                                <div class="col-6 col-md-2 d-flex align-items-center">
                                    <img alt="SERVICEL PERU - Trendnet" class="img-fluid" src="./src/assets/image/png/trendnet.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
`