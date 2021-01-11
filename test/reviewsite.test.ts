import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Reviewsite from '../lib/reviewsite-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Reviewsite.ReviewsiteStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
