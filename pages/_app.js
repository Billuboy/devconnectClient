import '../styles/globals.css';
import '../styles/_header.css';
import '@fortawesome/fontawesome-free/css/all.css';

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
