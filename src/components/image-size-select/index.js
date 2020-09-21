/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { apiFetch } = wp;

/**
 * Display a list of campaign categories with checkboxes, counts and a search filter.
 */
export class CampaignImageSizeSelect extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			selectedImageSize: props.selected_image_size,
			firstLoad: true,
		}

	}

	/**
	 * Handle checkbox toggle.
	 *
	 * @param Size string size
	 */
	checkboxChange( size ) {

		this.setState( {
			selectedImageSize: size
		} );
		
	}

	/**
	 * Update firstLoad state.
	 *
	 * @param Booolean loaded
	 */
	setFirstLoad( loaded ) {
		this.setState( {
			firstLoad: !! loaded
		} );
	}

	/**
	 * Render the list of categories and the search input.
	 */
	render() {
		let label = null;

		if ( this.props.label.length ) {
			label = <label>{ this.props.label }</label>;
		}

		return (
			<div className="charitable-campaign-image-size-list">
				{ label }
				<CampaignImageSizeList
					selectedImageSize={ this.state.selectedImageSize }
					firstLoad={ this.state.firstLoad }
					setFirstLoad={ this.setFirstLoad }
				/>
			</div>
		)
	}
}

/**
 * Fetch and build a list of image sizes.
 */
class CampaignImageSizeList extends Component {

	/**
	 * Constructor.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			selectedImageSize: '',
			loaded: false,
			query: '',
		};

		// this.updatePreview = this.updatePreview.bind( this );
		// this.getQuery      = this.getQuery.bind( this );
	}

	/**
	 * Get the preview when component is first loaded.
	 */
	componentDidMount() {
		// if ( this.getQuery() !== this.state.query ) {
		// 	this.updatePreview();
		// }
	}

	/**
	 * Update the preview when component is updated.
	 */
	componentDidUpdate() {
		// if ( this.getQuery() !== this.state.query && this.state.loaded ) {
		// 	this.updatePreview();
		// }
	}

	/**
	 * Get the endpoint for the current state of the component.
	 *
	 * @return string
	 */
	// getQuery() {
	// 	const endpoint = '/wp/v2/campaignCategories';
	// 	return endpoint;
	// }

	/**
	 * Update the preview with the latest settings.
	 */
	updatePreview() {
		// const self  = this;
		// const query = this.getQuery();

		// self.setState( {
		// 	loaded: false,
		// } );

		// apiFetch( { path: query } ).then( categories => {
		// 	self.setState( {
		// 		categories: categories,
		// 		loaded: true,
		// 		query: query
		// 	} );
		// } );
	}

	/**
	 * Render.
	 */
	render() {
		const { selectedImageSize } = this.props;

		const handleImageSizeChange = ( evt, size ) => {
			checkboxChange( size );
		}

		const sizes = [
			{key: 'thumb', name: 'Thumbnail'},
			{key: 'medium', name: 'Medium'},
			{key: 'large', name: 'Large'}
		];
	
			return (
				<ul>
					{ sizes.map( ( size ) => (
						<li key={ size.key } className="charitable-image-size-list-element__item">
							<label>
								<input type="checkbox"
									id= { 'campaign-image-size-' + size.key }
									value={ size.name }
									checked={ selectedImageSize === size.name }
									onChange={ ( evt ) => handleImageSizeChange( evt, size ) }
								/> { size.name }
							</label>
						</li>
					))}
				</ul>
			)
		}
	}
}