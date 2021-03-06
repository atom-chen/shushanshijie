// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class public_attack_info {
		public name: string; // tag 0
		public injure: number; // tag 1
	}

	function _decode_public_attack_info(d: SprotoTypeDeserialize) {
		let o = new public_attack_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.injure = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_public_attack_info(self: public_attack_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.injure != undefined) {
			se.wi (self.injure, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["public_attack_info"] = {en: _encode_public_attack_info, de: _decode_public_attack_info}
	export class public_boss_info {
		public id: number; // tag 0
		public hp: number; // tag 1
		public iskill: boolean; // tag 2
		public reborntime: number; // tag 3
		public fightnum: number; // tag 4
		public reborn: boolean; // tag 5
	}

	function _decode_public_boss_info(d: SprotoTypeDeserialize) {
		let o = new public_boss_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.hp = d.ri ();
				break;
			case 2:
				o.iskill = d.rb ();
				break;
			case 3:
				o.reborntime = d.ri ();
				break;
			case 4:
				o.fightnum = d.ri ();
				break;
			case 5:
				o.reborn = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_public_boss_info(self: public_boss_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.hp != undefined) {
			se.wi (self.hp, 1);
		}

		if (self.iskill != undefined) {
			se.wb (self.iskill, 2);
		}

		if (self.reborntime != undefined) {
			se.wi (self.reborntime, 3);
		}

		if (self.fightnum != undefined) {
			se.wi (self.fightnum, 4);
		}

		if (self.reborn != undefined) {
			se.wb (self.reborn, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["public_boss_info"] = {en: _encode_public_boss_info, de: _decode_public_boss_info}
	export class public_kill_info {
		public name: string; // tag 0
		public power: number; // tag 1
		public killtime: number; // tag 2
	}

	function _decode_public_kill_info(d: SprotoTypeDeserialize) {
		let o = new public_kill_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.power = d.ri ();
				break;
			case 2:
				o.killtime = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_public_kill_info(self: public_kill_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.power != undefined) {
			se.wi (self.power, 1);
		}

		if (self.killtime != undefined) {
			se.wi (self.killtime, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["public_kill_info"] = {en: _encode_public_kill_info, de: _decode_public_kill_info}
	export class sc_public_boss_base_list_request {
		public bossInfos: public_boss_info[]; // tag 0
	}

	function _decode_sc_public_boss_base_list_request(d: SprotoTypeDeserialize) {
		let o = new sc_public_boss_base_list_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.bossInfos = d.roa("public_boss_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_public_boss_base_list_request(self: sc_public_boss_base_list_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.bossInfos != undefined) {
			se.woa ("public_boss_info", self.bossInfos, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_public_boss_base_list_request"] = {en: _encode_sc_public_boss_base_list_request, de: _decode_sc_public_boss_base_list_request}
	export class sc_public_boss_challenge_fail_request {
	}

	function _decode_sc_public_boss_challenge_fail_request(d: SprotoTypeDeserialize) {
		let o = new sc_public_boss_challenge_fail_request;
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

	function _encode_sc_public_boss_challenge_fail_request(self: sc_public_boss_challenge_fail_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_public_boss_challenge_fail_request"] = {en: _encode_sc_public_boss_challenge_fail_request, de: _decode_sc_public_boss_challenge_fail_request}
	export class sc_public_boss_record_attack_request {
		public attackinfos: public_attack_info[]; // tag 0
		public rank: number; // tag 1
	}

	function _decode_sc_public_boss_record_attack_request(d: SprotoTypeDeserialize) {
		let o = new sc_public_boss_record_attack_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.attackinfos = d.roa("public_attack_info");
				break;
			case 1:
				o.rank = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_public_boss_record_attack_request(self: sc_public_boss_record_attack_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.attackinfos != undefined) {
			se.woa ("public_attack_info", self.attackinfos, 0);
		}

		if (self.rank != undefined) {
			se.wi (self.rank, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_public_boss_record_attack_request"] = {en: _encode_sc_public_boss_record_attack_request, de: _decode_sc_public_boss_record_attack_request}
	export class sc_public_boss_record_kill_request {
		public killinfos: public_kill_info[]; // tag 0
	}

	function _decode_sc_public_boss_record_kill_request(d: SprotoTypeDeserialize) {
		let o = new sc_public_boss_record_kill_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.killinfos = d.roa("public_kill_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_public_boss_record_kill_request(self: sc_public_boss_record_kill_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.killinfos != undefined) {
			se.woa ("public_kill_info", self.killinfos, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_public_boss_record_kill_request"] = {en: _encode_sc_public_boss_record_kill_request, de: _decode_sc_public_boss_record_kill_request}
	export class sc_public_boss_update_attack_request {
		public attackinfos: public_attack_info[]; // tag 0
		public myattackinfo: public_attack_info; // tag 1
	}

	function _decode_sc_public_boss_update_attack_request(d: SprotoTypeDeserialize) {
		let o = new sc_public_boss_update_attack_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.attackinfos = d.roa("public_attack_info");
				break;
			case 1:
				o.myattackinfo = d.ro("public_attack_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_public_boss_update_attack_request(self: sc_public_boss_update_attack_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.attackinfos != undefined) {
			se.woa ("public_attack_info", self.attackinfos, 0);
		}

		if (self.myattackinfo != undefined) {
			se.wo ("public_attack_info", self.myattackinfo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_public_boss_update_attack_request"] = {en: _encode_sc_public_boss_update_attack_request, de: _decode_sc_public_boss_update_attack_request}
	export class sc_public_boss_update_challenge_request {
		public challengenum: number; // tag 0
		public recovertiem: number; // tag 1
		public purchasecount: number; // tag 2
		public reborncount: number; // tag 3
		public rebornmark: number; // tag 4
	}

	function _decode_sc_public_boss_update_challenge_request(d: SprotoTypeDeserialize) {
		let o = new sc_public_boss_update_challenge_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.challengenum = d.ri ();
				break;
			case 1:
				o.recovertiem = d.ri ();
				break;
			case 2:
				o.purchasecount = d.ri ();
				break;
			case 3:
				o.reborncount = d.ri ();
				break;
			case 4:
				o.rebornmark = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_public_boss_update_challenge_request(self: sc_public_boss_update_challenge_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.challengenum != undefined) {
			se.wi (self.challengenum, 0);
		}

		if (self.recovertiem != undefined) {
			se.wi (self.recovertiem, 1);
		}

		if (self.purchasecount != undefined) {
			se.wi (self.purchasecount, 2);
		}

		if (self.reborncount != undefined) {
			se.wi (self.reborncount, 3);
		}

		if (self.rebornmark != undefined) {
			se.wi (self.rebornmark, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_public_boss_update_challenge_request"] = {en: _encode_sc_public_boss_update_challenge_request, de: _decode_sc_public_boss_update_challenge_request}
	export class sc_public_boss_update_one_request {
		public bossInfo: public_boss_info; // tag 0
	}

	function _decode_sc_public_boss_update_one_request(d: SprotoTypeDeserialize) {
		let o = new sc_public_boss_update_one_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.bossInfo = d.ro("public_boss_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_public_boss_update_one_request(self: sc_public_boss_update_one_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.bossInfo != undefined) {
			se.wo ("public_boss_info", self.bossInfo, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_public_boss_update_one_request"] = {en: _encode_sc_public_boss_update_one_request, de: _decode_sc_public_boss_update_one_request}
}

