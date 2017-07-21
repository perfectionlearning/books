(function () {
	var _TOCLink = (function () {
		var link = location.href.substr(location.href.indexOf('?') + 1);
		if (link.indexOf('#') != -1)
			link = link.substr(0, link.indexOf('#'));
		return link;
	})();
	function altRows(id) {
		if (document.getElementsByTagName) {
			var table = document.getElementById(id);
			var rows = table.getElementsByTagName("tr");
			for (i = 0; i < rows.length; i++) {
				if (i % 2 == 0) {
					rows[i].className = "evenrowcolor";
				} else {
					rows[i].className = "oddrowcolor";
				}
			}
		}
	}
	function addColorToTableRows() {
		if (document.getElementById('alternatecolor'))
			altRows('alternatecolor');
	}
	function adjustLinks() {
		var links = Array.prototype.filter.call(document.getElementsByTagName('a'), function (el) {
				return el.href && el.href.split(".").reverse()[0] != "pdf";
			});
		links.forEach(function (el) {
			var hash = el.href.split('#')[1];
			$(el).attr("data-href", 'assets/lessonplans/' + el.href.split("/").reverse()[0].split('#')[0]).addClass("std_act_link").attr("data-hash", hash);
			el.href = "javascript:void(0)";
		});
	}
	var _nav = {
		Back: function () {
			history.go(-1);
		},
		Fwd: function () {
			history.go(1);
		},
		Return: function () {
			location.href = _TOCLink;
		}
	}
	function insertHeader() {
		var _navBtns = [{
				id: 'btnTOC',
				action: _nav.TOC
			}, {
				id: 'btnBack',
				action: _nav.Back
			}, {
				id: 'btnFwd',
				action: _nav.Fwd
			}, {
				id: 'btnSearch'
			}, {
				id: 'btnReturn',
				action: _nav.Return
			}
		];
		var _makeNav = function () {
			var nav = document.createElement('nav');
			_navBtns.forEach(function (btn) {
				nav.appendChild((function (btn) {
						var a = document.createElement('a');
						a.id = btn.id;
						if (btn.action) {
							a.addEventListener('click', btn.action);
						}
						return a;
					})(btn));
			});
			return nav;
		};
		var _makeHeader = function () {
			var header = document.createElement('header');
			if (location.href.match(/\/correlations\//))
				header.className = 'corr';
			else if (location.href.contains("toc_activities"))
				header.className = 'student';
			else if (location.href.contains("toc_ell_activities"))
				header.className = 'student_ell';
			else if (location.href.contains("toc_ell_lessons"))
				header.className = 'lesson_ell';
			else if (location.href.match(/\/ell_lessons\//))
				header.className = 'lesson_ell';
			else
				header.className = 'lesson';
			var nav = _makeNav();
			header.appendChild(nav);
			return header;
		};
		var parentEl = document.getElementById('wrapper');
		var header = _makeHeader();
		var firstEl = parentEl.children[0];
		parentEl.insertBefore(header, firstEl);
	}
	function init() {
		adjustLinks();
		addColorToTableRows();
	}
	
	window.initELPSCorrelation = init;
})();