<?php
// This file is generated. Do not modify it manually.
return array(
	'dialog' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jpjuliao-gb-blocks/dialog',
		'version' => '0.1.0',
		'title' => 'Dialog',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A dialog block for WordPress.',
		'keywords' => array(
			'dialog',
			'popup',
			'modal'
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'jpjuliao-gb-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./style.css',
		'viewScript' => 'file:./view.js',
		'viewStyle' => 'file:./view.css',
		'style' => 'file:./style.css',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => ''
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'description' => array(
				'type' => 'string',
				'default' => ''
			),
			'isOpen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'OK'
			)
		)
	),
	'hello-world' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jpjuliao-gb-blocks/hello-world',
		'version' => '0.1.0',
		'title' => 'Hello World',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'jpjuliao-gb-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
