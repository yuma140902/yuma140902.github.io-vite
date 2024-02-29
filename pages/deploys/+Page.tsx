import { Article } from '@/components/common';
import { DeploymentList } from '@/components/features';

export default function Page() {
  return (
    <div>
      <Article>
        <h1>デプロイ状況</h1>
        <p className="mb-8">このサイトを構成する各コンポーネントのデプロイ状況</p>
      </Article>
      <DeploymentList />
    </div>
  );
}
