import { getUserInfo } from '../api/services/github';

setInterval(async () => {
    await getUserInfo('BolajiOlajide');
}, 5000)