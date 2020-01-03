// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class dailyTask_data {
		public no: number; // tag 0
		public num: number; // tag 1
	}

	function _decode_dailyTask_data(d: SprotoTypeDeserialize) {
		let o = new dailyTask_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.no = d.ri ();
				break;
			case 1:
				o.num = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_dailyTask_data(self: dailyTask_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.no != undefined) {
			se.wi (self.no, 0);
		}

		if (self.num != undefined) {
			se.wi (self.num, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["dailyTask_data"] = {en: _encode_dailyTask_data, de: _decode_dailyTask_data}
	export class otherActivity_data {
		public num: number; // tag 0
		public reward: number; // tag 1
	}

	function _decode_otherActivity_data(d: SprotoTypeDeserialize) {
		let o = new otherActivity_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.num = d.ri ();
				break;
			case 1:
				o.reward = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_otherActivity_data(self: otherActivity_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.num != undefined) {
			se.wi (self.num, 0);
		}

		if (self.reward != undefined) {
			se.wi (self.reward, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["otherActivity_data"] = {en: _encode_otherActivity_data, de: _decode_otherActivity_data}
	export class otherActivity_monster {
		public monsterList: number[]; // tag 0
		public num: number; // tag 1
		public time: number; // tag 2
		public reward: number; // tag 3
	}

	function _decode_otherActivity_monster(d: SprotoTypeDeserialize) {
		let o = new otherActivity_monster;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.monsterList = d.ria ();
				break;
			case 1:
				o.num = d.ri ();
				break;
			case 2:
				o.time = d.ri ();
				break;
			case 3:
				o.reward = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_otherActivity_monster(self: otherActivity_monster, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.monsterList != undefined) {
			se.wia (self.monsterList, 0);
		}

		if (self.num != undefined) {
			se.wi (self.num, 1);
		}

		if (self.time != undefined) {
			se.wi (self.time, 2);
		}

		if (self.reward != undefined) {
			se.wi (self.reward, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["otherActivity_monster"] = {en: _encode_otherActivity_monster, de: _decode_otherActivity_monster}
	export class sc_dailyTask_info_request {
		public lv: number; // tag 0
		public exp: number; // tag 1
		public today: dailyTask_data[]; // tag 2
		public yesterday: dailyTask_data[]; // tag 3
		public findItem: dailyTask_data[]; // tag 4
		public findExp: dailyTask_data[]; // tag 5
		public active: number; // tag 6
		public activeReward: number; // tag 7
		public monster: otherActivity_monster; // tag 8
		public chapterWar: otherActivity_data; // tag 9
		public teamFB: otherActivity_data; // tag 10
		public find: number; // tag 11
	}

	function _decode_sc_dailyTask_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_dailyTask_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.lv = d.ri ();
				break;
			case 1:
				o.exp = d.ri ();
				break;
			case 2:
				o.today = d.roa("dailyTask_data");
				break;
			case 3:
				o.yesterday = d.roa("dailyTask_data");
				break;
			case 4:
				o.findItem = d.roa("dailyTask_data");
				break;
			case 5:
				o.findExp = d.roa("dailyTask_data");
				break;
			case 6:
				o.active = d.ri ();
				break;
			case 7:
				o.activeReward = d.ri ();
				break;
			case 8:
				o.monster = d.ro("otherActivity_monster");
				break;
			case 9:
				o.chapterWar = d.ro("otherActivity_data");
				break;
			case 10:
				o.teamFB = d.ro("otherActivity_data");
				break;
			case 11:
				o.find = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_dailyTask_info_request(self: sc_dailyTask_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 12);

		if (self.lv != undefined) {
			se.wi (self.lv, 0);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 1);
		}

		if (self.today != undefined) {
			se.woa ("dailyTask_data", self.today, 2);
		}

		if (self.yesterday != undefined) {
			se.woa ("dailyTask_data", self.yesterday, 3);
		}

		if (self.findItem != undefined) {
			se.woa ("dailyTask_data", self.findItem, 4);
		}

		if (self.findExp != undefined) {
			se.woa ("dailyTask_data", self.findExp, 5);
		}

		if (self.active != undefined) {
			se.wi (self.active, 6);
		}

		if (self.activeReward != undefined) {
			se.wi (self.activeReward, 7);
		}

		if (self.monster != undefined) {
			se.wo ("otherActivity_monster", self.monster, 8);
		}

		if (self.chapterWar != undefined) {
			se.wo ("otherActivity_data", self.chapterWar, 9);
		}

		if (self.teamFB != undefined) {
			se.wo ("otherActivity_data", self.teamFB, 10);
		}

		if (self.find != undefined) {
			se.wi (self.find, 11);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_dailyTask_info_request"] = {en: _encode_sc_dailyTask_info_request, de: _decode_sc_dailyTask_info_request}
	export class sc_dailyTask_update_request {
		public lv: number; // tag 0
		public exp: number; // tag 1
		public today: dailyTask_data[]; // tag 2
		public yesterday: dailyTask_data[]; // tag 3
		public findItem: dailyTask_data[]; // tag 4
		public findExp: dailyTask_data[]; // tag 5
		public active: number; // tag 6
		public activeReward: number; // tag 7
		public monster: otherActivity_monster; // tag 8
		public chapterWar: otherActivity_data; // tag 9
		public teamFB: otherActivity_data; // tag 10
		public find: number; // tag 11
	}

	function _decode_sc_dailyTask_update_request(d: SprotoTypeDeserialize) {
		let o = new sc_dailyTask_update_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.lv = d.ri ();
				break;
			case 1:
				o.exp = d.ri ();
				break;
			case 2:
				o.today = d.roa("dailyTask_data");
				break;
			case 3:
				o.yesterday = d.roa("dailyTask_data");
				break;
			case 4:
				o.findItem = d.roa("dailyTask_data");
				break;
			case 5:
				o.findExp = d.roa("dailyTask_data");
				break;
			case 6:
				o.active = d.ri ();
				break;
			case 7:
				o.activeReward = d.ri ();
				break;
			case 8:
				o.monster = d.ro("otherActivity_monster");
				break;
			case 9:
				o.chapterWar = d.ro("otherActivity_data");
				break;
			case 10:
				o.teamFB = d.ro("otherActivity_data");
				break;
			case 11:
				o.find = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_dailyTask_update_request(self: sc_dailyTask_update_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 12);

		if (self.lv != undefined) {
			se.wi (self.lv, 0);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 1);
		}

		if (self.today != undefined) {
			se.woa ("dailyTask_data", self.today, 2);
		}

		if (self.yesterday != undefined) {
			se.woa ("dailyTask_data", self.yesterday, 3);
		}

		if (self.findItem != undefined) {
			se.woa ("dailyTask_data", self.findItem, 4);
		}

		if (self.findExp != undefined) {
			se.woa ("dailyTask_data", self.findExp, 5);
		}

		if (self.active != undefined) {
			se.wi (self.active, 6);
		}

		if (self.activeReward != undefined) {
			se.wi (self.activeReward, 7);
		}

		if (self.monster != undefined) {
			se.wo ("otherActivity_monster", self.monster, 8);
		}

		if (self.chapterWar != undefined) {
			se.wo ("otherActivity_data", self.chapterWar, 9);
		}

		if (self.teamFB != undefined) {
			se.wo ("otherActivity_data", self.teamFB, 10);
		}

		if (self.find != undefined) {
			se.wi (self.find, 11);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_dailyTask_update_request"] = {en: _encode_sc_dailyTask_update_request, de: _decode_sc_dailyTask_update_request}
}

