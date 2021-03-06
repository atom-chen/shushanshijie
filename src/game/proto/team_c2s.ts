// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_team_call_robot_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
	}

	function _decode_cs_team_call_robot_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_call_robot_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_call_robot_request(self: cs_team_call_robot_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_call_robot_request"] = {en: _encode_cs_team_call_robot_request, de: _decode_cs_team_call_robot_request}
	export class cs_team_condition_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
		public needpower: number; // tag 2
	}

	function _decode_cs_team_condition_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_condition_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			case 2:
				o.needpower = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_condition_request(self: cs_team_condition_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		if (self.needpower != undefined) {
			se.wi (self.needpower, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_condition_request"] = {en: _encode_cs_team_condition_request, de: _decode_cs_team_condition_request}
	export class cs_team_create_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
	}

	function _decode_cs_team_create_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_create_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_create_request(self: cs_team_create_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_create_request"] = {en: _encode_cs_team_create_request, de: _decode_cs_team_create_request}
	export class cs_team_create_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_team_create_response(d: SprotoTypeDeserialize) {
		let o = new cs_team_create_response;
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

	function _encode_cs_team_create_response(self: cs_team_create_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_create_response"] = {en: _encode_cs_team_create_response, de: _decode_cs_team_create_response}
	export class cs_team_fight_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
		public ext: number; // tag 2
	}

	function _decode_cs_team_fight_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_fight_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			case 2:
				o.ext = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_fight_request(self: cs_team_fight_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		if (self.ext != undefined) {
			se.wi (self.ext, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_fight_request"] = {en: _encode_cs_team_fight_request, de: _decode_cs_team_fight_request}
	export class cs_team_fight_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_team_fight_response(d: SprotoTypeDeserialize) {
		let o = new cs_team_fight_response;
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

	function _encode_cs_team_fight_response(self: cs_team_fight_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_fight_response"] = {en: _encode_cs_team_fight_response, de: _decode_cs_team_fight_response}
	export class cs_team_info_request {
	}

	function _decode_cs_team_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_info_request;
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

	function _encode_cs_team_info_request(self: cs_team_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_info_request"] = {en: _encode_cs_team_info_request, de: _decode_cs_team_info_request}
	export class cs_team_join_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
		public leaderid: number; // tag 2
	}

	function _decode_cs_team_join_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_join_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			case 2:
				o.leaderid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_join_request(self: cs_team_join_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		if (self.leaderid != undefined) {
			se.wi (self.leaderid, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_join_request"] = {en: _encode_cs_team_join_request, de: _decode_cs_team_join_request}
	export class cs_team_join_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_team_join_response(d: SprotoTypeDeserialize) {
		let o = new cs_team_join_response;
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

	function _encode_cs_team_join_response(self: cs_team_join_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_join_response"] = {en: _encode_cs_team_join_response, de: _decode_cs_team_join_response}
	export class cs_team_kick_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
		public memberid: number; // tag 2
	}

	function _decode_cs_team_kick_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_kick_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			case 2:
				o.memberid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_kick_request(self: cs_team_kick_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		if (self.memberid != undefined) {
			se.wi (self.memberid, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_kick_request"] = {en: _encode_cs_team_kick_request, de: _decode_cs_team_kick_request}
	export class cs_team_kick_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_team_kick_response(d: SprotoTypeDeserialize) {
		let o = new cs_team_kick_response;
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

	function _encode_cs_team_kick_response(self: cs_team_kick_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_kick_response"] = {en: _encode_cs_team_kick_response, de: _decode_cs_team_kick_response}
	export class cs_team_leave_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
	}

	function _decode_cs_team_leave_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_leave_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_leave_request(self: cs_team_leave_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_leave_request"] = {en: _encode_cs_team_leave_request, de: _decode_cs_team_leave_request}
	export class cs_team_leave_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_team_leave_response(d: SprotoTypeDeserialize) {
		let o = new cs_team_leave_response;
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

	function _encode_cs_team_leave_response(self: cs_team_leave_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_leave_response"] = {en: _encode_cs_team_leave_response, de: _decode_cs_team_leave_response}
	export class cs_team_list_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
	}

	function _decode_cs_team_list_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_list_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_list_request(self: cs_team_list_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_list_request"] = {en: _encode_cs_team_list_request, de: _decode_cs_team_list_request}
	export class cs_team_quick_request {
		public raidtype: number; // tag 0
		public level: number; // tag 1
	}

	function _decode_cs_team_quick_request(d: SprotoTypeDeserialize) {
		let o = new cs_team_quick_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.raidtype = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_team_quick_request(self: cs_team_quick_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_quick_request"] = {en: _encode_cs_team_quick_request, de: _decode_cs_team_quick_request}
	export class cs_team_quick_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_team_quick_response(d: SprotoTypeDeserialize) {
		let o = new cs_team_quick_response;
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

	function _encode_cs_team_quick_response(self: cs_team_quick_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_team_quick_response"] = {en: _encode_cs_team_quick_response, de: _decode_cs_team_quick_response}
}

