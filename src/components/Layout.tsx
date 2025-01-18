import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* サイドバー */}
      <aside
        style={{
          width: '250px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px',
        }}
      >
        <h2>Sidebar</h2>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/counter-context" style={{ color: '#fff', textDecoration: 'none' }}>
                Counter Context
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/counter-zustand" style={{ color: '#fff', textDecoration: 'none' }}>
                Counter Zustand
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/counter" style={{ color: '#fff', textDecoration: 'none' }}>
                Counter useState
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/typicode" style={{ color: '#fff', textDecoration: 'none' }}>
                Typicode
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* メインコンテンツ */}
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
