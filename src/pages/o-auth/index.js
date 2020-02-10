import { OAuthService } from './services';
import { GraphQLService } from '../../core/graph-ql';
import { OAuthComponent as OAuth } from './components';

export { OAuthConsumer } from './contexts';

export const OAuthComponent = GraphQLService(OAuthService(OAuth));
