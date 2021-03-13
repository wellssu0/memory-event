
declare type IStore = {
  eventStore: IEventStore.EventStore;
  systemStore: ISystemStore.SystemStore;
  userStore: IUserStore.UserStore;
  billStore: IBillStore.BillStore;
}
