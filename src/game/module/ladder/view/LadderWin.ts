class LadderWin {
	public static Show() {
		ViewManager.ins().open(ArenaWin, 2)
	}

	public static Close() {
		ViewManager.ins().close(ArenaWin)
	}
}
// class LadderWin extends BaseEuiView implements ICommonWindow {

// 	public static LAYER_LEVEL = LayerManager.UI_Main
// 	public static NAME = "王者争霸"

// 	private commonWindowBg: CommonWindowBg

// 	public constructor() {
// 		super()
// 		this.skinName = UIHelper.PANEL
// 	}

// 	public childrenCreated() {
// 		this.mCommonWindowBg.title = "王者争霸"
// 		this.mCommonWindowBg.SetTabView([
// 			TabView.CreateTabViewData(LadderInfoPanel),
// 			TabView.CreateTabViewData(LadderRankPanel),
// 			TabView.CreateTabViewData(LadderPreWeekPanel),
// 			TabView.CreateTabViewData(LadderWinnerPanel),
// 		])
// 	}

// 	public OnOpen() {
// 		this.commonWindowBg.OnAdded(this)
		
// 		GameGlobal.Ladder.SendGetInitInfo()
// 		GameGlobal.Ladder.sendGetRankInfo()

// 		this.observe(MessageDef.LADDER_UPWEEK_RANK_UPDATE, this.refushredPoint)
// 		this.observe(MessageDef.LADDER_PRE_WEEK_REWARD, this.refushredPoint)
// 		this.refushredPoint()
// 	}

// 	public OnClose() {
// 		let ladderInfoPanel: LadderInfoPanel = this.getSubViewByIndex(0);
// 		if (ladderInfoPanel) {
// 			ladderInfoPanel.closeNew();
// 		}
// 		this.commonWindowBg.OnRemoved()
// 	};

// 	/**更新红点提示 */
// 	refushredPoint() {
// 		this.commonWindowBg.ShowTalRedPoint(0, (GameGlobal.Ladder.challgeNum > 0 && GameGlobal.Ladder.isOpen))
// 		this.commonWindowBg.ShowTalRedPoint(2, GameGlobal.Ladder.isCanReward)
// 	}

// 	OnBackClick(clickType: number): number {
// 		let ladderInfoPanel: LadderInfoPanel = this.getSubViewByIndex(0);
// 		if (ladderInfoPanel && ladderInfoPanel.IsMacth()) {
// 			UserTips.InfoTip("匹配中")
// 			return
// 		}
// 		return 0
// 	}

// 	OnOpenIndex(openIndex: number): boolean {
// 		return true
// 	}

// 	static openCheck() {
// 		return Deblocking.Check(GameGlobal.Config.KingSportsBaseConfig.openid)
// 	}
// }