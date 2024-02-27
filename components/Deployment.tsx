import {
  type Deployment as DeploymentType,
  deployments,
} from '../src/deployments';
import { Card } from './Card';
import { Link } from './Link';

export function Deployment(props: DeploymentType) {
  return (
    <Card>
      <h3>
        <Link href={props.url} outside noUnderline>
          {props.name ?? props.url}
        </Link>
      </h3>
      {props.repo ? (
        <Link href={props.repo} outside noUnderline>
          <img src={props.badge} className="inline" />
        </Link>
      ) : (
        <span>
          <img src={props.badge} className="inline" />
        </span>
      )}
    </Card>
  );
}

export function DeploymentList() {
  return (
    <div className="flex gap-2 flex-col">
      {deployments.map((deployment) => (
        <Deployment key={deployment.name} {...deployment} />
      ))}
    </div>
  );
}
