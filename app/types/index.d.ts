import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { ContainerState as LanguageProviderState } from 'containers/LanguageProvider/types';
import { ContainerState as AppContainerState } from 'containers/App/types';
import { ContainerState as LoginContainerState } from 'containers/LoginPage/types';
import { ContainerState as HomeContainerState } from 'containers/HomePage/types';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: (() => IterableIterator<any>) | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly language: LanguageProviderState;
  // for testing purposes
  readonly test: any;
  readonly home: HomeContainerState;
  readonly login: LoginContainerState;
  readonly app: AppContainerState;
}
