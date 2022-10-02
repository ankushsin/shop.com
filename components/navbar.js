function navbar(){
    return `
    <div id="nav_container">
        <!-- 1st div -->
        <div id='logo'>
            <img src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="logo-img">
        </div>
        <!-- 2nd div -->
        <div>
            <div>
                  <select id="nav_select">
                <option value="All departments">All departments</option>
                <option value="Baby">Baby</option>
                <option value="Beauty">Beauty</option>
                <option value="Books">Books</option>
            </select>
            </div>
            <div>
                <input value="" type="text" id="searchbar" placeholder="Search SHOP.COM..."/>
            </div>
            <div>
                 <button id="search_btn">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0wzfU2Qo3se6_sPuee59AK8Kg54_x2sJAw&usqp=CAU" alt=""/>
            </button>
            </div>
        </div>
        <!-- 3rd div -->
        <div id="ad">
            <img src="https://img.shop.com/Image/header2013/usa-shopping-annuity-biotin-gummies-head-banner1664295986848.png" alt="">
        </div>
        <!-- 4th div -->
        <div>
            <div>
                <img id="nav_sidebutton" src="https://img.shop.com/Image/resources/images/icon-menu-24px.svg" alt="">
            </div>
            <div><p>Categories</p></div>
        </div>
        <!-- 5th div -->
        <div>
            <div><p>Exclusive Brands</p></div>
            <div><p>Stores</p></div>
            <div><p>Deals</p></div>
            <div><p>SHOP Travel</p></div>
            <div><p>Departments</p></div>
            <div><p>ShopBuddy</p></div>
            <div><p>SHOP Local</p></div>
        </div>
        <!-- 6th div -->
        <div id="right_nav">
            <div id="navsign-in">
                <div><img src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt=""></div>
                <div><p>Sign in</p></div>
            </div>
            <div>
                <div><img src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg" alt=""></div>
                <div><p>Orders</p></div>
            </div>
            <div>
                <div> <img src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" alt=""></div>
                <div> <p>Cart</p></div>
            </div>
        </div>
        <!-- modal section left-->
        <div class="bg_modal">
            <div class="modal_content">
                <div class="close"><img src="http://cdn.onlinewebfonts.com/svg/img_143760.png" alt=""></div>
                <div id="side_bar1">
                    <div>
                        <img src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg" alt=""/>
                    </div>
                    <div><h2>SHOP.COM</h2></div>
                </div>
                <div>
                    <h3>Categories</h3><br>
                    <p>Halloween</p><br>
                    <p>Featured Brand: Shark|Ninja</p><br>
                    <p>Newly Launched Products</p><br>
                    <p>Back to School</p><br>
                    <p>Gift Center</p><br>
                    <p>SHOP.COM Home Warranties</p><br>
                    <p>Onecart Exclusive Deals</p><br>
                    <p>Clothes</p><br>
                    <p>Shoes</p><br>
                    <p>SHOP Travel</p><br>
                    <p>All Stores</p><br>
                    <p>Halloween</p><br>
                    <h3>Account</h3>
                    <p>Track Orders</p><br>
                    <p>Reorder Items - updated</p><br>
                    <p>Help</p><br>
                </div>
            </div>
        </div>
        <!-- modal section of signin right -->
        <div id="nav_signin_right">
            <div class="nav_signin_content">
                <div class="side_bar_right">
                    <div class="close_signin"><img src="http://cdn.onlinewebfonts.com/svg/img_143760.png" alt=""></div>
                    <div id="acc">
                        <img src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt="">
                        <h1>Account</h1>
                    </div>
                    <hr>
                    <div><h3><a href="./login.html">Signin / login</a></h3></div>
                   <div><h3><a href="">Sing Up/Register</a></h3></div>
                </div>
            </div>
        </div>
    </div>`;
 }

export default navbar
