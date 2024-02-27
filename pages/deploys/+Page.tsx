import { Article } from '../../components/Article';
import { DeploymentList } from '../../components/Deployment';

export default function Page() {
  return (
    <div>
      <Article>
        <h1>デプロイ状況</h1>
        <p className="mb-8">
          このサイトを構成する各コンポーネントのデプロイ状況
        </p>
      </Article>
      <DeploymentList />
    </div>
  );
}
