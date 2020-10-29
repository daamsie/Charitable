<?php
/**
 * Load the class.
 *
 * @package   Charitable SpamBlocker
 * @copyright Copyright (c) 2020, Eric Daams
 * @license   http://opensource.org/licenses/gpl-1.0.0.php GNU Public License
 * @version   1.0.0
 * @since     1.0.0
 */

namespace Charitable\Packages\SpamBlocker;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\Charitable\Packages\SpamBlocker\Package' ) ) :

	/**
	 * Package.
	 *
	 * @since 1.0.1
	 */
	class Package {

		/** Plugin version. */
		const VERSION = '1.0.0';

		/**
		 * Load the class.
		 *
		 * @since  1.0.0
		 *
		 * @return void
		 */
		public static function init() {
			return new SpamBlocker( __FILE__ );
		}
	}

endif;
