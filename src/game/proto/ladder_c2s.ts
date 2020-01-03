// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_ladder_buy_count_request {
		public ladderType: number; // tag 0
	}

	function _decode_cs_ladder_buy_count_request(d: SprotoTypeDeserialize) {
		let o = new cs_ladder_buy_count_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ladderType = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_ladder_buy_count_request(self: cs_ladder_buy_count_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_ladder_buy_count_request"] = {en: _encode_cs_ladder_buy_count_request, de: _decode_cs_ladder_buy_count_request}
	export class cs_ladder_get_rank_info_request {
		public ladderType: number; // tag 0
	}

	function _decode_cs_ladder_get_rank_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_ladder_get_rank_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ladderType = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_ladder_get_rank_info_request(self: cs_ladder_get_rank_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_ladder_get_rank_info_request"] = {en: _encode_cs_ladder_get_rank_info_request, de: _decode_cs_ladder_get_rank_info_request}
	export class cs_ladder_get_some_one_request {
		public ladderType: number; // tag 0
	}

	function _decode_cs_ladder_get_some_one_request(d: SprotoTypeDeserialize) {
		let o = new cs_ladder_get_some_one_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ladderType = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_ladder_get_some_one_request(self: cs_ladder_get_some_one_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_ladder_get_some_one_request"] = {en: _encode_cs_ladder_get_some_one_request, de: _decode_cs_ladder_get_some_one_request}
	export class cs_ladder_get_week_reward_request {
		public ladderType: number; // tag 0
	}

	function _decode_cs_ladder_get_week_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_ladder_get_week_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ladderType = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_ladder_get_week_reward_request(self: cs_ladder_get_week_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_ladder_get_week_reward_request"] = {en: _encode_cs_ladder_get_week_reward_request, de: _decode_cs_ladder_get_week_reward_request}
	export class cs_ladder_info_request {
	}

	function _decode_cs_ladder_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_ladder_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_ladder_info_request(self: cs_ladder_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_ladder_info_request"] = {en: _encode_cs_ladder_info_request, de: _decode_cs_ladder_info_request}
	export class cs_ladder_start_play_request {
		public type: number; // tag 0
		public ladderType: number; // tag 1
	}

	function _decode_cs_ladder_start_play_request(d: SprotoTypeDeserialize) {
		let o = new cs_ladder_start_play_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			case 1:
				o.ladderType = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_ladder_start_play_request(self: cs_ladder_start_play_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_ladder_start_play_request"] = {en: _encode_cs_ladder_start_play_request, de: _decode_cs_ladder_start_play_request}
	export class cs_ladder_worship_request {
		public ladderType: number; // tag 0
	}

	function _decode_cs_ladder_worship_request(d: SprotoTypeDeserialize) {
		let o = new cs_ladder_worship_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ladderType = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_ladder_worship_request(self: cs_ladder_worship_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_ladder_worship_request"] = {en: _encode_cs_ladder_worship_request, de: _decode_cs_ladder_worship_request}
}

