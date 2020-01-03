// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class catch_escort_info {
		public robId: number; // tag 0
		public name: string; // tag 1
		public isWin: boolean; // tag 2
		public guildName: string; // tag 3
	}

	function _decode_catch_escort_info(d: SprotoTypeDeserialize) {
		let o = new catch_escort_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.robId = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			case 2:
				o.isWin = d.rb ();
				break;
			case 3:
				o.guildName = d.rs ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_catch_escort_info(self: catch_escort_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.robId != undefined) {
			se.wi (self.robId, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		if (self.isWin != undefined) {
			se.wb (self.isWin, 2);
		}

		if (self.guildName != undefined) {
			se.ws (self.guildName, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["catch_escort_info"] = {en: _encode_catch_escort_info, de: _decode_catch_escort_info}
	export class record_info {
		public recordId: number; // tag 0
		public type: number; // tag 1
		public quality: number; // tag 2
		public time: number; // tag 3
		public playerId: number; // tag 4
		public name: string; // tag 5
		public isWin: boolean; // tag 6
		public operate: boolean; // tag 7
		public power: number; // tag 8
	}

	function _decode_record_info(d: SprotoTypeDeserialize) {
		let o = new record_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.recordId = d.ri ();
				break;
			case 1:
				o.type = d.ri ();
				break;
			case 2:
				o.quality = d.ri ();
				break;
			case 3:
				o.time = d.ri ();
				break;
			case 4:
				o.playerId = d.ri ();
				break;
			case 5:
				o.name = d.rs ();
				break;
			case 6:
				o.isWin = d.rb ();
				break;
			case 7:
				o.operate = d.rb ();
				break;
			case 8:
				o.power = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_record_info(self: record_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 9);

		if (self.recordId != undefined) {
			se.wi (self.recordId, 0);
		}

		if (self.type != undefined) {
			se.wi (self.type, 1);
		}

		if (self.quality != undefined) {
			se.wi (self.quality, 2);
		}

		if (self.time != undefined) {
			se.wi (self.time, 3);
		}

		if (self.playerId != undefined) {
			se.wi (self.playerId, 4);
		}

		if (self.name != undefined) {
			se.ws (self.name, 5);
		}

		if (self.isWin != undefined) {
			se.wb (self.isWin, 6);
		}

		if (self.operate != undefined) {
			se.wb (self.operate, 7);
		}

		if (self.power != undefined) {
			se.wi (self.power, 8);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["record_info"] = {en: _encode_record_info, de: _decode_record_info}
	export class sc_escort_info_update_request {
		public escortCount: number; // tag 0
		public robCount: number; // tag 1
		public status: number; // tag 2
		public quality: number; // tag 3
		public finishTime: number; // tag 4
	}

	function _decode_sc_escort_info_update_request(d: SprotoTypeDeserialize) {
		let o = new sc_escort_info_update_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.escortCount = d.ri ();
				break;
			case 1:
				o.robCount = d.ri ();
				break;
			case 2:
				o.status = d.ri ();
				break;
			case 3:
				o.quality = d.ri ();
				break;
			case 4:
				o.finishTime = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_escort_info_update_request(self: sc_escort_info_update_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.escortCount != undefined) {
			se.wi (self.escortCount, 0);
		}

		if (self.robCount != undefined) {
			se.wi (self.robCount, 1);
		}

		if (self.status != undefined) {
			se.wi (self.status, 2);
		}

		if (self.quality != undefined) {
			se.wi (self.quality, 3);
		}

		if (self.finishTime != undefined) {
			se.wi (self.finishTime, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_escort_info_update_request"] = {en: _encode_sc_escort_info_update_request, de: _decode_sc_escort_info_update_request}
	export class sc_escort_record_data_request {
		public records: record_info[]; // tag 0
	}

	function _decode_sc_escort_record_data_request(d: SprotoTypeDeserialize) {
		let o = new sc_escort_record_data_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.records = d.roa("record_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_escort_record_data_request(self: sc_escort_record_data_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.records != undefined) {
			se.woa ("record_info", self.records, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_escort_record_data_request"] = {en: _encode_sc_escort_record_data_request, de: _decode_sc_escort_record_data_request}
	export class sc_escort_record_update_request {
		public record: record_info; // tag 0
	}

	function _decode_sc_escort_record_update_request(d: SprotoTypeDeserialize) {
		let o = new sc_escort_record_update_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.record = d.ro("record_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_escort_record_update_request(self: sc_escort_record_update_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.record != undefined) {
			se.wo ("record_info", self.record, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_escort_record_update_request"] = {en: _encode_sc_escort_record_update_request, de: _decode_sc_escort_record_update_request}
	export class sc_escort_reward_show_request {
		public quality: number; // tag 0
		public record: catch_escort_info[]; // tag 1
		public reachReward: reward_data[]; // tag 2
		public lossReward: reward_data[]; // tag 3
	}

	function _decode_sc_escort_reward_show_request(d: SprotoTypeDeserialize) {
		let o = new sc_escort_reward_show_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.quality = d.ri ();
				break;
			case 1:
				o.record = d.roa("catch_escort_info");
				break;
			case 2:
				o.reachReward = d.roa("reward_data");
				break;
			case 3:
				o.lossReward = d.roa("reward_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_escort_reward_show_request(self: sc_escort_reward_show_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.quality != undefined) {
			se.wi (self.quality, 0);
		}

		if (self.record != undefined) {
			se.woa ("catch_escort_info", self.record, 1);
		}

		if (self.reachReward != undefined) {
			se.woa ("reward_data", self.reachReward, 2);
		}

		if (self.lossReward != undefined) {
			se.woa ("reward_data", self.lossReward, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_escort_reward_show_request"] = {en: _encode_sc_escort_reward_show_request, de: _decode_sc_escort_reward_show_request}
}

