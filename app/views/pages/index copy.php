<?php require APPROOT . '/views/inc/header.php'; ?>
    <header>
        <div class="left">
            <img src="<?php echo URLROOT."/images/logo.svg";?>" alt="MAZWEB Design and development logo" class="logo">
        </div>
        <div class="right"></div>
        
    </header>
    <div class="sidebar">
        <div class="top"></div>
        <div class="nav">
                <div class="nav-item">
                    <div class="veil"></div>
                    <a class="nav-link" href="http://www.google.com">HOMEPAGE</a>
                    <a class="big-link" href="http://www.yahoo.com">HOMEPAGE</a>
                </div>
                <div class="nav-item">
                    <div class="veil"></div>
                    <a class="nav-link" href="">SERVICES</a>
                    <a class="big-link" href="" href="">SERVICES</a>
                </div>
                <div class="nav-item">
                    <div class="veil"></div>
                    <a class="nav-link" href="">WORKS</a>
                    <a class="big-link" href="" href="">WORKS</a>
                </div>
                <div class="nav-item">
                    <div class="veil"></div>
                    <a class="nav-link" href="">CONTACT</a>
                    <a class="big-link" href="" href="">CONTACT</a>
                </div>
        </div>
        <div class="bottom"></div>
    </div>
    <main class="container">

        <article class="article one">
            <div class="spacer"></div>
            <div class="content">
                <div class="banner">
                    <img src="<?php echo URLROOT.'/images/banner.svg';?>" alt="MAZ Web Design and Development">
                </div>
                <div class="wrapper">
                    <div class="article-left">
                        <h1>Design <span style="color: var(--green);">+</span><br>Development</h1>
                    </div>
                    <div class="article-right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempora minima aliquid temporibus magni molestiae.</p>
                        <br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure alias doloribus amet corporis, rerum a ipsum?</p>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>
        </article>

        <article class="article">
            <div class="spacer"></div>
            <a href="">Article 2</a>
        </article>

    </main>
    <footer>
        <div class="left"></div>
        <div class="right"></div>
    </footer>

<?php require APPROOT . '/views/inc/footer.php'; ?>
