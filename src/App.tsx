import { lazy, Suspense } from 'react';

// Lazy load sections for better performance
const BrilanceLanding = lazy(() => import('./components/BrilanceLanding'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-primary-dark flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-violet"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <Suspense fallback={<LoadingSpinner />}>
        <BrilanceLanding />
      </Suspense>
    </div>
  );
}

export default App;
