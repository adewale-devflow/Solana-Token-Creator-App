import create, { State  } from "zustand";
import produce from "immer";

interface NotificationStore extends State {
  notifications: Array<{
    typr: string,
    message: string,
    description?: string,
    txid?: string;
  }>;
  set: (x: any) => void;
}


const useNotificationStore = create<NotificationStore>((set, _get)=> ({
  notifications: [],
  set: (fn)=> set(prduce(fn))
}));

export default useNotificationStore;