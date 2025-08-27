import './globals.css';
import SidebarSlim from '@/components/SidebarSlim';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of Erik C.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar on the left */}
        <SidebarSlim />

        {/* Main content on the right */}
        <main
          style={{
            flex: 1,
            marginLeft: 72,   // sidebar width when collapsed
            padding: '1rem',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
