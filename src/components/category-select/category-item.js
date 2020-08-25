/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
import { MenuItem, CheckboxControl } from '@wordpress/components';


/**
 * An individual campaign category item
 */
export class CategoryItem extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );
		this.toggleIsChecked = this.toggleIsChecked.bind( this );
	}

	/**
	 * Toggle the checked state of this item
	 */
	toggleIsChecked() {
		let newCheckedState = !this.props.isChecked;
		this.props.onChange(newCheckedState);
	}


	/**
	 * Render.
	 */
	render() {
		const { isChecked, category  } = this.props;

		return (
			<MenuItem 
				key={ category.id } 
				onClick={ this.toggleIsChecked } 
				className="charitable-category-list-card__item">
				<CheckboxControl
						checked={ isChecked }
						id={ 'campaign-category-' + category.slug }
						value={ category.slug }
						onChange={ this.toggleIsChecked }
						label={ category.name } 
						/>
					<span className="charitable-category-list-card__taxonomy-count">{ category.count }</span>

			</MenuItem>
			)
	}
}