// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/custom.module.css'


function index(){
    return <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
            <a className={styles.custom_brand} href="#">RBare Homes Co.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ">
                <li class="">
                    <a className={styles.custom_links} href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a className={styles.custom_links} href="#">Contact</a>
                </li>
                    <li class="nav-item">
                    <a className={styles.custom_links} href="#">About  </a>
                </li>			
            </ul>		  
            </div>
        </div>
    </nav>
 
    <div>
        <img className="d-block w-100" src="house.png" alt="" />
        <h3 className={styles.textleft} >Dream it, <br/> Claim it.</h3>
    </div>

    <div className={styles.custom_jumbotron}>
        <div>
            
        </div>
    </div>

  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>



}
export default index;