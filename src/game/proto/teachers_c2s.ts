// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_teachers_apply_confirm_request {
		public tDbid: number; // tag 0
		public res: boolean; // tag 1
	}

	function _decode_cs_teachers_apply_confirm_request(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_apply_confirm_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.tDbid = d.ri ();
				break;
			case 1:
				o.res = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_apply_confirm_request(self: cs_teachers_apply_confirm_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.tDbid != undefined) {
			se.wi (self.tDbid, 0);
		}

		if (self.res != undefined) {
			se.wb (self.res, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_apply_confirm_request"] = {en: _encode_cs_teachers_apply_confirm_request, de: _decode_cs_teachers_apply_confirm_request}
	export class cs_teachers_apply_teacher_request {
		public sDbid: number; // tag 0
	}

	function _decode_cs_teachers_apply_teacher_request(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_apply_teacher_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.sDbid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_apply_teacher_request(self: cs_teachers_apply_teacher_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.sDbid != undefined) {
			se.wi (self.sDbid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_apply_teacher_request"] = {en: _encode_cs_teachers_apply_teacher_request, de: _decode_cs_teachers_apply_teacher_request}
	export class cs_teachers_apply_teacher_response {
		public ret: number; // tag 0
	}

	function _decode_cs_teachers_apply_teacher_response(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_apply_teacher_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_apply_teacher_response(self: cs_teachers_apply_teacher_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wi (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_apply_teacher_response"] = {en: _encode_cs_teachers_apply_teacher_response, de: _decode_cs_teachers_apply_teacher_response}
	export class cs_teachers_force_get_reward_request {
		public no: number; // tag 0
		public act: number; // tag 1
	}

	function _decode_cs_teachers_force_get_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_force_get_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.no = d.ri ();
				break;
			case 1:
				o.act = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_force_get_reward_request(self: cs_teachers_force_get_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.no != undefined) {
			se.wi (self.no, 0);
		}

		if (self.act != undefined) {
			se.wi (self.act, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_force_get_reward_request"] = {en: _encode_cs_teachers_force_get_reward_request, de: _decode_cs_teachers_force_get_reward_request}
	export class cs_teachers_force_get_reward_response {
		public ret: boolean; // tag 0
		public rewards: number; // tag 1
	}

	function _decode_cs_teachers_force_get_reward_response(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_force_get_reward_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			case 1:
				o.rewards = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_force_get_reward_response(self: cs_teachers_force_get_reward_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		if (self.rewards != undefined) {
			se.wi (self.rewards, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_force_get_reward_response"] = {en: _encode_cs_teachers_force_get_reward_response, de: _decode_cs_teachers_force_get_reward_response}
	export class cs_teachers_get_exp_request {
		public no: number; // tag 0
	}

	function _decode_cs_teachers_get_exp_request(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_get_exp_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.no = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_get_exp_request(self: cs_teachers_get_exp_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.no != undefined) {
			se.wi (self.no, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_get_exp_request"] = {en: _encode_cs_teachers_get_exp_request, de: _decode_cs_teachers_get_exp_request}
	export class cs_teachers_get_message_request {
	}

	function _decode_cs_teachers_get_message_request(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_get_message_request;
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

	function _encode_cs_teachers_get_message_request(self: cs_teachers_get_message_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_get_message_request"] = {en: _encode_cs_teachers_get_message_request, de: _decode_cs_teachers_get_message_request}
	export class cs_teachers_get_message_response {
		public data: teachers_student_data[]; // tag 0
	}

	function _decode_cs_teachers_get_message_response(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_get_message_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.data = d.roa("teachers_student_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_get_message_response(self: cs_teachers_get_message_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.data != undefined) {
			se.woa ("teachers_student_data", self.data, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_get_message_response"] = {en: _encode_cs_teachers_get_message_response, de: _decode_cs_teachers_get_message_response}
	export class cs_teachers_graduation_request {
		public no: number; // tag 0
		public typ: number; // tag 1
	}

	function _decode_cs_teachers_graduation_request(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_graduation_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.no = d.ri ();
				break;
			case 1:
				o.typ = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_graduation_request(self: cs_teachers_graduation_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.no != undefined) {
			se.wi (self.no, 0);
		}

		if (self.typ != undefined) {
			se.wi (self.typ, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_graduation_request"] = {en: _encode_cs_teachers_graduation_request, de: _decode_cs_teachers_graduation_request}
	export class cs_teachers_message_request {
	}

	function _decode_cs_teachers_message_request(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_message_request;
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

	function _encode_cs_teachers_message_request(self: cs_teachers_message_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_message_request"] = {en: _encode_cs_teachers_message_request, de: _decode_cs_teachers_message_request}
	export class cs_teachers_message_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_teachers_message_response(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_message_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_message_response(self: cs_teachers_message_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_message_response"] = {en: _encode_cs_teachers_message_response, de: _decode_cs_teachers_message_response}
	export class cs_teachers_teach_exp_request {
		public no: number; // tag 0
	}

	function _decode_cs_teachers_teach_exp_request(d: SprotoTypeDeserialize) {
		let o = new cs_teachers_teach_exp_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.no = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_teachers_teach_exp_request(self: cs_teachers_teach_exp_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.no != undefined) {
			se.wi (self.no, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_teachers_teach_exp_request"] = {en: _encode_cs_teachers_teach_exp_request, de: _decode_cs_teachers_teach_exp_request}
	export class teachers_student_data {
		public dbid: number; // tag 0
		public name: string; // tag 1
		public lv: number; // tag 2
		public tag: boolean; // tag 3
	}

	function _decode_teachers_student_data(d: SprotoTypeDeserialize) {
		let o = new teachers_student_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.dbid = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			case 2:
				o.lv = d.ri ();
				break;
			case 3:
				o.tag = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_teachers_student_data(self: teachers_student_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.dbid != undefined) {
			se.wi (self.dbid, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		if (self.lv != undefined) {
			se.wi (self.lv, 2);
		}

		if (self.tag != undefined) {
			se.wb (self.tag, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["teachers_student_data"] = {en: _encode_teachers_student_data, de: _decode_teachers_student_data}
}

