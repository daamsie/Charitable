<?php
/**
 * Class responsible for loading packages.
 *
 * @package   Charitable/Classes/Charitable_Packages
 * @author    Eric Daams
 * @copyright Copyright (c) 2020, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.7.0
 * @version   1.7.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Charitable_Packages' ) ) :

	/**
	 * Charitable_Packages
	 *
	 * @since 1.7.0
	 */
	class Charitable_Packages {

		/**
		 * Packages.
		 *
		 * @since 1.7.0
		 *
		 * @var   array
		 */
		private $packages = array(
			'charitable-spamblocker' => '\\Charitable\\Packages\\SpamBlocker\\Domain\\Package',
		);

		/**
		 * Package directory.
		 *
		 * @since 1.7.0
		 *
		 * @var   string
		 */
		private $dir;

		/**
		 * Create class object.
		 *
		 * @since 1.7.0
		 */
		private function __construct() {
			$this->dir = charitable()->get_path( 'directory' ) . 'packages/';
		}

		/**
		 * Load packages.
		 *
		 * @since  1.7.0
		 *
		 * @return void
		 */
		public static function load() {
			$packages = new self();
			$packages->load_packages();
		}

		/**
		 * Load the packages.
		 *
		 * @since  1.7.0
		 *
		 * @return void
		 */
		public function load_packages() {
			foreach ( $this->packages as $package_name => $package_class ) {
				if ( ! $this->package_exists( $package_name ) ) {
					$this->missing_package( $package_name );
					continue;
				}

				if ( ! $this->package_is_valid( $package_class ) ) {
					$this->invalid_package( $package_name, $package_class );
					continue;
				}

				call_user_func( array( $package_class, 'init' ) );
			}
		}

		/**
		 * Checks whether a package is installed.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $package_name The package name.
		 * @return boolean
		 */
		public function package_exists( $package_name ) {
			return file_exists( $this->dir . $package_name );
		}

		/**
		 * Makes sure that the package is valid.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $package_class The package class.
		 * @return boolean
		 */
		public function package_is_valid( $package_class ) {
			return is_callable( array( $package_class, 'init' ) );
		}

		/**
		 * Print an error and show a notice when a package is not found.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $package_name The package name.
		 * @return void
		 */
		public function missing_package( $package_name ) {
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				error_log(  // phpcs:ignore
					sprintf(
						/* Translators: %s package name. */
						esc_html__( 'Missing the Charitable %s package', 'charitable' ),
						'<code>' . esc_html( $package_name ) . '</code>'
					) . ' - ' . esc_html__( 'Your installation of Charitable is incomplete. If you installed Charitable from GitHub, please run `composer install` to install packages', 'charitable' )
				);
			}

			add_action(
				'admin_notices',
				function() use ( $package_name ) {
					?>
					<div class="notice notice-error">
						<p>
							<strong>
								<?php
								printf(
									/* Translators: %s package name. */
									esc_html__( 'Missing the Charitable %s package', 'charitable' ),
									'<code>' . esc_html( $package_name ) . '</code>'
								);
								?>
							</strong>
							<br>
							<?php
							printf(
								/* translators: %s: code instruction */
								esc_html__( 'Your installation of Charitable is incomplete. If you installed Charitable from GitHub, please run %s in the Charitable directory to set up your development environment.', 'charitable' ),
								'<code>composer install</code>'
							);
							?>
						</p>
					</div>
					<?php
				}
			);
		}

		/**
		 * Print an error and show a notice when a package is invalid and can't be loaded.
		 *
		 * @since  1.7.0
		 *
		 * @param  string $package_name  The package name.
		 * @param  string $package_class The package class.
		 * @return void
		 */
		public function invalid_package( $package_name, $package_class ) {
			$message = sprintf(
				/* Translators: 1: package name. 2: required class method */
				esc_html__( 'The %1$s package is missing an %2$s method.', 'charitable' ),
				'<code>' . esc_html( $package_name ) . '</code>',
				'<code>' . esc_html( $package_class ) . '::init</code>'
			);

			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				error_log( $message );
			}

			add_action(
				'admin_notices',
				function() use ( $message ) {
					?>
					<div class="notice notice-error">
						<p>
							<strong><?php esc_html_e( 'Invalid package could not be installed.', 'charitable' ); ?></strong>
							<br><?php echo $message; ?>
						</p>
					</div>
					<?php
				}
			);
		}
	}

endif;
