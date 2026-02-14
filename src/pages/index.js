import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();
  
  useEffect(() => {
    // 重定向到隐私政策页面
    history.replace('/privacy-policy');
  }, [history]);
  
  return null;
}
