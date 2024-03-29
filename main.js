$(document).ready(init);

function init() {
	console.log('Welcome to Sunny Chen\'s portfolio. I just want to touch on a few technologies I have experience with and give you an overview of my skills.');
	console.log(technologies);

	technologies.forEach(function assembleTechnologiesList(technology) {
		$('#technologies-list').append(buildTechnologyBlock(technology));
	});
}
function buildTechnologyBlock(technology) {
	var $outerDiv = $('<li>');
	var $progressBar = $('<div>');
	var $progressBarValue = $('<div>');
	var $innerDiv = $('<div>');
	var $image = $('<img>');
	var $contentArea = $('<div>');
	var $heading = $('<h5>');
	var $tag = $('<strong>');
	var $description = $('<p>');

	$outerDiv.addClass('technology technology-' + generateSlug(technology.technology));
	$innerDiv.addClass('technology-content');
	
	$progressBar.addClass('technology-competence-bar')
	$progressBarValue
		.addClass('technology-competence-bar-value')
		.css({
			width: technology.competence + '%',
			background: technology.primaryColor
		});

	$image
		.addClass('technology-logo')
		.attr("src", getLogoUri(technology.logo));
	$heading
		.addClass('technology-heading')
		.text(technology.technology);
	$description
		.addClass('technology-description')
		.text(technology.description);
	// $tag
	// 	.text(technology.level)
	// 	.addClass('technology-level technology-level-' + generateSlug(technology.level));

	$progressBar.append($progressBarValue)
	$outerDiv.append($progressBar);
	$innerDiv.append($image);
	$heading.append($tag);
	$contentArea.append($heading);
	$contentArea.append($description);
	$innerDiv.append($contentArea);
	$outerDiv.append($innerDiv);

	return $outerDiv;
}

function generateSlug(inputString) {
	var spaceReplacedString = inputString.replace(/\/|\s|-|_/g, ' ');
	var spaceReducedString = spaceReplacedString.replace(/\s+/g, ' ');

	return spaceReducedString.split(' ').join('-').toLowerCase();
}

function getLogoUri(logoSlug) {
	return "images/logo_" + logoSlug + ".svg";
}