var EP_Plumx_Badge = Class.create( {

        initialize: function(id) {

		if( id == null )
			return;

		this.element = $( id );
		if( this.element == null )
			return;

		this.plumx_id = this.element.getAttribute( 'data-plumx-id' );
		this.plumx_id_type = this.element.getAttribute( 'data-plumx-id-type' );
		this.plumx_type = this.element.getAttribute( 'data-plumx-type' );
                this.plumx_theme = this.element.getAttribute( 'data-plumx-theme' );
		this.plumx_style = this.element.getAttribute( 'data-plumx-style' );
		this.plumx_hide = this.element.getAttribute( 'data-plumx-hide' );
		this.plumx_popup = this.element.getAttribute( 'data-plumx-popup' );
		this.plumx_badge = "false";
		this.plumx_js = null;
		
		if( this.plumx_id == null || this.plumx_id_type == null )
			return;
		if( this.plumx_hide == null )
			this.plumx_hide = "true";	
		if( this.plumx_type == null )
		{
			this.plumx_type = "plumx-details";
			this.plumx_js = "details";
		}
		if( this.plumx_js == null )
			this.plumx_js = this.plumx_type;
		if( this.plumx_popup == null )
                        this.plumx_popup = "right";
		if ( this.plumx_type == "plum-print-popup" ) {
			this.plumx_js = "popup";
			this.plumx_popup = "right";
		}
		else if ( this.plumx_type == "plum-print-popup-badge" ) {
			this.plumx_type = "plum-print-popup";
			this.plumx_js = "popup";
			this.plumx_badge = "true";
		}
		if( this.plumx_type == null )
			this.plumx_theme = "";
		else
			this.plumx_theme = "plum-" + this.plumx_theme;
		this.draw();
        },

	draw: function() {

                var plumx_a = new Element( 'a', 
			{ 
				'href': 'https://plu.mx/plum/a/?' + this.plumx_id_type + "=" + this.plumx_id, 
				'class': "plumx-" + this.plumx_type + " " + this.plumx_theme,
				'data-site': "plum",
				'data-hide-when-empty': "true",
				'data-badge': this.plumx_badge,
				'data-popup': this.plumx_popup,
				'data-hide-when-empty': this.plumx_hide
			} 
		);

		var plumx_load = new Element( 'img',
			{
				'src': '/style/images/loading.gif',
				'alt': 'Loading...'
			}
		);
		plumx_a.insert( plumx_load );

		var plumx_script = new Element( 'script',
			{
				'type': "text/javascript",
				'src': "//cdn.plu.mx/widget-"+this.plumx_js+".js"
			}
		);

		this.element.insert( plumx_a );
		this.element.insert( plumx_script );

		if ( this.plumx_style != null )
		{
			var plumx_stylesheet = new Element( 'link',
                        	{
					'rel': "stylesheet",
                                	'type': "text/css",
	                                'href': this.plumx_style
        	                }
                	);
			this.element.insert( plumx_stylesheet );
		}


	},

} );
