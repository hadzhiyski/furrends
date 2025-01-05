import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ec2 from "aws-cdk-lib/aws-ec2";

export class ClusterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "furrends-ecs-vpc");
    const cluster = new ecs.Cluster(this, "furrends-ecs", {
      vpc,
    });

    new cdk.CfnOutput(this, "ClusterName", {
      value: cluster.clusterName,
    });
  }
}
