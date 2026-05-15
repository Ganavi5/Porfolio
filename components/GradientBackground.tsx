export default function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 opacity-30 blur-3xl rounded-full"></div>
    </div>
  );
}