<?php
//Begin Really Simple SSL key
define('RSSSL_KEY', 'hZEVrnLdezYI0V7gM96EWXOW3n8CH7ivhdMSKXvUT0DWq8hdjGbR6I0C4pAM0yNu');
//END Really Simple SSL key

define( 'WP_CACHE', true ); // Added by WP Rocket




define( 'RSSSL_SAFE_MODE', TRUE );
//Begin Really Simple SSL Server variable fix
   $_SERVER["HTTPS"] = "on";
//END Really Simple SSL 
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lyborcomuser_xa_26sbi' );
/** Database username */
define( 'DB_USER', 'lyborcomuser_ky_higlc' );
/** Database password */
define( 'DB_PASSWORD', 'sk1MxJUf9Gl+UP@u' );
/** Database hostname */
define( 'DB_HOST', 'localhost' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'VD2_-6jnPR9u_uFvP:85EZhbKL:QQw2Ou9B4h@4x7[ZL1N2;6Wf:*n:47SQj480A');
define('SECURE_AUTH_KEY', '8TM-)jHd4+-8_#cD69yb)9ptxFF3mWAmu5NBspW7c9VC7!Rh0g8y14@_EO*q741W');
define('LOGGED_IN_KEY', 'KE6UHK/X9Bv!PK9rR3du_B*%L]!*u-31k97:t9CNu37&Eu538Fr~3Q3wVy/#j/&d');
define('NONCE_KEY', ':5EO%D163K5#7h28*#I3+o09WHk9-L6Bu1I53)yfr89e7/7Q*&GZ8/AEFLXfV[Mg');
define('AUTH_SALT', 'TBCQ|KKJ6hfw;t3cf[SI%+EwRy[RApCizH3vlBM#1qx:FE0zB_av72Tbj4#[pL7E');
define('SECURE_AUTH_SALT', 'L_1*B+6QU0XK!08!#Wg%pTrbhOe[8+@o!8zI-N/;]Q27CX+3p|4z@u0]6WPi!F)B');
define('LOGGED_IN_SALT', ')(j&iIu67/P-4i#ycsF|X@3i80Z&lFSpWPLQSvkI(83+qm~t(Sr_*+NnQek49[u3');
define('NONCE_SALT', 'cnvOW([5]NFe-E1u)E)41N#1+8v2fb20vhwoh[X3f(lT;t9NUC4q~z0Tg|10m2#*');
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'nf1uv6yhv_';
/* Add any custom values between this line and the "stop editing" line. */
define('WP_ALLOW_MULTISITE', false);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';