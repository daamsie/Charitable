<?php
/**
 * The template used to display the gateway fields.
 *
 * Override this template by copying it to yourtheme/charitable/donation-form/gateway-fields.php
 *
 * @author  Studio 164a
 * @package Charitable/Templates/Donation Form
 * @since   1.0.0
 * @version 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! isset( $view_args['form'] ) || ! isset( $view_args['field'] ) ) {
	return;
}

$form     = $view_args['form'];
$field    = $view_args['field'];
$classes  = $view_args['classes'];
$gateways = $field['gateways'];
$default  = isset( $field['default'] ) && isset( $gateways[ $field['default'] ] ) ? $field['default'] : key( $gateways );

?>
<fieldset id="charitable-gateway-fields" class="charitable-fieldset">
	<?php
	if ( isset( $field['legend'] ) ) :
		?>
		<div class="charitable-form-header"><?php echo $field['legend']; ?></div>
		<?php
	endif;

	if ( count( $gateways ) > 1 ) :
		?>
		<fieldset class="charitable-fieldset-field-wrapper">
			<div class="charitable-fieldset-field-header" id="charitable-gateway-selector-header"><?php _e( 'Choose Your Payment Method', 'charitable' ); ?></div>
			<ul id="charitable-gateway-selector" class="charitable-radio-list charitable-form-field">
				<?php foreach ( $gateways as $gateway_id => $gateway ) : ?>
					<?php foreach ( $gateway['payment_methods'] as $payment_method ) : ?>
						<li class="charitable-gateway-tab"><input type="radio"
								id="gateway-<?php echo esc_attr( $gateway_id ); ?>-<?php echo esc_attr( $payment_method->get_key() ); ?>"
								name="gateway-payment-method"
								class="charitable-<?php echo esc_attr( $gateway_id ); ?>-payment-method"
								value="<?php echo esc_attr( $gateway_id ); ?>-<?php echo esc_attr( $payment_method->get_key() ); ?>"
								aria-describedby="charitable-gateway-selector-header"
								<?php checked( $default, $payment_method->get_key() ); ?> />
							<label for="gateway-<?php echo esc_attr( $gateway_id ); ?>-<?php echo esc_attr( $payment_method->get_key() ); ?>">
								<?php echo $payment_method->get_icon(); ?>
								<?php echo $payment_method->get_label(); ?>
							</label>
						</li>
					<?php endforeach ?>
				<?php endforeach ?>
			</ul>
			<input type="hidden" name="gateway" value="" />
		</fieldset>
		<?php
	endif;

	foreach ( $gateways as $gateway_id => $details ) :
		if ( ! isset( $details['fields'] ) || empty( $details['fields'] ) ) :
			continue;
		endif;

		?>
		<div id="charitable-gateway-fields-<?php echo $gateway_id; ?>" class="charitable-gateway-fields charitable-form-fields cf" data-gateway="<?php echo $gateway_id; ?>">
			<?php $form->view()->render_fields( $details['fields'] ); ?>
		</div><!-- #charitable-gateway-fields-<?php echo $gateway_id; ?> -->
	<?php endforeach ?>
</fieldset><!-- .charitable-fieldset -->
