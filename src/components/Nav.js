import React from 'react';

const Nav = () => {
    return (
<nav class="navbar is-primary is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <span className="navbar-item icon is-large"><i class="fas fa-chart-pie"></i></span>
        </div>
    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">
                Home
            </a>
        </div>
    </div>
</nav>
     );
}
 
export default Nav;
