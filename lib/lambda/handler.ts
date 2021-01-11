import {put_item} from './models';
import {search_items} from './models';

export const handler = async (event: any = {}): Promise<any> => {
    try {
        const path = event.path;

        if (path === '/new'){
            await put_item;
        } else if (path === '/products'){
            await search_items;
        } else {
            return { statusCode: 404 }
        }
    } catch {
        return { statusCode: 500 }
    }
};