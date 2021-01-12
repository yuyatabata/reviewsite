import * as cdk from '@aws-cdk/core';
import { Runtime } from '@aws-cdk/aws-lambda';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import {LambdaRestApi, RestApi} from '@aws-cdk/aws-apigateway';


export class ReviewsiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handlerLambda = new lambda.NodejsFunction(this, 'NodejsFunction', {
      entry: "lib/lambda/handler.ts",
      handler: "handler",
      runtime: Runtime.NODEJS_12_X
    });

    const RestAPI = new LambdaRestApi(this, 'Handler', {
      handler: handlerLambda
    });
  }
}
