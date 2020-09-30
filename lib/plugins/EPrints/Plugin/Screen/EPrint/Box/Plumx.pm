package EPrints::Plugin::Screen::EPrint::Box::Plumx;

our @ISA = ( 'EPrints::Plugin::Screen::EPrint::Box' );

use strict;

sub new
{
	my( $class, %params ) = @_;

        my $self = $class->SUPER::new(%params);

	$self->{class} = "ep_summary_box_Plumx";

	return $self;
}

sub can_be_viewed
{
        my( $self ) = @_;

        return 0 if $self->{session}->get_secure;
        return 0 if( !defined $self->{processor}->{eprint} );
        return 0 if( !$self->{session}->can_call( "plumx", "get_type_and_id" ) );
		
        return 1;
}

sub render
{
        my( $self ) = @_;

        my $session = $self->{session};

        my $frag = $session->xml->create_document_fragment;

        my ( $type, $id ) = $session->call( [ "plumx", "get_type_and_id" ], $self->{processor}->{eprint} );

        return $frag if ( !defined $type || !defined $id );

        my $div = $frag->appendChild( $session->make_element( 'div', id => 'plumx_summary_page', "data-plumx-id-type" => $type, "data-plumx-id" => $id, "data-plumx-type" => $session->config( 'plumx', 'type' ), "data-plumx-theme" => $session->config( 'plumx', 'theme' ), "data-plumx-style" => $session->config( 'plumx', 'style' ), "data-plumx-popup" => $session->config( 'plumx', 'popup' ), "data-plumx-hide" => $session->config( 'plumx', 'hide' ) ) );

	$frag->appendChild( $session->make_javascript( <<EOJ ) );
new EP_Plumx_Badge( 'plumx_summary_page' );
EOJ

        return $frag;
}

1;
