import { OAuthService } from './services';
import { OAuthComponent as OAuth } from './components';

export { OAuthConsumer } from './contexts';

export const OAuthComponent = OAuthService(OAuth);
