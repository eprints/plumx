# PlumX

**PlumX** provides an EPrints Box Screen plugin that displays a PlumX widget.

By default this uses the *details* version of the PlumX plugin but can be reconfigured by setting ``$c->{plumx}->{type}`` to *summary*, *plum-print-popup* or *plum-print-popup-badge* for the different types of widget.  Ny default the default PlumX theme is used by can be reconfigured to use the *big-ben* or *liberty* themes instead.  There are further configuration options to use additional styling, in particular using */style/plumx_hide_box.css* to hide the surrounding box and a option to re-enable the display of a message if there is no data for the ID provided to PlumX.  If the *plum-print-popup* or *plum-print-popup-badge* types are selected the side that the popup is displayed can be configured by setting ``$c->{plumx}->{popup}``.
