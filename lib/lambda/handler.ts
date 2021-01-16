import {put_item} from './models';
import {search_items} from './models';

export const handler = async (event: any = {}): Promise<any> => {
    try {
        console.log('event:',event);
        const path = event.path;
        console.log('path:',path);

        if (path === '/new'){
            return put_item();
        } else if (path === '/products'){
            return search_items()
        } else {
            return { statusCode: 404 }
        }
    } catch {
        console.log('set error');
        return { statusCode: 500 }
    }
};