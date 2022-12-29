import '../styles/globals.css'
import {QueryClientProvider, QueryClient} from 'react-query'
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Navbar from '../components/navbar';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <Navbar/>
  <Component {...pageProps} />

  </Provider>
  </QueryClientProvider>
}

export default MyApp
