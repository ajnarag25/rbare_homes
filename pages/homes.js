// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/custom.module.css'
import Link from 'next/link';

function index(){
    return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
            <Link className={styles.custom_brand} href="#">RBare Homes Co.</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ">
                <li class="">
                    <Link className="nav-link" href="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link active" href="homes">Explore Homes</Link>
                </li>
                    <li class="nav-item">
                    <Link className="nav-link" href="contact">Contact</Link>
                </li>			
            </ul>		  
            </div>
        </div>
    </nav>
 
    <div className={styles.hero_house}>
        <div className={styles.contact_center}>
        </div>
    </div>

    <div className="mt-4 p-5 text-center">
        <div className="row">
            <h3 className={styles.titlehome}>Available Properties</h3>
            <div className="col-md-4" id="readmore">
                <br/>
                <div class="card" >
                    <picture>
                        <img className={styles.logo} src="./house1.jpg" width="" alt="" />
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Rbare - Elana House Model</h5>
                        <p class="card-text">S. Fernando Alazupar St.</p>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary w-100 btn-bg">Details</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4" id="readmore">
                <br/>
                <div class="card" >
                    <picture>
                        <img className={styles.logo} src="./house2.jpg" width="" alt="" />
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Rbare - Angelique House Model</h5>
                        <p class="card-text">M. Monterra Subd.</p>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary w-100 btn-bg">Details</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4" id="readmore">
                <br/>
                <div class="card" >
                    <picture>
                        <img className={styles.logo} src="./house3.jpg" width="" alt="" />
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Rbare - Exquisite House Model</h5>
                        <p class="card-text">Leopardo Gendur 7703 St.</p>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary w-100 btn-bg">Details</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4" id="readmore">
                <br/>
                <div class="card" >
                    <picture>
                        <img className={styles.logo} src={"./house4.jpg"} width="" alt="" />
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Rbare - Brinna sol House Model</h5>
                        <p class="card-text">023 Topert Hogep Nuber.</p>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary w-100 btn-bg">Details</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4" id="readmore">
                <br/>
                <div class="card" >
                    <picture>
                        <img className={styles.logo} src={"./house5.jpg"} width="" alt="" />
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Rbare - Molina Terra House Model</h5>
                        <p class="card-text">Monterra Residence 788 Fd St.</p>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary w-100 btn-bg">Details</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4" id="readmore">
                <br/>
                <div class="card" >
                    <picture>
                        <img className={styles.logo} src={"./house6.jpg"} width="" alt="" />
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Rbare - Polima Retro House Model</h5>
                        <p class="card-text">P. Retro St.</p>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary w-100 btn-bg">Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <footer class="text-center text-white mt-4 p-5">    
        <div class="text-center text-dark p-3">
            © 2022 All Rights Reserved:
        <Link className={styles.footer_link} href="#"> Rbare Homes Co.</Link>
        </div>
    </footer>
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>

)}
export default index;