/// <reference types="nativewind/types" />

declare global {
    namespace ReactNavigation {
      interface RootParamList {
        Welcome: undefined;
        Home: undefined;
        Drawer: undefined;
        Carrinho: {
          id?: string;
          nome?: string;
          avatar?: string;
        };
        Pagamento: undefined;
        ProductDetails: {
          item: Object | undefined
        }
      }
    }
  }