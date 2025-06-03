interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <header className='px-4 py-4'>
        <nav>Start</nav>
      </header>
      <main className='px-4 min-h-screen scroll-smooth'>{children}</main>
      <footer className='px-4'>end</footer>
    </>
  );
};

export default SiteLayout;
