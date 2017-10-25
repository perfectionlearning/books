var PresentationData = function(href, lab) {

	var json = href.replace(/page\.html$/, 'presentation_template.json');
	var saveUrl = ctrl.getDomain() + '/api/rest/assign/' + lab.assignID + '/presentation';

	// Get JSON template for storing table items.
	httpRequest(json, 'json', (presentation_template) => {
		lab.presentationTemplate = presentation_template;
		console.log('presentation_template loaded', presentation_template);
	});

	// Fill in table
	function fillInTable(table, answer) {
		var ndx = 0;
		var colKeys = Object.keys(table);
		colKeys.forEach((key) => {
			table[key].forEach((cell, cellNdx) => {
				if (!cell) {
					table[key][cellNdx] = answer[ndx++];
				}
			});
		});
		return table;
	}


	// Build Presentation Object
	function buildPresentationObj(quesNo, probInstId, ans) {
		var answer = ans.split('$|$');
		var probPresentation = lab.presentationTemplate[quesNo];
		if (!probPresentation) return {};

		var obj = {
                  problems: {
                  }
                };
		obj.problems[probInstId] = probPresentation;
		var cells = probPresentation.interactive_frames[0].column_row_vals;
		var column_row_vals = fillInTable(cells, answer);
		probPresentation.interactive_frames[0].column_row_vals = column_row_vals;

		return obj;
	}


	// Public method save
	this.save = function(quesNo, probInstId, ans) {
		var data = buildPresentationObj(quesNo, probInstId, ans);
		data = JSON.stringify(data);
		var request = $.ajax({
			url: saveUrl,
			xhrFields: { withCredentials: true },
			headers: {'Content-Type': 'application/json'},
			crossDomain: true,
			data: data,
			method: 'PUT',
			dataType: 'json'
		});
	};


}
