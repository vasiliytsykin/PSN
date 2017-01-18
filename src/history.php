<? include 'include/header.php';

$events = array(

    array(
        'date' => 1971,
        'img' => '/img/history/event-1.png',
        'header' => 'Заголовок про событие',
        'desc' => 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat.'
    ),
    array(
        'date' => 1984,
        'img' => '/img/history/event-2.png',
        'header' => 'Заголовок про событие',
        'desc' => 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat.'
    ),
    array(
        'date' => 1997,
        'img' => '/img/history/event-3.png',
        'header' => 'Заголовок про событие',
        'desc' => 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat.'
    ),
    array(
        'date' => 2016,
        'img' => '/img/history/event-4.png',
        'header' => 'Заголовок про событие',
        'desc' => 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat.'
    )
)

?>
    <div class="history-page">
        <div class="big-figure circle"></div>
        <div class="big-figure circle green"></div>
        <div class="big-figure wave-left"></div>
        <div class="pattern shower light-green anim-pattern" data-pattern="shower"></div>
        <div class="pattern buggy dark-green anim-pattern" data-pattern="buggy"></div>
        <div class="pattern bird dark-green anim-pattern" data-pattern="bird"></div>
        <div class="pattern carrot light-green anim-pattern" data-pattern="carrot"></div>
        <div class="wrapper-main">
            <h1 class="dark-green">История района</h1>
            <div class="top-banner"></div>
            <div class="wrapper-inner">
                <div class="event-list">
                    <?foreach ($events as $event){?>
                        <div class="event">
                            <div class="event__img-over">
                                <div class="event__date"><?=$event['date']?></div>
                                <div class="event__img" style="background-image: url(<?=$event['img']?>);"></div>
                            </div>
                            <div class="event__txt">
                                <h2><?=$event['header']?></h2>
                                <div class="txt-trigger visible-sm visible-xs">Описание</div>
                                <p class="desc"><?=$event['desc']?></p>
                            </div>
                        </div>
                    <?}?>
                </div>
            </div>
        </div>
        <div class="scroll-top "><a href="#">вернуться наверх</a></div>
    </div>
<? include 'include/footer.php'?>
