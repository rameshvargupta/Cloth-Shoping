
import React from 'react'
import SliderComponent from './SliderComponent'

const Navbar = () => {
    return (
        <div>
            <div className="row box1">
                <div className="col-9">
                  <span> <i class="fa fa-phone mx-2"></i>
                    +91 75230 620 30 </span> <span><i className='fa fa-address-card-o mx-2'></i>rameshvargupta86@gmail.com </span>
                </div>
                <div className="col-3">
                    <i class="fa fa-facebook mx-2"></i>
                    <i class="fa fa-instagram mx-2"></i>
                    <i class="fa fa-envelope mx-2"></i>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg " id='navbar1'>
                <div class="container-fluid">
                    <a class="navbar-brand mx-5 fs-3" href="#">Gupta Store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-around " id="navbarSupportedContent">
                        <ul class="navbar-nav me-1 mb-2 mb-lg-0 fs-5">


                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">My Account</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
            <SliderComponent />
        </div>
    )
}

export default Navbar
