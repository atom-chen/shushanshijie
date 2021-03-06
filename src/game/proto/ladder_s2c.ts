// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class ladder_shows {
		public shows: number[]; // tag 0
		public job: number; // tag 1
		public sex: number; // tag 2
		public id: number; // tag 3
		public name: string; // tag 4
		public serverid: number; // tag 5
		public guildid: number; // tag 6
		public guildname: string; // tag 7
		public level: number; // tag 8
	}

	function _decode_ladder_shows(d: SprotoTypeDeserialize) {
		let o = new ladder_shows;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.shows = d.ria ();
				break;
			case 1:
				o.job = d.ri ();
				break;
			case 2:
				o.sex = d.ri ();
				break;
			case 3:
				o.id = d.ri ();
				break;
			case 4:
				o.name = d.rs ();
				break;
			case 5:
				o.serverid = d.ri ();
				break;
			case 6:
				o.guildid = d.ri ();
				break;
			case 7:
				o.guildname = d.rs ();
				break;
			case 8:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_ladder_shows(self: ladder_shows, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 9);

		if (self.shows != undefined) {
			se.wia (self.shows, 0);
		}

		if (self.job != undefined) {
			se.wi (self.job, 1);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 2);
		}

		if (self.id != undefined) {
			se.wi (self.id, 3);
		}

		if (self.name != undefined) {
			se.ws (self.name, 4);
		}

		if (self.serverid != undefined) {
			se.wi (self.serverid, 5);
		}

		if (self.guildid != undefined) {
			se.wi (self.guildid, 6);
		}

		if (self.guildname != undefined) {
			se.ws (self.guildname, 7);
		}

		if (self.level != undefined) {
			se.wi (self.level, 8);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["ladder_shows"] = {en: _encode_ladder_shows, de: _decode_ladder_shows}
	export class ladder_winner_records {
		public time: number; // tag 0
		public serverid: number; // tag 1
		public guildname: string; // tag 2
		public leadername: string; // tag 3
		public job: number; // tag 4
		public sex: number; // tag 5
		public vip: number; // tag 6
		public power: number; // tag 7
		public win: number; // tag 8
	}

	function _decode_ladder_winner_records(d: SprotoTypeDeserialize) {
		let o = new ladder_winner_records;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.time = d.ri ();
				break;
			case 1:
				o.serverid = d.ri ();
				break;
			case 2:
				o.guildname = d.rs ();
				break;
			case 3:
				o.leadername = d.rs ();
				break;
			case 4:
				o.job = d.ri ();
				break;
			case 5:
				o.sex = d.ri ();
				break;
			case 6:
				o.vip = d.ri ();
				break;
			case 7:
				o.power = d.ri ();
				break;
			case 8:
				o.win = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_ladder_winner_records(self: ladder_winner_records, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 9);

		if (self.time != undefined) {
			se.wi (self.time, 0);
		}

		if (self.serverid != undefined) {
			se.wi (self.serverid, 1);
		}

		if (self.guildname != undefined) {
			se.ws (self.guildname, 2);
		}

		if (self.leadername != undefined) {
			se.ws (self.leadername, 3);
		}

		if (self.job != undefined) {
			se.wi (self.job, 4);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 5);
		}

		if (self.vip != undefined) {
			se.wi (self.vip, 6);
		}

		if (self.power != undefined) {
			se.wi (self.power, 7);
		}

		if (self.win != undefined) {
			se.wi (self.win, 8);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["ladder_winner_records"] = {en: _encode_ladder_winner_records, de: _decode_ladder_winner_records}
	export class rank_data_ladder {
		public id: number; // tag 0
		public player: string; // tag 1
		public grade: number; // tag 2
		public star: number; // tag 3
		public winNum: number; // tag 4
		public job: number; // tag 5
		public sex: number; // tag 6
		public serverid: number; // tag 7
	}

	function _decode_rank_data_ladder(d: SprotoTypeDeserialize) {
		let o = new rank_data_ladder;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.player = d.rs ();
				break;
			case 2:
				o.grade = d.ri ();
				break;
			case 3:
				o.star = d.ri ();
				break;
			case 4:
				o.winNum = d.ri ();
				break;
			case 5:
				o.job = d.ri ();
				break;
			case 6:
				o.sex = d.ri ();
				break;
			case 7:
				o.serverid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_rank_data_ladder(self: rank_data_ladder, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 8);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.player != undefined) {
			se.ws (self.player, 1);
		}

		if (self.grade != undefined) {
			se.wi (self.grade, 2);
		}

		if (self.star != undefined) {
			se.wi (self.star, 3);
		}

		if (self.winNum != undefined) {
			se.wi (self.winNum, 4);
		}

		if (self.job != undefined) {
			se.wi (self.job, 5);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 6);
		}

		if (self.serverid != undefined) {
			se.wi (self.serverid, 7);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["rank_data_ladder"] = {en: _encode_rank_data_ladder, de: _decode_rank_data_ladder}
	export class sc_ladder_buy_count_request {
		public todayBuyTime: number; // tag 0
		public ladderType: number; // tag 1
	}

	function _decode_sc_ladder_buy_count_request(d: SprotoTypeDeserialize) {
		let o = new sc_ladder_buy_count_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.todayBuyTime = d.ri ();
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

	function _encode_sc_ladder_buy_count_request(self: sc_ladder_buy_count_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.todayBuyTime != undefined) {
			se.wi (self.todayBuyTime, 0);
		}

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_ladder_buy_count_request"] = {en: _encode_sc_ladder_buy_count_request, de: _decode_sc_ladder_buy_count_request}
	export class sc_ladder_info_request {
		public isOpen: boolean; // tag 0
		public grade: number; // tag 1
		public star: number; // tag 2
		public challgeNum: number; // tag 3
		public challgeCd: number; // tag 4
		public winNum: number; // tag 5
		public lianWin: boolean; // tag 6
		public playUpTime: boolean; // tag 7
		public isCanReward: boolean; // tag 8
		public upgrade: number; // tag 9
		public upstar: number; // tag 10
		public upWin: number; // tag 11
		public rank: number; // tag 12
		public ladderType: number; // tag 13
		public canJoin: boolean; // tag 14
		public csName: string; // tag 15
		public csServerId: number; // tag 16
		public csjob: number; // tag 17
		public cssex: number; // tag 18
	}

	function _decode_sc_ladder_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_ladder_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.isOpen = d.rb ();
				break;
			case 1:
				o.grade = d.ri ();
				break;
			case 2:
				o.star = d.ri ();
				break;
			case 3:
				o.challgeNum = d.ri ();
				break;
			case 4:
				o.challgeCd = d.ri ();
				break;
			case 5:
				o.winNum = d.ri ();
				break;
			case 6:
				o.lianWin = d.rb ();
				break;
			case 7:
				o.playUpTime = d.rb ();
				break;
			case 8:
				o.isCanReward = d.rb ();
				break;
			case 9:
				o.upgrade = d.ri ();
				break;
			case 10:
				o.upstar = d.ri ();
				break;
			case 11:
				o.upWin = d.ri ();
				break;
			case 12:
				o.rank = d.ri ();
				break;
			case 13:
				o.ladderType = d.ri ();
				break;
			case 14:
				o.canJoin = d.rb ();
				break;
			case 15:
				o.csName = d.rs ();
				break;
			case 16:
				o.csServerId = d.ri ();
				break;
			case 17:
				o.csjob = d.ri ();
				break;
			case 18:
				o.cssex = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_ladder_info_request(self: sc_ladder_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 19);

		if (self.isOpen != undefined) {
			se.wb (self.isOpen, 0);
		}

		if (self.grade != undefined) {
			se.wi (self.grade, 1);
		}

		if (self.star != undefined) {
			se.wi (self.star, 2);
		}

		if (self.challgeNum != undefined) {
			se.wi (self.challgeNum, 3);
		}

		if (self.challgeCd != undefined) {
			se.wi (self.challgeCd, 4);
		}

		if (self.winNum != undefined) {
			se.wi (self.winNum, 5);
		}

		if (self.lianWin != undefined) {
			se.wb (self.lianWin, 6);
		}

		if (self.playUpTime != undefined) {
			se.wb (self.playUpTime, 7);
		}

		if (self.isCanReward != undefined) {
			se.wb (self.isCanReward, 8);
		}

		if (self.upgrade != undefined) {
			se.wi (self.upgrade, 9);
		}

		if (self.upstar != undefined) {
			se.wi (self.upstar, 10);
		}

		if (self.upWin != undefined) {
			se.wi (self.upWin, 11);
		}

		if (self.rank != undefined) {
			se.wi (self.rank, 12);
		}

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 13);
		}

		if (self.canJoin != undefined) {
			se.wb (self.canJoin, 14);
		}

		if (self.csName != undefined) {
			se.ws (self.csName, 15);
		}

		if (self.csServerId != undefined) {
			se.wi (self.csServerId, 16);
		}

		if (self.csjob != undefined) {
			se.wi (self.csjob, 17);
		}

		if (self.cssex != undefined) {
			se.wi (self.cssex, 18);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_ladder_info_request"] = {en: _encode_sc_ladder_info_request, de: _decode_sc_ladder_info_request}
	export class sc_ladder_player_back_request {
		public type: boolean; // tag 0
		public id: number; // tag 1
		public name: string; // tag 2
		public job: number; // tag 3
		public sex: number; // tag 4
		public grade: number; // tag 5
		public star: number; // tag 6
		public ladderType: number; // tag 7
		public serverid: number; // tag 8
	}

	function _decode_sc_ladder_player_back_request(d: SprotoTypeDeserialize) {
		let o = new sc_ladder_player_back_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.rb ();
				break;
			case 1:
				o.id = d.ri ();
				break;
			case 2:
				o.name = d.rs ();
				break;
			case 3:
				o.job = d.ri ();
				break;
			case 4:
				o.sex = d.ri ();
				break;
			case 5:
				o.grade = d.ri ();
				break;
			case 6:
				o.star = d.ri ();
				break;
			case 7:
				o.ladderType = d.ri ();
				break;
			case 8:
				o.serverid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_ladder_player_back_request(self: sc_ladder_player_back_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 9);

		if (self.type != undefined) {
			se.wb (self.type, 0);
		}

		if (self.id != undefined) {
			se.wi (self.id, 1);
		}

		if (self.name != undefined) {
			se.ws (self.name, 2);
		}

		if (self.job != undefined) {
			se.wi (self.job, 3);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 4);
		}

		if (self.grade != undefined) {
			se.wi (self.grade, 5);
		}

		if (self.star != undefined) {
			se.wi (self.star, 6);
		}

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 7);
		}

		if (self.serverid != undefined) {
			se.wi (self.serverid, 8);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_ladder_player_back_request"] = {en: _encode_sc_ladder_player_back_request, de: _decode_sc_ladder_player_back_request}
	export class sc_ladder_rank_list_request {
		public rankData: rank_data_ladder[]; // tag 1
		public upWeekRankList: rank_data_ladder[]; // tag 2
		public ladderType: number; // tag 3
		public rank: number; // tag 4
		public upWeekRank: number; // tag 5
	}

	function _decode_sc_ladder_rank_list_request(d: SprotoTypeDeserialize) {
		let o = new sc_ladder_rank_list_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 1:
				o.rankData = d.roa("rank_data_ladder");
				break;
			case 2:
				o.upWeekRankList = d.roa("rank_data_ladder");
				break;
			case 3:
				o.ladderType = d.ri ();
				break;
			case 4:
				o.rank = d.ri ();
				break;
			case 5:
				o.upWeekRank = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_ladder_rank_list_request(self: sc_ladder_rank_list_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.rankData != undefined) {
			se.woa ("rank_data_ladder", self.rankData, 1);
		}

		if (self.upWeekRankList != undefined) {
			se.woa ("rank_data_ladder", self.upWeekRankList, 2);
		}

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 3);
		}

		if (self.rank != undefined) {
			se.wi (self.rank, 4);
		}

		if (self.upWeekRank != undefined) {
			se.wi (self.upWeekRank, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_ladder_rank_list_request"] = {en: _encode_sc_ladder_rank_list_request, de: _decode_sc_ladder_rank_list_request}
	export class sc_ladder_result_request {
		public isWin: boolean; // tag 0
		public rewardData: reward_data[]; // tag 1
		public grade: number; // tag 2
		public star: number; // tag 3
		public increasestar: number; // tag 4
		public ladderType: number; // tag 5
	}

	function _decode_sc_ladder_result_request(d: SprotoTypeDeserialize) {
		let o = new sc_ladder_result_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.isWin = d.rb ();
				break;
			case 1:
				o.rewardData = d.roa("reward_data");
				break;
			case 2:
				o.grade = d.ri ();
				break;
			case 3:
				o.star = d.ri ();
				break;
			case 4:
				o.increasestar = d.ri ();
				break;
			case 5:
				o.ladderType = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_ladder_result_request(self: sc_ladder_result_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.isWin != undefined) {
			se.wb (self.isWin, 0);
		}

		if (self.rewardData != undefined) {
			se.woa ("reward_data", self.rewardData, 1);
		}

		if (self.grade != undefined) {
			se.wi (self.grade, 2);
		}

		if (self.star != undefined) {
			se.wi (self.star, 3);
		}

		if (self.increasestar != undefined) {
			se.wi (self.increasestar, 4);
		}

		if (self.ladderType != undefined) {
			se.wi (self.ladderType, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_ladder_result_request"] = {en: _encode_sc_ladder_result_request, de: _decode_sc_ladder_result_request}
	export class sc_ladder_winner_info_request {
		public shows: ladder_shows; // tag 0
		public worship: boolean; // tag 1
	}

	function _decode_sc_ladder_winner_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_ladder_winner_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.shows = d.ro("ladder_shows");
				break;
			case 1:
				o.worship = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_ladder_winner_info_request(self: sc_ladder_winner_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.shows != undefined) {
			se.wo ("ladder_shows", self.shows, 0);
		}

		if (self.worship != undefined) {
			se.wb (self.worship, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_ladder_winner_info_request"] = {en: _encode_sc_ladder_winner_info_request, de: _decode_sc_ladder_winner_info_request}
	export class sc_ladder_winner_records_request {
		public records: ladder_winner_records[]; // tag 0
	}

	function _decode_sc_ladder_winner_records_request(d: SprotoTypeDeserialize) {
		let o = new sc_ladder_winner_records_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.records = d.roa("ladder_winner_records");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_ladder_winner_records_request(self: sc_ladder_winner_records_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.records != undefined) {
			se.woa ("ladder_winner_records", self.records, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_ladder_winner_records_request"] = {en: _encode_sc_ladder_winner_records_request, de: _decode_sc_ladder_winner_records_request}
}

