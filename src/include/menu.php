<?php

$menu = array(

    'about' => array(

        'name' => 'О проекте',
        'url' => 'about.php',
        'items' => array(

            array('name' => 'О жилом квартале', 'url' => 'about.php'),
            array('name' => 'План ЖК', 'url' => 'main-plan.php'),
            array('name' => 'Инфраструктура', 'url' => 'infrastructure.php'),
            array('name' => 'Панорама', 'url' => 'panorama.php'),
            array('name' => 'Документация проекта', 'url' => 'docs.php'),
            array('name' => 'О застройщике', 'url' => 'developer.php'),
            array('name' => 'Участники проекта', 'url' => 'partners.php'),
            array('name' => 'Дневники стройки', 'url' => '#'),
            array('name' => 'История района', 'url' => '#')
        )
    ),

    'main-plan' => array(

        'name' => 'Выбрать квартиру',
        'url' => 'main-plan.php',
        'items' => array(

            array('name' => 'Генплан', 'url' => 'main-plan.php'),
            array('name' => 'Выбрать по параметрам', 'url' => 'param-filter.php'),
            array('name' => 'Выбрать по планировке', 'url' => 'plan-filter.php'),
            array('name' => 'Выбрать машиноместо', 'url' => '#'),
            array('name' => 'Коммерческие помещения', 'url' => '#')
        )
    ),

    'mortgage' => array(

        'name' => 'Условия покупки',
        'url' => '#',
        'items' => array(

            array('name' => 'Ипотека', 'url' => '#'),
            array('name' => 'Акции', 'url' => 'actions.php'),
        )
    ),

    'news' => array(

        'name' => 'Новости',
        'url' => '#',
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