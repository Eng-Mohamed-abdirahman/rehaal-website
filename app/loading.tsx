export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-medium">
        <img
          src="/rehaab.png"
          alt="Rehaal loading"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}