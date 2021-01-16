import * as cdk from '@aws-cdk/core';
import { Runtime } from '@aws-cdk/aws-lambda';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import {LambdaRestApi, RestApi} from '@aws-cdk/aws-apigateway';
import {Table, AttributeType, } from "@aws-cdk/aws-dynamodb";
import * as iam from '@aws-cdk/aws-iam';


export class ReviewsiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handlerLambda = new lambda.NodejsFunction(this, 'NodejsFunction', {
      entry: "lib/lambda/handler.ts",
      handler: "handler",
      runtime: Runtime.NODEJS_12_X,
      timeout: cdk.Duration.seconds(30)
    });
    
    const RestAPI = new LambdaRestApi(this, 'Handler', {
      handler: handlerLambda
    });

    const booktable = new Table(this, "book", {
      partitionKey: {
        name: "Title",
        type: AttributeType.STRING,
      },
      sortKey: {
        name: "Author",
        type: AttributeType.STRING,
      },
      tableName: "Book",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    new StringParameter(this, 'BookTableArn', {
      parameterName: 'BookTableArn',
      strignValue: booktable.tableArn,
    });

    const tableArn = 'arn:aws:dynamodb:' + 

    handlerLambda.addToRolePolicy(new iam.PolicyStatement({
      resources: [],
      actions: ['dynamodb:GetItem']
    }));

  }
}
