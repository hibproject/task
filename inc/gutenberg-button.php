<?php

function bproject_gutenberg_button() {
    wp_register_script('bgutenberg-btn', get_template_directory_uri() . '/build/index.js', array('wp-blocks', 'wp-editor', 'wp-components'));

    register_block_type( 'bproject/custom-btn', array(
        'editor_script' => 'bgutenberg-btn',
        'style' => 'task'
    ) );
}
add_action('init', 'bproject_gutenberg_button');
