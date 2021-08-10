<template>
      <section id="introSection" class="py-5">
        <h1 class="section-title text-center text-secondary mb-5">Intro</h1>
        <div class="container">
            <!-- 修正排版為三項排一排 -->
            <div class="row">
                <div class="col-md-4">
                    <div class="intro-box">
                        <div class="icon text-primary py-3">
                            <i class="fas fa-paper-plane fa-5x" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-secondary">Fast Deploy</h3>
                        <div class="intro-line bg-primary"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus aliquam dolor
                            sit hic quae!</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="intro-box">
                        <div class="icon text-primary py-3">
                            <i class="fas fa-briefcase fa-5x" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-secondary">Stable</h3>
                        <div class="intro-line bg-primary"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus aliquam dolor
                            sit hic quae!</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="intro-box">
                        <div class="icon text-primary py-3">
                            <i class="fas fa-gem fa-5x" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-secondary">Persistence</h3>
                        <div class="intro-line bg-primary"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus aliquam dolor
                            sit hic quae!</p>
                    </div>
                </div>
            </div>
            <!-- 設定此區塊距離上方5倍margin -->
            <!-- 修正排版在md時六個排一排 sm三個排一排 sm以下兩個排一排-->
            <div class="row mt-5">
                <div class="col-md-2 col-sm-4 col-6 text-center">
                    <i class="fas fa-tree fa-2x text-secondary" aria-hidden="true"></i>
                    <h5 class="mt-3 text-secondary">Cozy Office</h5>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                    <i class="fas fa-coffee fa-2x text-secondary" aria-hidden="true"></i>
                    <h5 class="mt-3 text-secondary">Free coffee bar</h5>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                    <i class="fas fa-id-card fa-2x text-secondary" aria-hidden="true"></i>
                    <h5 class="mt-3 text-secondary">Profesional Team</h5>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                    <i class="fas fa-language fa-2x text-secondary" aria-hidden="true"></i>
                    <h5 class="mt-3 text-secondary">Linguist</h5>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                    <i class="fas fa-rocket fa-2x text-secondary" aria-hidden="true"></i>
                    <h5 class="mt-3 text-secondary">Hackers Spirit</h5>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                    <i class="fas fa-graduation-cap fa-2x text-secondary" aria-hidden="true"></i>
                    <h5 class="mt-3 text-secondary">Self-Learning</h5>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

/*=============================================
=                  Intro                      =
=============================================*/
.intro-box,
.intro-line,
.intro-box .icon {
    transition: all .3s ease;
}

.intro-box:hover {
    background: white;
    box-shadow: 0px 22px 22px rgba(0,0,0,.25);
    bottom: 7px;
}

.intro-line {
    width: 20px;
    height: 6px;
    border-radius: 3px;
    margin: 10px auto;
}

.intro-box:hover .intro-line {
    width: 40px;
}

.intro-box .icon {
    transform: scale(.8);
}

.intro-box:hover .icon {
    transform: scale(1);
}

.intro-box {
    border-radius: 15px;
    margin-bottom: 15px;
    padding: 15px 15px;
    text-align: center;
    position: relative;
    bottom: 0px;
}
</style>
