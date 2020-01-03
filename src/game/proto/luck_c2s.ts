// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_luck_draw_request {
		public type: number; // tag 0
		public index: number; // tag 1
	}

	function _decode_cs_luck_draw_request(d: SprotoTypeDeserialize) {
		let o = new cs_luck_draw_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			case 1:
				o.index = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_luck_draw_request(self: cs_luck_draw_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		if (self.index != undefined) {
			se.wi (self.index, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_luck_draw_request"] = {en: _encode_cs_luck_draw_request, de: _decode_cs_luck_draw_request}
	export class cs_luck_info_request {
	}

	function _decode_cs_luck_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_luck_info_request;
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

	function _encode_cs_luck_info_request(self: cs_luck_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_luck_info_request"] = {en: _encode_cs_luck_info_request, de: _decode_cs_luck_info_request}
	export class cs_luck_tianshen_request {
		public typ: number; // tag 0
	}

	function _decode_cs_luck_tianshen_request(d: SprotoTypeDeserialize) {
		let o = new cs_luck_tianshen_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.typ = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_luck_tianshen_request(self: cs_luck_tianshen_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.typ != undefined) {
			se.wi (self.typ, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_luck_tianshen_request"] = {en: _encode_cs_luck_tianshen_request, de: _decode_cs_luck_tianshen_request}
	export class cs_luck_tianshen_response {
		public ret: boolean; // tag 0
		public rewards: luck_tianshen_rewards[]; // tag 1
		public tenNum: number; // tag 3
	}

	function _decode_cs_luck_tianshen_response(d: SprotoTypeDeserialize) {
		let o = new cs_luck_tianshen_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			case 1:
				o.rewards = d.roa("luck_tianshen_rewards");
				break;
			case 3:
				o.tenNum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_luck_tianshen_response(self: cs_luck_tianshen_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		if (self.rewards != undefined) {
			se.woa ("luck_tianshen_rewards", self.rewards, 1);
		}

		if (self.tenNum != undefined) {
			se.wi (self.tenNum, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_luck_tianshen_response"] = {en: _encode_cs_luck_tianshen_response, de: _decode_cs_luck_tianshen_response}
	export class luck_tianshen_rewards {
		public id: number; // tag 0
		public num: number; // tag 1
	}

	function _decode_luck_tianshen_rewards(d: SprotoTypeDeserialize) {
		let o = new luck_tianshen_rewards;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
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

	function _encode_luck_tianshen_rewards(self: luck_tianshen_rewards, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.num != undefined) {
			se.wi (self.num, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["luck_tianshen_rewards"] = {en: _encode_luck_tianshen_rewards, de: _decode_luck_tianshen_rewards}
}

