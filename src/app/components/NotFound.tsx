interface NotFoundProps {
  onReset?: () => void;
}

export function NotFound({ onReset }: NotFoundProps) {
  const handleGoHome = () => {
    if (onReset) {
      onReset();
    } else {
      const baseUrl = window.location.origin + '/SomilPortfolio/';
      window.location.href = baseUrl;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12 text-center selection:bg-primary-container selection:text-on-primary-container">
      <div className="max-w-md w-full">
        <div className="font-headline text-8xl sm:text-9xl font-extrabold tracking-tighter text-on-surface mb-2 select-none">
          404
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-3 tracking-tight">
          Page Not Found
        </h1>
        <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={handleGoHome}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-container text-on-primary-container rounded-xl font-headline font-semibold text-sm hover:opacity-90 transition-all cursor-pointer shadow-md"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
