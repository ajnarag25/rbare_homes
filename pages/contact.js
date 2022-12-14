// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/custom.module.css'
import Link from 'next/link';

function index(){
    
    return ( <div>
        
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
                    <Link className="nav-link" href="homes">Explore Homes</Link>
                </li>
                    <li class="nav-item">
                    <Link className="nav-link active" href="#">Contact</Link>
                </li>			
            </ul>		  
            </div>
        </div>
    </nav>
 
    <div className={styles.hero_contact}>
        <div className={styles.contact_right}>
        <h3 className={styles.titles}>Contact</h3>
        <br/>
        <p className={styles.ptag}>Contact us and we'll get back to you within 24 hours.</p>
        </div>
    </div>

    <div className="mt-4 p-5 text-center">
        <div className="row">
            
            <div className="col-md-4">
                <div className={styles.card_custom}>
                    <picture>
                        <img className={styles.logo} src={"./contact.jpg"} width="500" alt="" />
                    </picture>
                    
                </div>
            </div>
            <br/>
            <div className="col-md-8" id="readmore">
                <div className={styles.card_content}>
                <h4 className={styles.text_card}>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</h4>
                 <br/>
                 <hr/>
                 <div class="row">
                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="submit" method="POST">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" placeholder="Enter Name" class="form-control" required/>
                                        </div>
                                        <br/>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" placeholder="Enter Email" class="form-control" required/>
                                        </div>
                                        <br/>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" placeholder="Subject" class="form-control" required/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="5" placeholder="Message" class="form-control md-textarea" required></textarea>
                                        </div>
                                        <br/>
                                    </div>
                                </div>

                                <button className="btn btn-primary w-100">Send</button>
                            </form>
                            <div class="status"></div>
                        </div>
                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><box-icon name='map'></box-icon>
                                    <p>Main Office Monterra Homes, Imus</p>
                                </li>

                                <li><box-icon name='phone' ></box-icon>
                                    <p>(046) 437-7738, 09568326116</p>
                                </li>

                                <li><box-icon name='envelope' ></box-icon>
                                    <p>rbare_homes@gmail.com</p>
                                </li>
                            </ul>
                        </div>
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