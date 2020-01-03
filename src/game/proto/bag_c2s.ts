// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_bag_add_grid_request {
		public bagNum: number; // tag 0
	}

	function _decode_cs_bag_add_grid_request(d: SprotoTypeDeserialize) {
		let o = new cs_bag_add_grid_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.bagNum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_bag_add_grid_request(self: cs_bag_add_grid_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.bagNum != undefined) {
			se.wi (self.bagNum, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_bag_add_grid_request"] = {en: _encode_cs_bag_add_grid_request, de: _decode_cs_bag_add_grid_request}
	export class cs_bag_get_goods_by_store_request {
		public uuid: number; // tag 0
	}

	function _decode_cs_bag_get_goods_by_store_request(d: SprotoTypeDeserialize) {
		let o = new cs_bag_get_goods_by_store_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.uuid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_bag_get_goods_by_store_request(self: cs_bag_get_goods_by_store_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.uuid != undefined) {
			se.wi (self.uuid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_bag_get_goods_by_store_request"] = {en: _encode_cs_bag_get_goods_by_store_request, de: _decode_cs_bag_get_goods_by_store_request}
	export class cs_bag_smelt_request {
		public type: number; // tag 0
		public itemHandle: number[]; // tag 1
	}

	function _decode_cs_bag_smelt_request(d: SprotoTypeDeserialize) {
		let o = new cs_bag_smelt_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			case 1:
				o.itemHandle = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_bag_smelt_request(self: cs_bag_smelt_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		if (self.itemHandle != undefined) {
			se.wia (self.itemHandle, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_bag_smelt_request"] = {en: _encode_cs_bag_smelt_request, de: _decode_cs_bag_smelt_request}
	export class cs_bag_use_item_request {
		public id: number; // tag 0
		public count: number; // tag 1
	}

	function _decode_cs_bag_use_item_request(d: SprotoTypeDeserialize) {
		let o = new cs_bag_use_item_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.count = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_bag_use_item_request(self: cs_bag_use_item_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.count != undefined) {
			se.wi (self.count, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_bag_use_item_request"] = {en: _encode_cs_bag_use_item_request, de: _decode_cs_bag_use_item_request}
}
