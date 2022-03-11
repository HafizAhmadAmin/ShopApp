import { inject, observer } from "mobx-react";

function ConnectStore(Component) {
  
  return inject("store")(observer(Component));;
}

export default ConnectStore;
