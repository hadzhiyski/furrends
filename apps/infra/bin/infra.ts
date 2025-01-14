#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ClusterStack } from "../lib/cluster-stack";

const app = new cdk.App();
new ClusterStack(app, "furrends-ecs-stack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
