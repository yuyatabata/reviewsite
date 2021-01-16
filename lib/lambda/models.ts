const AWS = require('aws-sdk')
require('dotenv').config();

const TABLE_NAME = process.env.TABLE_NAME || "";
const PRIMARY_KEY = process.env.PRIMARY_KEY || "";

var client = new AWS.DynamoDB.DocumentClient();

export const put_item = (): {} => {
    console.log('put_item');
    var params = {
        TableName: 'Book',
        Key: {
            "Title": "「空気」の研究",
            "Author": "山本七平",
            "Category": "ノンフィクション",
            "Category Number": 1,
            "Average Score": 3.5
        }
    };
    console.log('params ok');

    var result = client.put(params);
    console.log('result ok');

    var response = {
        "statusCode": 200,
        "body": JSON.stringify(result)
    }
    return response;
};

export const search_items = (): {} => {
    console.log('search_items');
    var params = {
        TableName: 'Book',
        KeyConditionExpression: 'Title = :Title and Author = :Author',
        ExpressionAttributeValue: {
            ':Title': '「空気」の研究',
            ':Author': '山本七平'
        }
    };
    var result = client.query(params);
    var response = {
        "statusCode": 200,
        "body": JSON.stringify(result)
    }
    return response;
};
