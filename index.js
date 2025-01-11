const headerTemplate = `
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">Andrea Collier</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#hamburgerMode" 
        aria-controls="hamburgerMode" 
        aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse bg-body-tertiary" id="hamburgerMode">
            <ul class="navbar-nav mx-auto ">
                <li class="nav-item px-3">
                    <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item dropdown px-3">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Catalog
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./catalog.html" target="_blank">Featured Items</a></li>
                        <li><a class="dropdown-item" href="./custom_orders.html" target="_blank">Customized Orders</a></li>
                    </ul>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link" href="./contact_me.html" target="_blank">Contact Me</a>
                </li>
            </ul>
            <div class="navbar-nav">
                <ul class="navbar-nav me-auto">
                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#loginform"><img src="./assets/person.svg" height="45" width="45" alt="login icon"></a></li>
                    <li><a href="#"><img src="./assets/cart.svg" height="45" width="45" alt="cart icon"></a></li>
                </ul>
            </div>
    </div>
    </div>
</nav>
<!--MODAL-->
<div class="modal fade" id="loginform" tabindex="-1" aria-labelledby="loginform" aria-hidden="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="signInLabel">Login</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="container row-cols">
                        <input type="email" name="loginEmail" id="loginEmail" class="row container-fluid p-2" placeholder="your@email" required>
                        <input type="password" name="loginPassword" id="loginPassword" class="row container-fluid p-2" placeholder="password" required>
                        <div class="form-check row-cols justify-content-center">
                            <div class="col container-fluid">
                                <input class="form-check-input" type="checkbox" value="" id="loginCheckbox" />
                                <label class="form-check-label" for="loginCheckbox">Remember Me</label>
                            </div>
                            <div class="col container-fluid p-2">
                                <h6><a href="#">Forgot your password?</a></h6>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
            <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-secondary container" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary container">Login</button>
            </div>
        </div>
    </div>
</div>
`;

document.querySelector('.js-menu').innerHTML = headerTemplate;