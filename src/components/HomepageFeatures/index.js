import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '用户体验至上',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        象皮泥致力于提供最佳的用户体验，简洁的界面设计和流畅的操作让您的使用更加便捷。
      </>
    ),
  },
  {
    title: '安全与隐私保障',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
          description: (
      <>
        我们高度重视用户隐私保护，采用多重安全措施确保您的个人信息安全。详见我们的<Link to="/docs/privacy-policy"><code>隐私政策</code></Link>。
      </>
    ),
  },
  {
    title: '持续创新',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        象皮泥团队不断创新，持续优化产品功能，提供更加贴合用户需求的服务体验。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
