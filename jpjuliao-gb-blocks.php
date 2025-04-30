<?php

namespace JpjuliaoGbBlocks;

/**
 * Plugin Name:       Jpjuliao Gutenberg Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       jpjuliao-gb-blocks
 *
 * @package JpjuliaoGbBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function block_init() {

	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection(
			__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php'
		);
		return;
	}

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection(
			__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php'
		);
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}

add_action( 'init', __NAMESPACE__ . '\block_init' );
