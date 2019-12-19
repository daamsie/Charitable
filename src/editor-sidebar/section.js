import { Component } from '@wordpress/element';
import { PanelBody, BaseControl, TextControl, DatePicker, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const CACHE = {};

export class Section extends Component {
	constructor() {
        super( ...arguments );

		this.getField         = this.getField.bind( this );
		this.getMatchedField  = this.getMatchedField.bind( this );
		this.getSectionFields = this.getSectionFields.bind( this );
		this.getTextField     = this.getTextField.bind( this );
		this.getNumberField   = this.getNumberField.bind( this );
		this.getCachedValue   = this.getCachedValue.bind( this );
		this.getDateField     = this.getDateField.bind( this );
	};

	/**
	 * Get a cached value.
	 */
	getCachedValue( field, fallback ) {
		return CACHE.hasOwnProperty( field ) ? CACHE[field] : fallback;
	}

	/**
	 * Add section's fields.
	 */
	getSectionFields() {
		const { section } = this.props;
		const fields = CHARITABLE_EDITOR_SIDEBAR.fields.filter( field => {
			return section.key === field.section;
		} );

		return fields;
	}

	/**
	 * Add a single field with a toggle.
	*/
	getField( field ) {
		let value = this.props[field.field];

		if ( field.toggle ) {
			if ( value === 0 || value === "" ) {
				value = null;
			}

			return (
				<>
					<ToggleControl
						key={ field.field + '-toggle' }
						label={ field.toggle_label }
						checked={ value !== null }
						onChange={ (checked) => {
							const date = checked ? this.getCachedValue( field.field, field.toggle_fallback ) : 0;
							this.props.onMetaFieldChange( date, field.field );
						} }
					/>
					{ value && this.getMatchedField( field, value ) }
				</>
			);
		}

		return this.getMatchedField( field, value );
	}

	/**
	 * Get the correct field, given the type.
	 */
	getMatchedField( field, value ) {
		switch( field.type ) {
			case 'date':
			case 'datepicker':
				return this.getDateField( field, value );

			case 'number':
				return this.getNumberField( field, value );

			default:
				return this.getTextField( field, value );
		}
	}

	/**
	 * Add a Text field.
	*/
	getTextField( field, value ) {
		return (
			<TextControl
				key={ field.field }
				label={ field.label }
				value={ value }
				onChange={ (value) => this.props.onMetaFieldChange( value, field.field ) }
			/>
		)
	};

	/**
	 * Add a Number field.
	*/
	getNumberField( field, value ) {
		return (
			<BaseControl
				key={ field.field }
				id={ 'number-' + field.field }
				label={ field.label }
			>
				<input
					type="number"
					value={ value }
					onChange={ (value) => this.props.onMetaFieldChange( value, field.field ) }
				/>
			</BaseControl>
		)
	};

	/**
	 * Add a Date field.
	*/
	getDateField( field, value ) {
		return (
			<DatePicker
				key={ field.field }
				currentDate={ value }
				onChange={ (value) => this.props.onMetaFieldChange( value, field.field ) }
			/>
		)
	};

	/**
	 * Render the component.
	 */
	render() {
		console.log( this.props );
		const { section } = this.props;

		return (
			<PanelBody title={ section.label } key={ section.key } >
				<>
					{
						this.getSectionFields().map( field => this.getField( field ) )
					}
				</>
			</PanelBody>
		);
	};
}

export default Section;