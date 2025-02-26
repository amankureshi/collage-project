document.getElementById("navbar").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src="images/Tea_logo.png" class="logo" alt=""></a>
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto gap-2">
                    <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="shop.html">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="contact.html">Contact</a>
                    </li>
                    <button class="btn btn-theme text-white px-2">
                        <!-- <a class="text-dark text-decoration-none text-white" href="myaccount.html">My account<a /> -->
                        <a class="text-dark text-decoration-none text-white" href="myaccount.html"><img
                                src="https://img.icons8.com/?size=100&id=7819&format=png" width="30" alt=""><a />
                    </button>
                </ul>
            </div>
        </div>
    </nav>
`;
