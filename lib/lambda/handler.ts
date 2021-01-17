import {put_item} from './models';
import {search_items} from './models';

export const handler = (event: any = {}, context:any, callback:any) => {
    try {
        console.log('event:',event);
        const path = event.path;
        console.log('path:',path);

        if (path === "/new") {
            var response = put_item();
            callback(null, response);
        } else if (path === "/products") {
            callback(null, search_items());
        } else if (path === "/health") {
            callback(null, "test");
        } else {
            return {statusCode: 404};
        }
    } catch {
        console.log('set error');
        return { statusCode: 500 }
    };
};