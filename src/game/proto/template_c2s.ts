// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_template_buy_clothes_request {
		public templateType: number; // tag 0
		public clothesNo: number; // tag 1
	}

	function _decode_cs_template_buy_clothes_request(d: SprotoTypeDeserialize) {
		let o = new cs_template_buy_clothes_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.templateType = d.ri ();
				break;
			case 1:
				o.clothesNo = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_template_buy_clothes_request(self: cs_template_buy_clothes_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.templateType != undefined) {
			se.wi (self.templateType, 0);
		}

		if (self.clothesNo != undefined) {
			se.wi (self.clothesNo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_template_buy_clothes_request"] = {en: _encode_cs_template_buy_clothes_request, de: _decode_cs_template_buy_clothes_request}
	export class cs_template_clothes_request {
		public templateType: number; // tag 0
		public clothesNo: number; // tag 1
	}

	function _decode_cs_template_clothes_request(d: SprotoTypeDeserialize) {
		let o = new cs_template_clothes_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.templateType = d.ri ();
				break;
			case 1:
				o.clothesNo = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_template_clothes_request(self: cs_template_clothes_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.templateType != undefined) {
			se.wi (self.templateType, 0);
		}

		if (self.clothesNo != undefined) {
			se.wi (self.clothesNo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_template_clothes_request"] = {en: _encode_cs_template_clothes_request, de: _decode_cs_template_clothes_request}
	export class cs_template_drug_request {
		public templateType: number; // tag 0
		public drugNum: number; // tag 1
	}

	function _decode_cs_template_drug_request(d: SprotoTypeDeserialize) {
		let o = new cs_template_drug_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.templateType = d.ri ();
				break;
			case 1:
				o.drugNum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_template_drug_request(self: cs_template_drug_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.templateType != undefined) {
			se.wi (self.templateType, 0);
		}

		if (self.drugNum != undefined) {
			se.wi (self.drugNum, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_template_drug_request"] = {en: _encode_cs_template_drug_request, de: _decode_cs_template_drug_request}
	export class cs_template_equip_request {
		public templateType: number; // tag 0
		public itemNo: number; // tag 1
	}

	function _decode_cs_template_equip_request(d: SprotoTypeDeserialize) {
		let o = new cs_template_equip_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.templateType = d.ri ();
				break;
			case 1:
				o.itemNo = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_template_equip_request(self: cs_template_equip_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.templateType != undefined) {
			se.wi (self.templateType, 0);
		}

		if (self.itemNo != undefined) {
			se.wi (self.itemNo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_template_equip_request"] = {en: _encode_cs_template_equip_request, de: _decode_cs_template_equip_request}
	export class cs_template_reward_request {
		public templateType: number; // tag 0
		public no: number; // tag 1
	}

	function _decode_cs_template_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_template_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.templateType = d.ri ();
				break;
			case 1:
				o.no = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_template_reward_request(self: cs_template_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.templateType != undefined) {
			se.wi (self.templateType, 0);
		}

		if (self.no != undefined) {
			se.wi (self.no, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_template_reward_request"] = {en: _encode_cs_template_reward_request, de: _decode_cs_template_reward_request}
	export class cs_template_up_level_request {
		public templateType: number; // tag 0
		public autoBuy: number; // tag 1
	}

	function _decode_cs_template_up_level_request(d: SprotoTypeDeserialize) {
		let o = new cs_template_up_level_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.templateType = d.ri ();
				break;
			case 1:
				o.autoBuy = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_template_up_level_request(self: cs_template_up_level_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.templateType != undefined) {
			se.wi (self.templateType, 0);
		}

		if (self.autoBuy != undefined) {
			se.wi (self.autoBuy, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_template_up_level_request"] = {en: _encode_cs_template_up_level_request, de: _decode_cs_template_up_level_request}
	export class cs_template_up_skill_request {
		public templateType: number; // tag 0
		public skillNo: number; // tag 1
	}

	function _decode_cs_template_up_skill_request(d: SprotoTypeDeserialize) {
		let o = new cs_template_up_skill_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.templateType = d.ri ();
				break;
			case 1:
				o.skillNo = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_template_up_skill_request(self: cs_template_up_skill_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.templateType != undefined) {
			se.wi (self.templateType, 0);
		}

		if (self.skillNo != undefined) {
			se.wi (self.skillNo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_template_up_skill_request"] = {en: _encode_cs_template_up_skill_request, de: _decode_cs_template_up_skill_request}
	export class cs_template_up_stage_request {
		public drugId: number; // tag 0
	}

	function _decode_cs_template_up_stage_request(d: SprotoTypeDeserialize) {
		let o = new cs_template_up_stage_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.drugId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_template_up_stage_request(self: cs_template_up_stage_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.drugId != undefined) {
			se.wi (self.drugId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_template_up_stage_request"] = {en: _encode_cs_template_up_stage_request, de: _decode_cs_template_up_stage_request}
}

