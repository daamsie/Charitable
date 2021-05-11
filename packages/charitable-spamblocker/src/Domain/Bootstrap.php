<?php
/**
 * Bootstrap the plugin functionality.
 *
 * @package   Charitable SpamBlocker
 * @copyright Copyright (c) 2020, Eric Daams
 * @license   http://opensource.org/licenses/gpl-1.0.0.php GNU Public License
 * @version   1.0.0
 * @since     1.0.0
 */

namespace Charitable\Packages\SpamBlocker\Domain;

use \Charitable\Packages\SpamBlocker\Admin\Settings as Settings;
use \Charitable\Packages\SpamBlocker\Modules\Modules as Modules;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The bootstrap class.
 *
 * @since 1.0.1
 */
class Bootstrap {

	/** Plugin version. */
	const VERSION = '1.0.4';

	/** The extension name. */
	const NAME = 'Charitable SpamBlocker';

	/** The extension author. */
	const AUTHOR = 'Studio 164a';

	/**
	 * Single static instance of this class.
	 *
	 * @since 1.0.0
	 *
	 * @var   \Charitable\Packages\SpamBlocker\SpamBlocker
	 */
	private static $instance = null;

	/**
	 * The src directory.
	 *
	 * @since 1.0.1
	 *
	 * @var   string
	 */
	private $src_dir;

	/**
	 * The root directory of the plugin.
	 *
	 * @since 1.0.0
	 *
	 * @var   string
	 */
	private $directory_path;

	/**
	 * The root directory of the plugin as a URL.
	 *
	 * @since 1.0.0
	 *
	 * @var   string
	 */
	private $directory_url;

	/**
	 * Create class instance.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->src_dir        = dirname( dirname( __FILE__ ) );
		$this->directory_path = plugin_dir_path( $this->src_dir );
		$this->directory_url  = plugin_dir_url( $this->src_dir );

		add_action( 'charitable_start', array( $this, 'start' ), 6 );
	}

	/**
	 * Returns the original instance of this class.
	 *
	 * @since  1.0.0
	 *
	 * @return \Charitable\Packages\SpamBlocker\SpamBlocker
	 */
	public static function get_instance() {
		return self::$instance;
	}

	/**
	 * Run the startup sequence on the charitable_start hook.
	 *
	 * This is only ever executed once.
	 *
	 * @since  1.0.0
	 *
	 * @return void
	 */
	public function start() {
		if ( $this->started() ) {
			return;
		}

		self::$instance = $this;

		$this->load_dependencies();
		$this->maybe_start_admin();
		// $this->setup_i18n();
		$this->attach_hooks_and_filters();

		/* Set up objects. */
		$this->modules = new Modules();

		/**
		 * Do something when the plugin is first started.
		 *
		 * @since 1.0.0
		 *
		 * @param \Charitable\Packages\SpamBlocker\SpamBlocker $plugin This class instance.
		 */
		do_action( 'charitable_spam_blocker_start', $this );
	}

	/**
	 * Load any other files.
	 *
	 * @since  1.0.0
	 *
	 * @return void
	 */
	public function load_dependencies() {
		require_once( $this->get_path( 'functions', true ) . '/core-functions.php' );
	}

	/**
	 * Load the admin-only functionality.
	 *
	 * @since  1.0.0
	 *
	 * @return void
	 */
	private function maybe_start_admin() {
		if ( ! is_admin() ) {
			return;
		}

		new Settings();
	}

	/**
	 * Set up the internationalisation for the plugin.
	 *
	 * @since  1.0.0
	 *
	 * @return void
	 */
	private function setup_i18n() {
		if ( class_exists( 'Charitable_i18n' ) ) {
			// I18n::get_instance();
		}
	}

	/**
	 * Set up hooks and filters.
	 *
	 * @since  1.0.0
	 *
	 * @return void
	 */
	private function attach_hooks_and_filters() {
	}

	/**
	 * Returns whether the plugin has already started.
	 *
	 * @since  1.0.0
	 *
	 * @return boolean
	 */
	public function started() {
		return did_action( 'charitable_spam_blocker_start' ) || current_filter() === 'charitable_spam_blocker_start';
	}

	/**
	 * Returns the plugin's version number.
	 *
	 * @since  1.0.0
	 *
	 * @return string
	 */
	public function get_version() {
		return self::VERSION;
	}

	/**
	 * Returns plugin paths.
	 *
	 * @since  1.0.0
	 *
	 * @param  string  $type          If empty, returns the path to the plugin.
	 * @param  boolean $absolute_path If true, returns the file system path. If false, returns it as a URL.
	 * @return string
	 */
	public function get_path( $type = '', $absolute_path = true ) {
		$base = $absolute_path ? $this->directory_path : $this->directory_url;

		switch ( $type ) {
			case 'functions':
				$path = $base . 'functions/';
				break;

			case 'admin-views':
				$path = $base . 'admin-views/';
				break;

			case 'assets':
				$path = $base . 'assets/';
				break;

			case 'templates':
				$path = $base . 'templates/';
				break;

			case 'directory':
				$path = $base;
				break;
		}

		return $path;
	}

	/**
	 * Throw error on object clone.
	 *
	 * This class is specifically designed to be instantiated once. You can retrieve the instance using charitable()
	 *
	 * @since  1.0.0
	 *
	 * @return void
	 */
	public function __clone() {
		charitable_spamblocker_deprecated()->doing_it_wrong(
			__FUNCTION__,
			__( 'Cloning this object is forbidden.', 'charitable-spam_blocker' ),
			'1.0.0'
		);
	}

	/**
	 * Disable unserializing of the class.
	 *
	 * @since  1.0.0
	 *
	 * @return void
	 */
	public function __wakeup() {
		charitable_spamblocker_deprecated()->doing_it_wrong(
			__FUNCTION__,
			__( 'Unserializing instances of this class is forbidden.', 'charitable-spam_blocker' ),
			'1.0.0'
		);
	}
}
