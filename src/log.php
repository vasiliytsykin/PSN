<? include 'include/header.php'?>
    <div class="log-page">
        <h1 class="dark-green">Дневник стройки</h1>
        <div class="gallery">
            <div class="gallery__switch-over">
                <div class="gallery__switch">
                    <div class="switch__tab tab-1 active" data-tab="tab-1">очередь 1</div>
                    <div class="switch__tab tab-2" data-tab="tab-2">очередь 2</div>
<!--                    <div class="switch__tab tab-3" data-tab="tab-3">очередь 3</div>-->
                </div>
            </div>
            <div class="wrapper-main">
                <div class="wrapper-outer">
                    <div class="gallery__tabs">
                        <div class="gallery__tab tab-1 active">
                            <div class="gallery__item" data-progress="74">
                                <div class="item__graphics">
                                    <div class="item__graphics-inner" style="background-image: url(/img/log/house-1.png);">
                                        <div class="progress">
                                            <h4>Готовность</h4>
                                            <div class="percent">0%</div>
                                        </div>
                                        <div class="progress-bar" id="p-bar-1-1"></div>
                                    </div>
                                </div>
                                <div class="item__txt">
                                    <div class="item__txt-inner">
                                        <h2>Корпус 1</h2>
                                        <h5>Июнь 2016</h5>
                                        <p>
                                            Краткое описание этапов строительства.
                                            Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.
                                            This is Photoshop's version  of Lorem Ipsum.
                                            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                            lorem quis bibendum auctor, nisi elit. This is Photoshop's version
                                            of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit. velit auctor aliquet.
                                            auctor, nisi elit.
                                        </p>
                                    </div>
                                </div>
                                <div class="preview-over">
                                    <h4 class="from">I кв. 2017 г.</h4>
                                    <h4 class="to">II кв. 2018 г.</h4>
                                    <div class="preview">
                                        <div class="preview__items">
                                            <?
                                            $itemsCount = 3;
                                            for($i = 0; $i < $itemsCount; $i++){?>
                                                <a href="#log-popup<?=$i?>" class="preview__item" style="background-image: url(/img/log/popup-<?=(($i+1) % ($itemsCount + 1))?>.jpg);">
                                                    <div class="mask"></div>
                                                    <div class="date"><?=(($i+1) % 31)?>.02.2017</div>
                                                    <div class="log-gallery__popup mfp-hide" id="log-popup<?=$i?>">
                                                        <div class="big-slider popup__items">
                                                            <div class="popup__item" style="background-image: url(/img/log/popup-1.jpg);"></div>
                                                            <div class="popup__item" style="background-image: url(/img/log/popup-2.jpg);"></div>
                                                            <div class="popup__item" style="background-image: url(/img/log/popup-3.jpg);"></div>
                                                        </div>
                                                        <div class="date"><?=(($i+1) % 31)?>.02.2017</div>
                                                        <div class="desc">Проведение работ по закладке системы водоподготовки </div>
                                                    </div>
                                                </a>
                                            <?}?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-top"><a href="#">вернуться наверх</a></div>
    </div>
<? include 'include/footer.php'?>
