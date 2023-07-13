import { ReactElement } from 'react';
import styles from './page.module.css';

export default function NotFound(): ReactElement {
  return (
    <main className={styles.name}>
      <div className={styles.center} style={{ minHeight: '100vh' }}>
        <h1>This is a custom 404 Page</h1>
      </div>
    </main>
  );
}
