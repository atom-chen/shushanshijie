class GBattleHKRankPanel extends BaseView implements ICommonWindowTitle {

	public static NAME = "击杀排行"

    /////////////////////////////////////////////////////////////////////////////
    // GBattleRankSkin.exml
    /////////////////////////////////////////////////////////////////////////////
    protected list: eui.List;
    protected labMyRank: eui.Label;
    protected labMyData: eui.Label;
    protected labDataTitle: eui.Label;
    protected labRankDataTitle: eui.Label;
    /////////////////////////////////////////////////////////////////////////////

	public constructor() {
		super()
        this.skinName = "GBattleRankSkin"
	}

    public childrenCreated() {
        this.labDataTitle.text = "击杀次数"
        this.labRankDataTitle.text = "击杀："

        this.list.itemRenderer = HKRankItem
        this.list.dataProvider = new eui.ArrayCollection([])
    }

	public UpdateContent() {
        
	}

    private UpdatePlayerRank(rsp: Sproto.sc_guildwar_all_player_rank_info_request) {
        let playerRankList = rsp.killrank

        playerRankList.sort(function (lhs, rhs) {
			return lhs.rankData.killRank - rhs.rankData.killRank
		})

        let myPlayerRankInfo = this.GetMyPlayerRankInfo(playerRankList)
        if (myPlayerRankInfo)
        {
            this.labMyRank.text = `${myPlayerRankInfo.rankData.killRank}`
            this.labMyData.text = `${myPlayerRankInfo.rankData.kill}`
        }
        else
        {
            let gbPlayerGlobalInfo = GameGlobal.GangBattleModel.gbPlayerGlobalInfo
            this.labMyRank.text = "未排名"
            this.labMyData.text = `${gbPlayerGlobalInfo.mKill || 0}`
        }

        this.list.dataProvider = new eui.ArrayCollection(playerRankList)
    }

	public OnOpen() {
        this.observe(MessageDef.GANGBATTLE_UPDATE_ALLPLAYERRANK, this.UpdatePlayerRank)

        GameGlobal.GangBattleModel.SendAllPlayerRank()
	}

	public OnClose() {
        
	}

    private GetMyPlayerRankInfo(playerRankList: Sproto.guildwar_player_data[]) {
        for (let info of playerRankList) {
            if (info.dbid == GameGlobal.actorModel.actorID)
            {
                return info
            }
        }
    }
}

class HKRankItem extends eui.ItemRenderer {
    /////////////////////////////////////////////////////////////////////////////
    // GBattleRankItemSkin.exml
    /////////////////////////////////////////////////////////////////////////////
    protected imgBg:eui.Image;
    protected labNo:eui.Label;
    protected labGangName:eui.Label;
    protected labName:eui.Label;
    protected labData:eui.Label;
    /////////////////////////////////////////////////////////////////////////////
	public childrenCreated() {

	}

	public dataChanged() {
		this.imgBg.visible = this.itemIndex % 2 == 0

        let gbPlayerRankInfo: Sproto.guildwar_player_data = this.data
        this.labNo.text = `${gbPlayerRankInfo.rankData.killRank}`
        this.labGangName.text = `${gbPlayerRankInfo.guildName}.S${gbPlayerRankInfo.serverId}`
        this.labName.text = `${gbPlayerRankInfo.name}`
        this.labData.text = `${gbPlayerRankInfo.rankData.kill}`
	}

}
