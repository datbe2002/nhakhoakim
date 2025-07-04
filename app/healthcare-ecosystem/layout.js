export default function HealthcareLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
} 