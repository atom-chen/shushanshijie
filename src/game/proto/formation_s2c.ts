// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class formation_data {
		public no: number; // tag 0
		public skillNo: number; // tag 1
		public lv: number; // tag 2
		public upNum: number; // tag 3
		public soulLv: number; // tag 4
		public soulUpNum: number; // tag 5
	}

	function _decode_formation_data(d: SprotoTypeDeserialize) {
		let o = new formation_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.no = d.ri ();
				break;
			case 1:
				o.skillNo = d.ri ();
				break;
			case 2:
				o.lv = d.ri ();
				break;
			case 3:
				o.upNum = d.ri ();
				break;
			case 4:
				o.soulLv = d.ri ();
				break;
			case 5:
				o.soulUpNum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_formation_data(self: formation_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.no != undefined) {
			se.wi (self.no, 0);
		}

		if (self.skillNo != undefined) {
			se.wi (self.skillNo, 1);
		}

		if (self.lv != undefined) {
			se.wi (self.lv, 2);
		}

		if (self.upNum != undefined) {
			se.wi (self.upNum, 3);
		}

		if (self.soulLv != undefined) {
			se.wi (self.soulLv, 4);
		}

		if (self.soulUpNum != undefined) {
			se.wi (self.soulUpNum, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["formation_data"] = {en: _encode_formation_data, de: _decode_formation_data}
	export class sc_formation_info_request {
		public use: number; // tag 0
		public infoList: formation_data[]; // tag 1
		public drugNum: number; // tag 2
	}

	function _decode_sc_formation_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_formation_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.use = d.ri ();
				break;
			case 1:
				o.infoList = d.roa("formation_data");
				break;
			case 2:
				o.drugNum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_formation_info_request(self: sc_formation_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.use != undefined) {
			se.wi (self.use, 0);
		}

		if (self.infoList != undefined) {
			se.woa ("formation_data", self.infoList, 1);
		}

		if (self.drugNum != undefined) {
			se.wi (self.drugNum, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_formation_info_request"] = {en: _encode_sc_formation_info_request, de: _decode_sc_formation_info_request}
}

