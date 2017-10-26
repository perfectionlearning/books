/*
 * For use with Virtual Labs.
 * Rick Toews
 * Late October 2017
 *
 * Some lab problems provide the student with a table in which to enter values, 
 * which are then saved in the question's submissions field as a comma-delimited 
 * list. If the only thing the teacher can see on the Grade Change page is this
 * list, it can be difficult for the teacher to understand the context for the
 * student's answers. For this reason, information that can be used to construct
 * the answer table is stored with the problem instance, in a field called
 * presentation_data.
 * 
 * Each lab question whose answer is in a table format should have a JSON
 * template to govern the construction of table on the Grade Change page. That
 * template should be stored in the same directory as the page.html file used
 * to build the Virtual Lab assignment page. (Chapters/course/labs/...). The
 * path to this file is generated from the path for the page.html file, as
 * stored in the BookDefinition file, and replacing 'page.html' with
 * 'presentation_template.json'. The JSON file should contain one template
 * for each question whose answer is entered in a table.
 *
 */
var PresentationData = function(href, lab) {

	// Hash of JSON templates for any table answers in this Virtual Lab
	var json = href.replace(/page\.html$/, 'presentation_template.json');

	// REST call URL for saving the presentation_data field
	var saveUrl = ctrl.getDomain() + '/api/rest/assign/' + lab.assignID + '/presentation';

	//
	// Immediately on instantiation, get JSON template for storing table items.
	//
	httpRequest(json, 'json', (presentation_template) => {
		lab.presentationTemplate = presentation_template;
	});


	/*
	 * Methods for use with instance of PresentationData.
	 */

	//
	// REST call to save presentation_data with problem instance.
	//
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


	/*
	 * Private / utility functions
	 */

	//
	// Fill in table
	//
    function fillInTable(table, answer) {
        var rows = table[0].length;
        var colKeys = Object.keys(table);
        var ndx = 0;
        for (let r = 0; r < rows; r++) {
            colKeys.forEach((key) => {
                if (/%VALUE%/.test(table[key][r])) {
                    table[key][r] = table[key][r].replace(/%VALUE%/, answer[ndx++]);
                }
            });
        }

        return table;
    }


	//
	// Build Presentation Object
	//
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

}
