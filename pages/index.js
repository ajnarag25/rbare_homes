// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/custom.module.css'


function index(){
    return <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
            <Link className={styles.custom_brand} href="#">RBare Homes Co.</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ">
                <li class="">
                    <Link className="nav-link active" href="#">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" href="homes">Explore Homes</Link>
                </li>
                    <li class="nav-item">
                    <Link className="nav-link" href="contact">Contact  </Link>
                </li>			
            </ul>		  
            </div>
        </div>
    </nav>
 
    <div className={styles.hero_bg}>
        <div className={styles.textleft}>
        <h3 className={styles.titles}>Dream it, <br/> Claim it.</h3>
        <br/>
        <p className={styles.ptag}>Experience the best real-estate service.</p>
        <br/>
        <form action="#readmore">
        <button type="submit" className={styles.custom_button}>Read More</button>   
        </form>
        </div>
    </div>

    <div className="mt-4 p-5 text-center">
        <div className="row">
            
            <div className="col-md-4">
                <div className={styles.card_custom}>
                    <img className={styles.logo} src="./side_house.jpg" width="500" alt="" />
                </div>
            </div>
            <br/>
            <div className="col-md-8" id="readmore">
                <div className={styles.card_content}>
                <h1 className={styles.text_card}>RBare Homes Affordable House <br/> and Lot in Sta. Cruz, Laguna</h1>
                 <br/>
                 <hr/>
                 <p className={styles.p_card}>Known as the Home of Kesong Puti, Sta. Cruz city is an urbanized town at th
                 e heart of Laguna. The town has been the center of commercial businesses in the eastern part of the province.
                 As a result, the town boasts of recreational tourist spots and a plaza, <br/> wherein jeepneys from different locations in
                 Laguna can be easily accessed.
                </p>
                <form action="homes">
                    <button type="submit" class="btn btn-primary w-100 btn-bg">View Available House & Lot</button>
                </form>
                   
                </div>
               
            </div>
        </div>
    </div>

    <div className="mt-4 p-5 text-center">
        <h3 className={styles.titleteam}>Meet Our Team</h3>
        <br/>

        <div className="row">
        <br/>
            <div className="col-md-4">
                <img className={styles.teampic} src="./seph.jpg" width="300" alt="" />
                <br/><br/>
                <p className={styles.ptag}>Joseph John Azupardo</p>
            </div>
            <div className="col-md-4">
                <img className={styles.teampic} src="./mel.jpg" width="300" alt="" />
                <br/><br/>
                <p className={styles.ptag}>Melisa Manalili</p>
            </div>
            <div className="col-md-4">
                <img className={styles.teampic} src="./aj.png" width="300" alt="" />
                <br/><br/>
                <p className={styles.ptag}>Aj Narag</p>
            </div>
        </div>
       
        <br/>
        <div className="row  justify-content-center">

            <div className="col-md-4">
                <img className={styles.teampic} src="./rai.jpg" width="300" alt="" />
                <br/><br/>
                <p className={styles.ptag}>Raiza Gumarang</p>
            </div>
            <div className="col-md-4 align-self-center">
                <img className={styles.teampic} src="./sey.jpg" width="300" alt="" />
                <br/><br/>
                <p className={styles.ptag}>Kazzeah Mae Permejo</p>
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



}
export default index;