import Loader from '@/components/Loader';
import AppRoutes from '@/routes/AppRoutes';
import Journey from '@/components/Journey';

export default function App() {
  return (
    <>
      <Loader />
      <AppRoutes />
      <Journey />
    </>
  );
}
