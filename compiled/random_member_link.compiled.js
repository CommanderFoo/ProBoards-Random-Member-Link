"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Random_Member_Link = function () {
	function Random_Member_Link() {
		_classCallCheck(this, Random_Member_Link);
	}

	_createClass(Random_Member_Link, null, [{
		key: "init",
		value: function init() {
			this.PLUGIN_ID = "pd_random_member_link";

			this.members = [];
			this.link_text = "Visit a random members profile";
			this.elem_id = null;

			this.setup();

			if (this.members.length && this.elem_id) {
				$(this.ready.bind(this));
			}
		}
	}, {
		key: "ready",
		value: function ready() {

			// Make sure element exists first

			var $elem = $(this.elem_id);

			if ($elem.length) {
				var rand_id = this.get_random_id();

				if (rand_id) {
					$elem.html("<a href='/user/" + rand_id + "'>" + this.link_text + "</a>");
				}
			}
		}
	}, {
		key: "setup",
		value: function setup() {
			var plugin = pb.plugin.get(this.PLUGIN_ID);

			if (plugin && plugin.settings) {
				var plugin_settings = plugin.settings;

				this.link_text = plugin_settings.link_text && plugin_settings.link_text.length ? plugin_settings.link_text : this.link_text;
				this.elem_id = "#" + (plugin_settings.element && plugin_settings.element.length ? plugin_settings.element : null);
				this.members = plugin_settings.members;
			}
		}
	}, {
		key: "get_random_id",
		value: function get_random_id() {
			var id = 0;

			if (this.members.length) {
				id = this.members[~~(Math.random() * this.members.length)];
			}

			return id;
		}
	}]);

	return Random_Member_Link;
}();


Random_Member_Link.init();