import { getUserInfo } from './services/github';

(async () => {
    await getUserInfo('BolajiOlajide');
})();