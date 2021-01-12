

export const put_item = (): {} => {
    console.log('put_item');
    var response = {
        "statusCode": 200,
        "body": JSON.stringify('put_item')
    }
    return response;
};

export const search_items = (): {} => {
    return { statusCode: 200, body: 'items' };
};
