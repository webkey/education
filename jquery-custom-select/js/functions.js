/**
 * Created by Serhiy on 27.12.2015.
 */

function selectCustomInit(){
	$('select.styled').customSelect({
		customClass: "mySexySelect", // Specify a different class name (default is 'customSelect')
		mapClass:    false, // Copy any existing classes from the given select element (defaults to true)
		mapStyle:    false // Copy the value of the style attribute from the given select element (defaults to true)
	});
}
$(document).ready(function(){
	selectCustomInit();
});