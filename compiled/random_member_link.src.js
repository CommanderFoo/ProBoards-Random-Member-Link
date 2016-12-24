class Random_Member_Link {

	static init(){
		this.PLUGIN_ID = "pd_random_member_link";

		this.members = [];
		this.link_text = "Visit a random members profile";
		this.elem_id = null;

		this.setup();

		if(this.members.length && this.elem_id){
			$(this.ready.bind(this));
		}
	}

	static ready(){

		// Make sure element exists first

		let $elem = $(this.elem_id);

		if($elem.length){
			let rand_id = this.get_random_id();

			if(rand_id){
				$elem.html("<a href='/user/" + rand_id + "'>" + this.link_text + "</a>");
			}
		}
	}

	static setup(){
		let plugin = pb.plugin.get(this.PLUGIN_ID);

		if(plugin && plugin.settings){
			let plugin_settings = plugin.settings;

			this.link_text = (plugin_settings.link_text && plugin_settings.link_text.length)? plugin_settings.link_text : this.link_text;
			this.elem_id = "#" + ((plugin_settings.element && plugin_settings.element.length)? plugin_settings.element : null);
			this.members = plugin_settings.members;
		}
	}

	static get_random_id(){
		let id = 0;

		if(this.members.length){
			id = this.members[~~ (Math.random() * this.members.length)];
		}

		return id;
	}

}

Random_Member_Link.init();