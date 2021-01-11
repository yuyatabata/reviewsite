#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ReviewsiteStack } from '../lib/reviewsite-stack';

const app = new cdk.App();
new ReviewsiteStack(app, 'ReviewsiteStack');
