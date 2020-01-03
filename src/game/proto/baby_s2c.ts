// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class sc_baby_init_request {
		public name: string; // tag 0
		public buffs: number[]; // tag 1
		public giftexp: number; // tag 2
		public giftlv: number; // tag 3
		public xilian: number; // tag 4
		public xilianSkills: number[]; // tag 5
		public sex: number; // tag 6
		public open: number; // tag 7
	}

	function _decode_sc_baby_init_request(d: SprotoTypeDeserialize) {
		let o = new sc_baby_init_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.buffs = d.ria ();
				break;
			case 2:
				o.giftexp = d.ri ();
				break;
			case 3:
				o.giftlv = d.ri ();
				break;
			case 4:
				o.xilian = d.ri ();
				break;
			case 5:
				o.xilianSkills = d.ria ();
				break;
			case 6:
				o.sex = d.ri ();
				break;
			case 7:
				o.open = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_baby_init_request(self: sc_baby_init_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 8);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.buffs != undefined) {
			se.wia (self.buffs, 1);
		}

		if (self.giftexp != undefined) {
			se.wi (self.giftexp, 2);
		}

		if (self.giftlv != undefined) {
			se.wi (self.giftlv, 3);
		}

		if (self.xilian != undefined) {
			se.wi (self.xilian, 4);
		}

		if (self.xilianSkills != undefined) {
			se.wia (self.xilianSkills, 5);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 6);
		}

		if (self.open != undefined) {
			se.wi (self.open, 7);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_baby_init_request"] = {en: _encode_sc_baby_init_request, de: _decode_sc_baby_init_request}
	export class sc_baby_star_init_request {
		public star: number; // tag 0
		public data: number[]; // tag 1
		public msgData: baby_star_msg[]; // tag 2
	}

	function _decode_sc_baby_star_init_request(d: SprotoTypeDeserialize) {
		let o = new sc_baby_star_init_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.star = d.ri ();
				break;
			case 1:
				o.data = d.ria ();
				break;
			case 2:
				o.msgData = d.roa("baby_star_msg");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_baby_star_init_request(self: sc_baby_star_init_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.star != undefined) {
			se.wi (self.star, 0);
		}

		if (self.data != undefined) {
			se.wia (self.data, 1);
		}

		if (self.msgData != undefined) {
			se.woa ("baby_star_msg", self.msgData, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_baby_star_init_request"] = {en: _encode_sc_baby_star_init_request, de: _decode_sc_baby_star_init_request}
}

