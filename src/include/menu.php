<?php


$itemsToMenu = array(

    'about' => 'about',
    'infrastructure' => 'about',
    'panorama' => 'about',
    'docs' => 'about',
    'developer' => 'about',
    'partners' => 'about',
    'history' => 'about',
    'log' => 'about',
    'main-plan' => 'main-plan',
    'param-filter' => 'main-plan',
    'plan-filter' => 'main-plan',
    'plan-filter-detail' => 'main-plan',
    'flat-detail' => 'main-plan',
    'parking' => 'main-plan',
    'house-plan' => 'main-plan',
    'actions' => 'actions',
    'action-detail' => 'actions',
    'mortgage' => 'actions',
    'contacts' => 'contacts',
);


$menu = array(

    'about' => array(

        'name' => 'О проекте',
        'url' => 'about.php',
        'items' => array(

            array('name' => 'О жилом квартале', 'url' => 'about.php'),
            array('name' => 'План ЖК', 'url' => '#'),
            array('name' => 'Инфраструктура', 'url' => 'infrastructure.php'),
            array('name' => 'Панорама', 'url' => 'panorama.php'),
            array('name' => 'Документация проекта', 'url' => 'docs.php'),
            array('name' => 'О застройщике', 'url' => 'developer.php'),
            array('name' => 'Участники проекта', 'url' => 'partners.php'),
            array('name' => 'Дневники стройки', 'url' => 'log.php'),
            array('name' => 'История района', 'url' => 'history.php')
        )
    ),

    'main-plan' => array(

        'name' => 'Выбрать квартиру',
        'url' => 'main-plan.php',
        'items' => array(

            array('name' => 'Генплан', 'url' => 'main-plan.php'),
            array('name' => 'Выбрать по параметрам', 'url' => 'param-filter.php'),
            array('name' => 'Выбрать по планировке', 'url' => 'plan-filter.php'),
            array('name' => 'Выбрать машиноместо', 'url' => 'parking.php'),
            array('name' => 'Коммерческие помещения', 'url' => '#')
        )
    ),

    'actions' => array(

        'name' => 'Условия покупки',
        'url' => 'actions.php',
        'items' => array(

            array('name' => 'Ипотека', 'url' => 'mortgage.php'),
            array('name' => 'Акции', 'url' => 'actions.php'),
        )
    ),


    'news' => array(

        'name' => 'Новости',
        'url' => 'news.php',
        'items' => array(

            array('name' => 'Новости проекта', 'url' => '#'),
            array('name' => 'Новости компании', 'url' => '#'),
        )
    ),

    'contacts' => array(

        'name' => 'Офис продаж',
        'url' => 'contacts.php',
        'items' => array()
    )
    
);