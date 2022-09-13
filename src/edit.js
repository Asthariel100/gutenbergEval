/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */



export default function Edit(props) {
	function updateAlertMessage(event){
		props.setAttributes({alertMessage: event.target.value})
	}
	
	function updateAlertClass(event){
		props.setAttributes({alertClass: event.target.value})
	}

	return (

		
		
React.createElement("div", null, React.createElement("input", {
	type: "text",
	value: props.attributes.alertMessage,
	selected: props.attributes.alertMessage,
	onChange: updateAlertMessage
  }), React.createElement("select", {
	name: "bscolor",
	id: "alertMessageSelector",
	onChange: updateAlertClass
  }, React.createElement("option", {
	value: "primary"
  }, "--Please choose an option--"), React.createElement("option", {
	value: "alert alert-primary alert-dismissible",
  }, "Primary"), React.createElement("option", {
	value: "alert alert-secondary alert-dismissible"
  }, "Secondary"), React.createElement("option", {
	value: "alert alert-success alert-dismissible"
  }, "Success"), React.createElement("option", {
	value: "alert alert-danger alert-dismissible"
  }, "Danger"), React.createElement("option", {
	value: "alert alert-warning alert-dismissible"
  }, "Warning"), React.createElement("option", {
	value: "info"
  }, "Info")))
  )}

