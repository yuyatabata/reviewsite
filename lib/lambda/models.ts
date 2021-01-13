

export const put_item = (): {} => {
    console.log('put_item');
    var response = {
        "statusCode": 200,
        "body": JSON.stringify('put_item')
    }
    return response;
};

export const search_items = (): {} => {
    console.log('search_items');
    var response = {
        "statusCode": 200,
        "body": JSON.stringify('search_items')
    }
    return response;
};
