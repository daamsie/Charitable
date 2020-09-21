/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { apiFetch } = wp;
import { MenuGroup } from '@wordpress/components';
import { CategoryItem } from './category-item';


/**
 * Display a list of campaign categories with checkboxes, counts and a search filter.
 */
export class CampaignCategorySelect extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			selectedCategories: props.selected_categories,
			firstLoad: true,
		}

		this.checkboxChange  = this.checkboxChange.bind( this );
	}

	/**
	 * Get the preview when component is first loaded.
	 */
	componentDidMount() {
		this.props.loadAvailableCategories();	
	}

	/**
	 * Handle checkbox toggle.
	 *
	 * @param Checked? boolean checked
	 * @param Categories array categories
	 */
	checkboxChange( checked, categories ) {
		let selectedCategories = this.state.selectedCategories;

		selectedCategories = selectedCategories.filter( category => ! categories.includes( category ) );

		if ( checked ) {
			selectedCategories.push( ...categories );
		}

		this.setState( {
			selectedCategories: selectedCategories
		} );

		this.props.update_category_setting_callback( selectedCategories );
	}

	/**
	 * Render the list of categories and the search input.
	 */
	render() {
		let label = null;
		const {  available_categories, loading_available_categories } = this.props;

		if ( this.props.label.length ) {
			label = <label>{ this.props.label }</label>;
		}

		return (
			<div className="charitable-campaign-categories-list">
				{ label }
				<CampaignCategoryList
					selectedCategories={ this.state.selectedCategories }
					checkboxChange={ this.checkboxChange }
					available_categories = { available_categories }
					loading_available_categories = { loading_available_categories }
					firstLoad={ this.state.firstLoad }
				/>
			</div>
		)
	}
}

/**
 * Fetch and build a tree of campaign categories.
 */
class CampaignCategoryList extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			categories: [],
			loaded: false,
			query: '',
		};

	}

	/**
	 * Render.
	 */
	render() {
		const { selectedCategories, checkboxChange, available_categories, loading_available_categories } = this.props;

		if ( loading_available_categories ) {
			return __( 'Loading categories', 'charitable' );
		}

		if ( 0 === available_categories.length ) {
			return __( 'No categories found', 'charitable' );
		}

		const handleCategoriesToCheck = ( isChecked, parent, categories ) => {
			let slugs = getCategoryChildren( parent, categories ).map( category => {
				return category.slug;
			} );

			slugs.push( parent.slug );

			checkboxChange( isChecked, slugs );
		}

		const getCategoryChildren = ( parent, categories ) => {
			let children = [];

			categories.filter( ( category ) => category.parent === parent.id ).forEach( function( category ) {
				children.push( category );
				children.push( ...getCategoryChildren( category, categories ) );
			} );

			return children;
		};

		const CategoryTree = ( { categories, parent } ) => {
			let filteredCategories = categories;

			return ( filteredCategories.length > 0 ) && (
				<MenuGroup>
					{ filteredCategories.map( ( category ) => (
						<CategoryItem 
							key = {'category-' + category.id}
							category={category}
							isChecked={ selectedCategories.includes( category.slug ) }
							onChange={ ( isChecked ) => handleCategoriesToCheck( isChecked, category, categories ) } />
					))}
				</MenuGroup>
			)
		}

		let categoriesData = available_categories;

		return (
			<div className="charitable-category-list-card__results">
				<CategoryTree categories={ categoriesData } parent={ 0 } />
			</div>
		);
	}
}